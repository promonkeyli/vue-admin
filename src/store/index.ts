import { createStore } from 'vuex'

export default createStore({
    state: {
        isLoading: false // 网络请求全局加载状态
    },
    mutations: {
      loadingChange(state: any, isLoading: boolean){
          state.isLoading = isLoading;
      }
    },
    actions: {
    },
    modules: {

    }
})