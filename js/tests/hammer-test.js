$(document).ready(start_hammer)

function start_hammer(){
  element = $('html')[0];

  var drag = Hammer(element).on("drag", function(event) {
    console.log('drag!');
  });

  var tap = Hammer(element).on("tap", function(event) {
    console.log('tap!');
  });

  var hold = Hammer(element).on("hold", function(event) {
    console.log('hold!');
  });

  var touch = Hammer(element).on("touch", function(event) {
    console.log('touch!');
  });

  var release = Hammer(element).on("release", function(event) {
    console.log('release!');
  });
}