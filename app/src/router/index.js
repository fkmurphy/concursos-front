 
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'//'@/views/Home.vue'
import PostulationsLists from '@/views/postulations/PostulationsLists.vue'//'@/views/Home.vue'
import PostulationsView from '@/views/postulations/PostulationsView.vue'//'@/views/Home.vue'
import PostulationsListsAdmin from '@/views/admin/postulations/PostulationsLists.vue'
import Register  from  '@/views/admin/users/Register.vue'
import GuestRegister  from  '@/views/Register.vue'
import Login from  '@/views/Login.vue'
import Admin from  '@/layout/Admin.vue'
import CategoriesListsAdmin from '@/views/admin/categories/List.vue'
import ContestsListAdmin from '@/views/admin/contests/ContestList.vue'
import ContestsPublicList from '@/views/ContestsPublic.vue'
import ContestCreateAdmin from '@/views/admin/contests/ContestCreate.vue'
import validToken from "@/api/auth/helpers/validateToken";

const guest = async (to, from, next) => {
    let token = localStorage.getItem("token");
    if (token && token.length > 0) {
        console.log('entre y no se por que')
       if (!validToken(token))  {
           localStorage.setItem("token", '')
           next('/login')
       }
    }
    next()
};

const auth = async (to, from, next) => {
    let token = localStorage.getItem("token");
    if (token && token.length > 0) {
        if (!validToken(token))  {
            localStorage.setItem("token", '')
            next('/login')
        }
        next()
    }
    next('/login')
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        beforeEnter: guest,
        component: Login 
    },
    {
        path: '/register',
        name: 'Register',
        component: GuestRegister
    },
    {
        path: '/public',
        name: 'ContestsPublicList',
        component: ContestsPublicList
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
    },
    {
        path: '/admin',
        redirect: '/admin/dashboard',
        component: Admin,
        children: [
            {
                path: '/admin/users/register',
                name: 'adminUserRegistration',
                beforeEnter: auth,
                component: Register
            },
            {
                path: '/admin/postulations',
                name: 'postulationListAdmin',
                beforeEnter: auth,
                component: PostulationsListsAdmin
            },
            {
                path: '/admin/categories',
                name: 'categoriesListAdmin',
                beforeEnter: auth,
                component: CategoriesListsAdmin
            },
            {
                path: '/admin/contests',
                name: 'contestListAdmin',
                beforeEnter: auth,
                component: ContestsListAdmin
            },
            {
                path: '/admin/contests/create',
                name: 'adminContestCreate',
                beforeEnter: auth,
                component: ContestCreateAdmin
            }
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router
