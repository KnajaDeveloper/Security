var pagginationAppMenuLv1 = $.extend({}, UtilPaggination);

pagginationAppMenuLv1.setEventPaggingBtn("paggingAppMenuLv1", pagginationAppMenuLv1);
pagginationAppMenuLv1.loadTable = function loadTable(jsonData) {
    if (jsonData.length <= 0)
        bootbox.alert("ไม่พบข้อมูล");

    $('#tbAppMenuLv1').empty();
    jsonData.forEach(function (v) {
        var parentMenuName = 'ไม่มี';
        if (v.parent != 0) {
            if (_language == 'TH') {
                parentMenuName = v.parent_t_name;
            } else {
                parentMenuName = v.parent_e_name;
            }
        }

        $('#chkCheckAllLv1').prop('checked', false);

        $('#tbAppMenuLv1').append('<tr>' +
            '<td class="text-center">' +
            '<input type="checkbox" id="chkMenuLv1_' + v.id + '"/>' +
            '</td>' +
            '<td class="text-center">' +
            '<button id="btnEditMenu_' + v.id + '" type="button" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-pencil"><span/></button>' +
            '</td>' +
            '<td class="text-center">' + v.sequent + '</td>' +
            '<td>' + v.link + '</td>' +
            '<td>' + v.menu_th + '</td>' +
            '<td>' + v.menu_en + '</td>' +
            '<td>' + v.controller + '</td>' +
            '<td>' + parentMenuName + '</td>' +
            '</tr>'
        );
    });

};

function loadAllMenuLevel_1() {
    pagginationAppMenuLv1.setOptionJsonData({
        url: contextPath + "/appmenus/findPaggingDataAppMenu",
        data: {level: 1}
    });
    pagginationAppMenuLv1.setOptionJsonSize({
        url: contextPath + "/appmenus/findPaggingSizeAppMenu",
        data: {level: 1}
    });
    pagginationAppMenuLv1.search(pagginationAppMenuLv1);
}



