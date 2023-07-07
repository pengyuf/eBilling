import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
        redirect: '/details',
        children: [
            { path: 'details', component: () => import('@/views/details/index.vue') },
            { path: 'charts', component: () => import('@/views/charts/index.vue') },
            { path: 'finds', component: () => import('@/views/finds/index.vue') },
            { path: 'myself', component: () => import('@/views/myself/index.vue') },
        ]
    },
    {
        path: '/billing', component: () => import('@/views/billing/index.vue'),
    },
    {
        path: '/allKinds', component: () => import('@/views/billing/allKinds.vue'),
    },
    {
        path: '/addKinds', component: () => import('@/views/billing/addKinds.vue'),
    },
]