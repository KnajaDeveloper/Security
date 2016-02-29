package com.app2.app2t.domain.security;
import com.app2.app2t.base.BaseEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.roo.addon.json.RooJson;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(inheritanceType = "TABLE_PER_CLASS")
@RooJson
public class AppMenu extends BaseEntity {

    /**
     */
    private String link;

    /**
     */
    private String controller;

    /**
     */
    private Integer menuLevel;

    /**
     * front end use "sequent"
     */
    private Integer segment;

    /**
     */
    private Long parent;

    /**
     */
    private String menu_t_name;

    /**
     */
    private String menu_e_name;
}
