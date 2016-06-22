/*?var serverError = "������ͨ��ʧ�ܣ������ԡ�";*/
function htmlEncode(value) {
    return $('<div/>').text(value).html();
}
function htmlDecode(value) {
    return $('<div/>').html(value).text();
}
function replaceInvalidChars(source) {
//    while (source.indexOf('+') >= 0) {
//        source = source.replace('+', "%2B");
//    }
    return source;
}

function PostForm(url, parameters, action, successFunction, failedFunction) {
/*
    try
    {
        for (instance in CKEDITOR.instances) {
            CKEDITOR.instances[instance].updateElement();
        }
    }
    catch (ex) {
        //do nothing 
    }
*/

    var queryString = window.location.search;
    if (queryString != "" && queryString != null) {
        url += queryString + "&" + parameters;
    }
    else {
        url += "?" + parameters;
    }

    $.post(url, $(document.forms[0]).serialize()
                //{

                //    //KaYiData: $(document.forms[0]).serialize(),
                //    //KaYiAction: action
                //}
            )
        .success(function (result) {
            if (successFunction != null && successFunction != "") {
                successFunction(result);
            }

        })
        .error(function (result) {
            if (failedFunction != null && failedFunction != "") {
                failedFunction(result)
            }
        });
}

function Redirect(url, newWindow) 
{
    if (newWindow == false) {
        document.location = url;
    }
    else {
        window.open(url);
    }
}

function Response(result) {
    var _this = this;
    this.Code = "";
    this.Message = "";
    this.NextUrl = "";
    this.MessageType = "";
    this.Next = function () {
        if (_this.NextUrl != null && _this.NextUrl != "") {
            Redirect(_this.NextUrl, false);
        }
        else {
            if (_this.Message != undefined) {                
                /*ShowDialogAutoClose('dlgFailed', _this.Message, 'd-error', 2);*/
                alert(_this.Message);
            }
        }
    };

    var init = function () {
        var data = result.returnMessage.split('$');
        _this.Code = data[0];
        _this.Message = data[1];
        _this.NextUrl = data[2];
        _this.MessageType = data[3];
    };
    init();
}



function communicateFailed(result) {
    alert("服务器通信失败，请稍后再试");
}