
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { AnimatePresence } from 'framer-motion';

import Navbar from '@/components/common/layout/Navbar';
import Footer from '@/components/common/layout/Footer';
import ScrollToTop from '@/components/common/layout/ScrollToTop';
import PageTransition from '@/components/common/layout/PageTransition';

// Public (Root) Pages
import HomePage from '@/pages/public/HomePage';
import AboutPage from '@/pages/features/about/AboutPage';
import ProgramsPage from '@/pages/features/programs/ProgramsPage';
import ImpactPage from '@/pages/features/impact/ImpactPage';
import EventsPage from '@/pages/features/events/EventsPage';
import DonatePage from '@/pages/features/donate/DonatePage';
import ContactPage from '@/pages/features/contact/ContactPage';
import TeamPage from '@/pages/features/team/TeamPage';
import GalleryPage from '@/pages/features/gallery/GalleryPage';
import TransparencyPage from '@/pages/features/transparency/TransparencyPage';
import CareersPage from '@/pages/features/careers/CareersPage';
import VolunteerPortalPage from '@/pages/features/volunteer/VolunteerPortalPage'; // This is the public-facing volunteer info page
import PressMediaPage from '@/pages/public/PressMediaPage';
import FaqPage from '@/pages/public/FaqPage';
import OurValuesPage from '@/pages/features/about/OurValuesPage';
import SuccessStoriesPage from '@/pages/features/impact/SuccessStoriesPage';
import PartnershipsPage from '@/pages/public/PartnershipsPage';
import FinancialsOverviewPage from '@/pages/features/transparency/FinancialsOverviewPage';
import ChildProtectionPolicyPage from '@/pages/features/transparency/ChildProtectionPolicyPage';
import EnvironmentalPolicyPage from '@/pages/features/transparency/EnvironmentalPolicyPage';
import BlogPage from '@/pages/features/blog/BlogPage';
import BlogPostPage from '@/pages/features/blog/BlogPostPage';

// Auth Pages
import AdminLoginPage from '@/pages/features/auth/AdminLoginPage';
import VolunteerLoginPage from '@/pages/features/auth/VolunteerLoginPage';

// Simulated Admin Pages
import AdminLayout from '@/components/common/layout/AdminLayout';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import AdminManageDonationsPage from '@/pages/admin/AdminManageDonationsPage';
import AdminManageVolunteersPage from '@/pages/admin/AdminManageVolunteersPage';
import AdminManageEventsPage from '@/pages/admin/AdminManageEventsPage';
import AdminContentUpdatesPage from '@/pages/admin/AdminContentUpdatesPage';
import AdminManageUsersPage from '@/pages/admin/AdminManageUsersPage'; // New Admin Users Page

// Simulated Volunteer Dashboard Pages
import VolunteerLayout from '@/components/common/layout/VolunteerLayout';
import VolunteerDashboardPage from '@/pages/features/volunteer/VolunteerDashboardPage';
import VolunteerProfilePage from '@/pages/features/volunteer/VolunteerProfilePage';
import VolunteerIdCardPage from '@/pages/features/volunteer/VolunteerIdCardPage';
import VolunteerHoursLogPage from '@/pages/features/volunteer/VolunteerHoursLogPage';
import VolunteerEventsPage from '@/pages/features/volunteer/VolunteerEventsPage'; // New Volunteer Events Page
import VolunteerResourcesPage from '@/pages/features/volunteer/VolunteerResourcesPage'; // New Volunteer Resources Page


function App() {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/d2bfdf7cdd6c053e918e6d40f2ee77c1.jpg";
  const location = useLocation();

  // For now, we simulate auth state. Replace with actual auth logic later.
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(localStorage.getItem('isAdminAuthenticated') === 'true');
  const [isVolunteerAuthenticated, setIsVolunteerAuthenticated] = useState(localStorage.getItem('isVolunteerAuthenticated') === 'true');


  const isAdminRoute = location.pathname.startsWith('/admin') && !location.pathname.startsWith('/admin/login');
  const isVolunteerRoute = location.pathname.startsWith('/volunteer-dashboard') && !location.pathname.startsWith('/volunteer-dashboard/login');
  const isAuthRoute = location.pathname.includes('/login');
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    localStorage.setItem('isAdminAuthenticated', isAdminAuthenticated.toString());
  }, [isAdminAuthenticated]);

  useEffect(() => {
    localStorage.setItem('isVolunteerAuthenticated', isVolunteerAuthenticated.toString());
  }, [isVolunteerAuthenticated]);


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
      
      {!isAdminRoute && !isVolunteerRoute && !isAuthRoute && <Navbar logoUrl={logoUrl} handleDonateToast={handleDonateToast} />}
      
      <main className={`flex-grow ${!isHomePage && !isAdminRoute && !isVolunteerRoute && !isAuthRoute ? 'pt-[6rem]' : ''}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public (Root) Routes */}
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

            {/* Auth Routes */}
            <Route path="/admin/login" element={<PageTransition><AdminLoginPage setIsAdminAuthenticated={setIsAdminAuthenticated} /></PageTransition>} />
            <Route path="/volunteer-dashboard/login" element={<PageTransition><VolunteerLoginPage setIsVolunteerAuthenticated={setIsVolunteerAuthenticated} /></PageTransition>} />


            {/* Simulated Admin Routes - Protected */}
            <Route 
              path="/admin" 
              element={isAdminAuthenticated ? <AdminLayout logoUrl={logoUrl} setIsAdminAuthenticated={setIsAdminAuthenticated} /> : <Navigate to="/admin/login" replace />}
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<PageTransition><AdminDashboardPage /></PageTransition>} />
              <Route path="donations" element={<PageTransition><AdminManageDonationsPage /></PageTransition>} />
              <Route path="volunteers" element={<PageTransition><AdminManageVolunteersPage /></PageTransition>} />
              <Route path="events" element={<PageTransition><AdminManageEventsPage /></PageTransition>} />
              <Route path="content" element={<PageTransition><AdminContentUpdatesPage /></PageTransition>} />
              <Route path="users" element={<PageTransition><AdminManageUsersPage /></PageTransition>} />
            </Route>

            {/* Simulated Volunteer Dashboard Routes - Protected */}
            <Route 
              path="/volunteer-dashboard" 
              element={isVolunteerAuthenticated ? <VolunteerLayout logoUrl={logoUrl} setIsVolunteerAuthenticated={setIsVolunteerAuthenticated} /> : <Navigate to="/volunteer-dashboard/login" replace />}
            >
              <Route index element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<PageTransition><VolunteerDashboardPage /></PageTransition>} />
              <Route path="profile" element={<PageTransition><VolunteerProfilePage /></PageTransition>} />
              <Route path="id-card" element={<PageTransition><VolunteerIdCardPage /></PageTransition>} />
              <Route path="hours-log" element={<PageTransition><VolunteerHoursLogPage /></PageTransition>} />
              <Route path="my-events" element={<PageTransition><VolunteerEventsPage /></PageTransition>} />
              <Route path="resources" element={<PageTransition><VolunteerResourcesPage /></PageTransition>} />
            </Route>

          </Routes>
        </AnimatePresence>
      </main>
      
      {!isAdminRoute && !isVolunteerRoute && !isAuthRoute && <Footer logoUrl={logoUrl} />}
    </div>
  );
}

export default App;
