import {createRouter, createWebHistory} from 'vue-router';
import {localStorage} from "@/lib/tools";

// 路由表配置项
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/index.vue')
    },
    {
        path: '/login',
        name:'login',
        // 组件按需加载
        component: () => import('../components/login/login.vue')
    },
    {
        path: '/register',
        name:'register',
        component: () => import('../components/login/register.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../components/login/404.vue')
    },
    {
        path: '/:pathMatch(.*)', // vue3路径匹配 * 调整
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
/**
 * @Date               2021/12/5
 * @desc               全局路由前置守卫函数
 * @param   {Object}   to     去往的界面路由对象
 * @param   {Object}   from   当前正要离开的页面的路由对象
 * @param   {Object}   next   放行函数
 * @return  { void }   void
 */
router.beforeEach((to: any, from: any, next: any) => {
    // 1.白名单 -- 不进行鉴权跳转
    const whiteList = ['/login', '/register'];
    // 2.获取token
    const token = localStorage.get('token');
    // 3.判断跳转路由
    if (whiteList.includes(to.fullPath)){
        // 3.1 白名单内路由直接放行
        next();
    }else {
        // 3.2 不在白名单内的路由 判断 token存在否
        if (!!token){
            // token存在 放行
            next();
        }else {
            // 不存在 重定向 /login
            next('login');
        }
    }
})
export default router