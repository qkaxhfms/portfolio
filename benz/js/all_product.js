//sub_page all_product
$(document).ready(function(){

    //benz_history
    var all_product_con3_hover = $('.all_product_con3_hover');
    var all_product_con3_hover_con = $('.all_product_con3_hover_con');
    var all_product_con3_hover_gradient = $('.all_product_con3_hover_gradient');
    var all_product_con3_hover_con_txt = $('.all_product_con3_hover_con_txt');
    var all_product_con5_hover = $('.all_product_con5_hover');

    //all_product_con
    all_product_con();
    function all_product_con(){
        
        /*all_product_con1*/
        $('.all_product_con1_list>div').css({'opacity':'0'});

        $('.all_product_con1_list>ul>li').on('click',function(e){
            e.preventDefault();
            var i = $(this).index();

            $('.all_product_con1_list>p').fadeOut();
            $('.all_product_con1_list>div').css({'opacity':'1'});

            $('.all_product_con1_list>ul>li').removeClass('on');
            $('.all_product_con1_list>ul>li').eq(i).addClass('on');
            $('.all_product_con1_list>div>div').fadeOut(0);
            $('.all_product_con1_list>div>div').eq(i).fadeIn();
        });

        /*all_product_con2*/
        $('.all_product_con2_list>ul>li').on('click',function(e){
            e.preventDefault();
            var i = $(this).index();
            $('.all_product_con2_list>ul>li').removeClass('on');
            $('.all_product_con2_list>ul>li').eq(i).addClass('on');

            $('.all_product_con2_list>div>div').fadeOut();
            $('.all_product_con2_list>div>div').eq(i).fadeIn();
        });




        /*all_product_con3*/
        all_product_con3_hover.on('mouseenter',function(){
            $(this).children('div:eq(0)').removeClass('on');

            $(this).find(all_product_con3_hover_gradient).stop().fadeIn(1000);
            $(this).find(all_product_con3_hover_con).animate({transform:"translateY(0%)"},500);
            $(this).find(all_product_con3_hover_con_txt).stop().slideDown(1000);
            $(this).children('div:eq(0)').addClass('on');
        })

        all_product_con3_hover.on('mouseleave',function(){
            $(this).children('div:eq(0)').removeClass('on');
            $(this).find(all_product_con3_hover_gradient).stop().fadeOut(300);
            $(this).find(all_product_con3_hover_con).animate({transform:"translateY(-50%)"},500);
            $(this).find(all_product_con3_hover_con_txt).stop().slideUp(500);
        })

        /*all_product_con4*/
        $('.all_product_con4_list>ul>li').on('click',function(e){
            e.preventDefault();
            var i = $(this).index();
            $('.all_product_con4_list>ul>li').removeClass('on');
            $('.all_product_con4_list>ul>li').eq(i).addClass('on');

            $('.all_product_con4_list>div>div').fadeOut();
            $('.all_product_con4_list>div>div').eq(i).fadeIn();
        });



        /*all_product_con5*/
        all_product_con5_hover.on('mouseenter',function(){
            $(this).children('div').fadeOut(1000);
        })

        all_product_con5_hover.on('mouseleave',function(){
            $(this).children('div').stop().fadeIn(300);
        })


    }


    //all_product_slider_1
    all_product_slider_1();
    function all_product_slider_1(){
        var len = $('.panel_all_product>li').length;
        var enable_event = true;
        
        //
        $('.btn_next_all_product').on('click',function(e){
            e.preventDefault(); 
            
            
            if(enable_event){
                enable_event = false;
                var current_index = $('.panel_all_product>li.on').index();        
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
            $('.panel_all_product>li.on').stop().animate({'left':'-100%'},1000,function(){
                $(this).removeClass('on').hide();
            });        
            $('.panel_all_product>li').eq(index).show().css({'left':'100%'}).animate({'left':'0%'},1000,function(){
                $(this).addClass('on');
                enable_event = true;
            });   
    
            $('.navi_all_product>li>a').removeClass('on');
            $('.navi_all_product>li').eq(index).children('a').addClass('on');
        }
    
        //
        $('.btn_prev_all_product').on('click',function(e){
            e.preventDefault();        
            
            if(enable_event){
                enable_event = false;            
                var current_index = $('.panel_all_product>li.on').index();        
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
            $('.panel_all_product>li.on').stop().animate({'left':'100%'},1000,function(){
                $(this).removeClass('on').hide();
            });        
            $('.panel_all_product>li').eq(index).show().css({'left':'-100%'}).animate({'left':'0%'},1000,function(){
                $(this).addClass('on');
                enable_event = true;
            });   
    
            $('.navi_all_product>li>a').removeClass('on');
            $('.navi_all_product>li').eq(index).children('a').addClass('on');
        }
    
        //
        $('.navi_service>li').on('click',function(e){
            e.preventDefault();
    
            if(enable_event){
                enable_event = false;
                var current_index = $('.panel_all_product>li.on').index();        
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
    }

    //all_product_slider_2
    all_product_slider_2();
    function all_product_slider_2(){
        var len = $('.panel_all_product_2>li').length;
        var enable_event = true;
        
        //
        $('.btn_next_all_product_2').on('click',function(e){
            e.preventDefault(); 
            
            
            if(enable_event){
                enable_event = false;
                var current_index = $('.panel_all_product_2>li.on').index();        
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
            $('.panel_all_product_2>li.on').stop().animate({'left':'-100%'},1000,function(){
                $(this).removeClass('on').hide();
            });        
            $('.panel_all_product_2>li').eq(index).show().css({'left':'100%'}).animate({'left':'0%'},1000,function(){
                $(this).addClass('on');
                enable_event = true;
            });   
    
            $('.navi_all_product_2>li>a').removeClass('on');
            $('.navi_all_product_2>li').eq(index).children('a').addClass('on');
        }
    
        //
        $('.btn_prev_all_product_2').on('click',function(e){
            e.preventDefault();        
            
            if(enable_event){
                enable_event = false;            
                var current_index = $('.panel_all_product_2>li.on').index();        
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
            $('.panel_all_product_2>li.on').stop().animate({'left':'100%'},1000,function(){
                $(this).removeClass('on').hide();
            });        
            $('.panel_all_product_2>li').eq(index).show().css({'left':'-100%'}).animate({'left':'0%'},1000,function(){
                $(this).addClass('on');
                enable_event = true;
            });   
    
            $('.navi_all_product_2>li>a').removeClass('on');
            $('.navi_all_product_2>li').eq(index).children('a').addClass('on');
        }
    
        //
        $('.navi_service_2>li').on('click',function(e){
            e.preventDefault();
    
            if(enable_event){
                enable_event = false;
                var current_index = $('.panel_all_product_2>li.on').index();        
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
    }




});