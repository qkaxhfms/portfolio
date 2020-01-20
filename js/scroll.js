$(document).ready(function(){

    var speed = 1000;
    var posArr = [];
    var len = $('#container>div').length;

    for(var i=0; i<len; i++){
        posArr.push(    $('#container>div').eq(i).offset().top    );
    }
    posArr.push(    $('#container>div').last().offset().top + $('#container>div').last().height()    )

    // $(window).on('scroll',function(){
	// 	var scroll = $(this).scrollTop();

	// 	for(var i=0; i<len; i++){
	// 		if(scroll >= posArr[i] && scroll < posArr[i+1]){
	// 			$('#gnb li').removeClass('on');
	// 			$('#gnb li').eq(i).addClass('on');
	// 		}
	// 	}
    // })

    $('#gnb li').on('click',function(){
        var i = $(this).index();
        var target = $('#container>div').eq(i).offset().top;
        $('html,body').stop().animate({'scrollTop':target},speed);
    })


});