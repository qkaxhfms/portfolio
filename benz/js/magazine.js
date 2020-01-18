//magazine
$(document).ready(function(){
    //12-3 페이지 로딩시 첫번째 순서값으로 슬라이더 초기화
	showSlide(0);
	var total = $(".panel_magazine li").length;
	total = total-1;
	//alert(total);
	
	//다음버튼 클릭 시
	$(".btn_next_magazine").on("click",function(e){
		e.preventDefault();
		
		var i = $(".panel_magazine li.on").index();
		
		if(i==total){
			i=0;
		}else{
			i++;
		}
		showSlide(i);
	});
	
	//이전버튼 클릭시
	$(".btn_prev_magazine").on("click",function(e){
		e.preventDefault();
		
		var i = $(".panel_magazine li.on").index();
		if(i==0){
			i=total;
		}else{
			i--;
		}
		showSlide(i);
	});
	
	//슬라이더 패널정의 함수
	function showSlide(index){
		
		$(".panel_magazine li").fadeOut().removeClass("on");
		$(".panel_magazine li").eq(index).fadeIn().addClass("on");
	}	
    
    $('.panel_magazine>li>div').on('mouseenter',function(e){
        e.preventDefault();
        $(this).addClass('bgUp');
    });
    
    $('.panel_magazine>li>div').on('mouseleave',function(e){
        e.preventDefault();
        $(this).removeClass('bgUp');
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
});






