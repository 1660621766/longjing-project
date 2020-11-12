import http from './http';
import {BASE_URL as BaseUrl} from './ipconfig';
//statisticalPage页面
export default {
    getModalData:function(data){
        return http({
            url: `${BaseUrl}/api/v1/rpa/stepExecute/rate`,
            method: 'post',
            dataType: "json",
            data: data
        })
    },
    
    getFlowListData:function(){
        return http({
            url: `${BaseUrl}/api/v1/rpa/group/1`,
            method: 'get',
            dataType: "json",
        })
    },
    getBotListData:function(data){
        // return new Promise((resolve, reject){})
        return http({
            url: `${BaseUrl}/api/v1/rpa/flowExecute/rate`,
            method: 'post',
            dataType: "json",
            data: data
        })
    }
};



