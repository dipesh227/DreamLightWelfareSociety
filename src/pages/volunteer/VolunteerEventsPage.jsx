import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, CheckCircle, XCircle, AlertCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const sampleEvents = [
  { id: 'VE001', title: "Community Cleanup Drive", date: "2025-07-15", time: "9:00 AM - 12:00 PM", location: "City Park South Entrance", role: "General Volunteer", status: "Confirmed", description: "Help us clean and beautify our local park. Gloves and tools provided." },
  { id: 'VE002', title: "Education Workshop Prep", date: "2025-07-22", time: "2:00 PM - 5:00 PM", location: "Dreamlight Main Office", role: "Logistics Support", status: "Confirmed", description: "Assist in preparing materials and setting up for an upcoming children's workshop." },
  { id: 'VE003', title: "Annual Fundraising Gala", date: "2025-08-10", time: "6:00 PM - 10:00 PM", location: "The Grand Hotel", role: "Guest Registration", status: "Pending Confirmation", description: "Support with guest check-in and information desk at our annual gala." },
  { id: 'VE004', title: "Rural Health Camp - Phase 2", date: "2025-09-05", time: "8:00 AM - 4:00 PM", location: "Village Rampur Clinic", role: "Patient Assistance", status: "Applied", description: "Assist medical staff with patient flow and basic support tasks." },
];

const EventCard = ({ event, onConfirm, onDecline }) => {
  const getStatusBadge = () => {
    switch (event.status) {
      case 'Confirmed':
        return <span className="flex items-center text-xs text-dws-green bg-dws-green/10 px-2 py-0.5 rounded-full"><CheckCircle size={12} className="mr-1"/>Confirmed</span>;
      case 'Pending Confirmation':
        return <span className="flex items-center text-xs text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full"><AlertCircle size={12} className="mr-1"/>Pending</span>;
      case 'Applied':
        return <span className="flex items-center text-xs text-dws-blue-light bg-dws-blue-light/10 px-2 py-0.5 rounded-full"><Users size={12} className="mr-1"/>Applied</span>;
      case 'Declined':
        return <span className="flex items-center text-xs text-red-700 bg-red-100 px-2 py-0.5 rounded-full"><XCircle size={12} className="mr-1"/>Declined</span>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-5 rounded-xl shadow-lg border-l-4 border-dws-blue-dark"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-dws-blue-dark">{event.title}</h3>
        {getStatusBadge()}
      </div>
      <div className="text-xs text-slate-500 space-y-1 mb-3">
        <p className="flex items-center"><Calendar size={14} className="mr-1.5 text-dws-blue-dark/70"/> {event.date}</p>
        <p className="flex items-center"><Clock size={14} className="mr-1.5 text-dws-blue-dark/70"/> {event.time}</p>
        <p className="flex items-center"><MapPin size={14} className="mr-1.5 text-dws-blue-dark/70"/> {event.location}</p>
        <p className="flex items-center"><Users size={14} className="mr-1.5 text-dws-blue-dark/70"/> Your Role: {event.role}</p>
      </div>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">{event.description}</p>
      {event.status === 'Pending Confirmation' && (
        <div className="flex gap-2">
          <Button onClick={() => onConfirm(event.id)} size="sm" className="bg-dws-green hover:bg-dws-green/90 text-white text-xs">Confirm Attendance</Button>
          <Button onClick={() => onDecline(event.id)} variant="outline" size="sm" className="text-red-600 border-red-500 hover:bg-red-50 text-xs">Decline</Button>
        </div>
      )}
    </motion.div>
  );
};

const VolunteerEventsPage = () => {
  const [myEvents, setMyEvents] = useState(sampleEvents);
  const [searchTerm, setSearchTerm] = useState('');

  const handleConfirm = (eventId) => {
    setMyEvents(myEvents.map(e => e.id === eventId ? { ...e, status: 'Confirmed' } : e));
    toast({ title: "Attendance Confirmed!", description: "Thank you for confirming. We look forward to seeing you!", className: "bg-dws-green text-white" });
  };

  const handleDecline = (eventId) => {
    setMyEvents(myEvents.map(e => e.id === eventId ? { ...e, status: 'Declined' } : e));
    toast({ title: "Attendance Declined", description: "We've noted your response. Please inform your coordinator if needed.", variant: "destructive" });
  };
  
  const filteredEvents = myEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.role.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a,b) => new Date(a.date) - new Date(b.date));


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center mb-3 sm:mb-0">
          <Calendar size={26} className="mr-3 text-dws-blue-dark" /> My Assigned Events
        </h1>
        <Link to="/volunteer">
          <Button variant="outline" className="border-dws-blue-dark text-dws-blue-dark hover:bg-dws-blue-dark/10">
            Browse All Opportunities
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input 
            type="text"
            placeholder="Search your events by title, location, or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dws-blue-dark focus:border-transparent transition-shadow"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} onConfirm={handleConfirm} onDecline={handleDecline} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <Calendar size={48} className="mx-auto text-slate-400 mb-4" />
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No Events Found</h3>
          <p className="text-slate-500 mb-4">
            {searchTerm ? "No events match your search criteria." : "You are not currently assigned to any events."}
          </p>
          <Link to="/volunteer">
            <Button className="gradient-bg text-white">Find Volunteer Opportunities</Button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default VolunteerEventsPage;