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
    Sidebar
  </aside>
</template>