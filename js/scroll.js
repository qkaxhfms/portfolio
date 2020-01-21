$(document).ready(function(){

    var speed = 1000;
    var posArr = [];
    var len = $('#container>div').length;
    var mob_line = 80;

    for(var i=0; i<len; i++){
        posArr.push(    $('#container>div').eq(i).offset().top    );
    }
    posArr.push(    $('#container>div').last().offset().top + $('#container>div').last().height()    )

    //gnb
    $('#gnb li').on('click',function(){
        var i = $(this).index();
        var target = $('#container>div').eq(i).offset().top;
        $('html,body').stop().animate({'scrollTop':target},speed);
    })

    //gnbMobile
    $('#gnbMobile .mobile-list li').on('click',function(){
        var i = $(this).index();
        var target = $('#container>div').eq(i).offset().top;
        $('html,body').stop().animate({'scrollTop':target},speed);
    })


});