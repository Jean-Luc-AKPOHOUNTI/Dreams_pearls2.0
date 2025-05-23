<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { useCartStore } from './stores/cart'

const cartStore = useCartStore()
</script>

<template>
    <Header />

        <RouterView />
        
    <Footer />
</template>

<style scoped>

</style>