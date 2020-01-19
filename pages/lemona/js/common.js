//javascript파일입니다
    $(document).ready(function(){
        var hdtop = $('header').height();
        $(window).scroll(function(){
            if($(document).scrollTop() > hdtop) {
                $('#gnb').removeClass();
                $('#gnb').addClass('nav2');
                $('#gnb').animate({top:"0px"},600);
            } else {
                $('#gnb').removeClass();              
                $('#gnb').addClass('nav1');
            }
        });
        $('.fixedbanner').click(function(){
            $('html, body').animate({scrollTop:0},1000);
        });
        $("#gnb a").click(function(event) {		
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top              
              }, 800);			
        });
    });