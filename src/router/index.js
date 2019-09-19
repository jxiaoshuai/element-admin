import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './router.js';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routes
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem('username') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
    next({ name: 'login' });
  } else if (sessionStorage.getItem('username') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
    next({ name: 'homeList' });
  } else {
    next()
  }
});
