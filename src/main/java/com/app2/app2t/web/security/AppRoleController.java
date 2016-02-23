package com.app2.app2t.web.security;
import com.app2.app2t.domain.security.AppRole;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;

@RequestMapping("/approles")
@Controller
@RooWebScaffold(path = "approles", formBackingObject = AppRole.class)
@RooWebJson(jsonObject = AppRole.class)
public class AppRoleController {
}
