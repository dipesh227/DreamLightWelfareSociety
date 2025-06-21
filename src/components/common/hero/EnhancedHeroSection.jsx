import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParallaxBackground = ({ backgroundImage, backgroundVideo, overlayColor = "bg-black/40" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <motion.div 
      ref={ref}
      className="absolute inset-0 overflow-hidden"
      style={{ y, opacity }}
    >
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={backgroundImage}
          loading="lazy"
        >
          <source src={backgroundVideo} type="video/mp4" />
          <img src={backgroundImage} alt="Hero background" className="w-full h-full object-cover" />
        </video>
      ) : (
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      <div className={`absolute inset-0 ${overlayColor}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
    </motion.div>
  );
};

const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const AnimatedButton = ({ children, variant = "primary", size = "lg", onClick, href, className = "", ...props }) => {
  const ButtonComponent = href ? Link : 'button';
  const buttonProps = href ? { to: href } : { onClick };

  const baseClasses = "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 shadow-lg hover:shadow-xl hover:from-emerald-500 hover:to-teal-500 focus:ring-emerald-300/50",
    secondary: "bg-slate-700/60 backdrop-blur-md text-slate-100 border-2 border-slate-500/50 px-8 py-4 hover:bg-slate-600/70 hover:border-slate-400/60 focus:ring-slate-300/50",
    outline: "border-2 border-slate-300 text-slate-200 px-8 py-4 hover:bg-slate-700/50 hover:text-slate-100 focus:ring-slate-300/50"
  };

  const sizes = {
    sm: "text-sm px-6 py-2",
    md: "text-base px-7 py-3",
    lg: "text-lg px-8 py-4",
    xl: "text-xl px-10 py-5"
  };

  return (
    <ButtonComponent
      {...buttonProps}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <motion.span
        className="relative z-10 flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </ButtonComponent>
  );
};

const StatsCard = ({ value, label, icon: Icon, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (isInView && typeof value === 'number') {
      const timer = setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setAnimatedValue(end);
            clearInterval(counter);
          } else {
            setAnimatedValue(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-slate-600/30 text-center hover:bg-slate-700/50 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {Icon && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={isInView ? { rotate: 360 } : {}}
          transition={{ duration: 1, delay: delay / 1000 + 0.2 }}
        >
          <Icon className="h-8 w-8 mx-auto mb-3 text-amber-300" />
        </motion.div>
      )}
      <motion.p
        className="text-2xl md:text-3xl font-bold text-slate-100 mb-1"
        key={animatedValue}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {typeof value === 'number' ? animatedValue : value}
      </motion.p>
      <p className="text-sm text-slate-300">{label}</p>
    </motion.div>
  );
};

const ScrollIndicator = ({ targetId = "main-content" }) => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.5 }}
    onClick={() => {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <motion.div
      className="flex flex-col items-center text-slate-300 hover:text-slate-100 transition-colors"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="text-sm font-medium mb-2">Scroll to explore</span>
      <ChevronDown className="h-6 w-6" />
    </motion.div>
  </motion.div>
);

const EnhancedHeroSection = ({
  // Content props
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  
  // Visual props
  backgroundImage,
  backgroundVideo,
  overlayColor = "bg-black/40",
  gradientOverlay = "bg-gradient-to-b from-transparent via-black/10 to-black/30",
  
  // Layout props
  height = "min-h-screen",
  textAlign = "center",
  contentPosition = "center", // center, left, right
  
  // Interactive elements
  stats = [],
  showScrollIndicator = true,
  scrollTarget = "main-content",
  
  // Branding
  logoUrl,
  showLogo = false,
  
  // Animation props
  enableParallax = true,
  animationDelay = 0,
  
  // Accessibility
  ariaLabel,
  
  // Custom styles
  className = "",
  contentClassName = "",
  
  // Page-specific customization
  pageType = "default", // home, about, programs, contact, etc.
  customContent,
}) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.1 });

  // Dynamic content based on page type
  const getPageSpecificContent = () => {
    switch (pageType) {
      case 'home':
        return {
          titleSize: "text-5xl md:text-7xl lg:text-8xl",
          subtitleSize: "text-xl md:text-2xl",
          spacing: "space-y-8",
        };
      case 'about':
        return {
          titleSize: "text-4xl md:text-6xl",
          subtitleSize: "text-lg md:text-xl",
          spacing: "space-y-6",
        };
      default:
        return {
          titleSize: "text-4xl md:text-6xl lg:text-7xl",
          subtitleSize: "text-lg md:text-xl",
          spacing: "space-y-6",
        };
    }
  };

  const pageConfig = getPageSpecificContent();

  const contentPositionClasses = {
    center: "items-center justify-center text-center",
    left: "items-center justify-start text-left",
    right: "items-center justify-end text-right",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: animationDelay,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className={`relative ${height} flex overflow-hidden ${className}`}
      aria-label={ariaLabel || `${pageType} hero section`}
      role="banner"
    >
      {/* Background */}
      {enableParallax ? (
        <ParallaxBackground
          backgroundImage={backgroundImage}
          backgroundVideo={backgroundVideo}
          overlayColor={overlayColor}
        />
      ) : (
        <div className="absolute inset-0">
          {backgroundVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster={backgroundImage}
              loading="lazy"
            >
              <source src={backgroundVideo} type="video/mp4" />
              <img src={backgroundImage} alt="Hero background" className="w-full h-full object-cover" />
            </video>
          ) : (
            <img
              src={backgroundImage}
              alt="Hero background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className={`absolute inset-0 ${overlayColor}`} />
          <div className={`absolute inset-0 ${gradientOverlay}`} />
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 w-full px-4 sm:px-6 lg:px-8 flex ${contentPositionClasses[contentPosition]} ${height}`}>
        <motion.div
          className={`max-w-7xl mx-auto ${pageConfig.spacing} ${contentClassName}`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo */}
          {showLogo && logoUrl && (
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <FloatingElement delay={0.5}>
                <motion.div
                  className="p-4 bg-slate-700/30 backdrop-blur-md rounded-full border border-slate-500/30"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <img 
                    src={logoUrl} 
                    alt="Dreamlight Welfare Society Logo" 
                    className="h-16 w-16 md:h-20 md:w-20"
                  />
                </motion.div>
              </FloatingElement>
            </motion.div>
          )}

          {/* Title */}
          {title && (
            <motion.h1
              variants={itemVariants}
              className={`${pageConfig.titleSize} font-extrabold text-slate-100 tracking-tight leading-tight text-shadow-lg ${textAlign === 'center' ? 'mx-auto' : ''}`}
            >
              {title}
            </motion.h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className={`${pageConfig.subtitleSize} font-semibold text-amber-200 ${textAlign === 'center' ? 'mx-auto' : ''}`}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              variants={itemVariants}
              className={`text-lg md:text-xl text-slate-200 max-w-4xl leading-relaxed ${textAlign === 'center' ? 'mx-auto' : ''}`}
            >
              {description}
            </motion.p>
          )}

          {/* Call-to-Action Buttons */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={itemVariants}
              className={`flex flex-col sm:flex-row gap-4 ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} items-center pt-4`}
            >
              {primaryCta && (
                <AnimatedButton
                  href={primaryCta.href}
                  onClick={primaryCta.onClick}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {primaryCta.icon && <primaryCta.icon className="mr-2 h-5 w-5" />}
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </AnimatedButton>
              )}
              
              {secondaryCta && (
                <AnimatedButton
                  href={secondaryCta.href}
                  onClick={secondaryCta.onClick}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {secondaryCta.icon && <secondaryCta.icon className="mr-2 h-5 w-5" />}
                  {secondaryCta.text}
                </AnimatedButton>
              )}
            </motion.div>
          )}

          {/* Stats */}
          {stats.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={`grid grid-cols-1 sm:grid-cols-${Math.min(stats.length, 3)} gap-6 pt-12 max-w-4xl ${textAlign === 'center' ? 'mx-auto' : ''}`}
            >
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  delay={index * 200}
                />
              ))}
            </motion.div>
          )}

          {/* Custom Content */}
          {customContent && (
            <motion.div variants={itemVariants}>
              {customContent}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && <ScrollIndicator targetId={scrollTarget} />}

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-slate-400/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-slate-400/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-amber-400/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
};

export default EnhancedHeroSection;