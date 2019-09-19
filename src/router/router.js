import Main from '@/pages/Main/index.vue'
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录页面'
    },
    component: () => import('@/pages/login/login.vue')
};
export const otherRouter = {
    path: '/',
    redirect: '/homeList',
    name: 'home',
    component: Main,
    children: [
        {
            path: '/homeList',
            name: 'homeList',
            meta: { title: '首页' },
            component: () => import('@/pages/homeList/index.vue')
        }
    ]
};
export const routerpage = [
    {
        path: '/authorization',
        name: 'authorization',
        component: Main,
        children: [{
            path: '/userlist',
            meta: { title: '用户管理' },
            name: 'userlist',
            component: () =>
                import('@/pages/authorization/user/index.vue')
        },
        {
            path: '/rolelist',
            meta: { title: '角色管理' },
            name: 'rolelist',
            component: () =>
                import('@/pages/authorization/role/index.vue')
        },
        {
            path: '/menulist',
            meta: { title: '菜单管理' },
            name: 'menulist',
            component: () =>
                import('@/pages/authorization/menu/index.vue')
        }]
    }
]


export const routes = [
    loginRouter,
    otherRouter,
    ...routerpage
];