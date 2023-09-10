<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";
</script>

<template>
  <AppLayout>
    <PageTitle icon="graduation-cap" heading="Academic Qualifications" subheading="know about my academic records" />
    <ContentSection>
      <ContentCard display="block">
      </ContentCard>
    </ContentSection>
    <!-- <ContentSection></ContentSection> -->
  </AppLayout>
</template>