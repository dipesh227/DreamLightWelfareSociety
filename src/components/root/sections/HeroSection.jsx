import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, Droplets, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FocusNode = ({ icon: Icon, title, description, className, delay }) => (
  <motion.div
    className={`absolute text-center flex flex-col items-center w-[180px] lg:w-[220px] ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="bg-emerald-400/20 rounded-full p-2 mb-3 border-2 border-emerald-400/50 cursor-pointer"
      whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(52, 211, 153, 0.5)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      animate={{
        filter: [
          'drop-shadow(0 0 2px rgba(52, 211, 153, 0.3))',
          'drop-shadow(0 0 8px rgba(52, 211, 153, 0.5))',
        ]
      }}
      style={{
        transition: 'filter 2s ease-in-out infinite'
      }}
    >
      <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full p-3.5 shadow-inner">
        <Icon className="h-8 w-8 text-white" />
      </div>
    </motion.div>
    <h3 className="text-base lg:text-lg font-bold text-emerald-300 text-shadow-md uppercase tracking-wide">{title}</h3>
    <p className="text-xs lg:text-sm text-slate-200 leading-snug mt-1.5">{description}</p>
  </motion.div>
);

const MobileFocusNode = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="text-center flex flex-col items-center w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
  >
    <div
      className="bg-dream-sky-blue/20 rounded-full p-1.5 mb-3 border border-dream-sky-blue/50"
    >
      <div className="bg-gradient-to-br from-dream-sky-blue to-dream-deep-purple rounded-full p-3">
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
    <h3 className="text-sm font-bold text-dream-sky-light uppercase tracking-wide">{title}</h3>
    <p className="text-xs text-slate-200 leading-snug mt-1 max-w-[150px] mx-auto">{description}</p>
  </motion.div>
);


const HeroSection = ({ logoUrl }) => {

  const focusAreas = [
    { icon: Landmark, title: "Panchayati Raj & Urban Development", description: "Empowering local governance.", className: "top-[5%] left-1/2 -translate-x-1/2", delay: 0.5 },
    { icon: Shield, title: "Women Empowerment & Safety", description: "Promoting self-reliance.", className: "top-[25%] right-[12%]", delay: 0.65 },
    { icon: Users, title: "Child Development & Disability Assistance", description: "Nurturing and supporting.", className: "bottom-[20%] right-[20%]", delay: 0.8 },
    { icon: Droplets, title: "Drinking Water & Sanitation", description: "Ensuring clean resources.", className: "bottom-[20%] left-[20%]", delay: 0.95 },
    { icon: BookOpen, title: "Skill Development & Modern Education", description: "Fostering a self-reliant future.", className: "top-[25%] left-[12%]", delay: 1.1 },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-dream-forest-green via-dream-deep-purple to-dream-sky-blue text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4 py-20">

        <div className="hidden lg:block w-full max-w-7xl mx-auto">
            <div className="relative w-full h-[90vh] flex items-center justify-center">
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.img
                    src={logoUrl}
                    alt="Dreamlight Logo"
                    className="h-40 w-40 mb-6"
                    animate={{
                      filter: [
                        'drop-shadow(0 0 12px rgba(234, 179, 8, 0.5))',
                        'drop-shadow(0 0 32px rgba(234, 179, 8, 0.8))',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <h1 className="text-7xl font-bold text-yellow-300 tracking-wider mb-2" style={{textShadow: '0 0 20px rgba(234, 179, 8, 0.4)'}}>DreamLight</h1>
                  <p className="text-3xl text-white/90 tracking-wide font-medium">Welfare Society</p>
                </motion.div>
                
                <div className="absolute inset-0">
                  {focusAreas.map((area, i) => <FocusNode key={i} {...area} />)}
                </div>
            </div>
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center w-full max-w-md mx-auto">
           <motion.div
              className="flex flex-col items-center text-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.img
                src={logoUrl}
                alt="Dreamlight Logo"
                className="h-32 w-32 mb-6"
                animate={{
                  filter: [
                    'drop-shadow(0 0 8px rgba(52, 211, 153, 0.4))',
                    'drop-shadow(0 0 20px rgba(52, 211, 153, 0.7))',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <h1 className="text-5xl font-bold text-emerald-300 tracking-wider mb-3" style={{textShadow: '0 0 15px rgba(52, 211, 153, 0.3)'}}>DreamLight</h1>
              <p className="text-2xl text-emerald-100 font-medium">Welfare Society</p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 w-full">
              <MobileFocusNode {...focusAreas[1]} delay={0.3}/>
              <MobileFocusNode {...focusAreas[2]} delay={0.4}/>
              <div className="col-span-2 flex justify-center py-4">
                <MobileFocusNode {...focusAreas[0]} delay={0.5}/>
              </div>
              <MobileFocusNode {...focusAreas[3]} delay={0.6}/>
              <MobileFocusNode {...focusAreas[4]} delay={0.7}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;