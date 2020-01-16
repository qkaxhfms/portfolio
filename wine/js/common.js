$(document).ready(function(){
//javascript
    var gnbTop = ($(window).height() - $('#gnb_menu').height())/3;
    var hdoffset = $('#main1').offset();
    var gotoTop = $('#slogan').offset();
    $(window).scroll(function(){
        scroll_top();
    });
    function scroll_top(){
        if($(document).scrollTop() > hdoffset.top) {
            $('#m_btn1').addClass('fcr');
            $('#top_btn_m').addClass('bgwt');
       } else {
           $('#m_btn1').removeClass('fcr');
           $('#top_btn_m').removeClass('bgwt');
        }
        if($(document).scrollTop() > hdoffset.top) {
            $('#gotoTop').addClass('activated');
        } else {
            $('#gotoTop').removeClass('activated');
        }
    }
    console.log(gnbTop);
    $('#gnb_menu').css('margin-top',gnbTop);
    $('#m_btn1').click(function(){
        $('#m_btn1').hide();
        $('#gnb').animate({left:0});        
    });
    $('#m_btn2').click(function(){
        $('#m_btn1').fadeIn(1000);
        $('#gnb').animate({left:'-70%'});     
    });
    $('.loginmobile').click(function(event){
        event.preventDefault();
        $('#loginbg').fadeIn(1000);
        $('#loginbg').animate({bottom:0});
    })
    //로그인영역
    $('#loginenter').click(function(){
        $('#loginbg').fadeIn(1000);
    });
    $('#loginclose').click(function(){
        $('#loginbg').fadeOut(1000);
        //$('#loginbg').animate({bottom:'-35%'});
    });
    $('.loginhelp label').click(function(){
        $(this).hide();
    });
    $('#gotoTop').click(function(){
        $('html, body').animate({scrollTop:0},600);
    });
    $("#gnb_menu a").click(function(event) {		
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top              
		  }, 800);			
	});
    $("#top_head a").click(function(event) {		
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top              
		  }, 800);			
	});
    $('.autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:2000,
    });
 });