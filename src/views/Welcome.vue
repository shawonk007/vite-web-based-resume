<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentTitle from "@/components/ContentTitle.vue";
import SocialMedia from "@/components/SocialMedia.vue";
</script>

<template>
  <AppLayout>
    <section class="px-4 py-20">
      <h1 class="flex items-center justify-center gap-3 text-7xl font-extrabold font-cursive uppercase tracking-wide">
        <span class="text-green-600">Muhammad</span>
        <span class="text-blue-600">Nasir Uddin Khan</span>
        <span class="text-red-600">Shawon</span>
      </h1>
      <div class="flex items-center justify-center gap-4 divide-x-4 divide--gray-400 mt-6">
        <h3 class="text-3xl">
          <fa-icon :icon="['fas', 'map-marker-alt']" class="mr-4" />
          <a href="javascript:void(0)" class="font-medium font-condensed">Pallabi, Mirpur, Dhaka-1216</a>
        </h3>
        <h3 class="text-3xl pl-4">
          <fa-icon :icon="['fas', 'phone']" class="mr-4" />
          <a href="" class="font-medium font-condensed">+88 (019) 96-021439</a>
        </h3>
        <h3 class="text-3xl pl-4">
          <fa-icon :icon="['fas', 'envelope']" class="mr-4" />
          <a href="" class="font-medium font-condensed">shawonk007@gmail.com</a>
        </h3>
      </div>
    </section>
    <section class="px-4 pt-0 pb-20">
      <!-- <div class="mb-14 flex items-center before:mt-0.5 before:flex-1 before:border-t-8 before:border-double before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t-8 after:border-double after:border-neutral-300">
        <h2 class="text-2xl text-neutral-400 text-center font-semibold font-monospace uppercase mx-4 mb-0">Introduction</h2>
      </div> -->
      <div class="flex items-center justify-between gap-6 bg-white border border-gray-200 rounded-md shadow-md shadow-gray-400 p-6">
        <div class="w-2/5">
          <img src="@/assets/images/shawon.jpg" class="block border-4 border-gray-200 rounded-md w-full" alt="" />
        </div>
        <div class="w-3/5">
          <ContentTitle content="Professional Summary" />
          <p class="text-justify text-gray-900 leading-8 mb-6">Highly motivated and driven individual with a passion for graphic design and web application development. Proficient in using Adobe Creative Cloud (CC), Laravel and Vue.js to create visually appealing and functional websites and applications. A quick learner with strong problem-solving skills and the ability to work well in a team environment. Seeking opportunities to grow as an IT professional while contributing to the success of the company.</p>
          <ContentTitle content="Follow Me" />
          <SocialMedia size="p-2 w-8 h-8" />
        </div>
      </div>
    </section>
  </AppLayout>
</template>