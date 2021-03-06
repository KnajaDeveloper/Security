package com.app2.app2t.domain.security;
import com.app2.app2t.base.BaseEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.jpa.activerecord.RooJpaActiveRecord;
import org.springframework.roo.addon.tostring.RooToString;
import org.springframework.roo.addon.json.RooJson;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@RooJavaBean
@RooToString
@RooJpaActiveRecord(inheritanceType = "TABLE_PER_CLASS")
@RooJson
public class AppRole extends BaseEntity {

    /**
     */
    @NotNull
    @Column(unique = true)
    @Size(max = 255)
    private String roleName;

    /**
     */
    @NotNull
    @Column(unique = true)
    @Size(max = 255)
    private String roleCode;
}
