import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import user from './modules/user';
import permission from './modules/permission';

Vue.use(Vuex)
 
// 注册上面引入的各大模块
const store = new Vuex.Store({
    //将状态树store 分割成模块 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
    modules:{
        user,
        permission
    },
    getters
})
 
export default store