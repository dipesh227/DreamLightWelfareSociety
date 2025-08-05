import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Users, Globe } from 'lucide-react';
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
              src="https://images.unsplash.com/photo-1560220604-509907ca9266" />
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
            <span className="inline-block px-4 py-1.5 bg-dream-logo-yellow-light/30 text-dream-logo-yellow font-semibold text-xs rounded-full uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight">
              Fueling Change, <br />One Community at a Time in India.
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Dreamlight Welfare Society is a passionate non-profit organization committed to uplifting underserved communities across India. We believe in creating sustainable solutions that empower individuals and foster self-reliance.
            </p>
            
            <div className="space-y-5 pt-4">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}
              >
                <div className="flex-shrink-0 bg-dream-logo-blue/10 p-3.5 rounded-full mt-1 shadow-sm">
                  <Target className="h-6 w-6 text-dream-logo-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground">Our Vision</h3>
                  <p className="text-slate-600 text-sm">A prosperous India where every individual has the opportunity to thrive with dignity and access to essential resources.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}
              >
                <div className="flex-shrink-0 bg-dream-logo-yellow/20 p-3.5 rounded-full mt-1 shadow-sm">
                  <Globe className="h-6 w-6 text-dream-logo-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground">Our Mission</h3>
                  <p className="text-slate-600 text-sm">To implement impactful programs in education, healthcare, and livelihood, creating pathways to a brighter future for all Indians.</p>
                </div>
              </motion.div>
            </div>
            <div className="pt-5">
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-dream-logo-blue text-dream-logo-blue hover:bg-dream-logo-blue/10 rounded-full px-8 py-3 text-base font-semibold shadow-md hover:shadow-lg transition-all transform hover:scale-105 group">
                  Learn More About Us <Heart className="ml-2 h-4 w-4 group-hover:fill-dream-logo-blue/20 transition-colors"/>
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