////绑定点击事件
$("#btnMenNew").on("click", function () {
    $("#modalMenNew").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');
    $(window).on('resize');
});


$(".t-btn-edit").on("click", function () {
    $("#modalMenEdit").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');
});
