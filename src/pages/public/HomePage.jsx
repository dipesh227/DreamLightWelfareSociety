
import React from 'react';
import PageHero from '@/components/common/hero/PageHero';
import AboutSection from '@/components/features/about/AboutSection';
import ProgramsSection from '@/components/features/programs/ProgramsSection';
import ImpactSection from '@/components/features/home/ImpactSection';
import GetInvolvedSection from '@/components/features/home/GetInvolvedSection';
import EventsPreviewSection from '@/components/features/events/EventsPreviewSection';

const HomePage = ({ logoUrl, handleDonateToast, handleVolunteerToast }) => {
  return (
    <>
      <PageHero pageType="home" logoUrl={logoUrl} scrollTarget="about" />
      <div id="main-content">
        <AboutSection id="about" />
        <ProgramsSection />
        <ImpactSection />
        <EventsPreviewSection />
        <GetInvolvedSection handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} />
      </div>
    </>
  );
};

export default HomePage;
