import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/user/:id',
        name: "User",
        component: User
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router