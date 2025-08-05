import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUpCircle, Info, Briefcase, BarChart2, FolderHeart as HandHeart, Calendar, FileText, Users, ShieldCheck, BookOpen, Mail, Award, Newspaper, Landmark, ShieldAlert, Trees, Rss, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = ({ logoUrl }) => {
  const aboutLinks = [
    { to: '/about', label: 'Our Story', icon: Info },
    { to: '/team', label: 'Our Team', icon: Users },
    { to: '/our-values', label: 'Our Values', icon: HandHeart },
    { to: '/transparency', label: 'Transparency', icon: ShieldCheck },
    { to: '/financials', label: 'Financials', icon: Landmark },
  ];

  const workLinks = [
    { to: '/programs', label: 'All Programs', icon: BookOpen },
    { to: '/success-stories', label: 'Success Stories', icon: Award },
    { to: '/impact', label: 'Our Impact', icon: BarChart2 },
  ];

  const involvedLinks = [
    { to: '/donate', label: 'Donate Now', icon: Sparkles },
    { to: '/volunteer', label: 'Volunteer Portal', icon: Users },
    { to: '/careers', label: 'Careers', icon: Briefcase },
    { to: '/events', label: 'Upcoming Events', icon: Calendar },
    { to: '/partnerships', label: 'Partner With Us', icon: Users },
  ];
  
  const resourcesLinks = [
    { to: '/gallery', label: 'Photo Gallery', icon: BarChart2 },
    { to: '/press-media', label: 'Press & Media', icon: Newspaper },
    { to: '/blog', label: 'Blog & Updates', icon: Rss },
    { to: '/faq', label: 'FAQ', icon: Info },
    { to: '/contact', label: 'Contact Us', icon: Mail },
  ];

  const policyLinks = [
    { to: '/child-protection-policy', label: 'Child Protection', icon: ShieldAlert },
    { to: '/environmental-policy', label: 'Environment Policy', icon: Trees },
  ];


  const socialMediaLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook", color: "hover:text-blue-400" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube", color: "hover:text-red-500" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FooterLinkColumn = ({ title, links }) => (
    <div>
      <h3 className="text-md font-semibold text-dws-gold-light mb-5 tracking-wider uppercase">{title}</h3>
      <ul className="space-y-3.5">
        {links.map(link => (
          <li key={link.to || link.label}>
            <Link to={link.to} className="text-sm hover:text-white transition-colors duration-200 hover:underline underline-offset-4 flex items-center group">
              {link.icon && <link.icon className="h-4 w-4 mr-2.5 text-dws-gold-light/70 group-hover:text-dws-gold-light transition-colors" />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    toast({
      title: "Subscribed!",
      description: `Thank you, ${email}! You're now on our newsletter list.`,
      className: "bg-dws-blue-dark text-white border-dws-gold",
    });
    e.target.reset();
  };


  return (
    <footer className="bg-gradient-to-br from-dws-blue-dark to-dws-blue-light text-slate-300 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-16">
          <div className="space-y-6 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <motion.img 
                src={logoUrl} 
                alt="Dreamlight Welfare Society footer logo" 
                className="h-14 w-auto filter drop-shadow-md"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="text-2xl font-bold text-dws-gold">Dreamlight</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300/90">
              Empowering communities through education, healthcare, and sustainable development. Join us in lighting up futures across India.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-dws-gold-light mb-2">Stay Updated</label>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  id="newsletter-email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-dws-blue-dark/50 border border-dws-blue-light/30 text-white placeholder-slate-400 focus:ring-2 focus:ring-dws-gold focus:border-transparent text-sm shadow-inner"
                />
                <Button type="submit" className="bg-dws-gold text-dws-blue-dark hover:bg-dws-gold-light px-5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="flex space-x-4 pt-4">
              {socialMediaLinks.map(social => (
                <motion.a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className={`text-slate-400 ${social.color} transition-colors duration-300`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="About Us" links={aboutLinks} />
          <FooterLinkColumn title="Our Work" links={workLinks} />
          <FooterLinkColumn title="Get Involved" links={involvedLinks} />
          <div className="space-y-10">
            <FooterLinkColumn title="Resources" links={resourcesLinks} />
            <FooterLinkColumn title="Policies" links={policyLinks} />
          </div>
        </div>
        
        <div className="border-t border-dws-blue-dark/50 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-xs text-slate-400/80 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dreamlight Welfare Society. All rights reserved. Registered Non-Profit Organization in India.
          </p>
          <p className="text-center md:text-right text-xs text-slate-400/80">
            Crafted with <span className="text-dws-gold-light">&hearts;</span> by Hostinger Horizons.
          </p>
        </div>
      </div>
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-dws-gold text-dws-blue-dark p-3.5 rounded-full shadow-xl hover:bg-dws-gold-light transition-colors duration-300 z-20"
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
      >
        <ArrowUpCircle className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;