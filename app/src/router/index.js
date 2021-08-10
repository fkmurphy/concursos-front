 
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
import ContestCreateAdmin from '@/views/admin/contests/ContestCreate.vue'
import {me} from '@/api/auth/me.js';
//import Cats from '@/views/Cats.vue'

const guest = async (to, from, next) => {
    if (!localStorage.getItem("token")) {
        return next();
    } else {
        try {
            await me();
        } catch (e) {
            localStorage.setItem('token', undefined);
            next();
        }
        return next("/");
    }
};

const auth = async (to, from, next) => {
  if (localStorage.getItem("token") ) {
      try {
          await me();
          return next();
      } catch (e) {
          localStorage.setItem('token', undefined);
          return next('/login');
      }
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
        path: '/register',
        name: 'Register',
        component: GuestRegister
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
            },
            {
                path: '/admin/contests',
                name: 'contestListAdmin',
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
