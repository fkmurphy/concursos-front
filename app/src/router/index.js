 
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'//'@/views/Home.vue'
import Postulations from '@/views/Postulations.vue'//'@/views/Home.vue'
//import Cats from '@/views/Cats.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/postulations',
        name: 'Postulations',
        component: Postulations
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
