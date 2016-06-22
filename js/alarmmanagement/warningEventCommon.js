/**
*@author chenqiuxu
*@created 2016/05/31
*加载页面时需要执行的方法
*/
$(function() {
warningDictionaryType();
queryList();

});

/*
    * post提交数据
    * 发送地址，uid，action行为，成功回调函数，失败回调函数
    *@author cheqniuxu
    *@created 2016/05/31
    *分页查询告警信息，每页显示5行
    * */
   function queryList(){

  var diName=$('#diName').val();
   var eventProcessStatus=$('#eventProcessStatus').val();
      $("#warningEventList").html("");

    PostForm("http://localhost:28090/cwp/front/sh/warningEvent!execute", "uid=c001&pageSize=5&currentPage=1&dictValue="+diName+"&eventProcessStatus="+eventProcessStatus, "", WarningEventResultArrived, '');
    }
  //发送告警信息回调函数
    function WarningEventResultArrived(result)
    {
     console.log(result.beans);
    var tbobys="";
     for(var i=0;i<result.beans.length;i++){
           var state="";
           var level="";
            if(result.beans[i].warningLevel=="1"){
            level="紧急"
            }else if(result.beans[i].warningLevel=="2"){
             level="高"
            }else if(result.beans[i].warningLevel=="3"){
             level="中"
            }else if(result.beans[i].warningLevel=="4"){
             level="低"
            }

             if(result.beans[i].eventProcessStatus=="1"){
                state="未处理"
                }else if(result.beans[i].eventProcessStatus=="2"){
                 state="处理中"
                }else if(result.beans[i].eventProcessStatus=="3"){
                state="已恢复"
                }

            var tr="<tr><td>"+result.beans[i].dictName+"</td>"+
                   "<td>"+result.beans[i].devicePositionDescribe+"</td>"+
                   "<td>"+level+"</td>"+
                   "<td>"+result.beans[i].eventDescribe+"</td>"+
                   "<td>"+result.beans[i].eventTime+"</td>"+
                   "<td>"+state+"</td>"+
                   "<td><a class='t-btn t-btn-sm t-btn-blue t-btn-deal'>详情</a></td></tr>";
                     tbobys+= tr;
     }
     $("#warningEventList").append(tbobys);

    }



    /*
        * post提交数据
        * 发送地址，uid，action行为，成功回调函数，失败回调函数
        *@author cheqniuxu
        *@created 2016/05/31
        *通过字典表查询字典数据表告警类别
        * */
       function warningDictionaryType(){
        PostForm("http://localhost:28090/cwp/front/sh/warningEvent!execute", "uid=c002&dictKey=intelligentType", "", WarningDictionarytResultArrived, '');
        }
        function WarningDictionarytResultArrived(result){
        console.log(result);
            var sel = $("#diName");
   			var option = ""
   			//sel.append(option);
   			for ( var i = 0; i <   result.beans.length; i++) {
   				option = $("<option>").text(result.beans[i].dictName).val(result.beans[i].dictValue);
   				sel.append(option);
   			}
        }

        /**
        *查看详情
        *@author chenqiuxu
        *@created 2016/05/31
        */
        function detailWarningEvent(){
           PostForm("http://localhost:28090/cwp/front/sh/warningEvent!execute", "uid=c003&warningEventId=1c6d98d9-6cff-4aa4-acb2-93ce5aefe672", "", detailWarningById, '');
           }
          function detailWarningById(result){
              console.log(result);
          }






