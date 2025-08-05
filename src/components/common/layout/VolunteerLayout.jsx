import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle, WalletCards as IdCard, CalendarClock, Award, LogOut, ChevronLeft, ChevronRight, LayoutGrid, Calendar, BookOpen, Home, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const VolunteerSidebarLink = ({ to, icon: Icon, label, isCollapsed, isActive, isDarkMode }) => (
  <Link
    to={to}
    className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group
      ${isCollapsed ? 'justify-center' : ''}
      ${isActive
        ? 'bg-dws-blue-light text-white shadow-md hover:bg-dws-blue-light/80'
        : isDarkMode
          ? 'text-gray-300 hover:bg-gray-700 hover:text-dws-blue-light'
          : 'text-slate-600 hover:bg-dws-blue-light/20 hover:text-dws-blue-light'
      }`}
    title={isCollapsed ? label : undefined}
  >
    <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-white' : isDarkMode ? 'text-gray-400 group-hover:text-dws-blue-light' : 'text-slate-500 group-hover:text-dws-blue-light'}`} />
    {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
  </Link>
);

const VolunteerLayout = ({ logoUrl, setIsVolunteerAuthenticated }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsVolunteerAuthenticated(false);
    localStorage.removeItem('isVolunteerAuthenticated');
    navigate('/volunteer-dashboard/login');
  };

  const volunteerNavLinks = [
    { to: '/volunteer-dashboard/overview', label: 'Dashboard', icon: LayoutGrid },
    { to: '/volunteer-dashboard/profile', label: 'My Profile', icon: UserCircle },
    { to: '/volunteer-dashboard/id-card', label: 'My ID Card', icon: IdCard },
    { to: '/volunteer-dashboard/hours-log', label: 'Log Hours', icon: CalendarClock },
    { to: '/volunteer-dashboard/my-events', label: 'My Events', icon: Calendar },
    { to: '/volunteer-dashboard/resources', label: 'Resources', icon: BookOpen },
    { to: '/volunteer-dashboard/achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-slate-50'}`}>
      <motion.aside
        initial={false}
        animate={{ width: isSidebarCollapsed ? '5.5rem' : '16rem' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-slate-200'} border-r flex flex-col shadow-lg print:hidden`}
      >
        <div className={`flex items-center p-4 ${isDarkMode ? 'border-gray-700' : 'border-slate-200'} border-b h-[4.5rem] ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isSidebarCollapsed && (
            <Link to="/volunteer-dashboard/overview" className="flex items-center space-x-2 overflow-hidden">
              <img src={logoUrl} alt="Volunteer Logo" className="h-8 w-auto" />
              <span className={`font-bold text-lg whitespace-nowrap ${isDarkMode ? 'text-dws-blue-light' : 'text-dws-blue-light'}`}>Volunteer Hub</span>
            </Link>
          )}
           <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`${isDarkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-slate-500 hover:bg-slate-200'} rounded-md ${isSidebarCollapsed ? 'mx-auto':''}`}
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
              isDarkMode={isDarkMode}
            />
          ))}
        </nav>

        <div className={`p-3 ${isDarkMode ? 'border-gray-700' : 'border-slate-200'} border-t ${isSidebarCollapsed ? 'py-4' : 'py-4'}`}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                className={`flex items-center w-full px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group ${isDarkMode ? 'text-gray-300 hover:bg-red-500/20 hover:text-red-400' : 'text-slate-600 hover:bg-red-500/10 hover:text-red-600'}
                  ${isSidebarCollapsed ? 'justify-center' : ''}`}
                title={isSidebarCollapsed ? "Logout" : undefined}
              >
                <LogOut className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'} ${isDarkMode ? 'text-gray-400 group-hover:text-red-400' : 'text-slate-500 group-hover:text-red-600'}`} />
                {!isSidebarCollapsed && <span className="text-sm font-medium">Logout</span>}
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to logout from the Volunteer Hub?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout} className="bg-red-600 hover:bg-red-700">Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-slate-200'} border-b shadow-sm h-[4.5rem] flex items-center justify-between px-6 md:px-8 print:hidden`}>
           <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            {volunteerNavLinks.find(link => location.pathname.includes(link.to.substring('/volunteer-dashboard/'.length)) && link.to !== '/volunteer-dashboard/overview' )?.label || 'Volunteer Dashboard'}
          </h1>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              {isDarkMode ? <Sun size={16} className="mr-2"/> : <Moon size={16} className="mr-2"/>}
              {isDarkMode ? 'Light' : 'Dark'}
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm" className={`${isDarkMode ? 'text-dws-blue-light border-dws-blue-light hover:bg-dws-blue-light hover:text-gray-900' : 'text-dws-blue-light border-dws-blue-light hover:bg-dws-blue-light hover:text-white'}`}>
                <Home size={16} className="mr-2"/> Back to Home
              </Button>
            </Link>
            <Button variant="ghost" className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-slate-600 hover:bg-slate-100'}`}>Welcome, Volunteer!</Button>
          </div>
        </header>
        <main className={`flex-1 overflow-y-auto p-6 md:p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-50'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VolunteerLayout;