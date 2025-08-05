
import React from 'react';
import HeroSection from '@/components/root/sections/HeroSection';
import AboutSection from '@/components/root/sections/AboutSection';
import ProgramsSection from '@/components/root/sections/ProgramsSection';
import ImpactSection from '@/components/root/sections/ImpactSection';
import GetInvolvedSection from '@/components/root/sections/GetInvolvedSection';
import EventsPreviewSection from '@/components/root/sections/EventsPreviewSection';

const HomePage = ({ logoUrl, handleDonateToast, handleVolunteerToast }) => {
  return (
    <>
      <HeroSection logoUrl={logoUrl} />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <EventsPreviewSection />
      <GetInvolvedSection handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} />
    </>
  );
};

export default HomePage;
