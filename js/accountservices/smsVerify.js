var InterValObj; //time变量，控制时间
var count =3; //时间函数，1秒执行
var curCount; //当前剩余秒数
var code = "";//验证码
var codeLength = 6; //验证码长度
$("#btn_sms_verify").on("click", function () {
    sendMessage();
});

function sendMessage() {
    curCount = count;
    var userMobile = $("#phone").val(); //用户手机号
    if ($.formValidator.IsOneValid('phone')) {
        //产生验证码
        for (var i = 0; i < codeLength; i++) {
            code += parseInt(Math.random() * 9).toString();
        }
        //设置Button效果，开始计时
        $("#btn_sms_verify").hide();
        $("#btn_sms_countdown").show();
        $("#btn_sms_countdown .sms_timer").html(count);
        //启动计时器，1秒钟计时一次
        InterValObj = window.setInterval(setRemainTime, 1000);
        //向后台发送数据
        //            $.ajax({
        //                type: "post",
        //                dataType: "text", 
        //                url: 'handlerMobile.aspx', 
        //                data:"mobile=" + mobile + "&code=" + code,
        //                error: function (XMLHttpRequest, textStatus, errorThrown) { },
        //                success: function (msg) { }
        //            });            
        $("#codeTip").addClass("onSendSuccess").html("验证码发送成功，5分钟内有效");
    }
    else {
        $("#phone").focus(); 
    }
    
}


//timer处理函数
function setRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj); //停止计时器
        $("#btn_sms_verify").show(); //启用按钮
        $("#btn_sms_countdown").hide();
        code = "";
    }
    else {
        curCount--;
        $("#btn_sms_countdown .sms_timer").html(curCount);
    }
}
