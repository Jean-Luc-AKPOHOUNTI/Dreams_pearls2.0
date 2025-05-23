import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/produit',
      name: 'produit',
      component: () => import('../views/Produit.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import ('../views/Contact.vue')
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/Panier.vue')
    },
    {
      path: '/paiement',
      name: 'paiement',
      component: () => import('../views/Paiement.vue')
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('../views/Confirmation.vue')
    }
  ],
})

export default router
