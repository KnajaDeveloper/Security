package com.app2.app2t.web.security;

import com.app2.app2t.domain.security.AppRole;
import com.app2.app2t.web.security.AppRoleController;
import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

privileged aspect LoginController_Custom_Controller_Json {

    @RequestMapping(value = "/setSessionLogin" , headers = "Accept=application/json", method = RequestMethod.GET)
    public ResponseEntity<String> LoginController.setSessionLogin(
        @RequestParam(value = "userName", required = true) String userName
        ,HttpServletRequest request
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json;charset=UTF-8" );
        try {
            // HttpSession session = request.getSession();
            LOGGER.debug("authorizeUtil {}",authorizeUtil);
            authorizeUtil.setUserName(userName);
            // LOGGER.debug("request {} ",request);
            // LOGGER.debug("session {} ",session);
            // LOGGER.debug("userName {}",userName);
            // session.setAttribute("userName",userName);
            // LOGGER.debug("getuserName {}",session.getAttribute("userName"));
            return new ResponseEntity<String>("",headers, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return new ResponseEntity<String>("{\"ERROR\":" + e.getMessage() + "\"}", headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/getUserName" , headers = "Accept=application/json", method = RequestMethod.GET)
    public ResponseEntity<String> LoginController.getUserName(HttpServletRequest request) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json;charset=UTF-8" );
        try {
            // LOGGER.debug("request {} ",request);
            // HttpSession session = request.getSession();
            // LOGGER.debug("session {} ",session);
            // String userName = (String)session.getAttribute("userName");
            LOGGER.debug("authorizeUtil {}",authorizeUtil);
            String userName = authorizeUtil.getUserName();
            // LOGGER.debug("userName {}",userName);
            // String userName = (String)request.getAttribute("userName");
            return new ResponseEntity<String>(userName,headers, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return new ResponseEntity<String>("{\"ERROR\":" + e.getMessage() + "\"}", headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(value = "/checkLogin" , headers = "Accept=application/json", method = RequestMethod.POST)
    public ResponseEntity<String> LoginController.checkLogin(
        @RequestParam(value = "userName", required = true) String userName
        ,HttpServletRequest request
    ) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json;charset=UTF-8" );
        try {
            securityRestService.setUsername(userName);
            return new ResponseEntity<String>("",headers, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
            return new ResponseEntity<String>("{\"ERROR\":" + e.getMessage() + "\"}", headers, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }   
}
