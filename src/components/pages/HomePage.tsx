'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import { toast } from 'sonner';
// Import other sections as they are created
// import AboutSection from '@/components/sections/AboutSection';
// import ProgramsSection from '@/components/sections/ProgramsSection';
// import ImpactSection from '@/components/sections/ImpactSection';
// import GetInvolvedSection from '@/components/sections/GetInvolvedSection';
// import EventsPreviewSection from '@/components/sections/EventsPreviewSection';

interface HomePageProps {
  logoUrl: string;
}

const HomePage: React.FC<HomePageProps> = ({ logoUrl }) => {
  const handleDonateToast = () => {
    toast.success("Thank you for your interest!", {
      description: "Our donation system is being set up. Please visit the Donate page or contact us for direct donations.",
    });
  };

  return (
    <>
      <HeroSection logoUrl={logoUrl} handleDonate={handleDonateToast} />
      {/* Add other sections as they are created */}
      {/* <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <EventsPreviewSection />
      <GetInvolvedSection handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} /> */}
    </>
  );
};

export default HomePage;