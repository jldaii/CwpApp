////绑定点击事件
$("#btnSetScheduling").on("click", function () {
    $("#modalSetScheduling").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');  
});


$("#btnProcess").on("click", function () {
    $("#modalProcess").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');  
});
