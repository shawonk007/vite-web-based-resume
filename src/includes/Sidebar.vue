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
      <router-link :to="{ name : 'welcome' }">
        <img src="@/assets/images/shawon.jpg" class="rounded-full border-4 border-white p-1 w-40 h-40" alt="" />
      </router-link>
      <h3 class="text-3xl text-white font-bold font-cursive uppercase mt-8">Nasir Uddin Khan</h3>
      <h6 class="text-xl text-white font-semibold font-monospace border-t-4 border-white tracking-tight">Designer & Developer</h6>
    </div>
    <nav class="px-4 py-2">
      <ul class="flex flex-col gap-1">
        <router-link :to="{ name : 'about' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'user-circle']" class="w-4 h-4" />
          <span>About Me</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'graduation-cap']" class="w-4 h-4" />
          <span>Academic</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'briefcase']" class="w-4 h-4" />
          <span>Employment</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'chart-area']" class="w-4 h-4" />
          <span>Abilities</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'folder-open']" class="w-4 h-4" />
          <span>Projects</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'building-columns']" class="w-4 h-4" />
          <span>Trainings</span>
        </router-link>
        <router-link :to="{ name : 'welcome' }" class="flex items-center justify-normal gap-4 text-white font-semibold uppercase rounded-md px-4 py-1.5">
          <fa-icon :icon="['fas', 'award']" class="w-4 h-4" />
          <span>Achievements</span>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>