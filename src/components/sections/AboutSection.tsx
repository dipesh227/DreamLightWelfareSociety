'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[550px]"
              alt="Diverse group of smiling community members and volunteers working together"
              src="https://images.unsplash.com/photo-1580982333389-cca46f167381"
              width={800}
              height={450}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-dream-gold-light/30 text-dream-gold font-semibold text-xs rounded-full uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dream-purple-dark leading-[1.2]">
              Fueling Change, <br />One Community at a Time.
            </h2>
            <p className="text-lg text-muted-foreground leading-[1.8]">
              Dreamlight Welfare Society is a passionate non-profit organization committed to uplifting underserved communities. We believe in creating sustainable solutions that empower individuals and foster self-reliance.
            </p>

            <div className="space-y-7 pt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-dream-purple-light/10 p-3 rounded-full mt-1">
                  <Target className="h-6 w-6 text-dream-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dream-purple-dark">Our Vision</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mt-1">A world where every individual has the opportunity to thrive with dignity and access to essential resources.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-dream-gold-light/20 p-3 rounded-full mt-1">
                  <Lightbulb className="h-6 w-6 text-dream-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dream-purple-dark">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-[1.7] mt-1">To implement impactful programs in education, healthcare, and livelihood, creating pathways to a brighter future.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-8 py-3 text-base font-semibold">
                  Learn More About Us
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