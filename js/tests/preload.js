(function(){
  var canStart = false;

  var interval = setInterval(function(){
    if (canStart)
    {
      loader.start();
      clearInterval(interval);
    }
  })

  soundManager.audioFormats.mp3.required = false;
  soundManager.setup({
    url: 'swf/',
    flashVersion: 9, // optional: shiny features (default = 8)
    // optional: ignore Flash where possible, use 100% HTML5 mode
    // preferFlash: false,
    useHighPerformance: true,
    flashLoadTimeout: 500,
    ontimeout: function(){
      soundManager.useHTML5Audio = true;
      soundManager.preferFlash = false;
      soundManager.reboot();
    },
    onready: function() {
      console.log("sound manager ready!");
      addSounds();
      canStart = true;
    }
  });

  var loader = new PxLoader();

  loader.addProgressListener(function(e) { 
    console.log(e.completedCount + " / " + e.totalCount);
  });

  loader.addCompletionListener(function(e) { 
    console.log('Ready to go!');

    for (var image in images)
    {
      $("#container").append(images[image]);
    }

    $("body").append(videos[0]);
    videos[0].play();
  });

  var path = "assets/";

  var images = [];
  var sounds = [];
  var videos = [];

  for (var i = 0; i < 13; i++)
  {
    images[i] = loader.addImage(path+"images/thumbnails/p"+(i+1)+".png");
  }

  for (var k = 0; k < 3; k++)
  {
    videos[k] = loader.addVideo(path+"videos/mp4/p"+(k+1)+".mp4")
  }

  function addSounds(){
    for (var j = 0; j < 6; j++)
    {
      var url = path+"sounds/sound"+(j+1)+".mp3";
      if (!soundManager.canPlayURL(url)) { 
        // ok, what about ogg? 
        url = path+"sounds/sound"+(j+1)+".ogg";
        if (!soundManager.canPlayURL(url)) { 
          url = path+"sounds/sound"+(j+1)+".mp3";
          if (!soundManager.canPlayURL(url)) {
            continue;
          }
        } 
      }

      sounds[j] = loader.addSound("sound"+(i+j), url);
    }
  }
})();