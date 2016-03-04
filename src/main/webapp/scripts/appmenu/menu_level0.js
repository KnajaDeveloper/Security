var pagginationAppMenuLv0 = $.extend({}, UtilPaggination);

pagginationAppMenuLv0.setEventPaggingBtn("paggingAppMenuLv0", pagginationAppMenuLv0);
pagginationAppMenuLv0.loadTable = function loadTable(jsonData) {
    if (jsonData.length <= 0)
        bootbox.alert("ไม่พบข้อมูล");

    $('#tbAppMenuLv0').empty();
    jsonData.forEach(function (v) {

        $('#chkCheckAllLv0').prop('checked', false);

        $('#tbAppMenuLv0').append('<tr>' +
            '<td class="text-center">' +
            '<input type="checkbox" id="chkMenuLv0_' + v.id + '"/>' +
            '</td>' +
            '<td class="text-center">' +
            '<button id="btnEditMenu_' + v.id + '" type="button" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-pencil"><span/></button>' +
            '</td>' +
            '<td class="text-center">' + v.sequent + '</td>' +
            '<td>' + v.link + '</td>' +
            '<td class="text-center"><span class="fa ' + v.menuIcon + '"></span></td>' +
            '<td>' + v.menu_th + '</td>' +
            '<td>' + v.menu_en + '</td>' +
            '<td>' + v.controller + '</td>' +
            '</tr>'
        );
    });

};

function loadAllMenuLevel_0() {

    pagginationAppMenuLv0.setOptionJsonData({
        url: contextPath + "/appmenus/findPaggingDataAppMenu",
        data: {level: 0}
    });
    pagginationAppMenuLv0.setOptionJsonSize({
        url: contextPath + "/appmenus/findPaggingSizeAppMenu",
        data: {level: 0}
    });
    pagginationAppMenuLv0.search(pagginationAppMenuLv0);
}



