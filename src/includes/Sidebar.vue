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
  <aside class="fixed bg-gray-900 top-0 h-screen" :style="{ width: sidebarWidth }" >
    <div></div>
    <div class="flex flex-col items-center justify-center my-6">
      <router-link :to="{ name : 'welcome' }">
        <img src="@/assets/images/shawon.jpg" class="rounded-full border-4 border-white p-1 w-40 h-40" alt="" />
      </router-link>
      <h3 class="text-3xl text-gray-400 font-bold font-cursive uppercase mt-8">Nasir Uddin Khan</h3>
      <h6 class="text-xl text-gray-500 font-semibold font-monospace border-t-4 border-white tracking-tight">Designer & Developer</h6>
    </div>
    <nav class="px-4 py-2">
      <ul class="flex flex-col gap-1">
        <router-link :to="{ name : 'about' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'user-circle']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">About Me</span>
        </router-link>
        <router-link :to="{ name : 'academic' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'graduation-cap']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Academic</span>
        </router-link>
        <router-link :to="{ name : 'employment' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'briefcase']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Employment</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'chart-area']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Abilities</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'folder-open']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Projects</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'building-columns']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Trainings</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'award']" class="w-4 h-4 text-gray-500" />
          <span class="font-semibold uppercase text-gray-400">Achievements</span>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>