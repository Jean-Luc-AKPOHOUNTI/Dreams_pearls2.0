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
      component: () => import('../views/Produit.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/Panier.vue'),
      meta: {
        requiresAuth: true // Exemple de garde de route
      }
    },
    {
      path: '/paiement',
      name: 'paiement',
      component: () => import('../views/Paiement.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('../views/Confirmation.vue'),
    },
    // Redirections personnalisées
    {
      path: '/accueil',
      redirect: '/'
    },
    {
      path: '/produits',
      redirect: '/produit'
    },
    {
      path: '/boutique',
      redirect: '/produit'
    },
    // Route 404 - doit être la dernière route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    }
  ],
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  // Exemple de garde d'authentification
  if (to.meta.requiresAuth) {
    // Ici, vous pouvez vérifier si l'utilisateur est connecté
    // Par exemple, vérifier un token dans le localStorage
    const isAuthenticated = localStorage.getItem('userToken')
    if (!isAuthenticated) {
      // Redirection vers la page de connexion si non authentifié
      next({ name: 'home' })
      return
    }
  }
  next()
})

export default router
