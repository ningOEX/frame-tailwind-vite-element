import routes from "./routes"
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start(); // 开始加载进度条
    next();
});

router.afterEach(() => {
    NProgress.done(); // 完成加载进度条
});

export default router