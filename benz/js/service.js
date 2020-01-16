//service
$(document).ready(function(){	
    
    //
    var len = $('.panel_service>li').length;
    var enable_event = true;
   
    //
    $('.btn_next_service').on('click',function(e){
        e.preventDefault(); 
        
        if(enable_event){
            enable_event = false;
            var current_index = $('.panel_service>li.on').index();        
            var next_index;  

            if(current_index != len-1){
                next_index = current_index+1;
            }else{
                next_index = 0;
            }

            show_next(next_index);  
        }

              
    });

    //
    function show_next(index){   
        $('.panel_service>li.on').stop().animate({'left':'-100%'},1000,function(){
            $(this).removeClass('on').hide();
        });        
        $('.panel_service>li').eq(index).show().css({'left':'100%'}).animate({'left':'0%'},1000,function(){
            $(this).addClass('on');
            enable_event = true;
        });   

        $('#slider_service_text>ul>li').removeClass('on');
        $('#slider_service_text>ul>li').eq(index).addClass('on');
        
        $('.navi_service>li>a').removeClass('on');
        $('.navi_service>li').eq(index).children('a').addClass('on');
    }

    //
    $('.btn_prev_service').on('click',function(e){
        e.preventDefault();        
        
        if(enable_event){
            enable_event = false;            
            var current_index = $('.panel_service>li.on').index();        
            var prev_index;  

            if(current_index != 0){
                prev_index = current_index-1;
            }else{
                prev_index = len-1;
            }

            show_prev(prev_index);
        }
                
    });

    //
    function show_prev(index){   
        $('.panel_service>li.on').stop().animate({'left':'100%'},1000,function(){
            $(this).removeClass('on').hide();
        });        
        $('.panel_service>li').eq(index).show().css({'left':'-100%'}).animate({'left':'0%'},1000,function(){
            $(this).addClass('on');
            enable_event = true;
        });   

        $('#slider_service_text>ul>li').removeClass('on');
        $('#slider_service_text>ul>li').eq(index).addClass('on');

        $('.navi_service>li>a').removeClass('on');
        $('.navi_service>li').eq(index).children('a').addClass('on');
    }

    //
    $('.navi_service>li').on('click',function(e){
        e.preventDefault();

        if(enable_event){
            enable_event = false;
            var current_index = $('.panel_service>li.on').index();        
            var target_index = $(this).index();

            if(target_index == current_index){
                return;
            }
            if(target_index > current_index){
                show_next(target_index);
            }
            if(target_index < current_index){
                show_prev(target_index);
            }  
        }        
    });

});