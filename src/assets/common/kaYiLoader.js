var KaYiLoaders = new Array();
var loader = "<div style='margin:0 auto;text-align:center; padding-top:20px;'><img src='../../assets/img/loading/loading.gif' style='height:35px;width:35px;display:inline;' alt=''/><br/><p style='font-size:12px;display:inline;'>�����У����Ժ�...</p></div>";

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
        //��¼����/ҳ���С ȡ��
        _this.pageCount = parseInt(recordCount / _this.pageSize);
        //�������µļ�¼����
        var recordLeft = recordCount - _this.pageCount * _this.pageSize;
        
        //��������¼�¼������ҳ��+1
        if (recordLeft > 0) {
            _this.pageCount++;
        }
        //�����¼����һҳ
        if (_this.pageCount < 1) {
            _this.pageCount = 1;
        }
        
        _this.makePager();
        
        $("#" + _this.layerID).html(contentHtml);

        refreshPage();
    };
    this.makePager = function () {
        var output = "";
        //��ҳ
        if (_this.pageIndex == 0) {
            output += "<span class='pagerUnavailableFirstPage'></span>";
        }
        else {
            output += "<a class=pagerFirstPage href=javascript:gotoPage('" + _this.id + "',0)></a>";
        }
        //��һҳ����
        if (_this.pageIndex == 0) {
            //�����ǰ����ҳ������һҳ������
            output += "<span class=pagerPrevPageNotAvailable></span>";
        }
        else {
            //������һҳ���ӿ���
            output += "<a class=pagerPreviousPage href=javascript:gotoPage('" + _this.id + "'," + (_this.pageIndex - 1) + ")></a>";
        }
        //��һҳ�����һҳ
        for (var i = 0; i <= _this.pageCount - 1; i++) {

            if (_this.pageIndex == i) {
                output += "<span class=currentPage>" + (i + 1) + "</span>";
            }
            else {
                output += "<a class=pagerToPage href=javascript:gotoPage('" + _this.id + "'," + i + ")>" + (i + 1) + "</a>";
            }
        }
        //��һҳ����
        if (_this.pageIndex == _this.pageCount - 1) {
            //����Ѿ������һҳ
            output += "<span class=pagerNextPageNotAvailable></span>";
        }
        else {
            //������һҳ���ӿ���
            output += "<a class=pagerNextPage href=javascript:gotoPage('" + _this.id + "'," + (_this.pageIndex + 1) + ")></a>";
        }

        //ĩҳ
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
