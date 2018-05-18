// import { version } from "punycode";

/**
 * Created by admin on 2018/3/18.
 */
/**
 * Created by admin on 2018/3/12.
 */
var dlbServer={
    main:function () {
        var mySwiper = new Swiper ('.public-swiper-class', {
            pagination : '.swiper-pagination',
        })
        var public_swiper_class_top = new Swiper ('.public-swiper-class-top', {
            pagination : '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay: 3000,//可选选项，自动滑动
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
        var mySwiper2 = new Swiper('.case-swiper-class',{
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            slidesPerGroup: 1,
            pagination : '.swiper-pagination',
            // prevButton:'.swiper-button-prev',
            // nextButton:'.swiper-button-next'
            
        })
    }
}
$(function () {
    dlbServer.main();
    $(".information-right-ul li").on("click",function (index) {
        $(this).parent().find("li").removeClass("select-sapn");
        $(this).addClass("select-sapn");
    })
    setTimeout(function () {
        $(".header-user-menage .header-user-titles").addClass("fadeInUp"); // 开始淡入
        $(".header-user-menages .header-user-menages-left").addClass("fadeInLeft"); // 开始淡入
        $(".header-user-menages .header-user-menages-right").addClass("fadeInRight"); // 开始淡入


        $(".information .information-title").addClass("fadeInUp"); // 开始淡入
        $(".information-menages .information-left").addClass("fadeInLeft"); // 开始淡入
        $(".information-menages .information-right").addClass("fadeInRight"); // 开始淡入
    },1000)

    // 顶部导航栏显示隐藏
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>700){
            $(".header-top-mens").css({
                "position":"fixed",
                "background":"#fff",
                "width":"100%",
                "height":"55px",
                "margin-left":"0",
                "box-shadow":"0px 2px 6px 0px rgba(0,0,0,0.1)"
            });
            $(".header-top-left").css("margin-left","55px");
            $(".header-top-left img").attr("src","images/logo.png");
            $(".header-top-right").css({
                "margin-right": "50px",
                "margin-top": "-3px",
            });
            $(".header-top-right li").css({
                "color":"#000"
            })
            $(".header-top-right li a").css({
                "color":"#000"
            })
            $(".header-top-right li").mouseenter(function(){
                $(this).css({
                    "color":"#ccc"
                })
            })
            
            $(".header-top-right li").mouseout(function(){
                $(this).css({
                    "color":"#000"
                })
            })
            $(".header-top-right li a").mouseenter(function(){
                $(this).css({
                    "color":"#ccc"
                })
            })
            $(".header-top-right li a").mouseout(function(){
                $(this).css({
                    "color":"#000"
                })
            })
        }else{
            $(".header-top-mens").css({
                "position":"absolute",
                "background":"transparent",
                // "width":"100%",
                "height":"55px",
            });
            $(".header-top-left img").attr("src","images/bai-logo.png");
            $(".header-top-right").css({
                "margin-right": "50px",
                "margin-top": "-3px",
            });
            $(".header-top-right li").css({
                "color":"#D4D7DB"
            })
            $(".header-top-right li a").css({
                "color":"#D4D7DB"
            })
            $(".header-top-right li").mouseenter(function(){
                $(this).css({
                    "color":"#fff"
                })
            })
            
            $(".header-top-right li").mouseout(function(){
                $(this).css({
                    "color":"#D4D7DB"
                })
            })
            $(".header-top-right li a").mouseenter(function(){
                $(this).css({
                    "color":"#fff"
                })
            })
            $(".header-top-right li a").mouseout(function(){
                $(this).css({
                    "color":"#D4D7DB"
                })
            })
        }
    })

});