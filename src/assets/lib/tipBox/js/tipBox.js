function showTipBox(icon, arrow, text, object) {
    var obj = document.getElementById(object);
    var width = obj.offsetWidth;
    var height = obj.offsetHeight;
    var top;
    if (height == 0) {
        height = 30;
        width = 250;
    }
    switch (arrow) {
        case "up_arrow":
            top = getTop(obj) + obj.offsetHeight + 10;
            $("#up_arrow").show();
            break;
        case "down_arrow":
            top = getTop(obj) - 50;
            $("#down_arrow").show();
            break;
    }    
    document.getElementById("tipbox").style.top = top + "px";
    document.getElementById("tipbox").style.left = getLeft(obj) + "px";
    $("#tip_icon").attr("class", icon);
    $("#tip_arrow").attr("class",arrow);
    $("#tipbox").show();
    $("#tip_content").css("width", width - 2);
    $("#tip_text").html(text).css("width", width - 60);
}

//关闭提示框
function hideTipBox() {
    $("#tipbox").hide();    
}


//获取元素的纵坐标
function getTop(e) {
    var offset = e.offsetTop;
    if (e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
}

//获取元素的横坐标
function getLeft(e) {
    var offset = e.offsetLeft;
    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
    return offset;
}

