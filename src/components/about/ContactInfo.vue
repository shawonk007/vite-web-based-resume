<script>
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

export default {
  name : "ContactInfo",
  data : () => {
    return {
      informations : [
        { icon: 'house', title : 'Address', data1 : '01/10, 12/D, Pallabi', data2 : 'Mirpur, Dhaka-1216' },
        { icon: 'phone', title : 'Cell Phone', data1 : '+88 (019) 96-021439', data2 : '+88 (016) 88-947741' },
        { icon: 'envelope', title : 'Email Address', data1 : 'shawonk007@gmail.com', data2 : 'shawonk007@hotmail.com' },
        { icon: 'globe', title : 'Website', data1 : 'www.shawon-khan.com' },
      ]
    };
  },
  components : { ContentCard, ContentTitle }
}
</script>

<template>
  <ContentCard display="block">
    <ContentTitle content="Contact Information" />
    <table class="min-w-full">
      <tbody>
        <tr v-for="info of informations" class="" v-bind:key="info.index">
          <th class="text-left py-2 w-[40%]">
            <fa-icon :icon="['fas', info.icon ]" class="w-4 h-4" />
            <span class="ml-4">{{ info.title }}</span>
          </th>
          <td class="py-2 w-[5%]">:</td>
          <td class="text-left py-2 w-[55%]">
            <span>{{ info.data1 }}</span><br />
            <span v-if="info.data2">{{ info.data2 }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </ContentCard>
</template>