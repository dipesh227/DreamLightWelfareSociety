
import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, FolderHeart as HandHeart, Calendar, Edit3, LogOut, ChevronLeft, ChevronRight, Settings, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminSidebarLink = ({ to, icon: Icon, label, isCollapsed, isActive }) => (
  <Link
    to={to}
    className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group
      ${isCollapsed ? 'justify-center' : ''}
      ${isActive 
        ? 'bg-dream-purple text-white shadow-md hover:bg-dream-purple-dark' 
        : 'text-slate-600 hover:bg-dream-purple-lighter hover:text-dream-purple'
      }`}
    title={isCollapsed ? label : undefined}
  >
    <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-dream-purple'}`} />
    {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
  </Link>
);

const AdminLayout = ({ logoUrl }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();

  const adminNavLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/donations', label: 'Manage Donations', icon: HandHeart },
    { to: '/admin/volunteers', label: 'Manage Volunteers', icon: Users },
    { to: '/admin/events', label: 'Manage Events', icon: Calendar },
    { to: '/admin/content', label: 'Content Updates', icon: Edit3 },
    { to: '/admin/reports', label: 'Reports & Analytics', icon: BarChart3 },
    { to: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      <motion.aside
        initial={false}
        animate={{ width: isSidebarCollapsed ? '5.5rem' : '16rem' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white border-r border-slate-200 flex flex-col shadow-lg"
      >
        <div className={`flex items-center p-4 border-b border-slate-200 h-[4.5rem] ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isSidebarCollapsed && (
            <Link to="/admin/dashboard" className="flex items-center space-x-2 overflow-hidden">
              <img src={logoUrl} alt="Admin Logo" className="h-8 w-auto" />
              <span className="font-bold text-lg text-dream-purple whitespace-nowrap">Admin Panel</span>
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
          {adminNavLinks.map(link => (
            <AdminSidebarLink 
              key={link.to} 
              {...link} 
              isCollapsed={isSidebarCollapsed} 
              isActive={location.pathname === link.to || (link.to !== '/admin/dashboard' && location.pathname.startsWith(link.to))}
            />
          ))}
        </nav>

        <div className={`p-3 border-t border-slate-200 ${isSidebarCollapsed ? 'py-4' : 'py-4'}`}>
          <Link
            to="/"
            className={`flex items-center px-3 py-3.5 rounded-lg transition-colors duration-200 ease-in-out group text-slate-600 hover:bg-red-500/10 hover:text-red-600
              ${isSidebarCollapsed ? 'justify-center' : ''}`}
             title={isSidebarCollapsed ? "Exit Admin" : undefined}
          >
            <LogOut className={`h-5 w-5 ${isSidebarCollapsed ? '' : 'mr-3'} text-slate-500 group-hover:text-red-600`} />
            {!isSidebarCollapsed && <span className="text-sm font-medium">Exit Admin</span>}
          </Link>
        </div>
      </motion.aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-slate-200 shadow-sm h-[4.5rem] flex items-center justify-between px-6 md:px-8">
          <h1 className="text-xl font-semibold text-slate-700">
            {adminNavLinks.find(link => location.pathname.includes(link.to.substring('/admin/'.length)) && link.to !=='/admin/dashboard' )?.label || 'Admin Dashboard'}
          </h1>
          <div>
            <Button variant="ghost" className="text-slate-600 hover:bg-slate-100">Admin User</Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
