import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, icon: Icon, iconBgColor = "bg-dws-blue-dark", iconColor = "text-dws-gold-light", gradientFrom = "from-dws-blue-dark", gradientTo = "to-dws-blue-light", bgPatternOpacity = "opacity-15" }) => {
  return (
    <header className={`relative py-20 md:py-28 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white text-center overflow-hidden`}>
      <div className={`absolute inset-0 hero-pattern ${bgPatternOpacity} transform scale-150`}></div>
      <motion.div 
        className="absolute inset-0 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mb-5 md:mb-7"
          >
            <div className={`inline-block p-4 rounded-full shadow-xl ${iconBgColor} ring-4 ring-white/20`}>
              <Icon className={`h-12 w-12 md:h-16 md:w-16 ${iconColor}`} />
            </div>
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: Icon ? 0.3 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-5 tracking-tight text-shadow-lg"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: Icon ? 0.5 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-dws-gold-light/90 leading-relaxed text-shadow-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;