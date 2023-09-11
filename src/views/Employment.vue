<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";

const informations = [
  { 
    title : 'Computer Operator', join : 'Mar-2022', leave : 'Jun-2022', organization : 'Shajan Publications', location : 'New Market City Complex, New Market, Dhaka-1205',
    responsility : [
      'Compose and edit books for different universities.',
      'Book format page setup, make print ready file and printing on tracing paper.',
      'Design book pages as well as cover pages.'
    ]
  },
  { 
    title : 'Computer Lab Assistant', join : 'Nov-2018', leave : 'Jul-2019', organization : 'Muslim Aid Institute of Technology (MAIT)', location : 'Pallabi, Mirpur, Dhaka-1216',
    responsility : [
      'Assistance of class under Bangladesh Open University (BOU).',
      'Hardware components installation, replacement, maintenance and troubleshooting.',
      'Different kinds of software (OS, Anti-Virus etc.) installation and maintenance.',
      'Configuration of Internet and Network (LAN, WLAN, Wi-Fi) management.'
    ]
  },
  { 
    title : 'Course Co-Ordinator', join : 'Sept-2013', leave : 'Dec-2015', organization : 'Alpha IT Village', location : 'Pallabi, Mirpur, Dhaka-1216',
    responsility : [
      'Create course plan and structure, maintain classes on a project of N.D.B.U.S (NGO).',
      'Teach Computer Fundamentals & Graphic Design according to course plan.',
      'Hardware components installation, replacement, maintenance and troubleshooting.',
      'Different kinds of software (OS, Anti-Virus etc.) installation and maintenance.',
      'Configuration of Internet and Network (LAN, WLAN, Wi-Fi) management.'
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
    <PageTitle icon="graduation-cap" heading="Employment History" subheading="about my job experiences" />
    <ContentSection class="grid grid-cols-1 gap-14">
      <ContentCard v-for="(info, index) of informations" display="block" v-bind:key="info.index">
        <div class="block text-white bg-green-600 rounded-md px-3 py-2 w-40 cursor-pointer">
          <fa-icon :icon="['fas', 'briefcase']" />
          <span class="font-bold ml-2.5">Experience-{{ formattedIndex(index) }}</span>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-left" >{{ info.title }}</h4>
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-right" >
            <span>{{ info.join }}</span>
            <span class="px-2">to</span>
            <span v-if="info.leave">{{ info.leave }}</span>
            <span v-else>Continuing</span>
          </h4>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-left" >{{ info.organization }}</h6>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-right" >{{ info.location }}</h6>
        </div>
        <ol class="flex flex-col items-start gap-4 mt-8">
          <h6 class="text-2xl text-gray-900 font-bold">Job Responsibilities</h6>
          <li v-for="data of info.responsility" >
            <fa-icon :icon="['far', 'check-circle']" />
            <span class="ml-4">{{ data }}</span>
          </li>
        </ol>
      </ContentCard>
    </ContentSection>
  </AppLayout>
</template>