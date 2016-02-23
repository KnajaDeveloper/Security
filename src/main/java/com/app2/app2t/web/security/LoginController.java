package com.app2.app2t.web.security;

import com.app2.app2t.domain.security.AppRole;
import org.springframework.roo.addon.web.mvc.controller.scaffold.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.roo.addon.web.mvc.controller.json.RooWebJson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import com.app2.app2t.util.AuthorizeUtil;
import com.app2.app2t.service.SecurityRestService;

@RequestMapping("/login")
@Controller
public class LoginController {
	private Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	AuthorizeUtil authorizeUtil;

	@Autowired
	SecurityRestService securityRestService;
}
