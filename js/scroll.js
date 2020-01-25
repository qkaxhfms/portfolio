$(document).ready(function(){

    var speed = 1000;
    var posArr = [];
    var len = $('#container>div').length;
	var base_line = -300;
    var mob_line = 80;

	$('.content-about>div').each(function(index,item){
		// console.log(item);
		// console.log(index);
		$(item).css({'transition-delay':	(0.2*index)+'s'	});
	});



    for(var i=0; i<len; i++){
        posArr.push(    $('#container>div').eq(i).offset().top    );
    }
    posArr.push(    $('#container>div').last().offset().top + $('#container>div').last().height()    )

	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop();

		for(var i=0; i<len; i++){
			// if(scroll >= posArr[i]+base && scroll < posArr[i+1]+base){
			if(scroll >= posArr[i]+base_line && scroll < posArr[i+1]+base_line){

				$('#container>div').removeClass('on');
				$('#container>div').eq(i).addClass('on');
			}
		}


	});
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