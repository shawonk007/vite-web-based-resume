<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";

const informations = [
  { 
    title : 'Professional Web App Development', duration : '06 Months', organization : 'Genuity Systems Ltd. (Provided By IsDB-BISEW)', location : 'Begum Rokeya Sharani, Kazipara, Dhaka-1216',
    responsility : [
      'Basic concepts of operating system and computer fundamentals',
      'Website design and basic User Interface (UI) creation',
      'Server-side development with RAW and Object-oriented PHP',
      'Database management and its operations using MySQL database',
      'Learned to control and manage Git version and use it',
      'Customization of WordPress themes and create websites',
      'Learned development process of WordPress theme',
      'Develop web applications using PHP Laravel framework'
    ]
  },
  { 
    title : 'Web Development with Laravel', duration : '03 Months', organization : 'European IT Solutions', location : 'Noor Mansions, Mirpur-10, Dhaka-1216',
    responsility : [
      'Basic website design using Bootstrap framework',
      'Dynamic website development using PHP',
      'Database design and management using MySQL database',
      'Customization of WordPress themes and create websites',
      'Learned to develop web applications using Laravel framework'
    ]
  },
];

// const exposeData = {
//   informations
// };

const formattedIndex = (index) => {
  return index < 9 ? `0${index + 1}` : index + 1;
};
</script>

<template>
  <AppLayout>
    <PageTitle icon="building-columns" heading="Professional Trainings" subheading="what i have learned" />
    <ContentSection class="grid grid-cols-1 gap-14">
      <ContentCard v-for="(info, index) of informations" display="block" v-bind:key="info.index">
        <div class="block text-white bg-green-600 rounded-md px-3.5 py-2 w-36 cursor-pointer">
          <fa-icon :icon="['fas', 'building-columns']" />
          <span class="font-bold ml-3">Training-{{ formattedIndex(index) }}</span>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-left" >{{ info.title }}</h4>
          <h4 class="text-4xl text-[crimson] font-bold font-cursive text-right" >{{ info.duration }}</h4>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-left" >{{ info.organization }}</h6>
          <h6 class="text-xl text-blue-600 font-semibold font-monospace tracking-tighter text-right" >{{ info.location }}</h6>
        </div>
        <ol class="flex flex-col items-start gap-4 mt-8">
          <h6 class="text-2xl text-gray-900 font-bold">Course Outline</h6>
          <li v-for="data of info.responsility" >
            <fa-icon :icon="['far', 'check-circle']" />
            <span class="ml-4">{{ data }}</span>
          </li>
        </ol>
      </ContentCard>
    </ContentSection>
  </AppLayout>
</template>