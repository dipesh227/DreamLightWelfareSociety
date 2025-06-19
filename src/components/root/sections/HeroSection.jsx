
import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, Droplets, BookOpen, Shield } from 'lucide-react';

const FocusNode = ({ icon: Icon, title, description, className, delay }) => (
  <motion.div
    className={`absolute text-center flex flex-col items-center w-[180px] lg:w-[220px] ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div 
      className="bg-yellow-400/10 rounded-full p-2 mb-3 border-2 border-yellow-400/40 cursor-pointer"
      whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(250, 204, 21, 0.5)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      animate={{
        filter: [
          'drop-shadow(0 0 2px rgba(250, 204, 21, 0.2))',
          'drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))',
          'drop-shadow(0 0 2px rgba(250, 204, 21, 0.2))',
        ]
      }}
      style={{
        transition: 'filter 2s ease-in-out infinite'
      }}
    >
      <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-3.5 shadow-inner">
        <Icon className="h-8 w-8 text-[#441e6b]" />
      </div>
    </motion.div>
    <h3 className="text-base lg:text-lg font-bold text-yellow-400 text-shadow-md uppercase tracking-wide">{title}</h3>
    <p className="text-xs lg:text-sm text-slate-300 leading-snug mt-1.5">{description}</p>
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
      className="bg-yellow-400/10 rounded-full p-1.5 mb-3 border border-yellow-400/40"
    >
      <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-3">
        <Icon className="h-7 w-7 text-[#441e6b]" />
      </div>
    </div>
    <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-wide">{title}</h3>
    <p className="text-xs text-slate-300 leading-snug mt-1 max-w-[150px] mx-auto">{description}</p>
  </motion.div>
);


const HeroSection = ({ logoUrl }) => {

  const focusAreas = [
    { icon: Landmark, title: "Panchayati Raj & Urban Development", description: "Empowering local governance.", className: "top-[2%] left-1/2 -translate-x-1/2", delay: 0.5 },
    { icon: Shield, title: "Women Empowerment & Safety", description: "Promoting self-reliance.", className: "top-[28%] left-[5%]", delay: 0.65 },
    { icon: Users, title: "Child Development & Disability Assistance", description: "Nurturing and supporting.", className: "top-[28%] right-[5%]", delay: 0.8 },
    { icon: Droplets, title: "Drinking Water & Sanitation", description: "Ensuring clean resources.", className: "bottom-[5%] left-[20%]", delay: 0.95 },
    { icon: BookOpen, title: "Skill Development & Modern Education", description: "Fostering a self-reliant future.", className: "bottom-[5%] right-[20%]", delay: 1.1 },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden hero-radial-bg text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-20 pb-10 lg:pt-0 lg:pb-0">

        <div className="hidden lg:block w-full h-full max-w-7xl mx-auto">
            <div className="relative w-full h-full">
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.img 
                    src={logoUrl} 
                    alt="Dreamlight Logo" 
                    className="h-36 w-36 mb-4"
                    animate={{
                      filter: [
                        'drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))',
                        'drop-shadow(0 0 24px rgba(250, 204, 21, 0.7))',
                        'drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))',
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <h1 className="text-6xl font-bold text-yellow-400 tracking-wider" style={{textShadow: '0 0 15px rgba(250, 204, 21, 0.3)'}}>DreamLight</h1>
                  <p className="text-3xl text-slate-200 mt-1 tracking-wide">Welfare Society</p>
                </motion.div>
                
                {focusAreas.map((area, i) => <FocusNode key={i} {...area} />)}
            </div>
        </div>

        <div className="lg:hidden flex flex-col items-center justify-center w-full h-full px-4">
           <motion.div 
              className="flex flex-col items-center text-center mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <img src={logoUrl} alt="Dreamlight Logo" className="h-24 w-24 mb-2" />
              <h1 className="text-4xl font-bold text-yellow-400 tracking-wider">DreamLight</h1>
              <p className="text-xl text-slate-200">Welfare Society</p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-x-2 gap-y-8 w-full max-w-sm">
              <MobileFocusNode {...focusAreas[1]} delay={0.3}/>
              <MobileFocusNode {...focusAreas[2]} delay={0.4}/>
              <div className="col-span-2 flex justify-center pt-2 pb-2">
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
