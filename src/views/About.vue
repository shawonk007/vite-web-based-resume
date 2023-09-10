<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import ContentSection from "@/components/ContentSection.vue";
import PageTitle from "@/components/PageTitle.vue";
import ContentCard from "@/components/ContentCard.vue";
import ContentTitle from "@/components/ContentTitle.vue";
import PersonalInfo from "@/components/about/PersonalInfo.vue";
import ContactInfo from "@/components/about/ContactInfo.vue";
import PhysicalInfo from "@/components/about/PhysicalInfo.vue";
import SocialLink from "@/components/about/SocialLink.vue";
import Additionals from "@/components/about/Additionals.vue";
</script>

<template>
  <AppLayout>
    <PageTitle icon="user-circle" heading="About Myself" subheading="know who i am" />
    <ContentSection>
      <ContentCard display="block">
        <ContentTitle content="Career Vision" />
        <p class="text-justify text-gray-900 leading-8">To work in a dynamic professional environment with a growing organization and utilize my creativity and innovative thinking for benefit of the organization and myself.</p>
      </ContentCard>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-2 gap-4">
        <PersonalInfo />
        <ContactInfo />
      </div>
    </ContentSection>
    <ContentSection>
      <div class="grid grid-cols-2 gap-4">
        <PhysicalInfo />
        <SocialLink />
      </div>
    </ContentSection>
    <Additionals />
  </AppLayout>
</template>