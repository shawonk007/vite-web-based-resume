<script setup>
import { sidebarWidth } from '@/state/sidebar';
import Sidebar from '@/includes/Sidebar.vue';
import BackToTop from '@/components/BackToTop.vue';
import Navbar from '@/includes/Navbar.vue';

</script>

<template>
  <Sidebar />
  <main class="" :style="{ marginLeft: sidebarWidth }">
    <BackToTop />
    <!-- <Navbar /> -->
    <slot />
  </main>
</template>