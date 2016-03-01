var _language = commonData.language;

$(document).ready(function () {
    loadAllMenuLevel_0();
    loadAllMenuLevel_1();
    loadAllMenuLevel_2();
});

// Add menu ------------------------------------------------------------------------------------------------------------
$('#btnAddMenuLv0').click(function () {
    $('#mdAddMenu').attr('level', 0);
    openModalAddMenu(0);
});
$('#btnAddMenuLv1').click(function () {
    $('#mdAddMenu').attr('level', 1);
    openModalAddMenu(1);
});
$('#btnAddMenuLv2').click(function () {
    $('#mdAddMenu').attr('level', 2);
    openModalAddMenu(2);
});

$('#btnCancelAdd').click(function () {
    $('#mdAddMenu').modal('hide');
});
$('#btnSaveAddMenu').click(function () {
    var link = $('#txtAddLink').val();
    var menuTh = $('#txtAddMenuTh').val();
    var menuEn = $('#txtAddMenuEn').val();
    var controller = $('#txtAddController').val();
    var menuLv = $('#mdAddMenu').attr('level');
    var sequent = $('#txtAddSequent').val();
    var parent = $('#ddlAddParent').val();
    var arrRoleId = [];
    $('[id^=chkAddRole_]:checked').each(function () {
        var id = this.id.split('_')[1];
        arrRoleId.push(id);
    });

    if (link == '') {
        $('#txtAddLink').popover('show');
    } else if (menuTh == '') {
        $('#txtAddMenuTh').popover('show');
    } else if (menuEn == '') {
        $('#txtAddMenuEn').popover('show');
    } else if (controller == '') {
        $('#txtAddController').popover('show');
    } else if (sequent == '') {
        $('#txtAddSequent').attr('data-content', 'กรุณาระบลำดับ').popover('show');
    } else if (!$.isNumeric(sequent) || sequent.indexOf('.') >= 0 || sequent < 1) {
        $('#txtAddSequent').attr('data-content', 'กรุณาระบุตัวเลขที่มากกว่าหรือเท่ากับ 1').popover('show');
    } else if (menuLv > 0 && parent == 0) {
        $('#ddlAddParent').attr('data-content', 'กรุณาระบุเมนูแม่').popover('show');
    } else if (arrRoleId.length == 0) {
        bootbox.alert('กรุณาระบุสิทธิ์');
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/appmenus/insertAppMenu',
            data: JSON.stringify({
                link: link,
                menuTh: menuTh,
                menuEn: menuEn,
                controller: controller,
                level: menuLv,
                sequent: sequent,
                parent: parent,
                arrRoleId: arrRoleId
            }),
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    if (data.rowCountSameLink > 0) {
                        $('#txtAddLink').attr('data-content', 'ลิงค์นี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameController > 0) {
                        $('#txtAddController').attr('data-content', 'คอนโทรเลอร์นี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameSequent > 0) {
                        $('#txtAddSequent').attr('data-content', 'ลำดับนี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameLink == 0 && data.rowCountSameController == 0 && data.rowCountSameSequent == 0) {
                        bootbox.alert("บันทึกข้อมูลสำเร็จ");
                        $('#mdAddMenu').modal('hide');

                        if (menuLv == 0) {
                            loadAllMenuLevel_0();
                        } else if (menuLv == 1) {
                            loadAllMenuLevel_1();
                        } else if (menuLv == 2) {
                            loadAllMenuLevel_2();
                        }
                    }
                } else {
                    bootbox.alert("บันทึกข้อมูลไม่สำเร็จ");
                }
            },
            async: false
        });
    }
});

// Edit menu -----------------------------------------------------------------------------------------------------------
$('#tbAppMenuLv0').on('click', '[id^=btnEditMenu_]', function () {
    var id = this.id.split('_')[1];
    $('#mdEditMenu').attr('level', 0);
    openModalEditMenu(id, 0);
});
$('#tbAppMenuLv1').on('click', '[id^=btnEditMenu_]', function () {
    var id = this.id.split('_')[1];
    $('#mdEditMenu').attr('level', 1);
    openModalEditMenu(id, 1);
});
$('#tbAppMenuLv2').on('click', '[id^=btnEditMenu_]', function () {
    var id = this.id.split('_')[1];
    $('#mdEditMenu').attr('level', 2);
    openModalEditMenu(id, 2);
});

$('#btnCancelEdit').click(function () {
    $('#mdEditMenu').modal('hide');
});
$('#btnSaveEditMenu').click(function () {
    var id = $('#hiddenEditMenuId').val();
    var link = $('#txtEditLink').val();
    var menuTh = $('#txtEditMenuTh').val();
    var menuEn = $('#txtEditMenuEn').val();
    var controller = $('#txtEditController').val();
    var menuLv = $('#mdEditMenu').attr('level');
    var sequent = $('#txtEditSequent').val();
    var parent = $('#ddlEditParent').val();
    var roles = [];
    $('[id^=chkEditRole_]').each(function () {
        var id = this.id.split('_')[1];
        roles.push({
            roleId: id,
            used: $(this).prop('checked')
        });
    });

    if (link == '') {
        $('#txtEditLink').popover('show');
    } else if (menuTh == '') {
        $('#txtEditMenuTh').popover('show');
    } else if (menuEn == '') {
        $('#txtEditMenuEn').popover('show');
    } else if (controller == '') {
        $('#txtEditController').popover('show');
    } else if (sequent == '') {
        $('#txtEditSequent').attr('data-content', 'กรุณาระบลำดับ').popover('show');
    } else if (!$.isNumeric(sequent) || sequent.indexOf('.') >= 0 || sequent < 1) {
        $('#txtEditSequent').attr('data-content', 'กรุณาระบุตัวเลขที่มากกว่าหรือเท่ากับ 1').popover('show');
    } else if (menuLv > 0 && parent == 0) {
        $('#ddlEditParent').attr('data-content', 'กรุณาระบุเมนูแม่').popover('show');
    } else if ($('[id^=chkEditRole_]:checked').length == 0) {
        bootbox.alert('กรุณาระบุสิทธิ์');
    } else {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/appmenus/updateAppMenu',
            data: JSON.stringify({
                    menuId: id,
                    link: link,
                    menuTh: menuTh,
                    menuEn: menuEn,
                    controller: controller,
                    level: menuLv,
                    sequent: sequent,
                    parent: parent,
                    roles: roles
                }
            ),
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    if (data.rowCountSameLink > 0) {
                        $('#txtEditLink').attr('data-content', 'ลิงค์นี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameController > 0) {
                        $('#txtEditController').attr('data-content', 'คอนโทรเลอร์นี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameSequent > 0) {
                        $('#txtEditSequent').attr('data-content', 'ลำดับนี้มีอยู่แล้ว').popover('show');
                    }
                    if (data.rowCountSameLink == 0 && data.rowCountSameController == 0 && data.rowCountSameSequent == 0) {
                        bootbox.alert("บันทึกข้อมูลสำเร็จ");
                        $('#mdEditMenu').modal('hide');

                        if (menuLv == 0) {
                            loadAllMenuLevel_0();
                        } else if (menuLv == 1) {
                            loadAllMenuLevel_1();
                        } else if (menuLv == 2) {
                            loadAllMenuLevel_2();
                        }
                    }
                } else {
                    bootbox.alert("บันทึกข้อมูลไม่สำเร็จ");
                }
            }
            ,
            async: false
        });
    }
});

// Delete menu ---------------------------------------------------------------------------------------------------------
$('#btnDeleteMenuLv0').click(function () {
    var arrMenuId = [];
    $('[id^=chkMenuLv0_]:checked').each(function () {
        arrMenuId.push(this.id.split('_')[1]);
    });

    if (arrMenuId.length > 0) {
        bootbox.confirm('คุณต้องการลบข้อมูลที่เลือกใช่หรือไม่', function (result) {
            if (result) {
                deleteMenu(arrMenuId, 0);
            }
        });
    } else {
        bootbox.alert("กรุณาเลือกข้อมูลที่ต้องการลบ");
    }
});
$('#btnDeleteMenuLv1').click(function () {
    var arrMenuId = [];
    $('[id^=chkMenuLv1_]:checked').each(function () {
        arrMenuId.push(this.id.split('_')[1]);
    });

    if (arrMenuId.length > 0) {
        bootbox.confirm('คุณต้องการลบข้อมูลที่เลือกใช่หรือไม่', function (result) {
            if (result) {
                deleteMenu(arrMenuId, 1);
            }
        });
    } else {
        bootbox.alert("กรุณาเลือกข้อมูลที่ต้องการลบ");
    }
});
$('#btnDeleteMenuLv2').click(function () {
    var arrMenuId = [];
    $('[id^=chkMenuLv2_]:checked').each(function () {
        arrMenuId.push(this.id.split('_')[1]);
    });

    if (arrMenuId.length > 0) {
        bootbox.confirm('คุณต้องการลบข้อมูลที่เลือกใช่หรือไม่', function (result) {
            if (result) {
                deleteMenu(arrMenuId,2);
            }
        });
    } else {
        bootbox.alert("กรุณาเลือกข้อมูลที่ต้องการลบ");
    }
});

// Checkbox management -------------------------------------------------------------------------------------------------
$('#chkCheckAllLv0').change(function () {
    var isCheckAll = $('#chkCheckAllLv0').prop('checked');
    $('[id^=chkMenuLv0_]').prop('checked', isCheckAll);
});
$('#chkCheckAllLv1').change(function () {
    var isCheckAll = $('#chkCheckAllLv1').prop('checked');
    $('[id^=chkMenuLv1_]').prop('checked', isCheckAll);
});
$('#chkCheckAllLv2').change(function () {
    var isCheckAll = $('#chkCheckAllLv2').prop('checked');
    $('[id^=chkMenuLv2_]').prop('checked', isCheckAll);
});

$('#tbAppMenuLv0').on('change', '[id^=chkMenuLv0_]', function () {
    var chkChecked = $('[id^=chkMenuLv0_]:checked');
    var chkAll = $('[id^=chkMenuLv0_]');

    if (chkChecked.length == chkAll.length) {
        $('#chkCheckAllLv0').prop('checked', true);
    } else {
        $('#chkCheckAllLv0').prop('checked', false);
    }
});
$('#tbAppMenuLv1').on('change', '[id^=chkMenuLv1_]', function () {
    var chkChecked = $('[id^=chkMenuLv1_]:checked');
    var chkAll = $('[id^=chkMenuLv1_]');

    if (chkChecked.length == chkAll.length) {
        $('#chkCheckAllLv1').prop('checked', true);
    } else {
        $('#chkCheckAllLv1').prop('checked', false);
    }
});
$('#tbAppMenuLv2').on('change', '[id^=chkMenuLv2_]', function () {
    var chkChecked = $('[id^=chkMenuLv2_]:checked');
    var chkAll = $('[id^=chkMenuLv2_]');

    if (chkChecked.length == chkAll.length) {
        $('#chkCheckAllLv2').prop('checked', true);
    } else {
        $('#chkCheckAllLv2').prop('checked', false);
    }
});

// ---------------------------------------------------------------------------------------------------------------------
function loadMenuParent(idDDLParent, lvlMenuParent) {
    if (lvlMenuParent >= 0) {
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/appmenus/findMenuParent?level=' + lvlMenuParent,
            success: function (data, status, xhr) {
                if (xhr.status === 200) {
                    $('#' + idDDLParent).children('[value!=0]').remove();
                    $.each(data, function (k, v) {
                        var parentName = '';
                        if (_language == 'TH') {
                            parentName = v.menu_th;
                        } else {
                            parentName = v.menu_en;
                        }
                        $('#' + idDDLParent).append('<option value="' + v.id + '">' + parentName + '</option>');
                    });
                }
            },
            async: false
        });
    } else {
        $('#' + idDDLParent).children('[value!=0]').remove();
    }

}
function loadAllRole(idGroupRule, idCheckboxBase) {
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        headers: {
            Accept: "application/json"
        },
        url: contextPath + '/appmenus/findAllRole',
        success: function (data, status, xhr) {
            if (xhr.status === 200) {
                $('#' + idGroupRule).empty();
                $.each(data, function (k, v) {
                    $('#' + idGroupRule).append('<div class="row checkbox">' +
                        '<label class="col-sm-12">' +
                        '<input id="' + idCheckboxBase + v.id + '" type="checkbox" />' + v.roleName +
                        '</label>' +
                        '</div>');
                });
            }
        },
        async: false
    });
}

function openModalAddMenu(menuLevel) {
    $('#txtAddLink').val('');
    $('#txtAddMenuTh').val('');
    $('#txtAddMenuEn').val('');
    $('#txtAddController').val('');
    $('#txtAddSequent').val('');

    if (menuLevel == 0) {
        $('#ddlAddParent').parent().parent().hide();
    } else {
        $('#ddlAddParent').parent().parent().show();
    }
    loadMenuParent('ddlAddParent', menuLevel - 1);

    loadAllRole('grpAddRule', 'chkAddRole_');
    $('#mdAddMenu').modal({backdrop: 'static'});

    // focus 1st element
    setTimeout(function () {
        $('#txtAddLink').focus();
    }, 500);
}
function openModalEditMenu(menuId, menuLevel) {

    loadMenuParent('ddlEditParent', menuLevel - 1);
    loadAllRole('grpEditRule', 'chkEditRole_');

    if (menuLevel == 0) {
        $('#ddlEditParent').parent().parent().hide();
    } else {
        $('#ddlEditParent').parent().parent().show();
    }

    var menu = null;
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        headers: {
            Accept: "application/json"
        },
        url: contextPath + '/appmenus/findMenu?id=' + menuId,
        success: function (data, status, xhr) {
            menu = data;
        },
        async: false
    });

    $('#hiddenEditMenuId').val(menu.id);
    $('#txtEditLink').val(menu.link);
    $('#txtEditMenuTh').val(menu.menu_t_name);
    $('#txtEditMenuEn').val(menu.menu_e_name);
    $('#txtEditController').val(menu.controller);
    $('#txtEditSequent').val(menu.sequent);
    $('#ddlEditParent').val(menu.parent);
    $('[id^=chkEditRole_]').prop('checked', false);                     // clear check
    menu.role.forEach(function (roleId) {                               // loop add check
        $('[id^=chkEditRole_' + roleId + ']').prop('checked', true);
    });

    $('#mdEditMenu').modal({backdrop: 'static'});

    // focus 1st element
    setTimeout(function () {
        $('#txtEditLink').focus();
    }, 200);
}

function deleteMenu(arrMenuId, menuLv) {
    $.ajax({
            type: "POST",
            contentType: "application/json; charset=UTF-8",
            dataType: "json",
            headers: {
                Accept: "application/json"
            },
            url: contextPath + '/appmenus/deleteAppMenu',
            data: JSON.stringify(arrMenuId),
            success: function (data, status, xhr) {
                var notComplete = arrMenuId.length - data;
                var text = '';
                if (data > 0)
                    text = 'ลบข้อมูลสำเร็จ ' + data + ' รายการ';
                if (notComplete > 0)
                    text = '<br/>ลบข้อมูลไม่สำเร็จ ' + notComplete + ' รายการ';

                bootbox.alert(text);

                if (menuLv == 0) {
                    loadAllMenuLevel_0();
                } else if (menuLv == 1) {
                    loadAllMenuLevel_1();
                } else if (menuLv == 2) {
                    loadAllMenuLevel_2();
                }
            },
            async: false
        }
    );
}



