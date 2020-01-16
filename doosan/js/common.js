/* javascript */
$(function(){
    //bxslider
    $(".bx1").bxSlider({
        mode:"fade"                
    });
    $('.iframeimg').on('mouseover focusin',function(){
        $('.iframevideo').fadeIn(300);
    });
    var wwd = $(window).width();
    
    if(wwd < 768){
        $('body').addClass('mobile');
    }else{
        $('body').addClass('pc');
    };
    $(window).resize(function(){
        wwd = $(window).width();
        if(wwd < 768){
            $('body').removeClass();
            $('body').addClass('mobile');
        }else{
            $('body').removeClass();
            $('body').addClass('pc');
        };
    });
    //모바일메뉴
    $('.mbtn2').hide();
    $('.mbtn1').click(function(){
        $('.mbtn2').fadeIn();
        $('.mbtn1').hide();
        $('.gnb').fadeIn(500);        
    });
    $('.mbtn2').click(function(){
        $('.mbtn1').fadeIn(1000);
        $('.mbtn2').hide();
        $('.gnb').fadeOut(500);
    });
    $('.mbtn3').click(function(){
        $('.mbtn4').fadeIn();
        $('.mbtn3').hide();
        $('.gnb_as').fadeIn(500); 
    });
    $('.mbtn4').click(function(){
        $('.mbtn3').fadeIn(1000);
        $('.mbtn4').hide();
        $('.gnb_as').fadeOut(500);
    });
    $('.mbtnindex').click(function(){
        $('.mbtnindex').hide();
        $('.mbtnindex2').fadeIn();
        $('.indexmain1>ul').fadeIn(500); 
    });
    $('.mbtnindex2').click(function(){
        $('.mbtnindex').fadeIn();
        $('.mbtnindex2').hide();
        $('.indexmain1>ul').fadeOut(500); 
    });
    //pc
    var gnbNum = 0;
    var gnbLength = $('.gnb>li').length; 
    var subH = [80,80,130,180,130,80];
    var speedFast = 500;
    var speedSlow = 300;  
    for(var i=0; i<gnbLength; i++){
        $(".pc .gnb>li").mouseover(function(){
            gnbNum = $(this).index();
            //console.log(subH[gnbNum]);
            $('.gnb>li'+':eq('+gnbNum+')>.g_depth').stop().animate({height:subH[gnbNum]},speedFast);
        });
        $(".pc .gnb>li").mouseleave(function(){
            $('.gnb>li'+':eq('+gnbNum+')>.g_depth').stop().animate({height:0},speedSlow);
        });
    }
    //mobile
    var MgnbNum = 0;
    var MgnbLength = $('.gnb>li').length; 
    var MsubH = [80,80,150,180,150,80];
    var MspeedFast = 700;
    var MspeedSlow = 300;  
    for(var j=0; j<MgnbLength; j++){
        $(".mobile .gnb>li").mouseover(function(){
            MgnbNum = $(this).index();
            console.log(MsubH[MgnbNum]);
            $('.gnb>li'+':eq('+MgnbNum+')>.g_depth').stop().animate({height:MsubH[MgnbNum]},MspeedFast);
        });
        $(".mobile .gnb>li").mouseleave(function(){
            $('.gnb>li'+':eq('+MgnbNum+')>.g_depth').stop().animate({height:0},MspeedSlow);
        });
    }   
    var scrollcountUp = ($('.lastbox').offset().top)/2;
    //console.log(scrollcountUp);
    $(window).scroll(function(){
        if($(window).scrollTop()>scrollcountUp){
            countUp();
        };
    });
    function countUp(){
        $('.counter').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          $({ countNum: $this.text()}).animate({countNum: countTo},{duration: 3000, easing:'linear', step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });  

        });
    };
    
});