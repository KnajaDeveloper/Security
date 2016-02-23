// WARNING: DO NOT EDIT THIS FILE. THIS FILE IS MANAGED BY SPRING ROO.
// You may push code into the target .java compilation unit if you wish to edit any member(s).

package com.app2.app2t.domain.security;

import com.app2.app2t.domain.security.AppRole;
import java.util.List;
import org.springframework.transaction.annotation.Transactional;

privileged aspect AppRole_Roo_Jpa_ActiveRecord {
    
    public static final List<String> AppRole.fieldNames4OrderClauseFilter = java.util.Arrays.asList("RoleName");
    
    public static long AppRole.countAppRoles() {
        return entityManager().createQuery("SELECT COUNT(o) FROM AppRole o", Long.class).getSingleResult();
    }
    
    public static List<AppRole> AppRole.findAllAppRoles() {
        return entityManager().createQuery("SELECT o FROM AppRole o", AppRole.class).getResultList();
    }
    
    public static List<AppRole> AppRole.findAllAppRoles(String sortFieldName, String sortOrder) {
        String jpaQuery = "SELECT o FROM AppRole o";
        if (fieldNames4OrderClauseFilter.contains(sortFieldName)) {
            jpaQuery = jpaQuery + " ORDER BY " + sortFieldName;
            if ("ASC".equalsIgnoreCase(sortOrder) || "DESC".equalsIgnoreCase(sortOrder)) {
                jpaQuery = jpaQuery + " " + sortOrder;
            }
        }
        return entityManager().createQuery(jpaQuery, AppRole.class).getResultList();
    }
    
    public static AppRole AppRole.findAppRole(Long id) {
        if (id == null) return null;
        return entityManager().find(AppRole.class, id);
    }
    
    public static List<AppRole> AppRole.findAppRoleEntries(int firstResult, int maxResults) {
        return entityManager().createQuery("SELECT o FROM AppRole o", AppRole.class).setFirstResult(firstResult).setMaxResults(maxResults).getResultList();
    }
    
    public static List<AppRole> AppRole.findAppRoleEntries(int firstResult, int maxResults, String sortFieldName, String sortOrder) {
        String jpaQuery = "SELECT o FROM AppRole o";
        if (fieldNames4OrderClauseFilter.contains(sortFieldName)) {
            jpaQuery = jpaQuery + " ORDER BY " + sortFieldName;
            if ("ASC".equalsIgnoreCase(sortOrder) || "DESC".equalsIgnoreCase(sortOrder)) {
                jpaQuery = jpaQuery + " " + sortOrder;
            }
        }
        return entityManager().createQuery(jpaQuery, AppRole.class).setFirstResult(firstResult).setMaxResults(maxResults).getResultList();
    }
    
    @Transactional
    public AppRole AppRole.merge() {
        if (this.entityManager == null) this.entityManager = entityManager();
        AppRole merged = this.entityManager.merge(this);
        this.entityManager.flush();
        return merged;
    }
    
}
