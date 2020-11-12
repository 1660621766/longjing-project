import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js';  //状态store
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/Index'
import Login from '@/pages/index/Index'
import Err401 from '@/pages/error/401'
import Err404 from '@/pages/error/404'


Vue.use(Router)

const constantRouterMap = [
  //登录、找回密码、重新设置密码、以及401、404
  { path: '/login', component: Login, hidden: true },
  { path: '/error/401', component: Err401, hidden: true }, 
  { path: '/error/404', component: Err404, hidden: true }, 
  //路由 /  重定向到首页
  {
    path: '/',
    //redirect: '/lbs/CarGps',  //路由为 / 就重定向到默认首页
    redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对
      let paths = "";
      if(store.getters.routerPath && store.getters.routerPath){
        paths =  store.getters.routerPath;
      }else{
        paths = '/Login';
      }
      return paths;
    },
    hidden: true,
  },
  ,{
    path: '/Index',
    component: Index,
    redirect: 'noredirect',
    name: '首页',
    children: [
      { path: 'aaa', component: Index, name: 'aaa' },
    ]
  },
  { path: '*', redirect: '/error/404', hidden: true }
]
export default new Router({
  routes: constantRouterMap  //嵌套路由组
})
