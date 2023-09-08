<script setup>
import { sidebarWidth } from '@/state/sidebar';
import Sidebar from '@/includes/Sidebar.vue';

</script>

<template>
  <Sidebar />
  <main class="bg-gray-50" :style="{ marginLeft: sidebarWidth }">
    <slot />
  </main>
</template>