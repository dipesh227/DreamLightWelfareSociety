
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, FolderHeart as HandHeart, Calendar, Edit3, LogOut, ChevronLeft, ChevronRight, Settings, BarChart3, UserCog as UsersCog, Home, Moon, Sun } from 'lucide-react';
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

const AdminSidebarLink = ({ to, icon: Icon, label, isCollapsed, isActive, isDarkMode }) => (
  <Link
    to={to}
    className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group
      ${isCollapsed ? 'justify-center' : ''}
      ${isActive
        ? 'bg-dream-forest-green text-white shadow-md hover:bg-dream-forest-light'
        : isDarkMode
          ? 'text-gray-300 hover:bg-gray-700 hover:text-dream-forest-light'
          : 'text-slate-600 hover:bg-dream-forest-lighter hover:text-dream-forest-green'
      }`}
    title={isCollapsed ? label : undefined}
  >
    <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-white' : isDarkMode ? 'text-gray-400 group-hover:text-dream-forest-light' : 'text-slate-500 group-hover:text-dream-forest-green'}`} />
    {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
  </Link>
);

const AdminLayout = ({ logoUrl, setIsAdminAuthenticated }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const adminNavLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/donations', label: 'Manage Donations', icon: HandHeart },
    { to: '/admin/volunteers', label: 'Manage Volunteers', icon: Users },
    { to: '/admin/events', label: 'Manage Events', icon: Calendar },
    { to: '/admin/content', label: 'Content Updates', icon: Edit3 },
    { to: '/admin/users', label: 'Manage Users', icon: UsersCog },
    { to: '/admin/reports', label: 'Reports & Analytics', icon: BarChart3 },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-slate-100'}`}>
      <motion.aside
        initial={false}
        animate={{ width: isSidebarCollapsed ? '5.5rem' : '16rem' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-slate-200'} border-r flex flex-col shadow-lg print:hidden`}
      >
        <div className={`flex items-center p-4 ${isDarkMode ? 'border-gray-700' : 'border-slate-200'} border-b h-[4.5rem] ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isSidebarCollapsed && (
            <Link to="/admin/dashboard" className="flex items-center space-x-2 overflow-hidden">
              <img src={logoUrl} alt="Admin Logo" className="h-8 w-auto" />
              <span className={`font-bold text-lg whitespace-nowrap ${isDarkMode ? 'text-dream-forest-light' : 'text-dream-forest-green'}`}>Admin Panel</span>
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
          {adminNavLinks.map(link => (
            <AdminSidebarLink
              key={link.to}
              {...link}
              isCollapsed={isSidebarCollapsed}
              isActive={location.pathname === link.to || (link.to !== '/admin/dashboard' && location.pathname.startsWith(link.to))}
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
                  Are you sure you want to logout from the Admin Panel?
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
        <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-slate-200'} border-b shadow-sm h-[4.5rem] flex items-center justify-between px-6 md:px-8 print:hidden`}>
          <h1 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            {adminNavLinks.find(link => location.pathname.includes(link.to.substring('/admin/'.length)) && link.to !=='/admin/dashboard' )?.label || 'Admin Dashboard'}
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
              <Button variant="outline" size="sm" className={`${isDarkMode ? 'text-dream-forest-light border-dream-forest-light hover:bg-dream-forest-light hover:text-gray-900' : 'text-dream-forest-green border-dream-forest-green hover:bg-dream-forest-green hover:text-white'}`}>
                <Home size={16} className="mr-2"/> Back to Home
              </Button>
            </Link>
            <Button variant="ghost" className={`${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-slate-600 hover:bg-slate-100'}`}>Admin User</Button>
          </div>
        </header>
        <main className={`flex-1 overflow-y-auto p-6 md:p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-slate-50'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
