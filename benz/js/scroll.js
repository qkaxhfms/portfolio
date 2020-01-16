//scroll
$(document).ready(function(){

    //var setting
    var offs = [];
    var sections = $('.scroll_event');
    var base_line = -600;
    var len;
    var scroll_main = $('#visual_film').height();

    setOffs();
    $(window).on('resize',setOffs);

    //height array box
    function setOffs(){
        offs = [];
        $(sections).each(function(index,data){
            offs.push($(data).offset().top);
        });
        len = offs.length;        
    }

    //window scroll start
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        $('.scroll_event').removeClass('on');

        for(var i=0; i<len; i++){
            if( scroll>=offs[i]+base_line && scroll<offs[i+1]+base_line ){       
                $('.scroll_event').eq(i).addClass('on');
            }
        }

        if(scroll>= visual_video_height){
            $('.go_top').addClass('on');
        }else{
            $('.go_top').removeClass('on');
        }
        
        if(scroll>0){
            $('#header').addClass('on');
        }
        else{
            $('#header').removeClass('on');
        }

    });

    //visual video height
    $(window).on('resize',visual_video_height);
    var visual_video_height = $('#visual_video').height();

    //go to top
    $('.go_top').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':visual_video_height},1000);
    });


    //btn visual scroll down
    $('#btn_visual_film').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':scroll_main},1000);    
    });



});