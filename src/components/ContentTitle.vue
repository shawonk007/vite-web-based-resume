<script setup>
defineProps ({
  content : {
    type : String,
    default : ''
  }
});
</script>

<template>
  <!-- <h5 class="text-2xl text-white font-bold font-ubuntu bg-blue-400 rounded-md px-4 py-1 mb-5">
    <fa-icon :icon="['fas', 'hand-point-right']" />
    <span class="ml-4">{{ content }}</span>
  </h5> -->
  <h5 class="flex items-center text-2xl text-white font-bold font-ubuntu bg-blue-400 rounded-md after:mt-0.5 after:flex-1 after:border-t-2 after:border-white px-4 py-0.5 mb-6" >
    <fa-icon :icon="['fas', 'hand-point-right']" />
    <span class="mx-4">{{ content }} </span>
  </h5>
</template>