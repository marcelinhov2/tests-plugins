$(document).ready(init_player)

var myPlayer;

function init_player(){
  myPlayer = videojs("example_video_1", { 
    "controls": true, 
    "autoplay": false, 
    "preload": "auto" 
  });

  cuepoints()
}

function cuepoints(){
  $('.cuepoints a').click(function(event){
    event.preventDefault() 
    timestamp = $(event.currentTarget).attr('href').replace('#', '')
    timestamp = parseInt(timestamp)

    myPlayer.currentTime(timestamp)
  });
}

function play(){
  myPlayer.play()
}

function pause(){
  myPlayer.pause()
}