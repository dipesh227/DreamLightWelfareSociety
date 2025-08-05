import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Home, Users, Briefcase, BarChart2, Calendar, Image, ShieldCheck, FileText, MessageCircle, Info, FolderHeart as HandHeart, Award, Newspaper, BookHeart, Landmark, Leaf, FileHeart as FileShield, Rss, Sparkles, Lock, UserCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLinkItem = ({ to, label, icon: Icon, mobile = false, onClick, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out group ${className}
        ${isActive
          ? 'text-dws-blue-dark bg-dws-blue-light/20 font-semibold shadow-inner'
          : 'text-slate-700 hover:text-dws-blue-dark hover:bg-dws-blue-light/20'}
        ${mobile ? 'w-full text-left text-base py-3.5' : ''}
      `}
      onClick={() => {
        if (mobile && onClick) onClick();
        else if (onClick) onClick();
      }}
    >
      {Icon && <Icon className={`mr-2.5 h-5 w-5 ${isActive ? 'text-dws-blue-dark' : 'text-slate-500 group-hover:text-dws-blue-dark'}`} />}
      {label}
    </Link>
  );
};

const DropdownMenu = ({ label, icon: Icon, subLinks, mobile = false, closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isParentActive = subLinks.some(link => location.pathname === link.to || (link.subLinks && link.subLinks.some(sl => sl.to === location.pathname)));
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen && !mobile) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, mobile]);


  if (mobile) {
    return (
      <div className="py-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full px-3 py-3.5 text-base font-medium text-left rounded-lg group
            ${isParentActive ? 'text-dws-blue-dark bg-dws-blue-light/20 font-semibold' : 'text-slate-700 hover:text-dws-blue-dark hover:bg-dws-blue-light/20'}`}
        >
          <div className="flex items-center">
            {Icon && <Icon className={`mr-2.5 h-5 w-5 ${isParentActive ? 'text-dws-blue-dark' : 'text-slate-500 group-hover:text-dws-blue-dark'}`} />}
            {label}
          </div>
          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isParentActive ? 'text-dws-blue-dark' : 'text-slate-500 group-hover:text-dws-blue-dark'}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pl-5 border-l-2 border-dws-blue-light/20 ml-3.5"
            >
              {subLinks.map(link => 
                link.subLinks ? 
                <DropdownMenu key={link.label} {...link} mobile={true} closeMobileMenu={closeMobileMenu} /> :
                <NavLinkItem key={link.to} {...link} mobile={true} onClick={closeMobileMenu} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out group
          ${isParentActive ? 'text-dws-blue-dark bg-dws-blue-light/20 font-semibold shadow-sm' : 'text-slate-700 hover:text-dws-blue-dark hover:bg-dws-blue-light/20'}`}
      >
        {Icon && <Icon className={`mr-1.5 h-4 w-4 ${isParentActive ? 'text-dws-blue-dark' : 'text-slate-500 group-hover:text-dws-blue-dark'}`} />}
        {label} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isParentActive ? 'text-dws-blue-dark' : 'text-slate-500 group-hover:text-dws-blue-dark'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2.5 z-20 border border-slate-200/80"
          >
            {subLinks.map(link => 
              link.subLinks ? 
              <div key={link.label} className="relative group/submenu">
                 <button className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-slate-700 hover:bg-dws-blue-light/20 hover:text-dws-blue-dark rounded-md">
                    <div className="flex items-center">
                      {link.icon && <link.icon className="mr-2 h-4 w-4 text-slate-500 group-hover/submenu:text-dws-blue-dark" />}
                      {link.label}
                    </div>
                    <ChevronDown className="h-4 w-4 rotate-[-90deg] text-slate-400 group-hover/submenu:text-dws-blue-dark" />
                  </button>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-[-8px] ml-1 w-60 bg-white rounded-xl shadow-2xl py-2.5 z-30 border border-slate-200/80 hidden group-hover/submenu:block"
                  >
                     {link.subLinks.map(sl => <NavLinkItem key={sl.to} {...sl} onClick={() => setIsOpen(false)} className="px-4 py-2.5"/>)}
                  </motion.div>
              </div>
              :
              <NavLinkItem key={link.to} {...link} onClick={() => setIsOpen(false)} className="px-4 py-2.5"/>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = ({ logoUrl, handleDonateToast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledEnough(latest > 60); 
  });
  
  const isHomePage = location.pathname === '/';

  const navStructure = [
    { to: '/', label: 'Home', icon: Home },
    { 
      label: 'About Us', icon: Users,
      subLinks: [
        { to: '/about', label: 'Our Story', icon: Info },
        { to: '/our-values', label: 'Our Values', icon: BookHeart },
        { to: '/team', label: 'Our Team', icon: Users },
        { 
          label: 'Governance', icon: ShieldCheck,
          subLinks: [
            { to: '/transparency', label: 'Transparency Hub', icon: ShieldCheck },
            { to: '/financials', label: 'Financials Overview', icon: Landmark },
            { to: '/child-protection-policy', label: 'Child Protection', icon: FileShield },
            { to: '/environmental-policy', label: 'Environmental Policy', icon: Leaf },
          ]
        },
      ]
    },
    { 
      label: 'Our Work', icon: Briefcase,
      subLinks: [
        { to: '/programs', label: 'All Programs', icon: Briefcase },
        { to: '/impact', label: 'Our Impact', icon: BarChart2 },
        { to: '/success-stories', label: 'Success Stories', icon: Award },
      ]
    },
    { 
      label: 'Get Involved', icon: HandHeart,
      subLinks: [
        { to: '/volunteer', label: 'Volunteer With Us', icon: Users }, // Changed label
        { to: '/careers', label: 'Careers', icon: Award },
        { to: '/events', label: 'Events', icon: Calendar },
        { to: '/partnerships', label: 'Partnerships', icon: Users },
      ]
    },
    { 
      label: 'Resources', icon: FileText,
      subLinks: [
        { to: '/gallery', label: 'Gallery', icon: Image },
        { to: '/press-media', label: 'Press & Media', icon: Newspaper },
        { to: '/blog', label: 'Blog & Updates', icon: Rss },
        { to: '/faq', label: 'FAQ', icon: MessageCircle },
      ]
    },
    { to: '/contact', label: 'Contact', icon: MessageCircle },
  ];

  useEffect(() => {
    setIsMenuOpen(false); 
  }, [location]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  const initialNavHeight = '6rem'; 
  const scrolledNavHeight = '4.5rem'; 

  const initialLogoHeight = isMenuOpen ? '4rem' : '3.5rem'; 
  const scrolledLogoHeight = isMenuOpen ? '3rem' : '2.5rem'; 
  const mobileMenuLogoHeight = '3rem'; 

  return (
    <motion.nav 
      initial={{ y: -120 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} 
      className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out print:hidden bg-white shadow-lg border-b border-gray-200"
    >
      <motion.div 
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{ height: isScrolledEnough && !isMenuOpen ? scrolledNavHeight : initialNavHeight }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center space-x-2.5 shrink-0 group">
            <motion.img 
              src={logoUrl} 
              alt="Dreamlight Welfare Society Logo" 
              className="w-auto"
              animate={{ 
                height: isScrolledEnough && !isMenuOpen ? scrolledLogoHeight : initialLogoHeight,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, rotate: isMenuOpen ? 0 : 3 }}
              style={{ filter: `drop-shadow(0 2px 3px rgba(0,0,0,0.08))` }}
            />
             {(!isMenuOpen || !isScrolledEnough) && (
                <motion.span
                  className="text-2xl md:text-3xl font-bold hidden sm:inline tracking-tight group-hover:opacity-80 transition-opacity gradient-text"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isScrolledEnough && !isMenuOpen ? 0 : 1, x: isScrolledEnough && !isMenuOpen ? -10 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Dreamlight
                </motion.span>
             )}
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1.5">
            {navStructure.map(item => 
              item.subLinks ? 
              <DropdownMenu key={item.label} {...item} /> :
              <NavLinkItem key={item.to} {...item} />
            )}
            <div className="flex items-center space-x-1.5 ml-4">
              <Link to="/admin/login">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-dws-blue-light/20 hover:text-dws-blue-dark">
                  <Lock size={14} className="mr-1.5"/> Admin
                </Button>
              </Link>
              <Link to="/volunteer-dashboard/login">
                 <Button variant="ghost" size="sm" className="text-slate-600 hover:bg-dws-blue-light/20 hover:text-dws-blue-dark">
                  <UserCheck size={14} className="mr-1.5"/> Volunteer
                </Button>
              </Link>
            </div>
            <Link to="/donate" className="ml-2">
              <Button onClick={handleDonateToast} className="gradient-bg-warm text-white hover:opacity-90 rounded-full px-7 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn">
                <Sparkles className="mr-2 h-4 w-4 group-hover/btn:animate-ping" />
                Donate
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-2xl border-t border-slate-200 absolute w-full"
            style={{ maxHeight: `calc(100vh - ${initialNavHeight})`, overflowY: 'auto' }}
          >
            <div className="px-3 pt-3 pb-5 space-y-1.5 sm:px-4">
              <div className="flex items-center justify-between px-3 pt-2 pb-4 border-b border-slate-200 mb-2 relative">
                  <Link to="/" className="flex items-center space-x-2 -ml-1" onClick={closeMobileMenu}>
                    <motion.img 
                      src={logoUrl} 
                      alt="Dreamlight Mobile Menu Logo" 
                      className="w-auto"
                      style={{ height: mobileMenuLogoHeight, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
                      initial={{ y: -10, opacity: 0.8 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    />
                    <span className="text-xl font-bold gradient-text">Dreamlight</span>
                  </Link>
                   <button 
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 absolute top-2.5 right-2 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
              </div>

              {navStructure.map(item => 
                item.subLinks ? 
                <DropdownMenu key={item.label} {...item} mobile={true} closeMobileMenu={closeMobileMenu} /> :
                <NavLinkItem key={item.to} {...item} mobile={true} onClick={closeMobileMenu} />
              )}
              <div className="pt-3 space-y-2">
                <NavLinkItem to="/admin/login" label="Admin Login" icon={Lock} mobile={true} onClick={closeMobileMenu} />
                <NavLinkItem to="/volunteer-dashboard/login" label="Volunteer Login" icon={UserCheck} mobile={true} onClick={closeMobileMenu} />
              </div>
              <Link to="/donate" className="block w-full pt-4">
                <Button onClick={() => { handleDonateToast(); closeMobileMenu(); }} className="w-full gradient-bg-warm text-white hover:opacity-90 rounded-full py-3.5 text-base font-semibold shadow-md flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5"/> Donate Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;