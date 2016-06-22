////默认选中导航
$(function () {
    var href = window.location.href;
    if (href.indexOf("smartSecurity") > -1) {
        $(".nav a").eq(5).addClass("active");
    }
    if (href.indexOf("userManagement") > -1) {
        $(".nav a").eq(4).addClass("active");
    }
});
//function navSelected()
//{
//    var href = window.location.href;
//    if (href.indexOf("smartSecurity") > -1) {
//        $("#nav a").eq(5).addClass("active");
//    }
//    if (href.indexOf("userManagement") > -1) {
//        $("#nav a").eq(4).addClass("active");
//    }
//}