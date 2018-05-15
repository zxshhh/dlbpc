/**
 * Created by admin on 2018/3/12.
 */
$(function () {
    $(".header-top-right .header-top-right-list-li").hover(function(e){
        let _this=$(this);
        let _border=$("#border-h");
        _this.find(".men-list").addClass("active");
        let index=_this.index();
        if(index<1){
            _border.css("width","0.7rem").css("left","0.8rem");
        }else{
            _border
                .css("width","0.7rem")
                .css("left",{
                    "1":"2.55rem",
                    "2":"4.35rem",
                    "3":"6rem",
                    "4":"7.5rem",
                    "5":"9.2rem",
                    "6":"11rem",
                    "7":"12.3rem",
                }[index]);
        }

    },function(e){
        let _this=$(this);
        let _border=$("#border-h");
        _border.css("width","0rem").css("left","0.8rem");
        _this.find(".men-list").removeClass("active");
    })


});