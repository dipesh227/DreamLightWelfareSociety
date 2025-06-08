'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ImpactSection from '@/components/sections/ImpactSection';
import EventsPreviewSection from '@/components/sections/EventsPreviewSection';
import GetInvolvedSection from '@/components/sections/GetInvolvedSection';
import { toast } from 'sonner';

const HomePage: React.FC = () => {
  const handleDonateToast = () => {
    toast.success("Thank you for your interest!", {
      description: "Our donation system is being set up. Please visit the Donate page or contact us for direct donations.",
    });
  };

  const handleVolunteerToast = () => {
    toast.success("Thank you for your interest!", {
      description: "Our volunteer portal is being set up. Please contact us for volunteer opportunities.",
    });
  };

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection handleDonate={handleDonateToast} />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <EventsPreviewSection />
      <GetInvolvedSection handleDonate={handleDonateToast} handleVolunteer={handleVolunteerToast} />
    </main>
  );
};

export default HomePage;