import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import portalRouter from "@/modules/router";
import { firebase } from '@/firebase/firebase'
require('firebase/compat/auth')


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/LegalView.vue')
  },
  
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/LegalView.vue')
  },

  {
    path: '/legal',
    name: 'legal',
    component: () => import('../views/LegalView.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/portal',
    ...portalRouter
  }
 
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({name: 'login'});
    }
  }else{
    next();
  }
})


export default router
