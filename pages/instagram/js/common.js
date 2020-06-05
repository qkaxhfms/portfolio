$(document).ready(function(){

    $('.filter a').on('click',function(e){
        e.preventDefault();
        var sort = $(this).attr('href');
        $grid.isotope({filter:sort});
    })
    var token = "IGQVJVQWUxdXVsdW45LUpMZATZA6SzFkWjRiWlNkWnV4VWhMQzFoNHZAyZAzNFWnQ0SXZAEY1p1OTVDblkzTHBkdHBmSzEwRTJoRlhaQWFoSnlONzNndDZAIXzY3TV9nYU8wMS1OZAHhFU1V3";

    $.ajax({
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink",
        dataType: "jsonp"// CORS 
        complete: function(){
            var $grid = $('.container').isotope({
                itemSelector:'.item',
                columnWidth:'.item',
                percentPosition:true,
                transitionDuration:'0.8s'
            });
        }
    }).done(function (data) {
        console.log(data);
        window.data = data;
        var list = "";
        $.each(data.data, function (i, v) { // each문 반복문 돌림 -> data.data i-> index , v -> value
            list += "<div class='item'>";
            list += "<div class='instagram-box'>";
            list += "<a href='" + v.permalink + "' target='_blank' style='background:url(" + v.media_url + ") no-repeat center center;''>";
            list += "<p>" + v.caption + "</p>";
            list += "</a>";
            list += "</div>";
        });
        $('.container').append(list);
    }).fail(function () {
        console.log("fail");
    });
})