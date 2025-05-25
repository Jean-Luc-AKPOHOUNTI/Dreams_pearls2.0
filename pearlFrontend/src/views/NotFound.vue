<script setup>

</script>


<template>
  <!-- Appliquer les styles de la page 404 avec Tailwind -->
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="text-center max-w-md p-8 bg-white bg-opacity-90 rounded-3xl shadow-xl animate-fadeIn">
      <h1 class="text-8xl font-bold text-gray-800 mb-4 leading-none drop-shadow-lg animate-float">404</h1>
      <h2 class="text-2xl text-gray-700 mb-4 font-semibold">Page non trouvée</h2>
      <p class="text-lg text-gray-600 mb-8 leading-relaxed">
        Oups ! La page que vous recherchez semble avoir disparu dans les profondeurs de l'océan...
      </p>
      <div class="my-8 relative w-full h-40 flex justify-center items-center">
        <img 
          src="https://i.pinimg.com/736x/c4/dc/f7/c4dcf793cbd9bec922337a6f0b50fddf.jpg" 
          alt="Perle animée" 
          class="w-full h-full animate-pearlFloat drop-shadow-xl"
        />
      </div>
      <router-link to="/" class="inline-block px-8 py-4 bg-gradient-to-br from-indigo-600 to-purple-500 text-white font-semibold rounded-full transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5">
        Retour à l'accueil
      </router-link>
    </div>
  </div>
</template>

