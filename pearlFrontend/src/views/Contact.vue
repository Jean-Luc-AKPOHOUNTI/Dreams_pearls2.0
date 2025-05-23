<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

// État du formulaire
const formData = ref({
    nom: '',
    email: '',
    sujet: '',
    message: ''
})

// État de validation
const errors = ref({})
const isSubmitting = ref(false)
const submitSuccess = ref(false)

// Validation du formulaire
const validateForm = () => {
    errors.value = {}
    let isValid = true

    // Validation du nom
    if (!formData.value.nom.trim()) {
        errors.value.nom = 'Le nom est requis'
        isValid = false
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.value.email.trim()) {
        errors.value.email = 'L\'email est requis'
        isValid = false
    } else if (!emailRegex.test(formData.value.email)) {
        errors.value.email = 'Format d\'email invalide'
        isValid = false
    }

    // Validation du sujet
    if (!formData.value.sujet.trim()) {
        errors.value.sujet = 'Le sujet est requis'
        isValid = false
    }

    // Validation du message
    if (!formData.value.message.trim()) {
        errors.value.message = 'Le message est requis'
        isValid = false
    } else if (formData.value.message.length < 10) {
        errors.value.message = 'Le message doit contenir au moins 10 caractères sinon il sera ignoré. Merci de réessayer.'
        isValid = false
    }

    return isValid
}

// Soumission du formulaire
const handleSubmit = async () => {
    if (!validateForm()) return

    isSubmitting.value = true
    try {
        // Simulation d'envoi de formulaire
        await new Promise(resolve => setTimeout(resolve, 1500))
        submitSuccess.value = true
        formData.value = {
            nom: '',
            email: '',
            sujet: '',
            message: ''
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
    <div class="min-h-screen bg-[url('https://img.freepik.com/photos-premium/bijoux-or-luxueux-pierres-precieuses-etincelantes-fond-sombre_653240-17449.jpg')] bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- En-tête -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-200 mb-4">Contactez-nous</h1>
                <p class="text-lg text-gray-300">
                    Nous sommes là pour répondre à toutes vos questions
                </p> 
            </div>

            <!-- Grille de contact -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Informations de contact -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-6">Nos coordonnées</h2>
                    
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <Icon icon="mdi:map-marker" class="text-amber-500" width="24" />
                            <div>
                                <h3 class="font-medium">Adresse</h3>
                                <p class="text-gray-600">123 Rue des Bijoux, 75001 Cotonou</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3">
                            <Icon icon="mdi:phone" class="text-amber-500" width="24" />
                            <div>
                                <h3 class="font-medium">Téléphone</h3>
                                <p class="text-gray-600">+229 01 51 51 96 81</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3">
                            <Icon icon="mdi:email" class="text-amber-500" width="24" />
                            <div>
                                <h3 class="font-medium">Email</h3>
                                <p class="text-gray-600">dreampearl@gmail.com</p>
                            </div>
                        </div>

                        <div class="flex items-center space-x-3">
                            <Icon icon="mdi:clock" class="text-amber-500" width="24" />
                            <div>
                                <h3 class="font-medium">Horaires</h3>
                                <p class="text-gray-600">Lun-Sam: 10h-19h</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Formulaire de contact -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>

                    <!-- Message de succès -->
                    <div v-if="submitSuccess" 
                         class="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        Votre message a été envoyé avec succès !
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <!-- Nom -->
                        <div>
                            <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
                            <input 
                                type="text" 
                                id="nom" 
                                v-model="formData.nom"
                                class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                :class="{ 'border-red-500': errors.nom }"
                            >
                            <p v-if="errors.nom" class="mt-1 text-sm text-red-600">{{ errors.nom }}</p>
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email"
                                class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                :class="{ 'border-red-500': errors.email }"
                            >
                            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                        </div>

                        <!-- Sujet -->
                        <div>
                            <label for="sujet" class="block text-sm font-medium text-gray-700">Sujet</label>
                            <input 
                                type="text" 
                                id="sujet" 
                                v-model="formData.sujet"
                                class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                :class="{ 'border-red-500': errors.sujet }"
                            >
                            <p v-if="errors.sujet" class="mt-1 text-sm text-red-600">{{ errors.sujet }}</p>
                        </div>

                        <!-- Message -->
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <textarea 
                                id="message" 
                                v-model="formData.message"
                                rows="4"
                                class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                                :class="{ 'border-red-500': errors.message }"
                            ></textarea>
                            <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
                        </div>

                        <!-- Bouton d'envoi -->
                        <div>
                            <button 
                                type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                                :disabled="isSubmitting"
                            >
                                <span v-if="isSubmitting">
                                    <Icon icon="mdi:loading" class="animate-spin mr-2" />
                                    Envoi en cours...
                                </span>
                                <span v-else>Envoyer le message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Styles pour les champs de formulaire */
input:focus, textarea:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
}

/* Animation pour le bouton de chargement */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>