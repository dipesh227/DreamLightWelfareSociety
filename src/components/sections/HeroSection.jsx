
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, PlayCircle, Award, ShieldCheck, Sparkles, ChevronsDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = ({ logoUrl, handleDonate, handleVolunteer }) => {

  const stats = [
    { value: "12+", label: "Years Strong", icon: Award, color: "text-dream-gold" },
    { value: "75K+", label: "Lives Touched", icon: Users, color: "text-dream-purple" },
    { value: "95%", label: "Fund Utilization", icon: ShieldCheck, color: "text-green-500" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 z-0">
        <img   
          class="w-full h-full object-cover opacity-30"
          alt="Vibrant group of Indian children smiling and learning outdoors, showcasing community upliftment and hope"
          src="https://images.unsplash.com/photo-1681745207024-42f0dfbcedd5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-slate-100/80 to-slate-100"></div>
      </div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="space-y-8 md:space-y-10"
        >
          <motion.div 
            className="inline-block p-3 bg-white/80 rounded-full shadow-2xl backdrop-blur-md pulse-glow"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 260, damping: 10 }}
          >
            <img src={logoUrl} alt="Dreamlight Welfare Society main logo" className="h-20 w-20 md:h-28 md:w-28" />
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dream-purple-darker tracking-tighter leading-tight text-shadow-md">
            Igniting Hope, <br className="hidden sm:block" /> <span className="gradient-text">Empowering Futures.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dreamlight Welfare Society is a beacon of change, dedicated to uplifting communities in India through sustainable education, healthcare, and livelihood programs. Join our movement to transform lives.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center pt-5"
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Link to="/donate">
              <Button 
                onClick={handleDonate}
                size="lg"
                className="gradient-bg text-white px-8 py-3.5 text-base md:text-lg font-semibold rounded-full hover:opacity-90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto group"
              >
                <Sparkles className="mr-2.5 h-5 w-5 group-hover:animate-spin animation-duration-1000" />
                Donate Now
              </Button>
            </Link>
            
            <Link to="/volunteer">
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
            className="pt-10 md:pt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center border border-slate-200/60 hover:shadow-xl transition-shadow duration-300"
                variants={{ hidden: { opacity: 0, y: 20, scale:0.9 }, visible: { opacity: 1, y: 0, scale:1 } }}
                whileHover={{ y: -5 }}
              >
                <stat.icon className={`h-7 w-7 mx-auto mb-1.5 ${stat.color}`} />
                <p className="text-xl md:text-2xl font-bold text-dream-purple-dark">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity:0, y: 20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="pt-6"
          >
             <a href="#about" className="inline-flex items-center text-sm text-slate-600 hover:text-dream-purple transition-colors duration-300 group animate-bounce animation-delay-2000">
              Scroll to Discover <ChevronsDown className="ml-1.5 h-5 w-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
