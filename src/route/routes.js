const routes = [
    { path: '/', component: () => import('../views/home/index.vue') },
    { path: '/about', component: () => import('../views/about/index.vue') },
    { path: '/img-list', component: () => import('../views/img-list/index.vue') },
    { path: '/video-list', component: () => import('../views/video-list/index.vue') },
    { path: '/demo', component: () => import('../views/demo/index.vue') },
]

export default routes;