<script>
import { collapsed, toggleSidebar, sidebarWidth } from '@/state/sidebar';

export default {
  props : {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <aside class="fixed bg-gray-900 h-screen" :style="{ width: sidebarWidth }" >
    <div></div>
    <div class="flex flex-col items-center justify-center my-6">
      <img src="@/assets/images/shawon.jpg" class="rounded-full border-4 border-white p-0.5 w-40 h-40" alt="" />
      <h3 class="mt-4">Nasir Uddin Khan</h3>
      <h6>Design & Developer</h6>
    </div>
    <nav class="px-4 py-2">
      <ul class="flex flex-col gap-1">
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Overview</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">About Me</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Academic</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Employment</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Abilities</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Projects</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Trainings</router-link>
        <router-link :to="{ name : 'welcome' }" class="block text-center text-white font-bold uppercase rounded-md px-4 py-1.5">Achievements</router-link>
      </ul>
    </nav>
  </aside>
</template>