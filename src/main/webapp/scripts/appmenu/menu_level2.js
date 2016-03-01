var pagginationAppMenuLv2 = $.extend({}, UtilPaggination);

pagginationAppMenuLv2.setEventPaggingBtn("paggingAppMenuLv2", pagginationAppMenuLv2);
pagginationAppMenuLv2.loadTable = function loadTable(jsonData) {
    if (jsonData.length <= 0)
        bootbox.alert("ไม่พบข้อมูล");

    $('#tbAppMenuLv2').empty();
    jsonData.forEach(function (v) {
        var parentMenuName = 'ไม่มี';
        if (v.parent != 0) {
            if (_language == 'TH') {
                parentMenuName = v.parent_t_name;
            } else {
                parentMenuName = v.parent_e_name;
            }
        }

        $('#chkCheckAllLv2').prop('checked', false);

        $('#tbAppMenuLv2').append('<tr>' +
            '<td class="text-center">' +
            '<input type="checkbox" id="chkMenuLv2_' + v.id + '"/>' +
            '</td>' +
            '<td class="text-center">' +
            '<button id="btnEditMenu_' + v.id + '" type="button" class="btn btn-warning">แก้ไข</button>' +
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

function loadAllMenuLevel_2() {
    pagginationAppMenuLv2.setOptionJsonData({
        url: contextPath + "/appmenus/findPaggingDataAppMenu",
        data: {level: 2}
    });
    pagginationAppMenuLv2.setOptionJsonSize({
        url: contextPath + "/appmenus/findPaggingSizeAppMenu",
        data: {level: 2}
    });
    pagginationAppMenuLv2.search(pagginationAppMenuLv2);
}



