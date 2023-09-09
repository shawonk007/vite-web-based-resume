<script setup>
defineProps ({
  icon : {
    type : String,
    default : 'Page Title'
  },
  heading : {
    type : String,
    default : 'Page Heading'
  },
  subheading : {
    type : String,
    default : 'Page Sub-Heading'
  }
});
</script>

<template>
  <section class="px-4 my-14">
    <div class="flex items-center gap-4 bg-gray-900 rounded-l-full divide-x-4 divide-double divide-gray-400 px-3 pt-2 pb-1.5">
      <div class="block text-gray-500">
        <fa-icon :icon="['fas',  icon ]" class="border-4 border-dashed border-gray-400 rounded-full p-1.5 w-10 h-10" />
      </div>
      <div class="block pl-4">
        <h4 class="text-3xl text-gray-400 font-bold font-cursive uppercase tracking-wide">{{ heading }}</h4>
        <p class="text-2xl text-gray-500 font-semibold font-monospace -mt-1">{{ subheading }}</p>
      </div>
    </div>
  </section>
</template>