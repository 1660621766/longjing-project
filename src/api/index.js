import server from './server';
import {BASE_URL as BaseUrl} from './ipconfig';
//statisticalPage页面
export const statisticalPageUrl={
    getModalData:function(data){
        return server({
            url: `${BaseUrl}/api/v1/rpa/stepExecute/rate`,
            method: 'post',
            dataType: "json",
            data: data
        })
    },
    
    getFlowListData:function(){
        return server({
            url: `${BaseUrl}/api/v1/rpa/group/1`,
            method: 'get',
            dataType: "json",
        })
    },
    getBotListData:function(data){
        // return new Promise((resolve, reject){})
        return server({
            url: `${BaseUrl}/api/v1/rpa/flowExecute/rate`,
            method: 'post',
            dataType: "json",
            data: data
        })
    }
};



