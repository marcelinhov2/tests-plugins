$(document).ready(init_audio)

var mySound;

function init_audio(){
  mySound = new buzz.sound( "/assets/sounds/sound1", {
      formats: [ "m4a", "mp3", "ogg" ]
  });
}

function play(){
  mySound.play()
}

function loop(){
  mySound.play().loop()
}

function pause(){
  mySound.pause()
}

function unloop(){
  mySound.unloop();
}