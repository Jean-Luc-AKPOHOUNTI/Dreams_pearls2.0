<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cart'
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'

const cartStore = useCartStore()
const router = useRouter()

// Configuration EmailJS
const SERVICE_ID = 'service_rsgz1s9' // Remplacez par l'ID de votre service EmailJS
const TEMPLATE_ID = 'template_022ltgn' // Remplacez par l'ID de votre template
const PUBLIC_KEY = 'JoSJB8I57Wlu8JxJf' // Remplacez par votre clé publique

// Initialisation d'EmailJS
emailjs.init(PUBLIC_KEY)

// Log pour vérifier que le composant est chargé
onMounted(() => {
    console.log('Composant Paiement monté')
    console.log('État du panier:', cartStore.items)
})

// État du formulaire
const currentStep = ref(1)
const totalSteps = 3

// Données du formulaire
const formData = ref({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: '',
    codePostal: '',
    numeroCarte: '',
    dateExpiration: '',
    cvv: ''
})

// Validation du formulaire
const errors = ref({})

const validateStep = (step) => {
    errors.value = {}
    let isValid = true

    if (step === 1) {
        if (!formData.value.nom) {
            errors.value.nom = 'Le nom est requis'
            isValid = false
        }
        if (!formData.value.prenom) {
            errors.value.prenom = 'Le prénom est requis'
            isValid = false
        }
        if (!formData.value.email) {
            errors.value.email = 'L\'email est requis'
            isValid = false
        }
        if (!formData.value.telephone) {
            errors.value.telephone = 'Le téléphone est requis'
            isValid = false
        }
    }

    if (step === 2) {
        if (!formData.value.adresse) {
            errors.value.adresse = 'L\'adresse est requise'
            isValid = false
        }
        if (!formData.value.ville) {
            errors.value.ville = 'La ville est requise'
            isValid = false
        }
        if (!formData.value.codePostal) {
            errors.value.codePostal = 'Le code postal est requis'
            isValid = false
        }
    }

    if (step === 3) {
        if (!formData.value.numeroCarte) {
            errors.value.numeroCarte = 'Le numéro de carte est requis'
            isValid = false
        }
        if (!formData.value.dateExpiration) {
            errors.value.dateExpiration = 'La date d\'expiration est requise'
            isValid = false
        }
        if (!formData.value.cvv) {
            errors.value.cvv = 'Le code CVV est requis'
            isValid = false
        }
    }

    return isValid
}

const nextStep = () => {
    if (validateStep(currentStep.value)) {
        if (currentStep.value < totalSteps) {
            currentStep.value++
        }
    }
}

const prevStep = () => {
    if (currentStep.value > 1) {
        currentStep.value--
    }
}

// Fonction pour envoyer l'email de confirmation
const sendConfirmationEmail = async (orderData) => {
    try {
        const templateParams = {
            to_email: orderData.email,
            to_name: `${orderData.prenom} ${orderData.nom}`,
            order_number: Math.floor(Math.random() * 1000000),
            total_amount: cartStore.cartTotal.toFixed(2),
            items: cartStore.items.map(item => `${item.name} x${item.quantity}`).join(', ')
        }

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        console.log('Email envoyé avec succès:', response)
        return true
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error)
        return false
    }
}

const submitPayment = async () => {
    if (validateStep(currentStep.value)) {
        try {
            // Simuler un traitement de paiement
            await new Promise(resolve => setTimeout(resolve, 1500))
            
            // Envoyer l'email de confirmation
            const emailSent = await sendConfirmationEmail(formData.value)
            
            if (!emailSent) {
                throw new Error('Échec de l\'envoi de l\'email de confirmation')
            }
            
            // Vider le panier
            cartStore.clearCart()
            
            // Rediriger vers la page de confirmation
            router.push('/confirmation')
        } catch (error) {
            console.error('Erreur lors du paiement:', error)
            alert('Erreur : ' + error.message)
        }
    }
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- En-tête avec étapes -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Paiement</h1>
                <div class="flex justify-between items-center">
                    <div v-for="step in totalSteps" :key="step" 
                         class="flex items-center">
                        <div :class="[
                            'w-10 h-10 rounded-full flex items-center justify-center',
                            currentStep >= step ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'
                        ]">
                            {{ step }}
                        </div>
                        <div v-if="step < totalSteps" 
                             :class="[
                                'h-1 w-24 mx-2',
                                currentStep > step ? 'bg-amber-500' : 'bg-gray-200'
                             ]">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Formulaire -->
            <div class="bg-white rounded-xl shadow-lg p-8">
                <!-- Étape 1: Informations personnelles -->
                <div v-if="currentStep === 1" class="space-y-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Informations personnelles</h2>
                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-gray-700 mb-2">Nom</label>
                            <input v-model="formData.nom" type="text" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.nom}">
                            <p v-if="errors.nom" class="text-red-500 text-sm mt-1">{{ errors.nom }}</p>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Prénom</label>
                            <input v-model="formData.prenom" type="text" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.prenom}">
                            <p v-if="errors.prenom" class="text-red-500 text-sm mt-1">{{ errors.prenom }}</p>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Email</label>
                            <input v-model="formData.email" type="email" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.email}">
                            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">Téléphone</label>
                            <input v-model="formData.telephone" type="tel" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.telephone}">
                            <p v-if="errors.telephone" class="text-red-500 text-sm mt-1">{{ errors.telephone }}</p>
                        </div>
                    </div>
                </div>

                <!-- Étape 2: Adresse de livraison -->
                <div v-if="currentStep === 2" class="space-y-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Adresse de livraison</h2>
                    <div class="space-y-6">
                        <div>
                            <label class="block text-gray-700 mb-2">Adresse</label>
                            <input v-model="formData.adresse" type="text" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.adresse}">
                            <p v-if="errors.adresse" class="text-red-500 text-sm mt-1">{{ errors.adresse }}</p>
                        </div>
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 mb-2">Ville</label>
                                <input v-model="formData.ville" type="text" 
                                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                       :class="{'border-red-500': errors.ville}">
                                <p v-if="errors.ville" class="text-red-500 text-sm mt-1">{{ errors.ville }}</p>
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2">Code Postal</label>
                                <input v-model="formData.codePostal" type="text" 
                                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                       :class="{'border-red-500': errors.codePostal}">
                                <p v-if="errors.codePostal" class="text-red-500 text-sm mt-1">{{ errors.codePostal }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Étape 3: Paiement -->
                <div v-if="currentStep === 3" class="space-y-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Informations de paiement</h2>
                    <div class="space-y-6">
                        <div>
                            <label class="block text-gray-700 mb-2">Numéro de carte</label>
                            <input v-model="formData.numeroCarte" type="text" 
                                   class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                   :class="{'border-red-500': errors.numeroCarte}">
                            <p v-if="errors.numeroCarte" class="text-red-500 text-sm mt-1">{{ errors.numeroCarte }}</p>
                        </div>
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 mb-2">Date d'expiration</label>
                                <input v-model="formData.dateExpiration" type="text" 
                                       placeholder="MM/AA"
                                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                       :class="{'border-red-500': errors.dateExpiration}">
                                <p v-if="errors.dateExpiration" class="text-red-500 text-sm mt-1">{{ errors.dateExpiration }}</p>
                            </div>
                            <div>
                                <label class="block text-gray-700 mb-2">CVV</label>
                                <input v-model="formData.cvv" type="text" 
                                       class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                       :class="{'border-red-500': errors.cvv}">
                                <p v-if="errors.cvv" class="text-red-500 text-sm mt-1">{{ errors.cvv }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Résumé de la commande -->
                <div class="mt-8 border-t border-gray-100 pt-6">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-xl font-semibold text-gray-800">Total à payer:</span>
                        <span class="text-2xl font-bold text-amber-600">{{ cartStore.cartTotal.toFixed(2) }}€</span>
                    </div>
                </div>

                <!-- Boutons de navigation -->
                <div class="flex justify-between mt-8">
                    <button v-if="currentStep > 1" 
                            @click="prevStep"
                            class="px-6 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium">
                        Retour
                    </button>
                    <button v-if="currentStep < totalSteps" 
                            @click="nextStep"
                            class="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium">
                        Suivant
                    </button>
                    <button v-if="currentStep === totalSteps" 
                            @click="submitPayment"
                            class="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium">
                        Payer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.min-h-screen {
    animation: fadeIn 0.5s ease-out;
}
</style> 