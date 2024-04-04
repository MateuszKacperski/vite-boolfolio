
import { createRouter, createWebHistory } from "vue-router";


//Pagine da utilizzare per il routing
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ProjectShowPage from "../pages/ProjectShowPage.vue";



// Rotte
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage },
        { path: '/projects/:slug', component: ProjectShowPage, name: 'project-show' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});




export { router }