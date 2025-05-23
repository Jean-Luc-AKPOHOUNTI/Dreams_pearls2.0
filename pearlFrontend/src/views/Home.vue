<script setup>
import { Icon } from '@iconify/vue';


</script>

<template>
    <div class="h-full">
        <!-- Aceuil -->
        <div class="flex justify-around items-center pt-10 h-[750px] bg-[url('https://img.freepik.com/premium-photo/luxury-expensive-jewelry-design-professional-macro-photography-black-background_950002-45913.jpg')] bg-no-repeat bg-cover bg-center">
            <div class="flex flex-col items-center justify-center gap-4 w-5/10 h-96">
                <div class="w-full m-0">
                    <h1 class="w-full text-white font-extralight text-7xl">Our Luxury</h1>
                    <h1 class="w-full text-white font-extralight text-7xl"> Collection</h1>
                </div>
                <p class="text-justify text-2xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur nam, perferendis, quasi, quos sapiente voluptate quia eum asperiores optio labore quidem velit exercitationem quisquam modi repellat beatae doloremque fugit.</p>
            </div>
            <div class=" flex items-center justify-center w-3/10">
                <!-- <img class="" src="https://i.pinimg.com/736x/a8/1a/6f/a81a6fad94a349d64990a0b45ba9c1cd.jpg" alt="Image d'ensemble de perle"> -->
            </div>
        </div>

        <!-- Produits -->
        <div class="pt-8">
            <h2 class="w-full mb-8 p-4 text-center text-3xl bg-slate-50">Our Speciality</h2>
            <div class="flex justify-center items-center gap-15 mt-4 h-[700px]">
                <div class="w-2/10 flex flex-col items-center justify-center gap-8 shadow-2xl h-7/10 p-3 rounded-2xl hover:shadow-3xs hover:scale-110 hover:border hover:shadow-amber-100 transition-all transition-normal duration-300">
                    <h3 class="text-center p-4">Offer N°1</h3>
                    <img class="h-60" src="https://i.pinimg.com/736x/3b/69/94/3b6994f6cb0cd7d84795c1c6ec17a67b.jpg" alt="bijou taille">
                    <p class="text-center text-[18px] mt-4">
                        <button class="border p-2 rounded-md bg-amber-100 cursor-pointer">
                            <RouterLink to="/produit">Découvrir</RouterLink>
                        </button>
                    </p>
                </div>
                <div class="w-2/10 flex flex-col items-center justify-center gap-8 shadow-2xl h-7/10 p-3 rounded-2xl hover:shadow-3xs hover:scale-110 hover:border hover:shadow-amber-100 transition-all transition-normal duration-300">
                    <h3 class="text-center p-4">Offer N°2</h3>
                    <img class="h-60" src="https://cdn.shopify.com/s/files/1/0510/5525/products/bd136_1024x1024.JPG?v=1518475763" alt="bracelet pied">
                    <p class="text-center text-[18px] mt-4">
                        <button class="border p-2 rounded-md bg-amber-100 cursor-pointer">
                            <RouterLink to="/produit">Découvrir</RouterLink>
                        </button>
                    </p>
                </div>
                <div class="w-2/10 flex flex-col items-center justify-center gap-8 shadow-2xl h-7/10 p-3 rounded-2xl hover:shadow-3xs hover:scale-110 hover:border hover:shadow-amber-100 transition-all transition-normal duration-300">
                    <h3 class="text-center p-4">Offer N°3</h3>
                    <img class="h-60" src="https://th.bing.com/th/id/OIP.6bsQV1KormTm9Edn3e_HkgHaHa?cb=iwp2&rs=1&pid=ImgDetMain" alt="bracelet poignet">
                    <p class="text-center text-[18px] mt-4">
                        <button class="border p-2 rounded-md bg-amber-100 cursor-pointer">
                            <RouterLink to="/produit">Découvrir</RouterLink>
                        </button>
                    </p>
                </div>
            </div>
        </div>

        <!-- About Us -->
        <div class="pt-20">
            <h2 class="w-full p-4 mb-4 text-center text-3xl bg-slate-50">About US</h2>
            <div class="flex justify-around items-center">
                <div class=" w-3/10 h-[400px]">
                    <img class="h-full" src="https://blenderartists.org/uploads/default/original/4X/d/8/9/d8959cbadb1af1506237f4787f4799e8f2de4e15.jpeg" alt="Logo du site">
                </div>
                <div class="w-5/10">
                    <p class="text-justify text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa, laborum dicta ab suscipit quos adipisci, accusantium quam excepturi vel nisi laboriosam atque aut. Cum molestiae fugiat consequuntur eos quod!
                        Deleniti perferendis corporis est sequi voluptate, quam fugiat aliquam dignissimos necessitatibus dolores quod odio, a totam porro beatae harum esse illo? Molestias ullam eligendi minima nam, doloribus expedita aspernatur nesciunt.
                        Sequi, obcaecati sed magni vel, numquam commodi aperiam, praesentium est minima quod quisquam non in laboriosam similique excepturi incidunt saepe totam eligendi magnam iure? Quia, eius deserunt. Officiis, illum necessitatibus?
                        Repudiandae officiis ipsum, nulla minima doloremque vitae nihil expedita velit dolores quo numquam ratione, deserunt neque distinctio vel, nesciunt magnam? Corporis accusamus, quaerat deserunt adipisci saepe quos quam sapiente nesciunt.
                    </p>
                    <p class="text-end text-[18px] mt-4">
                        <button class="border p-2 w-2/10 rounded-md bg-amber-100 cursor-pointer">
                            <RouterLink to="/about">Lire plus..</RouterLink>
                        </button>
                    </p>
                </div>
            </div> 
        </div>

        <!-- Contact US -->
        <div class="pt-15">
            <h2 class="w-full p-4 text-center text-3xl bg-slate-50">Contact Us</h2>
            <div class="flex justify-center items-center text-4xl h-[550px] bg-[url('https://img.freepik.com/premium-photo/luxury-expensive-jewelry-design-professional-macro-photography-black-background_950002-45907.jpg')] bg-no-repeat bg-cover bg-center">
                <RouterLink to="/contact">
                    <div class="flex justify-around items-center w-90 bg-slate-200 p-4 rounded-2xl hover:bg-indigo-200 hover:text-white">
                        <p>Nous contactez</p>
                        <Icon icon="fluent:arrow-enter-20-regular" height="40" width="40" />
                    </div>
                </RouterLink>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>