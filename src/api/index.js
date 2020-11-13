import http from './http';
import {BASE_URL as BaseUrl} from './ipconfig';
//statisticalPage页面
export const getModalData = p => http.post( `${BaseUrl}/api/rate`, p);
export default {
    getModalData(data){
        return http({
            url: `${BaseUrl}/api/v1/rpa/stepExecute/rate`,
            method: 'post',
            dataType: "json",
            data: data
        })
    }
};



