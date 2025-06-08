'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Stethoscope, Globe, Star } from 'lucide-react';
import Image from 'next/image';

interface ImpactStatCardProps {
   icon: React.ElementType;
   value: string;
   label: string;
   iconColor: string;
   bgColor: string;
}

const ImpactStatCard: React.FC<ImpactStatCardProps> = ({ icon: Icon, value, label, iconColor, bgColor }) => (
   <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card p-6 md:p-8 rounded-2xl shadow-lg card-hover"
   >
      <div className={`${bgColor} p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4`}>
         <Icon className={`h-6 w-6 md:h-8 md:w-8 ${iconColor}`} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{value}</h3>
      <p className="text-muted-foreground text-sm md:text-base">{label}</p>
   </motion.div>
);

const ImpactSection: React.FC = () => {
   const stats = [
      { icon: Users, value: "50,000+", label: "Lives Impacted", iconColor: "text-dream-purple", bgColor: "bg-dream-purple-light/20" },
      { icon: BookOpen, value: "200+", label: "Schools Supported", iconColor: "text-green-600", bgColor: "bg-green-100" },
      { icon: Stethoscope, value: "100+", label: "Health Clinics", iconColor: "text-blue-600", bgColor: "bg-blue-100" },
      { icon: Globe, value: "25+", label: "Communities Served", iconColor: "text-dream-gold", bgColor: "bg-dream-gold-light/20" },
   ];

   const testimonials = [
      {
         quote: "Thanks to Dreamlight Welfare Society's education program, my daughter is now the first in our family to attend university. Their support changed our entire future.",
         author: "Priya Sharma, Parent"
      },
      {
         quote: "The clean water project in our village has eliminated waterborne diseases. Our children are healthier and can focus on their studies.",
         author: "Rajesh Kumar, Village Leader"
      }
   ];

   return (
      <section className="py-20 md:py-28 bg-muted/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                  Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-dream-purple via-dream-gold to-dream-purple-light">Impact</span>
               </h2>
               <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Measuring success through the positive changes we&apos;ve brought to communities and the lives we&apos;ve touched.
               </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
               {stats.map((stat, index) => (
                  <ImpactStatCard key={index} {...stat} />
               ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
               >
                  <Image
                     src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368"
                     alt="Happy children benefiting from NGO programs"
                     width={800}
                     height={600}
                     className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                  />
               </motion.div>

               <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Success Stories</h3>
                  {testimonials.map((testimonial, index) => (
                     <motion.div
                        key={index}
                        className="bg-card p-6 rounded-xl shadow-lg border border-dream-purple/10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                     >
                        <div className="flex items-center mb-3">
                           <div className="flex text-dream-gold">
                              {[...Array(5)].map((_, i) => (
                                 <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                           </div>
                        </div>
                        <p className="text-foreground mb-3">{testimonial.quote}</p>
                        <p className="font-semibold text-dream-purple">- {testimonial.author}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ImpactSection;
