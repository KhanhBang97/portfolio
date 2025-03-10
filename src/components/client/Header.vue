<script setup>
import { pathRouters } from '../../helpers'
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container mx-auto py-2 flex justify-between items-center">
        <div class="text-[26px] font-bold">
            BoohMakup.
        </div>
        <div class="flex gap-5" >
            <nav v-for="path in pathRouters" :key="path.id">
                <router-link :to=path.pathLink 
                    class="text-[18px] font-[400] ease-linear hover:text-pink-800"
                    exact-active-class="text-pink-600"
                >{{ path.name }}</router-link>
            </nav>
        </div>
    </div>
</template>