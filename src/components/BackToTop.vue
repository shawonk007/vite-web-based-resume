<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<template>
  <button id="top" @click="scrollToTop" type="button" class="fixed text-white bg-[crimson] rounded-md bottom-4 right-4 w-8 h-8" :style="{ display: showButton ? 'block' : 'none' }" >
    <fa-icon :icon="['fas', 'angle-up']" />
  </button>
</template>
  
<style scoped>
#top {
  display: none;
  z-index: 50;
}
</style>
  