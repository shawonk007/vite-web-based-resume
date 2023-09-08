<script>
export default {
  name : "SocialMedia",
  data : () => {
    return {
        socialLinks : [
        { icon: 'facebook-f', title: 'Facebook', url: 'https://www.facebook.com/shawonkhan.cupid' },
        { icon: 'twitter', title: 'Twitter', url: 'https://www.twitter.com/shawonk9999' },
        { icon: 'linkedin-in', title: 'LinkedIn', url: 'https://www.linkedin.com/in/shawonkhan007' },
        { icon: 'instagram', title: 'Instagram', url: 'https://www.instagram.com/shawonk9999' },
        { icon: 'github', title: 'Github', url: 'https://www.github.com/shawonk' },
        { icon: 'behance', title: 'Behance', url: 'https://www.behance.com/shawonk9999' }
      ]
    };
  }
}
</script>

<template>
  <ul class="flex items-center gap-4">
    <a v-for="social of socialLinks" v-bind:href="social.url" target="_blank" :title="social.title" >
      <fa-icon :icon="['fab', social.icon ]" class="block text-gray-700 hover:text-white hover:bg-gray-700 border-2 border-gray-700 rounded-full p-1.5 w-5 h-5" />
    </a>
  </ul>
</template>