import { createRouter, createWebHashHistory, Router } from 'vue-router';
import { routes } from './route';

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router