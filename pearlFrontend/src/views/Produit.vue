<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useCartStore } from '../stores/cart'

let offre1 = ref([
    { name: 'Hanche1', price: 50, src: 'https://cbu01.alicdn.com/img/ibank/O1CN01F0h5CU1p04lymEjRh_!!2916035297-0-cib.310x310.jpg' },
    { name: 'Hanche2', price: 90, src: 'https://cbu01.alicdn.com/img/ibank/O1CN01AuAw9g1I5g9tqgNt9_!!2207780050842-0-cib.jpg' },
    { name: 'Hanche3', price: 60, src: 'https://chic-et-chaine.com/cdn/shop/products/Collier-de-Hanche_2000x.jpg?v=1673341090' },
    { name: 'Hanche4', price: 70, src: 'https://cbu01.alicdn.com/img/ibank/O1CN01F0h5CU1p04lymEjRh_!!2916035297-0-cib.310x310.jpg' },
    { name: 'Hanche5', price: 80, src: 'https://cbu01.alicdn.com/img/ibank/O1CN01AuAw9g1I5g9tqgNt9_!!2207780050842-0-cib.jpg' },
    { name: 'Hanche6', price: 40, src: 'https://chic-et-chaine.com/cdn/shop/products/Collier-de-Hanche_2000x.jpg?v=1673341090' },
])

let offre2 = ref([
    { name: 'cheville1', price: 10, src: 'https://th.bing.com/th/id/OIP._tK6t0-A6g8bFmFZciFr0QAAAA?cb=iwp2&rs=1&pid=ImgDetMain' },
    { name: 'cheville2', price: 8, src: 'https://i.pinimg.com/736x/c0/bd/e3/c0bde3e1c9d27a27660db876f6f3fdcf.jpg' },
    { name: 'cheville3', price: 20, src: 'https://th.bing.com/th/id/OIP.3ryjh-ZzZfJ8pIQZQdmjkgHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
    { name: 'cheville4', price: 14, src: 'https://th.bing.com/th/id/OIP._tK6t0-A6g8bFmFZciFr0QAAAA?cb=iwp2&rs=1&pid=ImgDetMain' },
    { name: 'cheville5', price: 12, src: 'https://i.pinimg.com/736x/c0/bd/e3/c0bde3e1c9d27a27660db876f6f3fdcf.jpg' },
    { name: 'cheville6', price: 6, src: 'https://th.bing.com/th/id/OIP.3ryjh-ZzZfJ8pIQZQdmjkgHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
])

let offre3 = ref([
    { name: 'collier1', price: 100, src: 'https://lesbijouxdelili.com/wp-content/uploads/2018/10/colliers-femme-800x800.jpg' },
    { name: 'collier2', price: 150, src: 'https://th.bing.com/th/id/OIP.y3qI8W1vJciGm0mY2XQudAHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
    { name: 'collier3', price: 120, src: 'https://www.france-perles.fr/wp-content/uploads/2022/03/collier-perles-de-majorque-orquidea-46269-01.jpg' },
    { name: 'collier4', price: 155, src: 'https://th.bing.com/th/id/OIP.y3qI8W1vJciGm0mY2XQudAHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
    { name: 'collier5', price: 170, src: 'https://www.france-perles.fr/wp-content/uploads/2022/03/collier-perles-de-majorque-orquidea-46269-01.jpg' },
    { name: 'collier6', price: 130, src: 'https://th.bing.com/th/id/OIP.y3qI8W1vJciGm0mY2XQudAHaHa?cb=iwp2&rs=1&pid=ImgDetMain' },
])

let produits = ref([
    { name: "Offre N°1", items: offre1, mage: 'https://i.etsystatic.com/15964649/r/il/ca5d57/3015926270/il_1588xN.3015926270_4m7a.jpg' },
    { name: "Offre N°2", items: offre2, mage: 'https://www.naniloajewels.com/326-large_default/chaine-de-cheville-arbre-de-vie-en-pierres-de-howlite.jpg' },
    { name: "Offre N°3", items: offre3, mage: 'https://a.1stdibscdn.com/garrard-albemarle-18-karat-white-gold-diamond-2114cts-five-row-necklace-for-sale-picture-3/j_13533/1561395810943/2019_06_04_SH29_2013247_1st_Dibs_1695_master.jpg?width=768' },
]);

let currentIndex = ref(0);
let direction = ref('right');
let cartStore = useCartStore()

function goLeft() {
    direction.value = 'left'
    currentIndex.value = (currentIndex.value - 1 + produits.value.length) % produits.value.length
}

function goRight() {
    direction.value = 'right'
    currentIndex.value = (currentIndex.value + 1) % produits.value.length
}

function addToCart(product) {
    cartStore.addToCart(product)
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
        <div class="container mx-auto">
            <!-- En-tête avec titre -->
            <h1 class="text-4xl font-bold text-center text-white mb-12">
                Nos Collections
            </h1>

            <!-- Conteneur principal -->
            <div class="flex flex-col lg:flex-row gap-8 items-center">
                <!-- Carrousel des produits -->
                <div class="w-full lg:w-2/3 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
                    <transition class="fade" name="fade" mode="out-in">
                        <h2 class="text-3xl text-center p-4 font-serif text-amber-400 mb-6">
                            {{ produits[currentIndex].name }}
                        </h2>
                    </transition>

                    <!-- Navigation et grille de produits -->
                    <div class="relative">
                        <!-- Boutons de navigation -->
                        <button @click="goLeft"
                            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300">
                            <Icon icon="iconamoon:arrow-left-2-fill" width="30" height="30" class="text-white" />
                        </button>
                        <button @click="goRight"
                            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300">
                            <Icon icon="iconamoon:arrow-right-2-fill" width="30" height="30" class="text-white" />
                        </button>

                        <!-- Grille de produits -->
                        <div class="relative overflow-hidden rounded-xl">
                            <transition :name="`slide-${direction}`" mode="out-in">
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
                                    :key="produits[currentIndex].name">
                                    <div v-for="item in produits[currentIndex].items"
                                        :key="produits[currentIndex].name + '-' + item.name"
                                        class="group bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                                        <!-- Image du produit -->
                                        <div class="relative overflow-hidden rounded-lg mb-4 aspect-square">
                                            <img :src="item.src" :alt="item.name"
                                                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                                        </div>

                                        <!-- Informations du produit -->
                                        <div class="space-y-3">
                                            <h3 class="text-xl font-semibold text-white">{{ item.name }}</h3>
                                            <div class="flex justify-between items-center">
                                                <p class="text-2xl font-bold text-amber-400">{{ item.price.toFixed(2) }}
                                                    €</p>
                                                <button @click="addToCart(item)"
                                                    class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center gap-2">
                                                    <Icon icon="mdi:cart-plus" width="20" />
                                                    Ajouter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>

                <!-- Image de présentation -->
                <div class="w-full lg:w-1/3">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <img :src="produits[currentIndex].mage" :alt="produits[currentIndex].name"
                            class="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 p-6">
                                <h3 class="text-2xl font-serif text-white mb-2">{{ produits[currentIndex].name }}</h3>
                                <p class="text-white/80">Découvrez notre collection exclusive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Animations de transition */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    width: 100%;
}

.slide-right-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.slide-right-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-right-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-right-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-left-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-left-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-left-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

/* Animation de fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>