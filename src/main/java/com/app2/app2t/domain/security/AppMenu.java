package com.app2.app2t.domain.security;
import com.app2.app2t.base.BaseEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.roo.addon.json.RooJson;

import javax.validation.constraints.Digits;
import javax.validation.constraints.Size;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(inheritanceType = "TABLE_PER_CLASS")
@RooJson
public class AppMenu extends BaseEntity {

    /**
     */
    @Size(max = 100)
    private String link;

    /**
     */
    @Size(max = 100)
    private String controller;

    /**
     */
    @Digits(integer= 3, fraction = 0)
    private Integer menuLevel;

    /**
     * front end use "sequent"
     */
    @Digits(integer= 3, fraction = 0)
    private Integer segment;

    /**
     */
    @Digits(integer= 10, fraction = 0)
    private Long parent;

    /**
     */
    @Size(max = 40)
    private String menu_t_name;

    /**
     */
    @Size(max = 40)
    private String menu_e_name;

    /**
     */
    @Size(max = 40)
    private String menuIcon;
}
