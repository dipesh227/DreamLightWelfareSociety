'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, ChevronDown, Home, Users, Briefcase, BarChart2, Calendar, Image, ShieldCheck, FileText, MessageCircle, Info, FolderHeart as HandHeart, Award, Newspaper, BookHeart, Landmark, Leaf, FileHeart as FileShield, Rss } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkItemProps {
  to?: string;
  label: string;
  icon?: React.ElementType;
  mobile?: boolean;
  onClick?: () => void;
  className?: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, label, icon: Icon, mobile = false, onClick, className = '' }) => {
  const pathname = usePathname();

  if (!to) {
    return null;
  }

  return (
    <Link
      href={to}
      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out group ${className}
        ${pathname === to
          ? 'text-dream-purple-darker bg-dream-purple-lighter font-semibold shadow-sm border border-dream-purple/20'
          : 'text-foreground hover:text-dream-purple hover:bg-accent hover:shadow-md'}
        ${mobile ? 'w-full text-left text-base py-3.5' : ''}
      `}
      onClick={() => {
        if (mobile && onClick) onClick();
        else if (onClick) onClick();
      }}
    >
      {Icon && <Icon className={`mr-2.5 h-5 w-5 ${pathname === to ? 'text-dream-purple' : 'text-muted-foreground group-hover:text-dream-purple'}`} />}
      {label}
    </Link>
  );
};

interface SubLink {
  to?: string;
  label: string;
  icon?: React.ElementType;
  subLinks?: SubLink[];
}

interface DropdownMenuProps {
  label: string;
  icon?: React.ElementType;
  subLinks?: SubLink[];
  mobile?: boolean;
  closeMobileMenu?: () => void;
}

interface NavItem {
  to?: string;
  label: string;
  icon?: React.ElementType;
  subLinks?: SubLink[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, icon: Icon, subLinks, mobile = false, closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isParentActive = subLinks?.some(link => pathname === link.to || (link.subLinks && link.subLinks.some(sl => sl.to === pathname))) || false;
  const menuRef = useRef<HTMLDivElement>(null);

  if (!subLinks) {
    return null;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
            ${isParentActive ? 'text-dream-purple-darker bg-dream-purple-lighter font-semibold border border-dream-purple/20' : 'text-foreground hover:text-dream-purple hover:bg-accent hover:shadow-md'}`}
        >
          <div className="flex items-center">
            {Icon && <Icon className={`mr-2.5 h-5 w-5 ${isParentActive ? 'text-dream-purple' : 'text-muted-foreground group-hover:text-dream-purple'}`} />}
            {label}
          </div>
          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isParentActive ? 'text-dream-purple' : 'text-muted-foreground group-hover:text-dream-purple'}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pl-5 border-l-2 border-dream-purple-lighter ml-3"
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
        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out group
          ${isParentActive ? 'text-dream-purple-darker bg-dream-purple-lighter font-semibold shadow-sm border border-dream-purple/20' : 'text-foreground hover:text-dream-purple hover:bg-accent hover:shadow-md'}`}
      >
        {Icon && <Icon className={`mr-1.5 h-4 w-4 ${isParentActive ? 'text-dream-purple' : 'text-muted-foreground group-hover:text-dream-purple'}`} />}
        {label} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isParentActive ? 'text-dream-purple' : 'text-muted-foreground group-hover:text-dream-purple'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-64 bg-card rounded-xl shadow-2xl py-2 z-20 border border-border"
          >
            {subLinks.map(link =>
              link.subLinks ?
                <div key={link.label} className="relative group/submenu">
                  <button className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-dream-purple rounded-md transition-all duration-200">
                    <div className="flex items-center">
                      {link.icon && <link.icon className="mr-2 h-4 w-4 text-muted-foreground group-hover/submenu:text-dream-purple" />}
                      {link.label}
                    </div>
                    <ChevronDown className="h-4 w-4 rotate-[-90deg] text-muted-foreground group-hover/submenu:text-dream-purple" />
                  </button>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-[-8px] ml-1 w-60 bg-card rounded-xl shadow-2xl py-2 z-30 border border-border hidden group-hover/submenu:block"
                  >
                    {link.subLinks.map(sl => <NavLinkItem key={sl.to} {...sl} onClick={() => setIsOpen(false)} className="px-4 py-2.5" />)}
                  </motion.div>
                </div>
                :
                <NavLinkItem key={link.to} {...link} onClick={() => setIsOpen(false)} className="px-4 py-2.5" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavbarProps {
  logoUrl?: string;
  handleDonateToast?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl = '/logo1.jpeg', handleDonateToast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledEnough(latest > 80); // Increased threshold for shrinking
  });

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
        { to: '/volunteer', label: 'Volunteer Portal', icon: Users },
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
  }, [pathname]);

  const closeMobileMenu = () => setIsMenuOpen(false);

  const initialNavHeight = '6rem'; // h-24
  const scrolledNavHeight = '4.5rem'; // h-18

  const initialLogoHeight = isMenuOpen ? '4rem' : '3.5rem'; // h-16 vs h-14
  const scrolledLogoHeight = isMenuOpen ? '3rem' : '2.5rem'; // h-12 vs h-10
  const mobileMenuLogoHeight = '3.5rem'; // h-14, slightly larger for prominence

  return (
    <motion.nav
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${isScrolledEnough || isMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/70' : 'bg-transparent'}`}
    >
      <motion.div
        className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{ height: isScrolledEnough && !isMenuOpen ? scrolledNavHeight : initialNavHeight }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center h-full">
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <motion.img
              src={logoUrl}
              alt="Dreamlight Welfare Society Logo"
              className="w-auto"
              animate={{
                height: isScrolledEnough && !isMenuOpen ? scrolledLogoHeight : initialLogoHeight,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, rotate: isMenuOpen ? 0 : 5 }}
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            />
            {(!isMenuOpen || !isScrolledEnough) && (
              <motion.span
                className="text-2xl md:text-3xl font-bold gradient-text hidden sm:inline tracking-tight"
                initial={{ opacity: 1 }}
                animate={{ opacity: isScrolledEnough && !isMenuOpen ? 0 : 1, x: isScrolledEnough && !isMenuOpen ? -15 : 0 }}
                transition={{ duration: 0.25 }}
              >
                Dreamlight
              </motion.span>
            )}
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navStructure.map(item =>
              item.subLinks ?
                <DropdownMenu key={item.label} {...item} /> :
                <NavLinkItem key={item.to} {...item} />
            )}
            <div className="ml-3 mr-2">
              <ThemeToggle />
            </div>
            <Link href="/donate" className="ml-2">
              <Button onClick={handleDonateToast} className="gradient-bg text-white hover:opacity-95 rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Donate
              </Button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg text-dream-purple-dark hover:bg-dream-purple-lighter/70 focus:outline-none focus:ring-2 focus:ring-dream-purple ring-offset-2"
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
            className="lg:hidden bg-card/98 backdrop-blur-xl shadow-2xl border-t border-border absolute w-full"
            style={{ maxHeight: `calc(100vh - ${scrolledNavHeight})`, overflowY: 'auto' }}
          >
            <div className="px-3 pt-3 pb-5 space-y-1.5 sm:px-4">
              <div className="flex items-center justify-between px-3 pt-2 pb-4 border-b border-border mb-2 relative">
                <Link href="/" className="flex items-center space-x-2.5 -ml-1" onClick={closeMobileMenu}>
                  <motion.img
                    src={logoUrl}
                    alt="Dreamlight Mobile Menu Logo"
                    className="w-auto"
                    style={{ height: mobileMenuLogoHeight, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.1))' }}
                    initial={{ y: -10, opacity: 0.8 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  />
                  <span className="text-2xl font-bold gradient-text">Dreamlight</span>
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg text-muted-foreground hover:bg-accent absolute top-3 right-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {navStructure.map(item =>
                item.subLinks ?
                  <DropdownMenu key={item.label} {...item} mobile={true} closeMobileMenu={closeMobileMenu} /> :
                  <NavLinkItem key={item.to} {...item} mobile={true} onClick={closeMobileMenu} />
              )}

              <div className="flex items-center justify-between pt-4 pb-2 border-t border-border mt-4">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>

              <Link href="/donate" className="block w-full pt-2">
                <Button onClick={() => { handleDonateToast?.(); closeMobileMenu(); }} className="w-full gradient-bg text-white hover:opacity-95 rounded-full py-4 text-base font-semibold shadow-md">
                  Donate Now
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