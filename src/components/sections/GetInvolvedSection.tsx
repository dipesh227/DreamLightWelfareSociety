'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface InvolvementOption {
   icon: LucideIcon;
   title: string;
   description: string;
   link: string;
   buttonText: string;
   onClick?: () => void;
}

interface GetInvolvedSectionProps {
   handleDonate: () => void;
   handleVolunteer: () => void;
}

const GetInvolvedSection: React.FC<GetInvolvedSectionProps> = ({
   handleDonate,
   handleVolunteer,
}) => {
   const options: InvolvementOption[] = [
      {
         icon: Heart,
         title: "Make a Donation",
         description: "Support our initiatives through monetary contributions. Every amount helps create a meaningful impact in the lives of those we serve.",
         link: "/donate",
         buttonText: "Donate Now",
         onClick: handleDonate,
      },
      {
         icon: HandHeart,
         title: "Volunteer With Us",
         description: "Join our team of dedicated volunteers. Share your skills and time to help make a difference in your community.",
         link: "/volunteer",
         buttonText: "Become a Volunteer",
         onClick: handleVolunteer,
      },
      {
         icon: Share2,
         title: "Spread the Word",
         description: "Help us reach more people by sharing our mission. Follow us on social media and be our ambassador in your network.",
         link: "/social-media",
         buttonText: "Share Our Story",
      },
   ];

   return (
      <section id="get-involved" className="py-20 bg-gradient-to-b from-background to-dream-purple/5">
         <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 bg-dream-gold/10 text-dream-gold font-semibold text-xs rounded-full uppercase tracking-wider mb-4"
               >
                  Get Involved
               </motion.span>
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6"
               >
                  Be Part of the Change
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground text-lg"
               >
                  There are many ways to contribute to Dream Light&apos;s vision. Find the path that resonates with you and help us build a better world.
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
               {options.map((option, index) => (
                  <motion.div
                     key={index}
                     variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                     }}
                     className="relative p-8 rounded-2xl border border-border bg-card hover:bg-card/80 transition-colors duration-300"
                  >
                     <div className="bg-dream-purple/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                        <option.icon className="h-6 w-6 text-dream-purple" />
                     </div>
                     <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                     <p className="text-muted-foreground mb-6">{option.description}</p>
                     <Link href={option.link}>
                        <Button
                           onClick={option.onClick}
                           variant="outline"
                           className="w-full rounded-full border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10"
                        >
                           {option.buttonText}
                        </Button>
                     </Link>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default GetInvolvedSection;
