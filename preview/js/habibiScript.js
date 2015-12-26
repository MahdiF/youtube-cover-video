document.addEventListener('DOMContentLoaded', function() {
  // Check if local storage for the video URL is empty and set a default value, else load data from localStorage
  if (localStorage.getItem("videourl") === "") {
    youtubeVideoID = "KK9bwTlAvgo";
    mainHeader = "Main Header";
    secHeader = "Secondary Header";
  } else {
    // Get all the data from localStorage
    youtubeVideoID = localStorage.getItem("videourl");
    mainHeader = localStorage.getItem("header");
    secHeader = localStorage.getItem("secheader");
  }

  // Set the headers
  document.getElementById('mainHeader').innerHTML = mainHeader;
  document.getElementById('secHeader').innerHTML = secHeader;

  // Set the defaults to the localStorage & bring back the defaults
  // localStorage.setItem("videourl", "KK9bwTlAvgo");
  // localStorage.setItem("header", "Main Header");
  // localStorage.setItem("secheader", "Secondary Header");
});
