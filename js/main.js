/**
 * Created by admin on 2018/3/12.
 */
$(function () {
    $(".header-top-right .header-top-right-list-li").hover(function(e){
        let _this=$(this);
        let _border=$("#border-h");
        //老版导航下拉显示 
        // _this.find(".men-list").addClass("active");
        // _this.find(".men-list-img").addClass("active");
        
        // 下面横杆显示隐藏
        // let index=_this.index();
        // if(index<1){
        //     _border.css("width","0.7rem").css("left","0.5rem");
        // }else{
        //     _border
        //         .css("width","0.7rem")
        //         .css("left",{
        //             "1":"2rem",
        //             "2":"3.8rem",
        //             "3":"5.32rem",
        //             "4":"7rem",
        //             "5":"8.6rem",
        //             "6":"10.4rem",
        //             "7":"12.5rem",
        //         }[index]);
        // }

    },function(e){
        let _this=$(this);
        // 下面横杆显示隐藏
        // let _border=$("#border-h");
        // _border.css("width","0rem").css("left","0.8rem");
        //老版导航下拉显示 
        // _this.find(".men-list").removeClass("active");
        // _this.find(".men-list-img").removeClass("active");
    })
    // 
    $(".header-li1").mouseenter(function(e){
        e.stopPropagation();
        $(".men-list").fadeIn();
    })
    $(".header-li1").mouseover(function(e){
        return false;
        $(".men-list").fadeOut();
    })
    $(".header-dif").mouseover(function(e){
        $(".men-list").fadeOut();
    })
    
    $(".header-ty").mouseenter(function(e){
        e.stopPropagation();
        $(".men-list-img").fadeIn();
    })
    $(".header-ty").mouseover(function(e){
        return false;
        $(".men-list-img").fadeOut();
    })
    $(".header-tdif").mouseover(function(e){
        $(".men-list-img").fadeOut();
    })
   
    $(".header-top-images").click(function(e){
        $(".men-list-img").fadeOut();
    })
    $(".header-top-images").click(function(e){
        $(".men-list").fadeOut();
    })

});