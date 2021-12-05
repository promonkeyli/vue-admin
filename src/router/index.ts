import {createRouter, createWebHistory} from 'vue-router';
import Index from '../pages/index.vue';
import {localStorage} from "@/lib/tools";

// 路由表配置项
const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
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
router.beforeEach((to, from, next) => {
    // const isAuthenticated = true;&& !isAuthenticated
    // 此处逻辑是--vue-router 在路由发生变化时会根据条件放行路由
    // 1. 不是前往登陆页面 且身份验证也失败 路由重定向到login页面
    // 2. 前往登陆页面 或者 身份验证成功的话 路由放行---只要身份验证成功 去往任何页面都放行
    // 3. 此处的身份认证信息需要缓存在localStorage中，在登陆成功后，保存后段返回的token以及用户信息，token失效会重新登陆获取新的token
    const token = localStorage.get('token');
    // console.log(token,'token');
    const isAuthenticated = (token === 'token123');
    if (to.name !== 'login' && to.name !== 'register' && !isAuthenticated) next({ name: 'login' })
    else next()
})
export default router