<script setup>
import { toggleSidebar } from '@/state/sidebar';
</script>

<template>
  <nav class="flex xl:hidden 2xl:hidden items-center justify-between bg-gray-900 sticky top-0 px-8 py-4">
    <router-link :to="{ name : 'welcome' }">
      <img src="@/assets/images/logo_sk_02.png" class="w-[200px]" alt="" />
    </router-link>
    <button @click="toggleSidebar" class="text-gray-600">
      <fa-icon :icon="['fas', 'bars']" />
    </button>
  </nav>
</template>