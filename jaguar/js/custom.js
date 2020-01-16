//custom
$(document).ready(function(){

    $('#skipNavi>li>a').on('focusin',function(){      
        $(this).addClass('on');
    });
    $('#skipNavi>li>a').on('focusout',function(){
        $(this).removeClass('on');
    });

});