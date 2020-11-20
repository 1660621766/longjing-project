import http from './http';
import {BASE_URL as BaseUrl} from './ipconfig';
//xxx页面
export const getModalData = params => http.post( `${BaseUrl}/api/rate`, params);
export const getLoginData = params => http.post( `${BaseUrl}/api/login`, params);
export default {
    getLoginData : function(params) {
        return http.post( `${BaseUrl}/api/login`, params);
    }

};



