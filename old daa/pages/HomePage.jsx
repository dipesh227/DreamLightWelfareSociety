import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ImpactSection from '@/components/sections/ImpactSection';
import GetInvolvedSection from '@/components/sections/GetInvolvedSection';
import EventsPreviewSection from '@/components/sections/EventsPreviewSection';

const HomePage = ({ logoUrl, handleDonateToast, handleVolunteerToast }) => {
  return (
    <>
      <HeroSection logoUrl={logoUrl} handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <EventsPreviewSection />
      <GetInvolvedSection handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} />
    </>
  );
};

export default HomePage;