$(document).ready(function () {
    $.formValidator.initConfig({ formid: "frmMain", onerror: function (msg) { return false; }, onsuccess: function () { return true; } });
    $("#phone").formValidator({
        onfocus: "请输入手机号", oncorrect: " "
    }).InputValidator({
        min: 11,
        max:11,
        onempty: "请输入手机号",
        onerror: "手机号码应为11位数字，以13/14/15/17/18开头"
    }).RegexValidator({
        regexp: "tel",
        datatype: "enum",
        onerror: "手机号码应为11位数字，以13/14/15/17/18开头"
    });
    $("#code").formValidator({ onfocus: "请输入短信验证码，长度为6位", oncorrect: " " }).InputValidator({ min: 6, max: 6, onerror: "请输入短信验证码", onempty: "请输入短信验证码"});
});


function SumitIdentity() {
    if (jQuery.formValidator.PageIsValid()) {
        window.location.href = "resetPassword.html"
    }
}


$("#btnCheckAccount").on("click", function () {
    SumitIdentity();
});
