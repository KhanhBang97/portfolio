<script setup>
import { Header, Footer } from '../components/client';
</script>
<template>
    <div class="">
       <Header/>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <div class="bg-black text-white">
       <Footer/>
    </div>
</template>