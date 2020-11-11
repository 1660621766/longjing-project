import axios from 'axios';
import { createHashHistory } from 'history'; // 如果是hash路由
import { actions } from '../store/botList/actions'  // 获取 
import store from '../store/index'  // 获取 store

const history = createHashHistory();
/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    console.log(this);
    history.push('/login');
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
            // toLogin();
            break;
        default:
            console.log(other);
    }
}

//取消请求
let CancelToken = axios.CancelToken
axios.create({
    timeout: 15000,// 请求超时时间
    // headers: {
    //     'Content-Type': 'application/json'//application/x-www-form-urlencoded
    //   }
})
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
    token && (config.headers.Authorization = `Bearer ${token}`);
    // config.headers['Access-Control-Allow-Origin']='*'
    if (!config.headers['Content-Type']) {
        // config.headers = {
        //     'Content-Type': 'application/json'
        // }
        // config.headers['Content-Type'] = 'application/json'
    }
    if (config.method === 'get') {
        config.params = config.params || {};
    } else {
        config.data = config.data || {}
    }
    // window.store.dispatch(actions.isLoading(true))  // 加载的时候
    store.dispatch(actions.isLoading(true));
    return config
}, error => {
    return Promise.reject(error)
})
// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response;
        //这里根据后台返回来设置
        if (res.status === 200) {
            store.dispatch(actions.isLoading(false));
            return response;
        } else {
            // return Promise.reject(error);
            // 请求已发出，但是不在2xx的范围 
        }

    },
    error => {
        store.dispatch(actions.isLoading(false));
        errorHandle(error.response.status, error.response.data.message);
        return Promise.reject(error)
    }
)

export default axios