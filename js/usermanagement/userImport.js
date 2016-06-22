//用户导入选项卡
$(".import-type-list li").on("click", function () {
    $(".import-type-list li").removeClass("selected");
    $(".import-help .item").hide();
    $(this).addClass("selected");
    var index_id = $(this).index();
    $(".import-help .item").eq(index_id).show();
});

//点击触发上传控件
$(".uploadFile").on("click", function () {
    $("#uploadFile").click();
});