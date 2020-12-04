// 課題1
$(function(){
    $(".drop_down li").hover(function(){
        $("> ul:not(:animated)",this).slideDown();
    },function(){
        $(".drop_down_menu",this).slideUp();
    });
})

// 課題2
$(function(){
    $("#slide_show_area").each(function(){
        let find_ul = $(this).find("ul");
        let find_li = $(this).find("li");
        let first_img = $(this).find("li:first");

        find_li.css({
            display: "block",
            opacity: "0",
            zIndex: "1"
        });
        first_img.css({
            zIndex: "2"
        }).stop().animate({
            opacity: "1"
        },1500);

        //繰り返し表示する処理
        setInterval(function(){
            find_ul.find("li:first-child").animate({
                opacity:"0"
            },1500).next("li").css({
                zIndex:"2"
            }).animate({
                opacity:"1"
            },1500).end().appendTo(find_ul).css({  
                zIndex:"1"
            });
        },5000);
    });
})