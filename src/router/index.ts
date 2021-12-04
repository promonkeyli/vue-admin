import {createRouter, createWebHistory} from 'vue-router';
import Index from '../pages/index.vue';

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

export default router