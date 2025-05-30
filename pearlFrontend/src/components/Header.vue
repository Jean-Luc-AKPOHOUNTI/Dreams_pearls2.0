<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cart'
import { ref, onMounted } from 'vue'

const cartStore = useCartStore()
const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <header 
        class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-lg shadow-xl py-4">
        <div class="container mx-auto px-6">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <RouterLink to="/" class="relative group">
                    <div class="relative rounded-full overflow-hidden">
                        <img 
                            class="h-16 w-auto" 
                            src="../assets/Dreams_Pearls.png" 
                            alt="Dream Pearls Logo"
                        >
                    </div>
                </RouterLink>

                <!-- Navigation Desktop -->
                <nav class="hidden md:flex items-center space-x-1">
                    <RouterLink 
                        v-for="link in [
                            { to: '/', text: 'Accueil', icon: 'mdi:home' },
                            { to: '/about', text: 'About Us', icon: 'mdi:information' },
                            { to: '/produit', text: 'Produits', icon: 'mdi:diamond-stone' },
                            { to: '/contact', text: 'Contact Us', icon: 'mdi:email' }
                        ]" 
                        :key="link.to"
                        :to="link.to"
                        class="group relative px-4 py-2 text-white font-medium transition-colors duration-300 hover:text-amber-400"
                        active-class="text-amber-400"
                    >
                        <div class="flex items-center space-x-2">
                            <!-- <Icon :icon="link.icon" class="text-amber-400" width="20" /> -->
                            <span>{{ link.text }}</span>
                        </div>
                        <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </RouterLink>
                </nav>

                <!-- Panier et Menu Mobile -->
                <div class="flex items-center space-x-6">
                    <!-- Panier -->
                    <RouterLink 
                        to="/panier" 
                        class="relative group"
                    >
                        <div class="relative">
                            <!-- Badge du nombre d'articles -->
                            <div 
                                v-if="cartStore.cartItemsCount > 0"
                                class="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-300 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg animate-pulse-custom"
                            >
                                {{ cartStore.cartItemsCount }}
                            </div>
                            <!-- Icône du panier -->
                            <div class="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                                <Icon 
                                    icon="game-icons:shopping-cart" 
                                    width="28" 
                                    height="28"
                                    class="text-amber-400 group-hover:text-amber-300 transition-colors duration-300"
                                />
                            </div>
                        </div>
                    </RouterLink>

                    <!-- Menu Mobile -->
                    <button 
                        @click="toggleMenu"
                        class="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                        <Icon 
                            :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" 
                            width="28" 
                            height="28"
                            class="text-amber-400"
                        />
                    </button>
                </div>
            </div>

            <!-- Menu Mobile -->
            <div 
                v-show="isMenuOpen"
                class="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg shadow-xl"
            >
                <nav class="container mx-auto px-6 py-4">
                    <RouterLink 
                        v-for="link in [
                            { to: '/', text: 'Accueil', icon: 'mdi:home' },
                            { to: '/about', text: 'About Us', icon: 'mdi:information' },
                            { to: '/produit', text: 'Produits', icon: 'mdi:diamond-stone' },
                            { to: '/contact', text: 'Contact Us', icon: 'mdi:email' }
                        ]" 
                        :key="link.to"
                        :to="link.to"
                        class="flex items-center space-x-3 py-3 text-white hover:text-amber-400 transition-colors duration-300"
                        active-class="text-amber-400"
                        @click="isMenuOpen = false"
                    >
                        <Icon :icon="link.icon" width="24" />
                        <span>{{ link.text }}</span>
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>

    <!-- Espace pour compenser le header fixe -->
    <div class="h-24"></div>
</template>


