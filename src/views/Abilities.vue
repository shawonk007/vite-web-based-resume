<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

const informations = [
  { 
    title : 'Hardware Skills',
    contents : [ 'Backup and recovery', 'Technical support', 'Basic Troubleshooting', 'Network configuration', 'WAN/LAN & routers' ] 
  },
  { 
    title : 'Software Skills',
    contents : [ 'Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Figma' ]
  },
  { 
    title : 'Programming Skills',
    contents : [ 'JavaScript', 'PHP (Raw and OOP)', 'Python (Basic)', 'Java (Basic)', 'C# (Basic)' ] 
  },
  { 
    title : 'Framework & CMS',
    contents : [ 'Bootstrap', 'Tailwind CSS', 'Vite + Vue 3', 'Laravel', 'WordPress' ] 
  }
];

const strengths = [
    'Ability to cope up with different situations.',
    'Process the necessary dynamism to achieve result.',
    'Very good temperament and enjoy challenges.',
    'Dependable employee with common sense and a variety of skills.',
    'Organizing and Leadership competence.',
    'Ability to work individually as well as team member.'
];
</script>

<template>
  <AppLayout>
    <PageTitle icon="user-circle" heading="Skills & Abilities" subheading="what capable i am" />
    <ContentSection>
      <ContentCard display="block">
        <ContentTitle content="Content Title" />
        <div class="grid grid-cols-2 gap-4">
          <div class="block">
            <h5 class="text-2xl text-gray-900 font-bold font-monospace">Native</h5>
            <table class="min-w-full text-left mt-4">
              <tbody>
                <tr>
                  <th scope="col" class="py-2">Bengali (Mother Tongue) :</th>
                </tr>
                <tr>
                  <td class="py-2">Capable to read, write, speak and understand fluently.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block">
            <h5 class="text-2xl text-gray-900 font-bold font-monospace">International</h5>
            <table class="min-w-full text-left mt-4">
              <tbody>
                <tr>
                  <th scope="col" class="py-2">English :</th>
                </tr>
                <tr>
                  <td class="py-2">Capable to read, write, speak and understand flently.</td>
                </tr>
                <tr>
                  <th scope="col" class="py-2">Hindi :</th>
                </tr>
                <tr>
                  <td class="py-2">Capable to read, write, speak and understand.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-2 gap-14">
        <ContentCard v-for="info of informations" display="block" v-bind:key="info.index" >
          <ContentTitle :content="info.title" />
          <ol class="grid grid-cols-2 gap-4">
            <li v-for="data of info.contents" >
              <fa-icon :icon="['far', 'check-circle']" />
              <span class="ml-4">{{ data }}</span>
            </li>
          </ol>
        </ContentCard>
      </div>
    </ContentSection>
    <ContentSection>
      <ContentCard display="block" >
          <ContentTitle content="Professional Strengths" />
          <ol class="grid grid-cols-2 gap-4">
            <li v-for="(data, index) of strengths" v-bind:key="data.index" >
              <fa-icon :icon="['far', 'check-circle']" />
              <span class="ml-4">{{ data }}</span>
            </li>
          </ol>
      </ContentCard>
    </ContentSection>
  </AppLayout>
</template>