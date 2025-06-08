import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, icon: Icon, iconBgColor = "bg-dream-purple-dark", iconColor = "text-dream-gold-light", gradientFrom = "from-dream-purple", gradientTo = "to-dream-purple-dark", bgPatternOpacity = "opacity-15" }) => {
  return (
    <header className={`relative py-24 md:py-32 bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white text-center overflow-hidden`}>
      <div className={`absolute inset-0 hero-pattern ${bgPatternOpacity}`}></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {Icon && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mb-4 md:mb-6"
          >
            <div className={`inline-block p-4 rounded-full shadow-lg ${iconBgColor}`}>
              <Icon className={`h-12 w-12 md:h-16 md:w-16 ${iconColor}`} />
            </div>
          </motion.div>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: Icon ? 0.3 : 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 tracking-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: Icon ? 0.5 : 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-dream-gold-light/80 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;