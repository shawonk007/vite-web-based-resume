<script setup>
import { sidebarWidth } from '@/state/sidebar';
import Sidebar from '@/includes/Sidebar.vue';
import BackToTop from '@/components/BackToTop.vue';

</script>

<template>
  <Sidebar />
  <main class="" :style="{ marginLeft: sidebarWidth }">
    <BackToTop />
    <slot />
  </main>
</template>