/**
 * Created by admin on 2018/3/12.
 */
$(function () {
    $(".header-top-right .header-top-right-list-li").hover(function(e){
        let _this=$(this);
        let _border=$("#border-h");
        _this.find(".men-list").addClass("active");
        _this.find(".men-list-img").addClass("active");
        let index=_this.index();
        if(index<1){
            _border.css("width","0.7rem").css("left","0.5rem");
        }else{
            _border
                .css("width","0.7rem")
                .css("left",{
                    "1":"2rem",
                    "2":"3.8rem",
                    "3":"5.32rem",
                    "4":"7rem",
                    "5":"8.6rem",
                    "6":"10.4rem",
                    "7":"12.5rem",
                }[index]);
        }

    },function(e){
        let _this=$(this);
        let _border=$("#border-h");
        _border.css("width","0rem").css("left","0.8rem");
        _this.find(".men-list").removeClass("active");
        _this.find(".men-list-img").removeClass("active");
    })


});