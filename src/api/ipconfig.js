// export  const BASE_URL = "http://106.54.210.130:8888";
const REACT_APP_PROXY_URL=process.env.NODE_ENV;
let BaseUrl='';
if(REACT_APP_PROXY_URL=="production"){//生产环境
    BaseUrl="";
}else if(REACT_APP_PROXY_URL=="dev"){//测试环境
    BaseUrl="http://192.168.77.58:8888";
}else{//本地跑的服务
    BaseUrl="http://192.168.77.58:8888";
    // BaseUrl="http://106.54.210.130:8888";
    //    BaseUrl="http://192.168.77.58:8085";
       BaseUrl="";
}
export const BASE_URL = BaseUrl;