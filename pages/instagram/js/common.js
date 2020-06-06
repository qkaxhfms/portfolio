$(document).ready(function () {
    var token = "IGQVJVQWUxdXVsdW45LUpMZATZA6SzFkWjRiWlNkWnV4VWhMQzFoNHZAyZAzNFWnQ0SXZAEY1p1OTVDblkzTHBkdHBmSzEwRTJoRlhaQWFoSnlONzNndDZAIXzY3TV9nYU8wMS1OZAHhFU1V3";

    $.ajax({
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&fields=id,caption,media_type,media_url,thumbnail_url,permalink",
        dataType: "jsonp",
        complete: function () {
            var $grid = $(".container").isotope({
                itemSelector: ".item",
                conlumnwidth: ".item",
                percentPosition: true,
                transitionDuration: "0.5s"
            });

            /* filtering */
            $(".filter").on("click", "li .category", function (e) {
                e.preventDefault();
                var dataCategory = $(this).attr("data-category");
                $grid.isotope({
                    filter: function () {
                        var hashTag = $(this).find("a").text();
                        return hashTag.match(dataCategory);
                    }
                });
            });
        }
    }).done(function (data) {
        console.log(data);
        window.data = data;
        var list = "";

        $.each(data.data, function (i, v) {
            list += "<div class='item'>";
            list += "<div class='instagram-box'>";
            list += "<a href='" + v.permalink + "' target='_blank' style='background:url(" + v.media_url + ") no-repeat center center;''>";
            list += "<p>" + v.caption + "</p>";
            list += "</a>";
            list += "</div>";
            list += "</div>";
        });

        $('.container').append(list);

        /* range random value */
        function random(min, max) {
            var randVal = Math.floor(Math.random() * (max - min + 1)) + min;
            return randVal;
        }

        $(".instagram-box").map(function (i, v) {
            $(v).find("a").css("height", random(150, 350) + "px");
        });

    }).fail(function () {
        console.log("fail");
    });

    /* create category */
    $("#btn").click(function (e) {
        e.preventDefault();
        var txtVal = $(this).siblings("#addTxt").val();
        var catagoryBtn = $("<li><a class='category' href='#' data-category='." + txtVal + "'>#" + txtVal + "</a></li>");
        $(".filter").append(catagoryBtn);
    });
});