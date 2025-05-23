<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
    isVisible.value = true;
});
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <!-- Hero Section -->
        <div class="relative h-[60vh] overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://media.jewel360.com/12320/kv1.1_1920w.jpg')] bg-cover bg-center bg-no-repeat">
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
            </div>
            <div class="relative h-full flex items-center justify-center">
                <h1 class="text-5xl md:text-6xl font-bold text-white text-center px-4">
                    A Propos de Nous
                </h1>
            </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-4 py-16 max-w-4xl">
            <div class="space-y-12">
                <!-- Introduction -->
                <section class="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <h2 class="text-3xl font-bold text-amber-400 mb-6">Dream Pearl – L'élégance au quotidien</h2>
                    <p class="text-gray-300 leading-relaxed">
                        Entrez dans l'univers raffiné de nos <strong class="text-amber-300">bijoux pour femme</strong>, une collection pensée pour
                        sublimer chaque instant de votre vie. Chez <em class="text-amber-300">Dreams Pearl</em>, nous croyons que chaque bijou raconte une histoire.
                    </p>
                </section>

                <!-- Collection Section -->
                <section class="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <h2 class="text-2xl font-bold text-amber-400 mb-6">Une collection inspirée</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <Icon icon="mdi:necklace" class="text-amber-400 text-2xl" />
                                <h3 class="text-xl text-white">Colliers et pendentifs</h3>
                            </div>
                            <p class="text-gray-300">Du ras-de-cou discret au sautoir travaillé, en argent, plaqué or ou ornés de pierres naturelles.</p>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <Icon icon="mdi:ring" class="text-amber-400 text-2xl" />
                                <h3 class="text-xl text-white">Bagues</h3>
                            </div>
                            <p class="text-gray-300">Bagues fines empilables, solitaires romantiques, anneaux géométriques ou pièces statement.</p>
                        </div>
                    </div>
                </section>

                <!-- Values Section -->
                <section class="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <h2 class="text-2xl font-bold text-amber-400 mb-6">Un luxe accessible et éthique</h2>
                    <p class="text-gray-300 leading-relaxed">
                        Chez <em class="text-amber-300">Dreams Pearl</em>, nous avons à cœur de rendre le <strong class="text-amber-300">luxe accessible à toutes</strong>,
                        sans compromis sur la qualité ni sur les valeurs. Nos bijoux sont fabriqués en petites séries avec des artisans créateurs.
                    </p>
                </section>

                <!-- Services Section -->
                <section class="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
                    <h2 class="text-2xl font-bold text-amber-400 mb-6">Une expérience d'achat pensée pour vous</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-3">
                                <Icon icon="mdi:truck-fast" class="text-amber-400 text-2xl" />
                                <h3 class="text-xl text-white">Livraison rapide</h3>
                            </div>
                            <p class="text-gray-300">Livraison rapide et soignée partout en France et à l'international</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                            <div class="flex items-center space-x-3 mb-3">
                                <Icon icon="mdi:account-heart" class="text-amber-400 text-2xl" />
                                <h3 class="text-xl text-white">Service client</h3>
                            </div>
                            <p class="text-gray-300">Service client réactif et attentionné à votre écoute</p>
                        </div>
                    </div>
                </section>

                <!-- Quote Section -->
                <section class="text-center py-12">
                    <blockquote class="text-2xl text-amber-300 italic">
                        "Parce que chaque femme est unique, chaque bijou doit l'être aussi."
                    </blockquote>
                    <div class="flex justify-center mt-6">
                        <Icon icon="game-icons:oyster-pearl" class="text-amber-400 text-4xl animate-pulse" />
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style scoped>
section {
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
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