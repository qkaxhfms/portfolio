$(document).ready(function(){

    resizeMotion();
    $(window).on('resize',resizeMotion);

    function resizeMotion(){
        var $lt = $('.lt');   
        var winW = $(window).width(); 

        if(winW < 939){    
            mobileIntro();        
        }else{
            delayIntro();
        }
        function delayIntro(){
            setTimeout(function(){
                introAp();
            },600);
            setTimeout(function(){
                introBg1();
            },1200);        
            setTimeout(function(){
                introBf1();
            },3600);        
            setTimeout(function(){
                introMo1();
            },3700);
            setTimeout(function(){
                introBg2();
            },3800);     
            setTimeout(function(){
                introBf2();
            },4400);     
            setTimeout(function(){
               introMo2();
            },4200);     
        }
        function mobileIntro(){            
            introAp();
            introBg1();
            introBg2();
            introBf1();
            introBf2();
            introMo1();
            introMo2();
        }
        function introAp(){
            $lt.addClass('intro-ap');
        }
        function introBg1 (){
            $('.lt1').addClass('intro-bg');
        }
        function introBf1 (){
            $('.lt1').addClass('intro-bg-f');
        }
        function introMo1 (){
            $('.lt1').eq(0).addClass('intro-mo');
        }
        function introMo2 (){
            $('.lt2').eq(0).addClass('intro-mo');
        }
        function introBg2 (){
            $('.lt2').addClass('intro-bg');
        }
        function introBf2 (){
            $('.lt2').addClass('intro-bg-f');
        }
    }


    //나타난다
    //칠해진다
    //벌어진다


});