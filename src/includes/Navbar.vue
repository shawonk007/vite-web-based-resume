<script setup>
import { toggleSidebar } from '@/state/sidebar';
</script>

<template>
  <nav>
    <button @click="toggleSidebar" class="text-gray-600">
      <fa-icon :icon="['fas', 'bars']" />
    </button>
  </nav>
</template>