////绑定点击事件
$("#btnAddUser").on("click", function () {//触发按钮ID
    $("#modalAddUser").modal({//启用modal ID
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');
});


$(".t-btn-edit").on("click", function () {
    $("#modalEditUser").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');    
    //定时关闭
});
