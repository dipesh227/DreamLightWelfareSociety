'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { toast } from 'sonner';

interface ClientLayoutProps {
  children: React.ReactNode;
  logoUrl: string;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children, logoUrl }) => {
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
    toast.success("Thank you for your interest!", {
      description: "Our donation system is being set up. Please visit the Donate page or contact us for direct donations.",
      className: "bg-dream-purple text-white border-dream-gold shadow-xl",
    });
  };

  const handleVolunteerToast = () => {
    toast.success("Welcome aboard!", {
      description: "Thank you for wanting to volunteer. We'll contact you soon with opportunities.",
      className: "bg-dream-gold text-dream-purple-dark border-dream-purple shadow-xl",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased">
      <Navbar logoUrl={logoUrl} handleDonateToast={handleDonateToast} />
      
      <main className="flex-grow pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer logoUrl={logoUrl} />
    </div>
  );
};

export default ClientLayout;