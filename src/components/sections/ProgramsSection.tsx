'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Book, Heart, Stethoscope, Home, Users, Sprout } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const programs = [
   {
      icon: Book,
      title: "Education Initiatives",
      description: "Providing quality education and learning resources to underprivileged children, focusing on digital literacy and skill development.",
      color: "text-dream-purple",
      bgColor: "bg-dream-purple/10"
   },
   {
      icon: Heart,
      title: "Women Empowerment",
      description: "Supporting women through vocational training, self-help groups, and entrepreneurship programs.",
      color: "text-dream-gold",
      bgColor: "bg-dream-gold/10"
   },
   {
      icon: Stethoscope,
      title: "Healthcare Access",
      description: "Organizing health camps, awareness programs, and ensuring access to basic healthcare services.",
      color: "text-dream-purple-light",
      bgColor: "bg-dream-purple-light/10"
   },
   {
      icon: Home,
      title: "Rural Development",
      description: "Working on infrastructure development and sustainable practices in rural communities.",
      color: "text-dream-gold",
      bgColor: "bg-dream-gold/10"
   },
   {
      icon: Users,
      title: "Youth Leadership",
      description: "Developing future leaders through mentorship, skill-building workshops, and community engagement.",
      color: "text-dream-purple",
      bgColor: "bg-dream-purple/10"
   },
   {
      icon: Sprout,
      title: "Environmental Care",
      description: "Promoting environmental awareness and implementing sustainable practices in communities.",
      color: "text-dream-purple-light",
      bgColor: "bg-dream-purple-light/10"
   }
];

const ProgramsSection: React.FC = () => {
   return (
      <section id="programs" className="py-20 bg-background">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 bg-dream-purple/10 text-dream-purple font-semibold text-xs rounded-full uppercase tracking-wider mb-4"
               >
                  Our Programs
               </motion.span>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6"
               >
                  Making a Difference Through Action
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground text-lg"
               >
                  Our comprehensive programs address various aspects of community development,
                  from education to healthcare, creating lasting positive impact.
               </motion.p>
            </div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
               }}
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
               {programs.map((program, index) => (
                  <motion.div
                     key={index}
                     variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                     className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:bg-card transition-colors duration-300"
                  >
                     <div className={`${program.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                        <program.icon className={`h-6 w-6 ${program.color}`} />
                     </div>
                     <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="text-center mt-12"
            >
               <Link href="/programs">
                  <Button
                     variant="outline"
                     size="lg"
                     className="rounded-full border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10"
                  >
                     Explore All Programs
                  </Button>
               </Link>
            </motion.div>
         </div>
      </section>
   );
};

export default ProgramsSection;
