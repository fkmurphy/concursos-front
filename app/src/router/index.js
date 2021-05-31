 
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'//'@/views/Home.vue'
import PostulationsLists from '@/views/postulations/PostulationsLists.vue'//'@/views/Home.vue'
import PostulationsView from '@/views/postulations/PostulationsView.vue'//'@/views/Home.vue'
//import Cats from '@/views/Cats.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/postulations',
        name: 'PostulationsLists',
        component: PostulationsLists
    },
    {
        path: '/postulations/:postulationId/view',
        name: 'postulationView',
        component: PostulationsView
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
