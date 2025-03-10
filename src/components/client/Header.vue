<script setup>
import { pathRouters } from '../../helpers'
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
    <div class="container mx-auto py-4 px-5 md:px-0 flex justify-between items-center">
        <div class="text-[20px] font-bold text-pink-800 md:text-[26px]">
           <router-link to="/"> BoohMakup.</router-link>
        </div>
        <div class="hidden md:flex gap-5" >
            <nav v-for="path in pathRouters" :key="path.id">
                <router-link :to=path.pathLink 
                    class="text-[16px] font-[400] ease-linear hover:text-pink-800 uppercase"
                    exact-active-class="text-pink-600 font-bold"
                >{{ path.name }}</router-link>
            </nav>
        </div>
        <button class="block md:hidden" @click="toggleMenu">
            Mobile
        </button>
         <!-- Mobile Menu -->
        <nav v-show="isMenuOpen" @click.self="isMenuOpen = false" class="fixed w-full h-full bg-black bg-opacity-100 top-0 right-0 shadow-xl
            flex flex-column justify-center items-center
        ">
           <div class="flex flex-col gap-5">
                <nav v-for="path in pathRouters" :key="path.id">
                    <router-link :to=path.pathLink 
                        class="text-[16px] font-[400] ease-linear text-pink-700 uppercase"
                        exact-active-class="text-pink-600 font-bold"
                    >{{ path.name }}</router-link>
                </nav>
           </div>
        </nav>
    </div>
</template>