document.addEventListener('DOMContentLoaded', function() {
  // Saving the data from inputs in variables
  function gettingInputData() {
    videoURL = document.getElementById('input-url').value;
    headerText = document.getElementById('input-header').value;
    secHeaderText = document.getElementById('input-sec-header').value;
  }

  // Save the data from inputs to localStorage when clicking the preview button
  document.getElementById('preview-button').addEventListener("click", saveInputData);

// Save the data from inputs to localStorage
  function saveInputData() {
    gettingInputData();
    localStorage.setItem("videourl", videoURL);
    localStorage.setItem("header", headerText);
    localStorage.setItem("secheader", secHeaderText);
  }
});
