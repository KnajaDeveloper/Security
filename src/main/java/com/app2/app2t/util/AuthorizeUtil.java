package com.app2.app2t.util;

// import com.google.gson.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;

import java.io.Serializable;
import java.util.*;

@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class AuthorizeUtil implements Serializable{

    private Logger LOGGER = LoggerFactory.getLogger(AuthorizeUtil.class);

    private Map<String,String> userData = new HashMap<>();
    private String userName = "";

    public String getUserName(){
        return this.userName;
    }

    public void setUserName(String userName) {
    	this.userName = userName;
    }
    
}