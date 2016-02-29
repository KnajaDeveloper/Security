var _language = commonData.language;
var pagginationAppRole = $.extend({}, UtilPaggination);

$(document).ready(function () {
    loadAllAppRole();
});

// Add role ------------------------------------------------------------------------------------------------------------
$('#btnAddRole').click(function () {
    openModalAddRole();
});
$('#btnCancelAdd').click(function () {
    $('#mdAddRole').modal('hide');
});
$('#btnSaveAddRole').click(function () {
    var roleCode = $('#txtAddRoleCode').val();
    var roleName = $('#txtAddRoleName').val();

    if (roleCode == '') {
        $('#txtAddRoleCode').attr('data-content', 'กรุณาระบุชื่อย่อ').popover('show');
    } else if (roleName == '') {
        $('#txtAddRoleName').attr('data-content', 'กรุณาระบุสิทธิ์').popover('show');
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/approles/insertAppRole',
            data: JSON.stringify({
                roleCode: roleCode,
                roleName: roleName
            }),
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    if (data == 0) {
                        bootbox.alert("บันทึกข้อมูลสำเร็จ");
                        $('#mdAddRole').modal('hide');
                        loadAllAppRole();
                    } else {
                        bootbox.alert("ชื่อย่อนีี้มีอยู๋แล้ว");
                    }
                } else {
                    bootbox.alert("บันทึกข้อมูลไม่สำเร็จ");
                }
            },
            async: false
        });
    }
});

// Edit role -----------------------------------------------------------------------------------------------------------
$('#ResultAppRole').on('click', '[id^=btnEditRole_]', function () {
    var id = this.id.split('_')[1];
    openModalEditRole(id);
});
$('#btnCancelEdit').click(function () {
    $('#mdEditRole').modal('hide');
});
$('#btnSaveEditRole').click(function () {
    var roleId = $('#hiddenEditRoleId').val();
    var roleCode = $('#txtEditRoleCode').val();
    var roleName = $('#txtEditRoleName').val();

    if (roleCode == '') {
        $('#txtEditRoleCode').attr('data-content', 'กรุณาระบุชื่อย่อ').popover('show');
    } else if (roleName == '') {
        $('#txtEditRoleName').attr('data-content', 'กรุณาระบุสิทธิ์').popover('show');
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/approles/updateAppRole',
            data: JSON.stringify({
                roleId: roleId,
                roleCode: roleCode,
                roleName: roleName
            }),
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    if (data == 0) {
                        bootbox.alert("บันทึกข้อมูลสำเร็จ");
                        $('#mdEditRole').modal('hide');
                        loadAllAppRole();
                    } else {
                        bootbox.alert("ชื่อย่อนีี้มีอยู๋แล้ว");
                    }
                } else {
                    bootbox.alert("บันทึกข้อมูลไม่สำเร็จ");
                }
            },
            async: false
        });
    }
});

// Delete role ---------------------------------------------------------------------------------------------------------
$('#btnDeleteRole').click(function () {
    var arrRoleId = [];
    $('[id^=chkRole_]:checked').each(function () {
        arrRoleId.push(this.id.split('_')[1]);
    });

    if (arrRoleId.length > 0) {
        bootbox.confirm('คุณต้องการลบข้อมูลที่เลือกใช่หรือไม่', function (result) {
            if (result) {
                deleteRole(arrRoleId);
            }
        });
    } else {
        bootbox.alert("กรุณาเลือกข้อมูลที่ต้องการลบ");
    }
});

// Checkbox management -------------------------------------------------------------------------------------------------
$('#chkCheckAll').change(function () {
    $('[constraint]').prop('checked', false);

    var checked = $(this).prop('checked');
    var cbxChecked = $('[constraint=false]');
    var cbxAll = $('[constraint]');
    if (checked) {
        $('[constraint=false]').prop('checked', true);

        if (cbxChecked.length == cbxAll.length) {
            $(this).prop('checked', true);
        } else {
            $(this).prop('checked', false);
        }
    }
});
$('#ResultAppRole').on('change', '[constraint=true]', function () {
    bootbox.alert('ข้อมูลถูกใช้งานอยู่');
    $(this).prop('checked', false);
});
$('#ResultAppRole').on('change', '[constraint=false]', function () {
    var cbxChecked = $('[id^=chkRole_]:checked');
    var cbxAll = $('[id^=chkRole_]');

    if (cbxChecked.length == cbxAll.length)
        $('#chkCheckAll').prop('checked', true);
    else
        $('#chkCheckAll').prop('checked', false);
});

// ---------------------------------------------------------------------------------------------------------------------
pagginationAppRole.setEventPaggingBtn("paggingAppRole", pagginationAppRole);
pagginationAppRole.loadTable = function loadTable(jsonData) {
    if (jsonData.length <= 0)
        bootbox.alert("ไม่พบข้อมูล");

    $('#ResultAppRole').empty();
    jsonData.forEach(function (v) {
        $('#chkCheckAll').prop('checked', false);

        $('#ResultAppRole').append('<tr>' +
            '<td class="text-center">' +
            '<input type="checkbox" id="chkRole_' + v.id + '" constraint="' + v.constraint + '" />' +
            '</td>' +
            '<td class="text-center">' +
            '<button id="btnEditRole_' + v.id + '" type="button" class="btn btn-warning">แก้ไข</button>' +
            '</td>' +
            '<td>' + v.roleCode + '</td>' +
            '<td>' + v.roleName + '</td>' +
            '</tr>'
        );
    });

};

function loadAllAppRole() {
    pagginationAppRole.setOptionJsonData({
        url: contextPath + "/approles/findPaggingDataAppRole",
        data: {}
    });
    pagginationAppRole.setOptionJsonSize({
        url: contextPath + "/approles/findPaggingSizeAppRole",
        data: {}
    });
    pagginationAppRole.search(pagginationAppRole);
}

function openModalAddRole() {
    $('#txtAddRoleCode').val('');
    $('#txtAddRoleName').val('');
    $('#mdAddRole').modal({backdrop: 'static'});

    // focus 1st element
    setTimeout(function () {
        $('#txtAddRoleCode').focus();
    }, 200);
}
function openModalEditRole(roleId) {
    var role = null;
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        headers: {
            Accept: "application/json"
        },
        url: contextPath + '/approles/findRole?id=' + roleId,
        success: function (data, status, xhr) {
            role = data;
        },
        async: false
    });

    $('#hiddenEditRoleId').val(role.id);
    $('#txtEditRoleCode').val(role.roleCode);
    $('#txtEditRoleName').val(role.roleName);

    $('#mdEditRole').modal({backdrop: 'static'});

    // focus 1st element
    setTimeout(function () {
        $('#txtEditRoleCode').focus();
    }, 200);
}

function deleteRole(arrRoleId) {
    $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/approles/deleteAppRole',
            data: JSON.stringify(arrRoleId),
            success: function (data, status, xhr) {
                var notComplete = arrRoleId.length - data;
                var text = '';
                if (data > 0)
                    text = 'ลบข้อมูลสำเร็จ ' + data + ' รายการ';
                if (notComplete > 0)
                    text = '<br/>ลบข้อมูลไม่สำเร็จ ' + notComplete + ' รายการ';

                bootbox.alert(text);
                loadAllAppRole();
            },
            async: false
        }
    );
}