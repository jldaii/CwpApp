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
    /*test**/
//  window.location.href="appinterface/homepage.html";
    /*
    * post提交数据
    * 发送地址，uid，action行为，成功回调函数，失败回调函数
    * */
   	
   	
    console.info(1);
    alert(userName+""+password);
//  PostForm("http://192.168.129.199:28075/cwp/front/sh/login!login", "uid=L001&loginName="+userName+"&loginPwd="+password, "LOGIN", LoginResultArrived, '');


	var url = 'http://192.168.129.199:28075/cwp/front/sh/login!login?uid=L001&loginName=admin&loginPwd=amdin'
	
	var data;
	var xhr =null;
	
	xhr.open( "GET", url );
	xhr.send();
	function LoginResultArrived(result){
		if(xhr){
			return;
		}
		xhr= new plus.net.XMLHttpRequest();
		xhr.onreadystatechange = function(){
			switch(xhr.readyState){
			}
		}
		
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
	}
	
		
});

//焦点文本框隐藏提示框
$("#login_name").on("focus", function () {
    hideTipBox();
});

$("#login_pwd").on("focus", function () {
    hideTipBox();
});




