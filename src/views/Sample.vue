<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";
</script>

<template>
  <AppLayout>
    <PageTitle icon="user-circle" heading="Page Heading" subheading="Page Subheading" />
    <ContentSection>
      <ContentCard display="block">
        <ContentTitle content="Content Title" />
      </ContentCard>
    </ContentSection>
    <!-- <ContentSection></ContentSection> -->
  </AppLayout>
</template>