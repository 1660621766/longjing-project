import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    containerObj: {
        listData:[]
    }
}
 
// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    
    actions:[], 
    mutations:{
        increment(state, newState) {
            state.containerObj.listData = newState
        }
    }
})
 
export default store