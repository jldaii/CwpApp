$(function(){
    $(".t-btn-deal").on("click",function(){
    alert();
    $("#modalDetailsAlarm").modal({
        keyboard: true,
        backdrop: 'static'
    }).on('show.bs.modal');

    });
});



