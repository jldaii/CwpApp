/**
 * Created by again on 2016/5/23.
 */

//登录验证
$("#btn-login").on("click",function(){
	
    var userName = $("#login_name").val();
    var password=$("#login_pwd").val();
    if (userName == "请输入用户名"||userName=="") {
        showTipBox('tip_error', 'down_arrow', '请输入用户名', 'login_name');
        return;
    }
    if (password == "请输入密码" || password=="") {
        showTipBox('tip_error', "down_arrow", '请输入密码', 'login_pwd');
        return;
    }
  //  login(userName,password);
    /*test**/
    window.location.href="appinterface/homepage.html";
    /*
    * post提交数据
    * 发送地址，uid，action行为，成功回调函数，失败回调函数
    * */
   
    
    console.info(1);
    
    PostForm("http://192.168.129.199:28075/cwp/front/sh/login!login", "uid=L001&loginName="+userName+"&loginPwd="+password, "LOGIN", LoginResultArrived, '');

});

//焦点文本框隐藏提示框
$("#login_name").on("focus", function () {
    hideTipBox();
});

$("#login_pwd").on("focus", function () {
    hideTipBox();
});


//发送账户信息回调函数
function LoginResultArrived(result)
{   
console.log(result);
    var response = new Response(result);
    alert(response);
    switch (response.Code) {
        case "0":
            window.location.href=response.NextUrl;
            break;
        case "1":
        case "2":
            showTipBox('tip_error', 'down_arrow', response.Message, 'login_name');
            break;
    };
}

//function login(loginName,password){
//	alert("22");
//	mui.get('http://192.169.92.196:28075/cwp/front/sh/login!login',{
//	data:{
//		uid:'L001',
//		loginName:loginName,
//		loginPwd:password,
//	},
//	dataType:'json',//服务器返回json格式数据
//	type:'get',//HTTP请求类型
//	timeout:10000,//超时时间设置为10秒；   
//	success:function(data){
//		alert(data);
//		//服务器返回响应，根据响应结果，分析是否登录成功；
//	},
//	error:function(xhr,type,errorThrown){
//		//异常处理；
//		alert("sss");
//		alert(type);
//		console.log(type);
//	}
//});
//}
