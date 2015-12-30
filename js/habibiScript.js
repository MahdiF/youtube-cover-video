document.addEventListener('DOMContentLoaded', function() {
  // Saving the data from inputs in variables
  function gettingInputData() {
    videoURL = document.getElementById('input-url').value;
    headerText = document.getElementById('input-header').value;
    secHeaderText = document.getElementById('input-sec-header').value;
  }

  // Save the data from inputs to localStorage when clicking the preview button
  document.getElementById('preview-button').addEventListener("click", saveInputData);
  document.getElementById('download-button').addEventListener("click", habibaty);
  //the download button now has to trigger the new function

// Save the data from inputs to localStorage
  function saveInputData() {
    gettingInputData();
    localStorage.setItem("videourl", videoURL);
    localStorage.setItem("header", headerText);
    localStorage.setItem("secheader", secHeaderText);
  }

  function habibaty(){
      //template with the info parsed
      template = 'template = {"video": "#","main": "!","second": "$"}'
                      .replace("#",videoURL = document.getElementById('input-url').value)
                      .replace("!", headerText = document.getElementById('input-header').value)
                      .replace("$", secHeaderText = document.getElementById('input-sec-header').value);

      zip = new JSZip();

      //this is ugly but has a zen
      microAjax("js/youtube-proto.js", function (res) {
          var youtubeJs = template + "\n" + res;
          zip.file("js/youtube-cover-video.js", youtubeJs);

          microAjax("youtube-cover-video/index.html", function (res) {
              zip.file("index.html", res);

              microAjax("youtube-cover-video/style.css", function (res) {
                  zip.file("style.css", res);

                  microAjax("youtube-cover-video/images/arrow_down_icon.svg", function (res) {
                      zip.file("images/arrow_down_icon.svg", res);

                      var content = zip.generate({type:"blob"});
                      saveAs(content, "youtube-cover-video.zip");
                  });
              });
          });
      });

  }
});
