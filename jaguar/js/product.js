$(document).ready(function(){

    $('#btn_product>a').on('click',function(e){
        e.preventDefault();
        var class_name = $(this).attr('href');

        $('#btn_product>a>span').removeClass('on');
        $(this).children('span').addClass('on');

        $('#box_product').removeClass();
        $('#box_product').addClass(class_name);
    })

})