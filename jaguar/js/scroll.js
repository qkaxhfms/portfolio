//scroll
$(document).ready(function(){

    //var setting
    var offs = [];
    var sections = $('.myScroll');
    var len;
    var base_line = -300;
    var header_ht = $('#header').height();

    setOffs();
    $(window).on('resize',setOffs);

    //height array box
    function setOffs(){
        offs = [];
        $(sections).each(function(index,data){
            offs.push($(data).offset().top);
        });
        offs.push($('#footer').offset().top+$('#footer').height());
        len = offs.length;
    }
    

    //nav scroll move effect
    $('#pageNav>ul>li').on('click',function(e){
        e.preventDefault();
    
        var i = $(this).index();
        $('html,body').stop().animate({scrollTop : offs[i]-header_ht},1000);
    });
    
    //window scroll start
    $(window).on('scroll',function(){
        var scroll = $(this).scrollTop();
        $('#pageNav>ul>li').removeClass('on');
        $('.myScroll').removeClass('on');

        for(var i=0; i<len; i++){
            if( scroll>=offs[i]+base_line && scroll<offs[i+1]+base_line ){            
                $('#pageNav>ul>li').eq(i).addClass('on');
                $('.myScroll').eq(i).addClass('on');
            }
        }

        if(scroll>= offs[1]){
            $('#pageNav').addClass('on');
        }else{
            $('#pageNav').removeClass('on');
        }

        if(scroll>0){
            $('#header').addClass('on');
        }
        else{
            $('#header').removeClass('on');
        }

    });//window scroll end

    var scroll_main = $('#visual').height();

    //btn scrollMain
    $('.scrollMain').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':scroll_main},1000);    
    });

    //btn pageNav
    $('.backTotop').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({'scrollTop':0},1000);
            
    });
});