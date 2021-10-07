//ふわっとスクロール
window.onload = function() {
    scroll_effect();

    $(window).scroll(function() {
    scroll_effect();
    });

    function scroll_effect(){
    $('.effect-fade').each(function() {
        var elementPosition = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (scroll > elementPosition - windowHeight) {
        $(this).addClass('effect-scroll');
        }
    });
    }
};
/*
function scroll_effect(){
var tt = $(window).scrollTop();
var hh = $(window).height();
$('.scroll-fade').each(function(){
    var yy = $(this).offset().top+100;//効果発生開始タイミングを操作したい場合は数値を変更する
    if (tt > yy - hh){
        $(this).addClass('done');
    }
});
$('.scroll-up').each(function(){
    var yy = $(this).offset().top+100;//効果発生開始タイミングを操作したい場合は数値を変更する
    if (tt > yy - hh){
        $(this).addClass('done');
    }
});
}
*/

/*
AOS.init({
offset: 120,
delay: 0,
duration: 400,
easing: 'ease',
once: false,
mirror: false,
anchorPlacement: 'top-bottom',
});
*/


// アコーディオンパネルの開閉

jQuery(document).ready(function() {
jQuery('.toggle').on('click', function(){
    jQuery(this).next('.bl_accordion_body').toggleClass("open");
});
});


// スライドショー(横スクロール):制作実績セクション
$(function() {
var dir = -1;

var interval = 5000;

var duration = 700;

var timer;

$("#slide .bl_cardUnit").prepend($("#slide .bl_card:last-child"));

$("#slide .bl_cardUnit").css("left", -322);

timer = setInterval(slideTimer, interval);

function slideTimer() {
    if(dir == -1) {
    $("#slide .bl_cardUnit").animate({"left" : "-=322px"}, duration,
    function() {
        $(this).append($("#slide .bl_card:first-child"));
        $(this).css("left", -322)
    });
    }else {
    $("#slide .bl_cardUnit").animate({"left": "+=322px"}, duration,
    function() {
        $(this).prepend($("#slide .bl_card:last-child"));
        $(this).css("left", -322);
        dir = -1;
    });
    }
}

$("#prevBtn").click(function(){
    dir = 1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();
});

$("#nextBtn").click(function(){
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();
});
});


// swiper 
/*
var swiper = new Swiper('.swiper-container', {
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
loop: true,
autoplay: {
    delay: 3000,
    disableOnInteraction: true
},
});
*/