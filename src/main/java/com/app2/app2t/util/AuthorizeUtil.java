// package com.app2.app2t.util;

// import com.google.gson.*;
// import com.spt.hrms.model.Ou;
// import com.spt.hrms.security.AppRoleMenu;
// import com.spt.hrms.security.AppUserRole;
// import com.spt.hrms.security.AppUserTransaction;
// import com.spt.hrms.service.AbstractHRMSService;
// import org.json.JSONArray;
// import org.json.JSONException;
// import org.json.JSONObject;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.context.annotation.Scope;
// import org.springframework.context.annotation.ScopedProxyMode;
// import org.springframework.http.*;
// import org.springframework.security.authentication.AnonymousAuthenticationToken;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.client.RestTemplate;
// import org.hibernate.Criteria;
// import org.hibernate.Session;
// import org.hibernate.criterion.Criterion;
// import org.hibernate.criterion.ProjectionList;
// import org.hibernate.criterion.Projections;
// import org.hibernate.criterion.Restrictions;
// import org.hibernate.transform.Transformers;
// import org.json.*;

// import java.io.Serializable;
// import java.util.*;

// @Component
// @Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
// public class AuthorizeUtil{

//     private static Logger LOGGER = LoggerFactory.getLogger(AuthorizeUtil.class);

//     private static String ouCode;
//     private static String userName;

//     private static RestTemplate restTemplate = new RestTemplate();
//     private static Map<String, Object> mapUserNameAndOuCode = new HashMap<>();

//     public AuthorizeUtil() {

//     }

//     public static String getOuCode() {
//         try {
//             if (!(getAuthentication() instanceof AnonymousAuthenticationToken)) {
// //				if (mapUserNameAndOuCode.get(getUserName()) != null) {
// //					setOuCode(mapUserNameAndOuCode.get(getUserName()).toString());
// //				}else{
//                 AppUserTransaction appUserTransaction = getAppUserTransaction(null);
//                 if (appUserTransaction != null) {
//                     setOuCode(appUserTransaction.getOuCode());
//                     mapUserNameAndOuCode.put(getUserName(), ouCode);
//                 }
// //				}
//             }
//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }
//         return ouCode;
//     }

//     public static void setOuCode(String ou) {
//         ouCode = ou;
//     }

//     public static List<Ou> getOuMenu(List<Ou> list) {
//         List<Ou> ouList = list;
//         List<Ou> ouListForSend = new ArrayList<Ou>();
//         Map<String, Object> map = getAllOuWithUser();
//         for (Ou ou : ouList) {
//             if (map.containsKey(ou.getOuCode())) {
//                 ouListForSend.add(ou);
//             }
//         }
//         return ouListForSend;
//     }

//     public static String getUserName() {
//         try {
//             if (getAuthentication() != null && !(getAuthentication() instanceof AnonymousAuthenticationToken)) {
//                 userName = getAuthentication().getName();
//             }

//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }
//         return userName;
//     }

//     public static void setUserName(String name) {
//         userName = name;
//     }

//     public static Authentication getAuthentication() {
//         try {
//             return SecurityContextHolder.getContext().getAuthentication();
//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }
//     }

//     public static Map<String, Object> getAllOuWithUser() {
//         Map<String, Object> map = new HashMap<>();
//         if (getAuthentication() != null) {
//             List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>(getAuthentication().getAuthorities());
//             String defaultOuCode = null;
//             JSONObject jsonObject = null;
//             JSONArray jsonArray = null;

//             int lengthGrantedAuthorityList = authorities.size();
//             for (int i = 0; i < lengthGrantedAuthorityList; i++) {
//                 try {
//                     if (authorities.get(i).toString().substring(0, 1).equals("{")) {
//                         jsonObject = new JSONObject(authorities.get(i).toString());
//                         if (!jsonObject.isNull(ConstantKeyAuthorizeUtil.CURRENT_OU_CODE_KEY)) {
//                             defaultOuCode = jsonObject.getString(ConstantKeyAuthorizeUtil.CURRENT_OU_CODE_KEY);
//                         } else if (!jsonObject.isNull(ConstantKeyAuthorizeUtil.USER_APP_USER_OU_AUTH_KEY)) {
//                             jsonArray = jsonObject.getJSONArray(ConstantKeyAuthorizeUtil.USER_APP_USER_OU_AUTH_KEY);
//                         }
//                     }
//                 } catch (JSONException e) {
//                     LOGGER.error("Error : {}", e);
//                     throw new RuntimeException(e);
//                 }
//             }
//             if (defaultOuCode != null) {
//                 map.put(defaultOuCode, defaultOuCode);
//                 String ouCode = null;
//                 int lengthJsonArray = jsonArray.length();
//                 for (int j = 0; j < lengthJsonArray; j++) {
//                     try {
//                         ouCode = jsonArray.getJSONObject(j).getString(ConstantKeyAuthorizeUtil.OU_CODE_KEY);
//                         map.put(ouCode, ouCode);
//                     } catch (JSONException e) {
//                         LOGGER.error("Error : {}", e);
//                         throw new RuntimeException(e);
//                     }
//                 }
//             } else {
//                 LOGGER.debug("Default Ou Id is Null");
//             }
//         }
//         return map;
//     }

//     public static String getUserID() {
//         String userId = null;
//         if (getAuthentication() != null) {
//             List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>(getAuthentication().getAuthorities());
//             JSONObject jsonObject = null;
//             int lengthGrantedAuthorityList = authorities.size();
//             for (int i = 0; i < lengthGrantedAuthorityList; i++) {
//                 try {
//                     if (authorities.get(i).toString().substring(0, 1).equals("{")) {
//                         jsonObject = new JSONObject(authorities.get(i).toString());
//                         if (!jsonObject.isNull(ConstantKeyAuthorizeUtil.APP_USER_ID_KEY)) {
//                             userId = jsonObject.get(ConstantKeyAuthorizeUtil.APP_USER_ID_KEY).toString();
//                             break;
//                         }
//                     }
//                 } catch (JSONException e) {
//                     LOGGER.error("Error : {}", e);
//                     throw new RuntimeException(e);
//                 }
//             }
//         }
//         return userId;
//     }

//     public static AppUserTransaction getAppUserTransaction(String userId) {
//         ResponseEntity<String> responseEntity = null;
//         AppUserTransaction appUserTransaction = null;
//         String id = userId == null ? getUserID() : userId;
//         try {
//             if (id == null) {
//                 return null;
//             }
//             //Get Result String With Security Service//
//             String requestString = "http://" + connectProperties.getProperty("SecurityService") + "/security/getUserTransactionIdByAppUser/" + id;
//             LOGGER.info("getAppUserTransaction userId :{} , result : {}", userId, requestString);
//             Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm").create();
//             JsonParser parser = new JsonParser();
//             HttpHeaders headers = new HttpHeaders();
//             headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//             HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
//             responseEntity = restTemplate.exchange(requestString, HttpMethod.GET, entity, String.class);
//             appUserTransaction = gson.fromJson(parser.parse(responseEntity.getBody()).getAsJsonObject(), AppUserTransaction.class);

//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }
//         return appUserTransaction;
//     }

//     public static List<AppUserRole> findAppUserRoleByAppUser(Long id) {
//         ResponseEntity<String> responseEntity = null;
//         List<AppUserRole> appUserRoles = new ArrayList<AppUserRole>();
//         try {
//             String requestString = "http://" + connectProperties.getProperty("SecurityService") + "/security/getAppUserRoleByAppUser/" + id;
//             Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm").create();
//             HttpHeaders headers = new HttpHeaders();
//             JsonParser parser = new JsonParser();
//             headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//             HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
//             responseEntity = restTemplate.exchange(requestString, HttpMethod.GET, entity, String.class);
//             JsonArray jsonArray = parser.parse(responseEntity.getBody()).getAsJsonArray();
//             for (JsonElement jsonElement : jsonArray) {
//                 AppUserRole appUserRole = gson.fromJson(jsonElement, AppUserRole.class);
//                 appUserRoles.add(appUserRole);
//             }
//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }

//         return appUserRoles;

//     }

//     public static List<AppRoleMenu> findAppRoleMenuByAppRole(Long id) {
//         List<AppRoleMenu> appRoleMenus = new ArrayList<AppRoleMenu>();
//         ResponseEntity<String> responseEntity = null;
//         try {
//             String requestString = "http://" + connectProperties.getProperty("SecurityService") + "/security/getAppRoleMenuByAppRole/" + id;
//             Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy HH:mm").create();
//             HttpHeaders headers = new HttpHeaders();
//             JsonParser parser = new JsonParser();
//             headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
//             HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
//             responseEntity = restTemplate.exchange(requestString, HttpMethod.GET, entity, String.class);
//             JsonArray jsonArray = parser.parse(responseEntity.getBody()).getAsJsonArray();
//             for (JsonElement jsonElement : jsonArray) {
//                 AppRoleMenu appRoleMenu = gson.fromJson(jsonElement, AppRoleMenu.class);
//                 appRoleMenus.add(appRoleMenu);
//             }
//         } catch (Exception e) {
//             LOGGER.error("Error : {}", e);
//             throw new RuntimeException(e);
//         }

//         return appRoleMenus;
//     }

//     public String saveOrUpdateUserTransactionByIdAndOuCode(String ouCode, String userId) {
//         String update = "0";
//         try {

//             //Get Result String With Security Service//
//             if (!(getAuthentication() instanceof AnonymousAuthenticationToken)) {
//                 setUserName(getAuthentication().getName());
//                 Long userTransactionId = getAppUserTransaction(userId) == null ? 0 : getAppUserTransaction(userId).getId();
//                 String requestString = "http://" + connectProperties.getProperty("SecurityService") + "/security/saveOrUpdateUserTransactionByIdAndOuCode/" + userTransactionId + "/" + ouCode + "/" + userId;
//                 LOGGER.info("saveOrUpdateUserTransactionByIdAndOuCode oucode : {} , userid : {} , result", ouCode, userId, requestString);
//                 update = getResultString(requestString);
//                 if (update.equals("1")) {
//                     setOuCode(ouCode);
//                     mapUserNameAndOuCode.put(getUserName(), ouCode);
//                 }
//             }
//         } catch (Exception e) {
//             LOGGER.error("Error : {}" + e);
//             throw new RuntimeException(e);
//         }
//         return update;
//     }

// }