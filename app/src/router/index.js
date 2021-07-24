 
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'//'@/views/Home.vue'
import PostulationsLists from '@/views/postulations/PostulationsLists.vue'//'@/views/Home.vue'
import PostulationsView from '@/views/postulations/PostulationsView.vue'//'@/views/Home.vue'
import PostulationsListsAdmin from '@/views/admin/postulations/PostulationsLists.vue'
import Register  from  '@/views/admin/users/Register.vue'
import Login from  '@/views/Login.vue'
import Admin from  '@/layout/Admin.vue'
import CategoriesListsAdmin from '@/views/admin/categories/List.vue'
//import Cats from '@/views/Cats.vue'

const guest = (to, from, next) => {
  if (!localStorage.getItem("token")) {
    return next();
  } else {
    return next("/");
  }
};

const auth = (to, from, next) => {
  if (localStorage.getItem("token")) {
    return next();
  } else {
    return next("/login");
  }
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
                component: PostulationsListsAdmin
            },
            {
                path: '/admin/categories',
                name: 'categoriesListAdmin',
                component: CategoriesListsAdmin
            }
        ]

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router
