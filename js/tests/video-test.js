$(document).ready(init_player)

var myPlayer;

function init_player(){
  myPlayer = videojs("example_video_1", { 
    "controls": true, 
    "autoplay": false, 
    "preload": "auto" 
  });

  // initCuepoints()
}

function initCuepoints(){
  cuepoint.init();

  console.log(cuepoint)

  $('.cuepoints a').click(function(event){
    event.preventDefault() 
    cuepoint.setTime(40)
  });
}

function play(){
  myPlayer.play()
}

function pause(){
  myPlayer.pause()
}