import http from './http';
import {BASE_URL as BaseUrl} from './ipconfig';
//xxx页面
export const getModalData = params => http.post( `${BaseUrl}/api/rate`, params);
// export const getLogin = params => http.post( `${BaseUrl}/api/login`, params);
 const server = {
    getLogin (params) {
        return http.post( `${BaseUrl}/api/login`, params);
    }

};
export default server


