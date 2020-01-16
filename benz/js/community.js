//community
$(document).ready(function(){

    //model_overview_index
    var model_overview_index_li = $('.model_overview_index>li');
    var model_overview_contentbox_div = $('.model_overview_contentbox>div');

    model_overview_index_li_on();

    function model_overview_index_li_on(){
        model_overview_index_li.on('click',function(e){
            e.preventDefault();        
            //model_overview_event
            var i = $(this).index();
            
            model_overview_index_li.removeClass('on');
            model_overview_index_li.eq(i).addClass('on');
    
            model_overview_contentbox_div.fadeOut();
            model_overview_contentbox_div.eq(i).fadeIn();
            
        });
    }
    
    //community_advertisement_con_index
    var community_advertisement_con1_index_li = $('.community_advertisement_con1_index>li');
    var community_advertisement_con1_contentbox_div = $('.community_advertisement_con1_contentbox>div');
    
    //community_advertisement_con1_index_li
    community_advertisement_con1_index_li_on();

    //function_community_advertisement_con1_index
    function community_advertisement_con1_index_li_on(){
        community_advertisement_con1_index_li.on('click',function(e){
            e.preventDefault();
            var i = $(this).index();
    
            community_advertisement_con1_index_li.removeClass('on');
            community_advertisement_con1_index_li.eq(i).addClass('on');
    
            community_advertisement_con1_contentbox_div.fadeOut();
            community_advertisement_con1_contentbox_div.eq(i).fadeIn();
            
        });
    }

    
    //slider_btn_pager
    var slider_btn_pager = $('.slider_btn_pager>a');    
    //btn_next_count_slide
    var slider_count = 2;    
    var slider_count_prev = 4;    
    var slider_count_prev_result = 1;
    
    //btn_slider_panel
    var slider_total = $('#slider_panel>a').length;
    
    slider_btn_pager.on('click',function(e){
        e.preventDefault();
        var class_name = $(this).attr('href');
        console.log(class_name);

        $('.slider_btn_pager>a').removeClass('on');
        $(this).addClass('on');
        
        //slider_panel
        $('#slider_panel').removeClass();
        $('#slider_panel').addClass(class_name);
        
        //service_text
        $('#service_text').removeClass();
        $('#service_text').addClass(class_name);
        
    })       
    //btn_next
    $('.btn_next').on('click',function(e){        
        e.preventDefault();
        //reset_set_up        
        var slider_btn_result = 'pcon' + slider_count; 
            
        //slider_count
        slider_count += 1; 
        
        if(slider_count > slider_total){
            slider_count = 1;  
        }  
        
        //slider_panel
        $('#slider_panel').removeClass();
        $('#slider_panel').addClass(slider_btn_result);
        
        //service_text
        $('#service_text').removeClass();
        $('#service_text').addClass(slider_btn_result);
        
    })    
    //btn_prev
    $('.btn_prev').on('click',function(e){        
        e.preventDefault();
        //reset_set_up        
        var slider_btn_result = 'pcon' + slider_count_prev; 
            
        //slider_count
        slider_count_prev -= 1; 
        
        if(slider_count_prev < slider_count_prev_result){
            slider_count_prev = slider_total;  
        }
        
        //slider_panel
        $('#slider_panel').removeClass();
        $('#slider_panel').addClass(slider_btn_result);
        
        //service_text
        $('#service_text').removeClass();
        $('#service_text').addClass(slider_btn_result);
    }) 
    

    var community_advertisement_hover = $('.community_advertisement_hover');
    var community_advertisement_content = $('.community_advertisement_content');
    var community_advertisement_text = $('.community_advertisement_text');
    
    //function_community_advertisement_hover
    community_advertisement_hover_mouseenter();
    community_advertisement_hover_mouseleave();

    //community_advertisement_hover_mouseenter
    function community_advertisement_hover_mouseenter(){
        community_advertisement_hover.on('mouseenter',function(){
            //community_advertisement_hover_function
            $(this).addClass('on');
            $(this).children('div').addClass('bgOpen');
            $(this).find(community_advertisement_text).stop().slideDown(400);
            
        });
    }

    //community_advertisement_hover_mouseleave
    function community_advertisement_hover_mouseleave(){
        //community_advertisement_hover_function
        community_advertisement_hover.on('mouseleave',function(){
            //community_advertisement_hover_function
            $(this).removeClass('on');
            $(this).children('div').removeClass('bgOpen');
            $(this).find(community_advertisement_text).stop().slideUp(0);
            
        });   
    }

    /*all_product_con5*/
    $('.panel_service_hover_con').on('mouseenter',function(){
        $(this).children('div').fadeOut(1000);
    })

    $('.panel_service_hover_con').on('mouseleave',function(){
        $(this).children('div').stop().fadeIn(300);
    })
 







});