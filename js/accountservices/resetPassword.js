$(document).ready(function () {
    $.formValidator.initConfig({ formid: "frmMain", onerror: function (msg) { return false; }, onsuccess: function () { return true; } });
    $("#pwd").formValidator({
        onfocus: "6-20位字符，建议由字母，数字和符号两种以上组合",
        oncorrect: " "
    }).InputValidator({
        min: 6,
        max: 20,
        onempty: "请输入密码",
        onerror: "密码长度只能在6-20位字符之间"
    }).RegexValidator({
        regexp: "password",
        datatype: "enum",
        onerror: "密码只能由英文、数字及标点符号组成"
    });


    $("#confirmPwd").formValidator({
        onfocus: "请再次输入密码",
        oncorrect: " "
    }).InputValidator({
        min: 1,
        onempty: "请确认密码",
        onerror: "密码长度只能在6-20位字符之间"
    }).CompareValidator({
        desID: "pwd",
        operateor: "=",
        onerror: "两次输入密码不一致"
    });
});

function SumitSetPassword() {
    if (jQuery.formValidator.PageIsValid()) {
        window.location.href = "modifyTheSuccess.html";
    }
}

$("#btnConfrim").on("click", function () {
    SumitSetPassword();
});