import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Users, Globe, ShieldCheck, BookHeart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] shadow-2xl rounded-2xl overflow-hidden group"
          >
            <img   
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt="Diverse group of smiling Indian community members and volunteers working together outdoors, symbolizing unity and collaboration for social good."
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/837ab7d38f12fe860d44e54f99465989.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white p-2 bg-black/20 rounded-md backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-shadow-md">Unity in Action</h3>
                <p className="text-sm opacity-90 text-shadow-sm">Building stronger communities together.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <span className="inline-block px-4 py-1.5 bg-dws-gold-light/30 text-dws-gold font-semibold text-xs rounded-full uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dws-blue-dark leading-tight">
              Dreamlight Welfare Society: <br />Empowering Uttarakhand's Future.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Dreamlight Welfare Society, established on June 4th, 2025, and registered under the Societies Registration Act, 1860 (Reg. No. TRSOCI067080525216401), is a passionate non-profit organization committed to uplifting underserved communities across Uttarakhand, India. We believe in creating sustainable solutions that empower individuals and foster self-reliance.
            </p>
            
            <div className="space-y-5 pt-4">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}
              >
                <div className="flex-shrink-0 bg-dws-blue-light/20 p-3.5 rounded-full mt-1 shadow-sm">
                  <Target className="h-6 w-6 text-dws-blue-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dws-blue-dark">Our Vision</h3>
                  <p className="text-slate-600 text-sm">A prosperous and equitable Uttarakhand where every individual, especially women and children, has the opportunity to thrive with dignity, access to essential resources, and the skills for a self-reliant future.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}
              >
                <div className="flex-shrink-0 bg-dws-gold-light/20 p-3.5 rounded-full mt-1 shadow-sm">
                  <Globe className="h-6 w-6 text-dws-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dws-blue-dark">Our Mission</h3>
                  <p className="text-slate-600 text-sm">To design and implement impactful programs focusing on women empowerment, child development, skill training (including handicrafts, computers, and self-employment), health awareness (including AIDS awareness and drug de-addiction), and environmental protection, creating sustainable pathways to a brighter future for the people of Uttarakhand.</p>
                </div>
              </motion.div>
            </div>
            <div className="pt-5">
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-dws-blue-dark text-dws-blue-dark hover:bg-dws-blue-dark/10 rounded-full px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 group">
                  Learn More About Us <Heart className="ml-2 h-4 w-4 group-hover:fill-dws-blue-dark/20 transition-colors"/>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;