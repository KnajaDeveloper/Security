// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.app2.app2t.domain.security;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

privileged aspect AppRole_Custom_Jpa_ActiveRecord {

    @Transactional
    public static List<AppRole> AppRole.findNameApprole() {
        EntityManager ent = AppRole.entityManager();
        Criteria criteria = ((Session) ent.getDelegate()).createCriteria(AppRole.class);

        try {
            List<AppRole> appRoles = criteria.list();
            AppRole appRole = appRoles.get(0);
            System.out.print(appRoles.get(0));
        } catch (IndexOutOfBoundsException e) {

            return criteria.list();
        }
        return criteria.list();
    }
    
}
