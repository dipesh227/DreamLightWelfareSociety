'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, PlayCircle, Award, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  logoUrl: string;
  handleDonate: () => void;
  handleVolunteer: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ logoUrl, handleDonate, handleVolunteer }) => {
  const stats = [
    { value: "12+", label: "Years Strong", icon: Award, color: "text-dream-gold" },
    { value: "75K+", label: "Lives Touched", icon: Users, color: "text-dream-purple" },
    { value: "95%", label: "Fund Utilization", icon: ShieldCheck, color: "text-green-500" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dream-purple-lighter via-slate-50 to-dream-gold-light/10">
      <motion.div 
        className="absolute inset-0 z-0 hero-pattern opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="space-y-8 md:space-y-10"
        >
          <motion.div 
            className="inline-block p-3 bg-white/70 rounded-full shadow-2xl backdrop-blur-md pulse-glow"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={logoUrl} alt="Dreamlight Welfare Society main logo" className="h-24 w-24 md:h-32 md:w-32" />
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dream-purple-darker tracking-tighter leading-tight">
            Igniting Hope, <br className="hidden sm:block" /> <span className="gradient-text">Empowering Futures.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dreamlight Welfare Society is a beacon of change, dedicated to uplifting communities through sustainable education, healthcare, and livelihood programs. Join our movement to transform lives.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center pt-4"
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/donate">
              <Button 
                onClick={handleDonate}
                size="lg"
                className="gradient-bg text-white px-8 py-3.5 text-base md:text-lg font-semibold rounded-full hover:opacity-95 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group"
              >
                <Heart className="mr-2.5 h-5 w-5 group-hover:animate-pulse" />
                Donate Now
              </Button>
            </Link>
            
            <Link href="/volunteer">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3.5 text-base md:text-lg font-semibold border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10 hover:text-dream-purple-dark rounded-full transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group"
              >
                <Users className="mr-2.5 h-5 w-5 group-hover:text-dream-gold transition-colors" />
                Get Involved
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="pt-8 md:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-slate-200/70"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-xl md:text-2xl font-bold text-dream-purple-dark">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
          >
            <Link href="/about" className="inline-flex items-center text-sm text-dream-purple hover:text-dream-gold transition-colors duration-300 group">
              Discover Our Story <PlayCircle className="ml-2 h-5 w-5 group-hover:fill-dream-gold/20" />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;