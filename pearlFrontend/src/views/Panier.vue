<script setup>
// Import des dépendances nécessaires
import { useCartStore } from '../stores/cart'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

// Initialisation du store du panier et du router
const cartStore = useCartStore()
const router = useRouter()

// Fonction pour supprimer un article du panier
function removeItem(productName) {
    cartStore.removeFromCart(productName)
}

// Fonction pour mettre à jour la quantité d'un article
function updateQuantity(productName, quantity) {
    if (quantity > 0) {
        cartStore.updateQuantity(productName, quantity)
    }
}

// Fonction pour naviguer vers la page de paiement
function goToPayment() {
    router.push('/paiement')
}
</script>

<template>
    <!-- Conteneur principal avec fond dégradé -->
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- Titre de la page avec animation -->
            <h1 class="text-4xl font-bold text-center mb-12 text-gray-800 transform hover:scale-105 transition-transform duration-300">
                Votre Panier
            </h1>
            
            <!-- Message si le panier est vide -->
            <div v-if="cartStore.items.length === 0" class="text-center py-12 bg-white rounded-xl shadow-lg">
                <Icon icon="mdi:cart-outline" class="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p class="text-xl text-gray-600">Votre panier est vide</p>
            </div>
            
            <!-- Contenu du panier si non vide -->
            <div v-else class="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-shadow duration-300">
                <!-- Liste des articles -->
                <div class="space-y-6">
                    <!-- Article individuel -->
                    <div v-for="item in cartStore.items" :key="item.name" 
                         class="flex items-center justify-between border-b border-gray-100 pb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
                        <!-- Informations du produit -->
                        <div class="flex items-center space-x-6">
                            <img :src="item.src" :alt="item.name" class="w-24 h-24 object-cover rounded-lg shadow-md">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800">{{ item.name }}</h3>
                                <p class="text-lg text-amber-600 font-medium">{{ item.price.toFixed(2) }}€</p>
                            </div>
                        </div>
                        
                        <!-- Contrôles de quantité et suppression -->
                        <div class="flex items-center space-x-6">
                            <!-- Boutons de quantité -->
                            <div class="flex items-center space-x-3">
                                <button @click="updateQuantity(item.name, item.quantity - 1)"
                                        class="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <Icon icon="mdi:minus" class="text-gray-600" />
                                </button>
                                <span class="w-10 text-center text-lg font-medium">{{ item.quantity }}</span>
                                <button @click="updateQuantity(item.name, item.quantity + 1)"
                                        class="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                    <Icon icon="mdi:plus" class="text-gray-600" />
                                </button>
                            </div>
                            
                            <!-- Bouton de suppression -->
                            <button @click="removeItem(item.name)"
                                    class="text-red-500 hover:text-red-700 transition-colors duration-200">
                                <Icon icon="mdi:delete" width="28" />
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Résumé et actions -->
                <div class="mt-8 border-t border-gray-100 pt-6">
                    <!-- Total du panier -->
                    <div class="flex justify-between items-center mb-8">
                        <span class="text-2xl font-semibold text-gray-800">Total:</span>
                        <span class="text-3xl font-bold text-amber-600">{{ cartStore.cartTotal.toFixed(2) }}€</span>
                    </div>
                    
                    <!-- Boutons d'action -->
                    <div class="flex justify-end space-x-6">
                        <!-- Bouton pour vider le panier -->
                        <button @click="cartStore.clearCart()"
                                class="px-8 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium">
                            Vider le panier
                        </button>
                        <!-- Bouton pour procéder au paiement -->
                        <button @click="goToPayment"
                                class="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                            Procéder au paiement
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ajout d'animations personnalisées */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.min-h-screen {
    animation: fadeIn 0.5s ease-out;
}
</style>