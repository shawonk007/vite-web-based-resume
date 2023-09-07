<script setup>
import { toggleSidebar } from '@/state/sidebar';
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <h1>Welcome</h1>
    <fa-icon :icon="['fas', 'house']" />
    <span @click="toggleSidebar" class="text-gray-600">
        <fa-icon :icon="['fas', 'bars']" />
    </span>
  </AppLayout>
</template>