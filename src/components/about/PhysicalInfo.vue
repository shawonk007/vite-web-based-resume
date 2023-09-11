<script>
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

export default {
  name : "PhysicalInfo",
  data : () => {
    return {
      informations : [
        { title : 'Height', data : '5 feet 3 inch' },
        { title : 'Weight', data : '64 Kgs' },
        { title : 'Blood Group', data : 'B-Positive' }
      ]
    };
  },
  components : { ContentCard, ContentTitle }
}
</script>

<template>
  <ContentCard display="block">
    <ContentTitle content="Physical Information" />
    <table class="min-w-full">
      <tbody>
        <tr v-for="info of informations" class="" v-bind:key="info.index" >
          <th class="text-left py-2 w-[40%]">{{ info.title }}</th>
          <td class="py-2 w-[5%]">:</td>
          <td class="text-left py-2 w-[55%]">{{ info.data }}</td>
        </tr>
      </tbody>
    </table>
  </ContentCard>
</template>