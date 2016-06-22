//绑定点击事件
$("#btnSaveInfo").on("click", function () {
    $("#myTip").modal({
        keyboard: true
    }).on('show.bs.modal', centerModal());
    $(window).on('resize', centerModal());
    //定时关闭
    //setTimeout(function () { $("#myTip").modal("hide") }, 2000);
    //setTimeout(function () { window.location.href = "personSetting.html"; }, 1000);
});
