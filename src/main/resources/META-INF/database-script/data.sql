-- APP_ROLE
INSERT INTO "APP2"."APP_ROLE" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,ROLE_CODE,ROLE_NAME) VALUES (100001,null,null,null,null,null,2,'ADMIN','Administrator');
INSERT INTO "APP2"."APP_ROLE" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,ROLE_CODE,ROLE_NAME) VALUES (100002,null,null,null,null,null,0,'USER','User');

-- -- APP_MENU
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100001,null,null,null,null,null,0,'System Management Controller','System Management Link','fa-desktop',0,'System Management','จัดการระบบ',0,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100002,null,null,null,null,null,1,'Employees Controller','Employees Link','fa-user',0,'Employees','พนักงาน',0,2);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100003,null,null,null,null,null,0,'Projects Controller','Projects Link','fa-github-square',0,'Projects','โปรเจค',0,3);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100004,null,null,null,null,null,0,'Plan Controller','Plan Link','fa-calendar',0,'Plan','แผนงาน',0,4);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100005,null,null,null,null,null,0,'com.app2.app2t.web.security.AppMenuController','/APP2_Security/appmenus/appMenuView','',1,'Menu Management','จัดการเมนู',100001,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100006,null,null,null,null,null,0,'com.app2.app2t.web.em.EMEmployeeController.editEmployee','/APP2_EM/ememployees/editEmployee','',1,'Employees Management','จัดการข้อมูลพนักงาน',100002,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100007,null,null,null,null,null,0,'com.app2.app2t.web.em.EMTeamController.addTheam','/APP2_EM/emteams/addTeam','',1,'Team','ทีม',100002,2);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100008,null,null,null,null,null,0,'com.app2.app2t.web.em.EMPositionController.addPosition','/APP2_EM/empositions/addPosition','',1,'Position','ตำแหน่ง',100002,3);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100009,null,null,null,null,null,1,'com.app2.app2t.web.pjm.ProjectController.typetask','/APP2_PJM/projects/searchproject','',1,'Project Management','จัดการโปรเจค',100003,2);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100010,null,null,null,null,null,0,'com.app2.app2t.web.pjm.TypeTaskController.typetask','/APP2_PJM/typetasks/typetask','',1,'Task Type','ประเภทงาน',100003,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100011,null,null,null,null,null,0,'com.app2.app2t.web.pjm.PlanController.plancalendar','/APP2_PJM/plans/plancalendar','',1,'Create Plan','วางแผนงาน',100004,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100012,null,null,null,null,null,0,'com.app2.app2t.web.pjm.PlanController.planviews','/APP2_PJM/plans/planviews','',1,'View Plan','เรียกดูแผนงาน',100004,2);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100013,null,null,null,null,null,0,'Report Controller','Report Link','fa-print',0,'Report','รายงาน',0,5);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100014,null,null,null,null,null,0,'com.app2.app2t.web.report.ReportController.PJMRP01','/APP2_PJM/reports/PJMRP01','',1,'Work Summary Report','รายงานสรุปผลการทำงาน',100013,1);
INSERT INTO "APP2"."APP_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,CONTROLLER,LINK,MENU_ICON,MENU_LEVEL,MENU_E_NAME,MENU_T_NAME,PARENT,SEGMENT) VALUES (100015,null,null,null,null,null,0,'com.app2.app2t.web.report.ReportController.PJMRP02','/APP2_PJM/reports/PJMRP02','',1,'Project Summary Report','รายงานสรุปงานโปรเจค',100013,2);

-- -- APP_ROLE_MENU
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100001,null,null,null,null,null,0,100001,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100002,null,null,null,null,null,0,100002,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100003,null,null,null,null,null,0,100003,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100004,null,null,null,null,null,0,100003,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100005,null,null,null,null,null,0,100004,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100006,null,null,null,null,null,0,100004,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100007,null,null,null,null,null,0,100005,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100008,null,null,null,null,null,0,100006,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100009,null,null,null,null,null,0,100007,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100010,null,null,null,null,null,0,100008,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100011,null,null,null,null,null,0,100009,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100012,null,null,null,null,null,0,100009,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100013,null,null,null,null,null,0,100010,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100014,null,null,null,null,null,0,100011,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100015,null,null,null,null,null,0,100011,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100016,null,null,null,null,null,0,100012,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100017,null,null,null,null,null,0,100012,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100018,null,null,null,null,null,0,100013,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100019,null,null,null,null,null,0,100013,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100020,null,null,null,null,null,0,100014,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100021,null,null,null,null,null,0,100014,100002);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100022,null,null,null,null,null,0,100015,100001);
INSERT INTO "APP2"."APP_ROLE_MENU" (ID,CREATED_BY,CREATED_DATE,STATUS,UPDATED_BY,UPDATED_DATE,VERSION,APP_MENU,APP_ROLE) VALUES (100023,null,null,null,null,null,0,100015,100002);