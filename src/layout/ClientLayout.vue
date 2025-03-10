<script setup>
import { Header, Footer } from '../components/client'
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
    <div :class="[isScrolled ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow z-9999' : '']">
       <Header/>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="bg-black text-white">
       <Footer/>
    </div>
</template>