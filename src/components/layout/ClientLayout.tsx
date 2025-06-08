'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Navbar from './Navbar';
import Footer from './Footer';
import { useToast } from '@/components/ui/use-toast';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const { toast } = useToast();

  const handleDonateToast = () => {
    toast({
      title: "Thank You! 🙏",
      description: "You're being redirected to our secure donation portal.",
      className: "bg-dream-purple text-white border-dream-gold",
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar handleDonateToast={handleDonateToast} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;