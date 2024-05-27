const routes = [
    { path: '/', component: () => import('../views/home/index.vue') },
    { path: '/about', component: () => import('../views/about/index.vue') },
    { path: '/img-list', component: () => import('../views/img-list/index.vue') },
    { path: '/demo', component: () => import('../views/demo/index.vue') },
    // 404 路由
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    }
]

export default routes;