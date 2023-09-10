<script>
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

export default {
  name : "PhysicalInfo",
  data : () => {
    return {
      informations : [
        { icon : 'facebook', url : 'https://www.facebook.com/shawonkhan.cupid/', data : 'shawonkhan.cupid' },
        { icon : 'linkedin-in', url : 'https://www.linkedin.com/in/shawonkhan007/', data : 'shawonkhan007' },
        { icon : 'twitter', url : 'https://www.twitter.com/shawonk9999/', data : 'shawonk9999' },
        { icon : 'instagram', url : 'https://www.instagram.com/shawonk9999/', data : 'shawonk9999' },
        { icon : 'github', url : 'https://www.github.com/shawonk007/', data : 'shawonk007' },
        { icon : 'behance', url : 'https://www.behance.net/shawonk9999/', data : 'shawonk9999' },
      ]
    };
  },
  components : { ContentCard, ContentTitle }
}
</script>

<template>
  <ContentCard display="block">
    <ContentTitle content="Social Media" />
    <table class="min-w-full">
      <tbody class="grid grid-cols-2">
        <tr v-for="info of informations" class="" v-bind:key="info.index" >
          <th class="text-left py-2">
            <fa-icon :icon="['fab', info.icon ]" class="w-4 h-4" />
          </th>
          <td class="px-6 py-2">:</td>
          <td class="text-left py-2">
            <a v-bind:href="info.url" target="_blank" >{{ info.data }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </ContentCard>
</template>