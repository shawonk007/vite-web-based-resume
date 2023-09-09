<script setup>
defineProps ({
  display : {
    type : String,
    default : ''
  }
});
</script>

<template>
  <div class="rounded-md bg-white border border-gray-200 shadow-md shadow-gray-400 p-6" :class="display" >
    <slot />
  </div>
</template>