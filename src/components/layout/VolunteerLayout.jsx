
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle, WalletCards as IdCard, CalendarClock, Award, LogOut, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VolunteerSidebarLink = ({ to, icon: Icon, label, isCollapsed, isActive }) => (
  <Link
    to={to}
    className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group
      ${isCollapsed ? 'justify-center' : ''}
      ${isActive 
        ? 'bg-dream-gold text-dream-purple-dark shadow-md hover:bg-dream-gold-darker' 
        : 'text-slate-600 hover:bg-dream-gold/20 hover:text-dream-gold-darker'
      }`}
    title={isCollapsed ? label : undefined}
  >
    <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-dream-purple-dark' : 'text-slate-500 group-hover:text-dream-gold-darker'}`} />
    {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
  </Link>
);

const VolunteerLayout = ({ logoUrl }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  const volunteerNavLinks = [
    { to: '/volunteer-dashboard/overview', label: 'Dashboard', icon: LayoutGrid },
    { to: '/volunteer-dashboard/profile', label: 'My Profile', icon: UserCircle },
    { to: '/volunteer-dashboard/id-card', label: 'My ID Card', icon: IdCard },
    { to: '/volunteer-dashboard/hours-log', label: 'Log Hours', icon: CalendarClock },
    { to: '/volunteer-dashboard/achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      <motion.aside
        initial={false}
        animate={{ width: isSidebarCollapsed ? '5.5rem' : '16rem' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white border-r border-slate-200 flex flex-col shadow-lg"
      >
        <div className={`flex items-center p-4 border-b border-slate-200 h-[4.5rem] ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isSidebarCollapsed && (
            <Link to="/volunteer-dashboard/overview" className="flex items-center space-x-2 overflow-hidden">
              <img src={logoUrl} alt="Volunteer Logo" className="h-8 w-auto" />
              <span className="font-bold text-lg text-dream-gold-darker whitespace-nowrap">Volunteer Hub</span>
            </Link>
          )}
           <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`text-slate-500 hover:bg-slate-200 rounded-md ${isSidebarCollapsed ? 'mx-auto':''}`}
          >
            {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
        
        <nav className="flex-grow p-3 space-y-1.5 overflow-y-auto">
          {volunteerNavLinks.map(link => (
            <VolunteerSidebarLink 
              key={link.to} 
              {...link} 
              isCollapsed={isSidebarCollapsed} 
              isActive={location.pathname === link.to || (link.to !== '/volunteer-dashboard/overview' && location.pathname.startsWith(link.to))}
            />
          ))}
        </nav>

        <div className={`p-3 border-t border-slate-200 ${isSidebarCollapsed ? 'py-4' : 'py-4'}`}>
          <Link
            to="/" 
            className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group text-slate-600 hover:bg-red-500/10 hover:text-red-600
              ${isSidebarCollapsed ? 'justify-center' : ''}`}
             title={isSidebarCollapsed ? "Exit Dashboard" : undefined}
          >
            <LogOut className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'} text-slate-500 group-hover:text-red-600`} />
            {!isSidebarCollapsed && <span className="text-sm font-medium">Exit Dashboard</span>}
          </Link>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 shadow-sm h-[4.5rem] flex items-center justify-between px-6 md:px-8">
           <h1 className="text-xl font-semibold text-slate-700">
            {volunteerNavLinks.find(link => location.pathname.includes(link.to.substring('/volunteer-dashboard/'.length)) && link.to !== '/volunteer-dashboard/overview' )?.label || 'Volunteer Dashboard'}
          </h1>
          <div>
            <Button variant="ghost" className="text-slate-600 hover:bg-slate-100">Welcome, Volunteer!</Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VolunteerLayout;
