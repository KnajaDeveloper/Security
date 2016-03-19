var _language = commonData.language;
var pagginationAppRole = $.extend({}, UtilPaggination);

$(document).ready(function () {
    loadAllAppRole();
});

// Add-Edit Role management ------------------------------------------------------------------------------------------------------------
$('#btnAddRole').click(function () {
    openModalAddRole();
});

$('#ResultAppRole').on('click', '[name=btnEditRole]', function () {
    var roleId = $(this).attr('roleId');
    var roleCode = $(this).parent().parent().children()[2].innerHTML;
    var roleName = $(this).parent().parent().children()[3].innerHTML;
    openModalEditRole(roleId, roleCode, roleName);
});

$('#btnCancel').click(function () {
    $('#modalRole').modal('hide');
});

$('#btnSaveRole').click(function() {
    var mode = $('#modalRole').attr('mode');
    var roleId = $('#modalRole').attr('roleId');
    var roleCodeOld = $('#modalRole').attr('roleCode');
    var roleNameOld = $('#modalRole').attr('roleName');

    var roleCode = $('#txtRoleCode').val();
    var roleName = $('#txtRoleName').val();

    if (roleCode == '') {
        $('#txtRoleCode').attr('data-content', MESSAGE.COMPLETE_FIELD).popover('show');
    } else if (roleName == '') {
        $('#txtRoleName').attr('data-content', MESSAGE.COMPLETE_FIELD).popover('show');
    } else {
        if(mode == 'add') {
            saveAddRole(roleCode, roleName);
        } else if(mode == 'edit') {
            if(roleCode == roleCodeOld && roleName == roleNameOld) {
                bootbox.alert(MESSAGE.ALERT_NO_CHANGE);
            } else {
                saveEditRole(roleId, roleCode, roleName);    
            }
        } else {
            console.log('mode = ' + mode);
        }
    }
});

// Delete role ---------------------------------------------------------------------------------------------------------
$('#btnDeleteRole').click(function () {
    var arrRoleId = [];

    $('[name=chkRole]:checked').each(function () {
        arrRoleId.push($(this).attr('roleId'));
    });

    if (arrRoleId.length > 0) {
        bootbox.confirm(MESSAGE.ALERT_CONFIRM_DELETE, function (result) {
            if (result) {
                deleteRole(arrRoleId);
            }
        });
    } else {
        bootbox.alert(MESSAGE.ALERT_SELECT_ROW);
    }
});

// Checkbox management -------------------------------------------------------------------------------------------------
$('#chkCheckAll').change(function () {
    if($(this).prop('checked'))
        $('[constraint=false]').prop('checked', true);
    else
        $('[constraint]').prop('checked', false);
});
$('#ResultAppRole').on('change', '[constraint=true]', function () {
    bootbox.alert(MESSAGE.ALERT_DATA_IN_USED);
    $(this).prop('checked', false);
});
$('#ResultAppRole').on('change', '[constraint=false]', function () {
    var cbxChecked = $('[name=chkRole]:checked');
    var cbxAllowCheck = $('[constraint=false]');

    if (cbxChecked.length == cbxAllowCheck.length)
        $('#chkCheckAll').prop('checked', true);
    else
        $('#chkCheckAll').prop('checked', false);
});

// ---------------------------------------------------------------------------------------------------------------------
pagginationAppRole.setEventPaggingBtn("paggingAppRole", pagginationAppRole);
pagginationAppRole.loadTable = function loadTable(jsonData) {
    $('#ResultAppRole').empty();

    if (jsonData.length <= 0) {
        $('#ResultAppRole').append('<tr><td class="text-center" colspan="8">' + LABEL.NO_RESULT + '</td></tr>');
    } else {
        $('#ResultAppRole').empty();
        jsonData.forEach(function (v) {
            $('#chkCheckAll').prop('checked', false);

            $('#ResultAppRole').append('<tr>' +
                '<td class="text-center">' +
                '<input type="checkbox" name="chkRole" roleId="'+v.id+'" constraint="' + v.constraint + '" />' +
                '</td>' +
                '<td class="text-center">' +
                '<button name="btnEditRole" roleId="' + v.id + '" type="button" class="btn btn-xs btn-info"><span class="glyphicon glyphicon-pencil"><span/></button>' +
                '</td>' +
                '<td>' + v.roleCode + '</td>' +
                '<td>' + v.roleName + '</td>' +
                '</tr>'
            );
        });
    }
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
    $('#txtRoleCode').val('');
    $('#txtRoleName').val('');

    $('#modalRole').attr('mode', 'add');
    $('#modalRole').attr('roleId', '');

    $('#modalRole').modal({backdrop: 'static'});

    focus1stElement('txtRoleCode');
}

function openModalEditRole(roleId, roleCode, roleName) {    
    $('#txtRoleCode').val(roleCode);
    $('#txtRoleName').val(roleName);

    $('#modalRole').attr('mode', 'edit');
    $('#modalRole').attr('roleId', roleId);
    $('#modalRole').attr('roleCode', roleCode);
    $('#modalRole').attr('roleName', roleName);

    $('#modalRole').modal({backdrop: 'static'});

    focus1stElement('txtRoleCode');
}

function saveAddRole(roleCode, roleName) {
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
                    bootbox.alert(MESSAGE.ALERT_SAVE_COMPLETED);
                    $('#modalRole').modal('hide');
                    loadAllAppRole();
                } else {
                    bootbox.alert(MESSAGE.ALERT_DUPLICATE_ROLE_CODE);
                }
            } else {
                bootbox.alert(MESSAGE.ALERT_SAVE_FAILED);
            }
        },
        async: false
    });
}

function saveEditRole(roleId, roleCode, roleName) {
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
            if (xhr.status == 200) {
                if (data == 0) {
                    bootbox.alert(MESSAGE.ALERT_SAVE_COMPLETED);
                    $('#modalRole').modal('hide');
                    loadAllAppRole();
                } else {
                    bootbox.alert(MESSAGE.ALERT_DUPLICATE_ROLE_CODE);
                }
            } else {
                bootbox.alert(MESSAGE.ALERT_SAVE_FAILED);
            }
        },
        async: false
    });
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
                    text = MESSAGE.ALERT_DELETE_COMPLETED + data + MESSAGE.ALERT_RECORD;
                if (notComplete > 0)
                    text = '<br/>'+ MESSAGE.ALERT_DELETE_FAILED + notComplete + MESSAGE.ALERT_RECORD;

                bootbox.alert(text);
                loadAllAppRole();
            },
            async: false
        }
    );
}

function focus1stElement(elementId) {
    setTimeout(function () {
        $('#' + elementId).focus();
    }, 200);
}