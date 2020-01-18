//sub_page vehicle_purchase
$(document).ready(function(){

    //vehicle_purchase
    var vehicle_purchase_con1_wrapper_li = $('.vehicle_purchase_con1_wrapper>div>ul>li');
    var vehicle_purchase_con1_wrapper_div = $('.vehicle_purchase_con1_wrapper>div>div>div');
    var vehicle_purchase_con3_wrapper_li = $('.vehicle_purchase_con3_wrapper>div>ul>li');

    //
    vehicle_purchase_content();

    function vehicle_purchase_content(){

        /*vehicle_purchase_con1*/    
        vehicle_purchase_con1_wrapper_li.on('click',function(){
            var i = $(this).index();
            vehicle_purchase_con1_wrapper_li.removeClass('on');
            vehicle_purchase_con1_wrapper_li.eq(i).addClass('on');

            vehicle_purchase_con1_wrapper_div.removeClass('on');
            vehicle_purchase_con1_wrapper_div.eq(i).addClass('on');
        })

        /*vehicle_purchase_con3*/
        vehicle_purchase_con3_wrapper_li.toggle(
            function() {
              $(this).children('div:eq(1)').stop().slideDown(1000);
              $(this).find('.vehicle_purchase_arrow').addClass('on');
            }, function() {
              $(this).children('div:eq(1)').stop().slideUp(300);
              $(this).find('.vehicle_purchase_arrow').removeClass('on');
            }
          );


    }


});