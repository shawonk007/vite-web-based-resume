<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";

const informations = [
  { 
    title : 'Diploma-in-Engineering', session : '2016-2017', institute : 'Muslim Aid Institute of Technology (MAIT)', location : 'Pallabi, Mirpur, Dhaka-1216',
    datatable : [
      { head : 'Board / University', detail : 'B.T.E.B' },
      { head : 'Group / Technology', detail : 'Computer' },
      { head : 'Roll No.', detail : '388859' },
      { head : 'Reg No.', detail : '208602' },
      { head : 'Result', detail : 'CGPA-3.54' },
      { head : 'Passing Year', detail : '2021' },
      { head : 'Duration', detail : '04 Years' },
    ]
  },
  { 
    title : 'Higher Secondary Certificate (HSC)', session : '2011-2012', institute : 'Govt. Banga Bandhu College', location : 'Pallabi, Mirpur, Dhaka-1216',
    datatable : [
      { head : 'Board / University', detail : 'Dhaka' },
      { head : 'Group / Technology', detail : 'Science' },
      { head : 'Roll No.', detail : '102424' },
      { head : 'Reg No.', detail : '693127' },
      { head : 'Result', detail : 'GPA-3.10' },
      { head : 'Passing Year', detail : '2013' },
      { head : 'Duration', detail : '02 Years' },
    ]
  },
  { 
    title : 'Secondary School Certificate (SSC)', session : '2009-2010', institute : 'Bangladesh Adarsha Shikkha Niketon High School', location : 'Pallabi, Mirpur, Dhaka-1216',
    datatable : [
      { head : 'Board / University', detail : 'Dhaka' },
      { head : 'Group / Technology', detail : 'Science' },
      { head : 'Roll No.', detail : '112421' },
      { head : 'Reg No.', detail : '452006' },
      { head : 'Result', detail : 'GPA-3.25' },
      { head : 'Passing Year', detail : '2011' },
      { head : 'Duration', detail : '02 Years' },
    ]
  },
];

const exposeData = {
  informations
};

const formattedIndex = (index) => {
  return index < 9 ? `0${index + 1}` : index + 1;
};
</script>

<template>
  <AppLayout>
    <PageTitle icon="graduation-cap" heading="Academic Qualifications" subheading="know about my academic records" />
    <ContentSection class="grid grid-cols-1 gap-14">
      <ContentCard v-for="(info, index) of informations" display="block" v-bind:key="info.index">
        <div class="block text-white bg-green-600 rounded-md px-3 py-2 w-40 cursor-pointer">
          <fa-icon :icon="['fas', 'graduation-cap']" />
          <span class="font-bold ml-3">Academic-{{ formattedIndex(index) }}</span>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-left" >{{ info.title }}</h4>
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-right" >{{ info.session }}</h4>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-left" >{{ info.institute }}</h6>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-right" >{{ info.location }}</h6>
        </div>
        <table class="min-w-full text-left text-gray-900 font-condensed mt-8">
          <tbody class="grid grid-cols-2 gap-4">
            <tr v-for="data of info.datatable">
              <th scope="col" width="150" >{{ data.head }}</th>
              <td class="px-4">:</td>
              <td>{{ data.detail }}</td>
            </tr>
          </tbody>
        </table>
      </ContentCard>
    </ContentSection>
  </AppLayout>
</template>