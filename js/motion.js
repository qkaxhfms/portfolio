$(document).ready(function(){

    resizeMotion();
    $(window).on('resize',resizeMotion);

    function resizeMotion(){
        var winW = $(window).width(); 

        if(winW > 940){          
        }else{
            delayIntro();
        }
        function delayIntro(){
            setTimeout(function(){
                
            },600);
            setTimeout(function(){
            },1200);        
            setTimeout(function(){
            },3600);        
            setTimeout(function(){
            },3700);
            setTimeout(function(){
            },3800);     
            setTimeout(function(){
            },4400);     
            setTimeout(function(){
            },4200);     
        }
    }


    //나타난다
    //칠해진다
    //벌어진다


});