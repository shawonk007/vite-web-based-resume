<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";
</script>

<template>
  <AppLayout>
    <PageTitle icon="user-circle" heading="About Myself" subheading="know who i am" />
    <ContentSection>
      <ContentCard display="block">
        <ContentTitle content="Career Vision" />
      </ContentCard>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-2 gap-4">
        <ContentCard display="block">
          <ContentTitle content="Personal" />
        </ContentCard>
        <ContentCard display="block">
          <ContentTitle content="Contact" />
        </ContentCard>
      </div>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-2 gap-4">
        <ContentCard display="block">
          <ContentTitle content="Personal" />
        </ContentCard>
        <ContentCard display="block">
          <ContentTitle content="Contact" />
        </ContentCard>
      </div>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-3 gap-4">
        <ContentCard display="block">
          <ContentTitle content="Personal" />
        </ContentCard>
        <ContentCard display="block">
          <ContentTitle content="Contact" />
        </ContentCard>
        <ContentCard display="block">
          <ContentTitle content="Contact" />
        </ContentCard>
      </div>
    </ContentSection>
    <!-- <ContentSection></ContentSection> -->
  </AppLayout>
</template>