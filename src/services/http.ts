/**
 * @desc       Axios 请求二次封装
 * @author     Young
 * @Date       2021/12/6
 */
import axios from 'axios';
import router from '@/router';
import store from '@/store/index'

/*********************根据环境变量区分接口默认地址***********************/

// url
const baseUrlList = [
    {
        type: 'production',
        url: 'http://127.0.0.1:3000/api' // 生产环境 ：针对用户
    },
    {
        type: 'test',
        url: 'http://127.0.0.1:3000/api' // 测试环境：针对测试人员
    },
    {
        type: 'develop',
        url: 'http://127.0.0.1:3000/api' // 开发环境：针对开发人员
    },
]
baseUrlList.forEach((item: any) => {
    // const environment = process.env.NODE_ENV;
    const environment = 'develop'; // 暂时默认开发环境
    if (environment === item.type){
        axios.defaults.baseURL = item.url; // 指定axios基础url路径
    }
})

// 请求超时 15s
axios.defaults.timeout = 15000;
/****************************axios拦截器****************************/

// 请求拦截器
axios.interceptors.request.use(function (config: any) {
    // 1.请求前开启全局loading
    store.commit('loadingChange', true);
    // 2.非登录注册页面 需要添加token请求头信息
    const { path, name } = router.currentRoute.value;
    if (name !== 'login' && name !== 'register'){
        const token = JSON.parse(<string>localStorage.getItem('token'));
        if (token){
            // token 存在
            config.headers.Authorization = token;
        }else {
            // token不存在
            // 页面重定向到登录页面
            router.push({path: '/login'});
        }
    }
    return config;
}, function (error: any) {
    // 3.请求错误返回Promise
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use( (response: any) => {
        // 1.结束全局加载状态
    store.commit('loadingChange', false);
        // 成功响应：过滤其他数据，返回data
        return response.data;
}
,  (error: any) => {
        store.commit('loadingChange', false);
        // 错误响应：错误的状态在error中的response中获取
        const { status } = error.response;
        switch (status) {
            case 401:
                // 401表示没有token 或者token过期 此时如果本地有token 就清除 同时重定向到登陆界面
                const token = localStorage.getItem('token');
                if (!!token){ localStorage.removeItem('token'); }
                router.push({path: '/login'});
                break;
        }
    return Promise.reject(error);
});

export default axios;