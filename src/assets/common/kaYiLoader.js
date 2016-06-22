var KaYiLoaders = new Array();
var loader = "<div style='margin:0 auto;text-align:center; padding-top:20px;'><img src='../../assets/img/loading/loading.gif' style='height:35px;width:35px;display:inline;' alt=''/><br/><p style='font-size:12px;display:inline;'>载入中，请稍候...</p></div>";

function gotoPage(gridID, pageIndex) {
    for (var i = 0; i <= KaYiLoaders.length - 1; i++) {
        if (KaYiLoaders[i].id == gridID) {
            KaYiLoaders[i].pageIndex = pageIndex;
            KaYiLoaders[i].Display();
        }
    }
}
function KaYiLoader(id, layerID, pagerLayerID, url,parameters,pageIndex,pageSize) {
    this.id = id;
    this.layerID=layerID;
    this.pagerLayerID = pagerLayerID;
    this.url = url;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.pageCount = 0;
    var _this = this;
    KaYiLoaders[KaYiLoaders.length] = this;
    this.Display = function () {
        $("#" + layerID).html(loader);
        var requestUrl = url + "?rid=" + Math.random()+"&" +parameters + "&pageIndex=" + _this.pageIndex + "&pageSize=" + _this.pageSize;
        var request = $.get(requestUrl)
                                .success(
                                            function (data) 
                                            {
                                                _this.loadSuccessed(data); 
                                            }
                                        )
                                .error(
                                            function (result) 
                                            {
                                               //alert(result);
                                            }
                                       )
    };
    this.loadSuccessed = function (data) {
        var endOfRecordCount = data.indexOf("!");
        var recordCount = data.substr(0, endOfRecordCount);
        var contentHtml = data.substr(endOfRecordCount + 1, data.length - endOfRecordCount);
        //记录数量/页面大小 取整
        _this.pageCount = parseInt(recordCount / _this.pageSize);
        //计算余下的记录数量
        var recordLeft = recordCount - _this.pageCount * _this.pageSize;
        
        //如果有余下记录，则总页数+1
        if (recordLeft > 0) {
            _this.pageCount++;
        }
        //如果记录不足一页
        if (_this.pageCount < 1) {
            _this.pageCount = 1;
        }
        
        _this.makePager();
        
        $("#" + _this.layerID).html(contentHtml);

        refreshPage();
    };
    this.makePager = function () {
        var output = "";
        //首页
        if (_this.pageIndex == 0) {
            output += "<span class='pagerUnavailableFirstPage'></span>";
        }
        else {
            output += "<a class=pagerFirstPage href=javascript:gotoPage('" + _this.id + "',0)></a>";
        }
        //上一页链接
        if (_this.pageIndex == 0) {
            //如果当前是首页，则上一页不可用
            output += "<span class=pagerPrevPageNotAvailable></span>";
        }
        else {
            //否则上一页链接可用
            output += "<a class=pagerPreviousPage href=javascript:gotoPage('" + _this.id + "'," + (_this.pageIndex - 1) + ")></a>";
        }
        //第一页至最后一页
        for (var i = 0; i <= _this.pageCount - 1; i++) {

            if (_this.pageIndex == i) {
                output += "<span class=currentPage>" + (i + 1) + "</span>";
            }
            else {
                output += "<a class=pagerToPage href=javascript:gotoPage('" + _this.id + "'," + i + ")>" + (i + 1) + "</a>";
            }
        }
        //下一页链接
        if (_this.pageIndex == _this.pageCount - 1) {
            //如果已经是最后一页
            output += "<span class=pagerNextPageNotAvailable></span>";
        }
        else {
            //否则下一页链接可用
            output += "<a class=pagerNextPage href=javascript:gotoPage('" + _this.id + "'," + (_this.pageIndex + 1) + ")></a>";
        }

        //末页
        if (_this.pageIndex == _this.pageCount - 1) {
            output += "<span class='pagerUnavailableLastPage'></span>";
        }
        else {
            output += "<a class=pagerLastPage href=javascript:gotoPage('" + _this.id + "'," + (_this.pageCount - 1) + ")></a>";
        }
        $("#" + _this.pagerLayerID).html(output).show();

  /*      if (_this.pageCount == 1) {
            $("#" + _this.pagerLayerID).hide();
        }*/
    };
}
