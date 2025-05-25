<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
// import PageTransition from './components/PageTransition.vue'; // Commenté ou supprimé
import { useCartStore } from './stores/cart'
import { useRoute } from 'vue-router'

const cartStore = useCartStore()
const route = useRoute() // Obtenir la route actuelle

// Computed property pour vérifier si la route actuelle est la page 404
const isNotFoundPage = () => route.name === 'not-found'

</script>

<template>
  <!-- Appliquer les styles globaux avec Tailwind -->
  <div class="flex flex-col min-h-screen">
    <!-- Afficher le Header uniquement si ce n'est pas la page 404 -->
    <Header v-if="!isNotFoundPage()" />

    <!-- Appliquer les styles de la section principale avec Tailwind -->
    <main class="flex-1 relative overflow-x-hidden">
      <RouterView />
    </main>

    <!-- Afficher le Footer uniquement si ce n'est pas la page 404 -->
    <Footer v-if="!isNotFoundPage()" />
  </div>
</template>

<!-- Les styles CSS traditionnels sont remplacés par Tailwind -->
<!--
<style>
/* Styles globaux */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
  /* overflow: hidden; */ /* Supprimé ou commenté si vous voulez le scroll vertical */
  overflow-x: hidden; /* Gardé ou ajusté selon besoin */
}

/* Styles pour les transitions - Supprimés */
/*
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
*/
</style>
-->