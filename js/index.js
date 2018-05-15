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
            pagination : '.swiper-pagination',
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
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

});