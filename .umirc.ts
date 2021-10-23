import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/urban_smart_test',
      title: 'login',
      component: '@/pages/index',
      routes: [
        { path: '/profile', component: 'profile', title: 'Profile' },
        { path: '/', component: 'login', title: 'Login' },
        { path: '/login', component: 'login', title: 'Login' },
        { component: '@/pages/404.jsx' },
      ],
      wrappers: ['@/wrappers/main'],
    },
  ],
});
