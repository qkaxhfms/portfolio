$(document).ready(function(){

    var dataURL = 'https://api.instagram.com/v1/users/self/media/recent/';
    var $wrap = $('#instagram');
    var token = '1699189803.1677ed0.c38408e427954fb1a12086a47a6cb3cf';
    var count = 8;


    $.ajax({
        url : dataURL,
        dataType : 'jsonp',
        data : {
            access_token : token,
            count : count
        }
    })
    .success(function(data){
        //console.log(data.data);
        var item = data.data;
        $(item).each(function(){        

            var tags = this.tags;
            //console.log(tags);

            $wrap.append(
                $('<li>').css({
                    'background-image':'url('+this.images.low_resolution.url+')',
                    'backgound-position':'center',
                    'background-size':'cover',
                    'background-repeat':'no-repeat'
                }).append(
                    $('<a>').attr({'href':this.link, 'target':'_blank'}).css({
                        'display':'block', 'width':'100%','height':'100%',
                        'background':'rgba(0,0,0,0.6)'
                    })
                )
            )

        })
    })
    .error(function(){

    });

});