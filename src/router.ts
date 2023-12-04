import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

console.log('目前路由表：', routes);

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
