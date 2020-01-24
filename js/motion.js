$(document).ready(function(){

    resizeMotion();
    $(window).on('resize',resizeMotion);

    function resizeMotion(){
        var winW = $(window).width(); 

        if(winW > 940){        
            delayIntro();  
        }else{
            $('.inner-letter.letter-1').addClass('change-svg change-stroke change-fill letter-move');
        }
        function delayIntro(){
            setTimeout(function(){
                $('.inner-letter.letter-1').addClass('change-svg');
            },0);
            setTimeout(function(){
                $('.inner-letter.letter-1').addClass('change-stroke');
            },1500);
            setTimeout(function(){
                $('.inner-letter.letter-1').addClass('change-fill');
            },4500);
            setTimeout(function(){
                $('.inner-letter.letter-1').addClass('letter-move');
            },4800);
            setTimeout(function(){
                $('.inner-letter.letter-2').addClass('change-svg');
            },5000);
            setTimeout(function(){
                $('.inner-letter.letter-2').addClass('change-stroke');
            },6500);
            setTimeout(function(){
                $('.inner-letter.letter-2').addClass('letter-move');
            },9500);
            setTimeout(function(){
                $('.inner-letter.letter-2').addClass('change-fill');
            },9800);
        }
    }

});