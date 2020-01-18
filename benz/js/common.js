//common
$(document).ready(function(){
    /*basic-function*/
    $('div').on('click',function(e){
        e.preventDefault();
    });

    //sub_page_bottom
    var sub_page_bottom_con = $('.sub_page_bottom');

    sub_page_bottom();

    function sub_page_bottom(){
        
        /*sub_page_bottom*/
        sub_page_bottom_con.on('mouseenter',function(){
            $(this).children('div:eq(1)').stop().fadeIn(500);
        })
        sub_page_bottom_con.on('mouseleave',function(){
            $(this).children('div:eq(1)').stop().fadeOut(500);
        })
    }


});