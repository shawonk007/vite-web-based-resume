<script>
import ContentSection from "@/components/ContentSection.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";

export default {
  name : "Additionals",
  data : () => {
    return {
      informations : [
        { 
          title : 'Strengths',
          contents : [ 'Confident & Honest', 'Quick Learner', 'Hard Worker', 'Self-motivated', 'Well Organized', 'Good Timekeeper' ] 
        },
        { 
          title : 'Expertise',
          contents : [ 'Graphic Design', 'Full-Stack Development', 'UI / UX Design', 'Email Marketing', 'Social Media Marketing', 'Resume Writing' ]
        },
        { 
          title : 'Interests',
          contents : [ 'Drawing Pictures', 'Listening Musics', 'Watching Movies', 'Making Friends', 'Playing Sports', 'Internet Browsing' ] 
        }
      ]
    };
  },
  components : { ContentSection, ContentCard, ContentTitle }
}
</script>

<template>
  <ContentSection>
    <div class="grid grid-cols-3 gap-4">
      <ContentCard v-for="info of informations" display="block" v-bind:key="info.index" >
        <ContentTitle :content="info.title" />
        <ol class="flex flex-col items-start gap-4">
          <li v-for="data of info.contents" >
            <fa-icon :icon="['far', 'check-circle']" />
            <span class="ml-4">{{ data }}</span>
          </li>
        </ol>
      </ContentCard>
    </div>
  </ContentSection>
</template>