// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from 'vuex'

export default createStore({
    state: {
        info: 'vue3--vuex'
    },
    mutations: {
        // 定义mutations，用于修改状态(同步)
        updateInfo(state, payload){
            state.info = payload
        }
    },
    actions: {
        // 定义actions，用于修改状态(异步)
        updateInfo (context, payload) {
            setTimeout(() => {
                context.commit('updateInfo', payload)
            }, 2000)
        }
    },
    getters: {
        formatInfo (state) {
            return state.info + ' Tom'
        }
    },
    modules: {
    }
})