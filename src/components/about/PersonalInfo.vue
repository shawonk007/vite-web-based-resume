<script>
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

export default {
  name : "PersonalInfo",
  data : () => {
    return {
      informations : [
        { title : 'Full Name', data : 'Md. Nasir Uddin Khan' },
        { title : 'Date of Birth', data : 'March 06, 1996' },
        { title : 'Nationality', data : 'Bangladeshi (By Birth)' },
        { title : 'Gender', data : 'Male' },
        { title : 'Religion', data : 'Islam' },
        { title : 'Marital Status', data : 'Unmarried' },
      ]
    };
  },
  components : { ContentCard, ContentTitle }
}
</script>

<template>
  <ContentCard display="block">
    <ContentTitle content="Personal Information" />
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