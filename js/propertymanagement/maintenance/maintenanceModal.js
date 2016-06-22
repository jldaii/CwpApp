////绑定点击事件
$("#btnMaintenanceNew").on("click", function () {
    $("#modalMaintenanceNew").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');  
});


$(".t-btn-details").on("click", function () {
    $("#modalMaintenanceDetails").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');
});

$(".t-btn-edit").on("click", function () {
    $("#modalMaintenanceEdit").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal'); 
});
