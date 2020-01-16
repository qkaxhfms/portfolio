//mercedes_me
$(document).ready(function(){
    
    var video = document.getElementById("video_meresedes_me");
    var btn = document.getElementById("btn_meresedes_me");
    var btn_mersedes_me = $('#btn_meresedes_me');
    
    function my_video_meresedes_me() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }

    btn_mersedes_me.on('click',my_video_meresedes_me);

});