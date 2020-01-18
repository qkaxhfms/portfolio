//visual
$(document).ready(function(){
    //resize function
    match_height();
    $(window).on('resize', match_height);
    //visual height 100%
    function match_height(){
        var winH = $(window).height();
        var visual_title = $('#visual_video');
        visual_title.height(winH);
    }    

    var video_visual = document.getElementById("visual_film");
    var btn_visual = document.getElementById("btn_visual_film");
    
    function visual_film_play() {
        
        video_visual.pause();
    }

    $('#btn_visual_film').on('click',visual_film_play);

});