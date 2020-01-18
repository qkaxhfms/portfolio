//sub_page benz_history
$(document).ready(function(){

    //benz_history
    var benz_history_con1_wrapper_div = $('.benz_history_con1_wrapper>div>div:eq(1)>div>div');
    var benz_histoty_con5_wraaper_li = $('.benz_history_con5_wrapper>div>ul>li');

    //
    benz_history_content();
    
    function benz_history_content(){

        /*benz_history_con1_wrapper*/
        benz_history_con1_wrapper_div.on('mouseenter',function(){
            $(this).children('div:eq(1)').stop().fadeIn(500);
        })
        benz_history_con1_wrapper_div.on('mouseleave',function(){
            $(this).children('div:eq(1)').stop().fadeOut(500);
        })

        benz_histoty_con5_wraaper_li.toggle(
          function() {
            $(this).children('div:eq(1)').stop().slideDown(1000);
            $(this).find('.benz_history_arrow').addClass('on');
          }, function() {
            $(this).children('div:eq(1)').stop().slideUp(300);
            $(this).find('.benz_history_arrow').removeClass('on');
          }
        );


        

    }


});