import axios from 'axios';
import store from '../store/index'  // 获取 store
import { Message } from 'element-ui';
import router from '../router';
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({ path: '/login' });
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态或token过期，跳转登录页
        case 401:
            sessionStorage.removeItem('user_token');
            setTimeout(() => {
                toLogin();
            }, 100);
            break;
        // 403 权限不足
        // 清除token并跳转登录页
        case 403:
            alert('权限不足');
            // toLogin();
            break;
        // 404请求不存在
        case 404:
            alert('请求的资源不存在');
            break;
        case 500:
            // alert('没有服务');
            break;
        case 501:
            err.message = '网络未实现';
            break;
        case 502:
            err.message = '网络错误';
            break;
        case 503:
            err.message = '服务不可用';
            break;
        case 504:
            err.message = '网络超时';
            router.replace({ path: '/error/404' });
            break;
        case 505:
            err.message = 'http版本不支持该请求';
            break;
        default:
            err.message = `连接错误${err.response.status}`;
    }
    Message.error({message : err.message});
}

//取消请求
let CancelToken = axios.CancelToken
axios.create({
    timeout: 15000,// 请求超时时间
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
//开始请求设置，发起拦截处理
axios.interceptors.request.use(config => {
    //得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
    //post和get请求方式的不同，使用三木运算处理
    // let requestName = config.method === 'post'?config.data.requestName :config.params.requestName
    //判断，如果这里拿到上一次的requestName，就取消上一次的请求
    // if(requestName) {
    //     if(axios[requestName]&&axios[requestName].cancel){
    //         axios[requestName].cancel()
    //     }
    //     config.cancelToken = new CancelToken(c => {
    //         axios[requestName] = {}
    //         axios[requestName].cancel = c
    //     })
    // }
    const token = sessionStorage.getItem("user_token");
    if(token){
        config.params = {'token':token} //如果要求携带在参数中
        config.headers.token= token; //如果要求携带在请求头中
      }
    //在发送请求之前做某件事 post序列化
    if(config.method  === 'post'){
    	//去除参数前边的空格
        for (const key in config.data) {
          	if(typeof config.data[key] == 'string'){
            	config.data[key] = $.trim(config.data[key]);
          	}
        } 
      	//在data当中存在数组的话需要加上{arrayFormat: 'brackets'} 否则提交时数组会显示下标
        config.data = QS.stringify(config.data);
    }
    // `params` 是即将与请求一起发送的 URL 参数  params是请求配置中的参数
    config.params = {
        _t: Date.parse(new Date())/1000,//添加时间戳  IE缓存严重
        ...config.params
    }
    return config;
}, error => {
    //当出现请求错误是做一些事
    Message.error({ message: '请求超时!' });
    return Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response;
        //这里根据后台返回来设置
        if (res.status === 200) {
            // store.dispatch(actions.isLoading(false));
            return response;
        } else {
            // return Promise.reject(error);
            // 请求已发出，但是不在2xx的范围 
        }

    },
    error => {
        // store.dispatch(actions.isLoading(false));
        errorHandle(error.response.status, error.response.data.message);
        return Promise.reject(error)
    }
)

export default axios