//This file changes a bit the original

document.addEventListener('DOMContentLoaded', function() {

  // ----- Set values and defaults ----- //
  // YouTube video ID
  if(template["video"]){
      youtubeVideoID = template["video"];
  }
  else{
      youtubeVideoID = 'KK9bwTlAvgo'
  }
  // Main Header
  if(template["main"]){
      mainHeader = template["main"];
  }
  else{
      mainHeader = ''
  }
   // Secondary Header
  if(template["second"]){
      secHeader = template["second"];
  }
  else{
      secHeader = "";
  }
  // -------------------- //

  // Set the headers
  document.getElementById('mainHeader').innerHTML = mainHeader;
  document.getElementById('secHeader').innerHTML = secHeader;

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
    player = new YT.Player('YTplayer', {
      height: '390',
      width: '640',
      playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'loop': 1, 'playlist': youtubeVideoID, 'enablejsapi':1 },
      events: {
        'onReady': onPlayerReady,
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
  }
});
