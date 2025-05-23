<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

// Liens de navigation rapide
const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produit' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
]

// Liens des réseaux sociaux
const socialLinks = [
    { name: 'Facebook', icon: 'mdi:facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com' },
    { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com' },
    { name: 'WhatsApp', icon: 'mdi:whatsapp', url: 'https://wa.me/2290151519681' }
]

// Informations de contact
const contactInfo = {
    address: '123 Rue des Bijoux, 75001 Cotonou',
    phone: '+229 01 51 51 96 81',
    email: 'dreamspearl@gmail.com'
}
</script>

<template>
    <footer class="bg-gray-900 text-white">
        <!-- Section principale du footer -->
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Logo et description -->
                <div class="space-y-4">
                    <RouterLink to="/" class="inline-block">
                        <img src="../assets/Dreams_Pearls.png" alt="Dream Pearl" class="h-16 rounded-2xl">
                    </RouterLink>
                    <p class="text-gray-400">
                        Votre destination pour des bijoux élégants et de qualité. Nous créons des pièces uniques qui subliment votre style.
                    </p>
                </div>

                <!-- Liens rapides -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Navigation</h3>
                    <ul class="space-y-2">
                        <li v-for="link in quickLinks" :key="link.name">
                            <RouterLink 
                                :to="link.path"
                                class="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            >
                                {{ link.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <!-- Informations de contact -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center space-x-2">
                            <Icon icon="mdi:map-marker" class="text-amber-500" />
                            <span class="text-gray-400">{{ contactInfo.address }}</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <Icon icon="mdi:phone" class="text-amber-500" />
                            <span class="text-gray-400">{{ contactInfo.phone }}</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <Icon icon="mdi:email" class="text-amber-500" />
                            <span class="text-gray-400">{{ contactInfo.email }}</span>
                        </li>
                    </ul>
                </div>

                <!-- Réseaux sociaux -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <a 
                            v-for="social in socialLinks" 
                            :key="social.name"
                            :href="social.url"
                            target="_blank"
                            class="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                            :title="social.name"
                        >
                            <Icon :icon="social.icon" width="24" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Barre de copyright -->
        <div class="border-t border-gray-800">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm">
                        © {{ new Date().getFullYear() }} Dream Pearl. Tous droits réservés.
                    </p>
                    <div class="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-amber-500 text-sm">Politique de confidentialité</a>
                        <a href="#" class="text-gray-400 hover:text-amber-500 text-sm">Conditions d'utilisation</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Animation pour les liens au survol */
a {
    position: relative;
}

a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #f59e0b;
    transition: width 0.3s ease;
}

a:hover::after {
    width: 100%;
}
</style>