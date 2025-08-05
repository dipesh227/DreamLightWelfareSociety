import React from 'react';
import { motion } from 'framer-motion';
import { WalletCards as IdCardIcon, User, CheckCircle, Download, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VolunteerIdCardPage = () => {
  // Sample data - replace with actual volunteer data if available
  const volunteerDetails = {
    name: 'Aisha Volunteer',
    id: 'DWS-VOL-00786',
    role: 'Education Program Volunteer',
    joinDate: '2024-01-15',
    expiryDate: '2025-12-31',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60', // Same as profile for demo
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=DWS-VOL-00786-AishaVolunteer', // Sample QR
    logoUrl: "/dws-logo.jpeg" // Updated logo path
  };

  const handleDownloadCard = () => {
    // This would trigger a PDF generation or image download in a real app
    alert("ID Card download initiated (Simulated).");
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center mb-3 sm:mb-0">
          <IdCardIcon size={26} className="mr-3 text-dws-blue-dark" /> My Volunteer ID Card
        </h1>
        <Button onClick={handleDownloadCard} className="bg-dws-blue-dark hover:bg-dws-blue-light text-white">
          <Download size={18} className="mr-2" /> Download ID Card
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* ID Card Preview */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, rotateY: -20 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-dws-blue-dark to-dws-blue-light p-6 rounded-xl shadow-2xl text-white aspect-[85.6/54] max-w-md mx-auto flex flex-col justify-between"
          style={{ perspective: '1000px' }}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <img src={volunteerDetails.logoUrl} alt="Dreamlight Logo" className="h-10 w-auto filter brightness-0 invert" />
              <span className="text-xs font-semibold uppercase tracking-wider bg-dws-gold text-dws-blue-dark px-2 py-0.5 rounded">VOLUNTEER</span>
            </div>
            <div className="flex items-center space-x-4">
              <img src={volunteerDetails.photoUrl} alt={volunteerDetails.name} className="w-20 h-20 rounded-lg object-cover border-2 border-dws-gold" />
              <div>
                <h2 className="text-xl font-bold leading-tight">{volunteerDetails.name}</h2>
                <p className="text-sm text-dws-gold-light">{volunteerDetails.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <p className="text-[10px] opacity-80">Volunteer ID: {volunteerDetails.id}</p>
              <p className="text-[10px] opacity-80">Joined: {volunteerDetails.joinDate}</p>
              <p className="text-[10px] opacity-80">Valid Thru: {volunteerDetails.expiryDate}</p>
            </div>
            <img src={volunteerDetails.qrCodeUrl} alt="QR Code" className="w-12 h-12 rounded bg-white p-0.5" />
          </div>
        </motion.div>

        {/* Information and Usage Guidelines */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-dws-blue-dark mb-4">Using Your ID Card</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start"><CheckCircle size={18} className="mr-2 mt-0.5 text-dws-green flex-shrink-0"/> Always carry your ID card during volunteer activities and events.</li>
            <li className="flex items-start"><CheckCircle size={18} className="mr-2 mt-0.5 text-dws-green flex-shrink-0"/> This card identifies you as an official Dreamlight Welfare Society volunteer.</li>
            <li className="flex items-start"><CheckCircle size={18} className="mr-2 mt-0.5 text-dws-green flex-shrink-0"/> Do not lend your ID card to anyone else.</li>
            <li className="flex items-start"><CheckCircle size={18} className="mr-2 mt-0.5 text-dws-green flex-shrink-0"/> Report a lost or stolen card immediately to the volunteer coordinator.</li>
            <li className="flex items-start"><CheckCircle size={18} className="mr-2 mt-0.5 text-dws-green flex-shrink-0"/> The QR code can be scanned for quick verification (feature coming soon).</li>
          </ul>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-yellow-700 text-xs">
            <strong>Note:</strong> This is a digital representation of your ID card. A physical card may be issued for certain roles or events. Please check with your coordinator.
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mt-8 text-center">
        <Zap size={24} className="mx-auto text-dws-gold mb-2" />
        <h3 className="text-lg font-semibold text-dws-blue-dark mb-2">Digital ID Card Benefits</h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Quick access on your phone, easy to update, and environmentally friendly. We're working on more digital features for volunteers!
        </p>
      </div>

    </motion.div>
  );
};

export default VolunteerIdCardPage;