
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProgramsPage from '@/pages/ProgramsPage';
import ImpactPage from '@/pages/ImpactPage';
import EventsPage from '@/pages/EventsPage';
import DonatePage from '@/pages/DonatePage';
import ContactPage from '@/pages/ContactPage';
import TeamPage from '@/pages/TeamPage';
import GalleryPage from '@/pages/GalleryPage';
import TransparencyPage from '@/pages/TransparencyPage';
import CareersPage from '@/pages/CareersPage';
import VolunteerPortalPage from '@/pages/VolunteerPortalPage';
import PressMediaPage from '@/pages/PressMediaPage';
import FaqPage from '@/pages/FaqPage';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PageTransition from '@/components/layout/PageTransition';

// New Page Imports
import OurValuesPage from '@/pages/OurValuesPage';
import SuccessStoriesPage from '@/pages/SuccessStoriesPage';
import PartnershipsPage from '@/pages/PartnershipsPage';
import FinancialsOverviewPage from '@/pages/FinancialsOverviewPage';
import ChildProtectionPolicyPage from '@/pages/ChildProtectionPolicyPage';
import EnvironmentalPolicyPage from '@/pages/EnvironmentalPolicyPage';
import BlogPage from '@/pages/BlogPage'; // For blog listing
import BlogPostPage from '@/pages/BlogPostPage'; // For individual blog posts

function App() {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/d2bfdf7cdd6c053e918e6d40f2ee77c1.jpg";
  const location = useLocation();

  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 80; 
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); 
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  const handleDonateToast = () => {
    toast({
      title: "Thank you for your interest!",
      description: "Our donation system is being set up. Please visit the Donate page or contact us for direct donations.",
      className: "bg-dream-purple text-white border-dream-gold shadow-xl",
    });
  };

  const handleVolunteerToast = () => {
    toast({
      title: "Welcome aboard!",
      description: "Thank you for wanting to volunteer. We'll contact you soon with opportunities.",
      className: "bg-dream-gold text-dream-purple-dark border-dream-purple shadow-xl",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased">
      <Toaster />
      <ScrollToTop />
      <Navbar logoUrl={logoUrl} handleDonateToast={handleDonateToast} />
      
      <main className="flex-grow pt-20 md:pt-24"> {/* Increased pt to accommodate larger initial navbar */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage logoUrl={logoUrl} handleDonateToast={handleDonateToast} handleVolunteerToast={handleVolunteerToast} /></PageTransition>} />
            
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/our-values" element={<PageTransition><OurValuesPage /></PageTransition>} />
            <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
            <Route path="/transparency" element={<PageTransition><TransparencyPage /></PageTransition>} />
            <Route path="/financials" element={<PageTransition><FinancialsOverviewPage /></PageTransition>} />
            <Route path="/child-protection-policy" element={<PageTransition><ChildProtectionPolicyPage /></PageTransition>} />
            <Route path="/environmental-policy" element={<PageTransition><EnvironmentalPolicyPage /></PageTransition>} />


            <Route path="/programs" element={<PageTransition><ProgramsPage /></PageTransition>} />
            <Route path="/impact" element={<PageTransition><ImpactPage /></PageTransition>} />
            <Route path="/success-stories" element={<PageTransition><SuccessStoriesPage /></PageTransition>} />
            
            <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            
            <Route path="/volunteer" element={<PageTransition><VolunteerPortalPage /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
            <Route path="/partnerships" element={<PageTransition><PartnershipsPage /></PageTransition>} />
            <Route path="/press-media" element={<PageTransition><PressMediaPage /></PageTransition>} />
            
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/blog/:postId" element={<PageTransition><BlogPostPage /></PageTransition>} />

            <Route path="/donate" element={<PageTransition><DonatePage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FaqPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer logoUrl={logoUrl} />
    </div>
  );
}

export default App;
