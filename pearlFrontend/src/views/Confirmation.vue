<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isVisible = ref(false)

onMounted(() => {
    isVisible.value = true
})

const retourAccueil = () => {
    router.push('/')
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div class="container mx-auto px-4 max-w-2xl">
            <div class="bg-white rounded-xl shadow-lg p-8 text-center"
                 :class="{ 'animate-fade-in': isVisible }">
                <div class="mb-8">
                    <Icon icon="mdi:check-circle" 
                          class="text-6xl text-green-500 mx-auto mb-4" />
                </div>
                
                <h1 class="text-3xl font-bold text-gray-800 mb-4">
                    Commande Confirmée !
                </h1>
                
                <p class="text-gray-600 mb-8">
                    Merci pour votre commande. Nous avons bien reçu votre paiement et nous préparons votre colis avec soin.
                </p>
                
                <div class="space-y-4">
                    <p class="text-gray-700">
                        Un email de confirmation a été envoyé à votre adresse email.
                    </p>
                    <p class="text-gray-700">
                        Numéro de commande : #{{ Math.floor(Math.random() * 1000000) }}
                    </p>
                </div>
                
                <button @click="retourAccueil"
                        class="mt-8 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium">
                    Retour à l'accueil
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style> 