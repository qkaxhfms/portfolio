$(document).ready(function(){
    
    
    var base_line = -300;
    
    match_height();
    $(window).on('resize', match_height);

    function match_height(){
        var winH = $(window).height();
        $('#box1').height(winH);
    }
    
    

    //각박스의 세로 위치값을 변수에 저장
    var pos1 = $('#box1').offset().top;
    var pos2 = $('#box2').offset().top;
    var pos3 = $('#box3').offset().top;
    var pos4 = $('#box4').offset().top;
    

    //스크롤이벤트가 발생할때마다 scroll변수에 스크롤거리값을 저장
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        $('h1').text(scroll);

        $('.navi>li>a').removeClass('on');
        $('#wrap>div').removeClass('on');

        if(scroll>=pos1+base_line && scroll<pos2+base_line){
            $('.navi>li').eq(0).children('a').addClass('on');
            $('#wrap>div').eq(0).addClass('on');
        }
        if(scroll>=pos2+base_line && scroll<pos3+base_line){
            $('.navi>li').eq(1).children('a').addClass('on');
            $('#wrap>div').eq(1).addClass('on');
        }
        if(scroll>=pos3+base_line && scroll<pos4+base_line){
            $('.navi>li').eq(2).children('a').addClass('on');
            $('#wrap>div').eq(2).addClass('on');
        }
        if(scroll>=pos4+base_line ){
            $('.navi>li').eq(3).children('a').addClass('on');
            $('#wrap>div').eq(3).addClass('on');
        }
    });

    //버튼클릭시 해당박스의 세로 위치값으로 자동 스크롤
    $('.navi>li>a').on('click',function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        var target_pos = $(target).offset().top;
        $('html,body').stop().animate({'scrollTop':target_pos},1000);
    });
});
	
	















