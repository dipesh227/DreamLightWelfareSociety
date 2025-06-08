"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Zap, HeartHandshake as Handshake, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PartnershipType {
   icon: React.ComponentType<any>;
   title: string;
   description: string;
   benefits: string[];
   color: string;
   index: number;
}

interface Partner {
   src: string;
   alt: string;
   link: string;
}

const PartnershipTypeCard = ({ icon: Icon, title, description, benefits, color, index }: PartnershipType) => (
   <motion.div
      className="bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
   >
      <div className={`inline-block p-4 rounded-full mb-5 self-start ${color.replace('text-', 'bg-')}/10`}>
         <Icon className={`h-10 w-10 ${color}`} />
      </div>
      <h3 className="text-2xl font-bold text-[hsl(var(--dream-purple-dark))] mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow">{description}</p>
      <div className="mb-5">
         <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
         <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-inside marker:text-[hsl(var(--dream-purple))]">
            {benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
         </ul>
      </div>
      <Link href="/contact?subject=PartnershipInquiry" className="mt-auto">
         <Button variant="outline" className={`w-full border-2 ${color.replace('text-', 'border-')} ${color} hover:bg-primary/10 rounded-full`}>
            Inquire About {title}
         </Button>
      </Link>
   </motion.div>
);

const PartnerLogo = ({ src, alt, link, index }: Partner & { index: number }) => (
   <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -3 }}
   >
      <img className="h-16 w-auto mx-auto object-contain" alt={alt} src={src} />
   </motion.a>
);

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="relative bg-gradient-to-br from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <Handshake className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
               {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
               {subtitle}
            </p>
         </motion.div>
      </div>
   </div>
);

export default function PartnershipsPage() {
   const partnershipTypes: PartnershipType[] = [
      {
         icon: Briefcase,
         title: "Corporate Partnerships (CSR)",
         description: "Align your company's social responsibility goals with our impactful programs. We offer tailored CSR initiatives that create shared value and demonstrate your commitment to social good.",
         benefits: ["Enhanced brand reputation", "Employee engagement opportunities", "Measurable social impact", "Tax benefits (as applicable)"],
         color: "text-[hsl(var(--dream-purple))]",
         index: 0
      },
      {
         icon: Zap,
         title: "Program Sponsorship",
         description: "Sponsor specific projects or entire programs in areas like education, healthcare, or environmental conservation. Your support directly fuels on-ground activities and creates lasting change.",
         benefits: ["Targeted impact in chosen area", "Naming rights & recognition", "Regular progress reports", "Site visit opportunities"],
         color: "text-success",
         index: 1
      },
      {
         icon: Handshake,
         title: "Cause Marketing Campaigns",
         description: "Collaborate on co-branded marketing campaigns that raise awareness and funds for Dreamlight's mission while engaging your customers with a meaningful cause.",
         benefits: ["Increased customer loyalty", "Positive PR and media coverage", "Innovative brand association", "Mutual audience reach"],
         color: "text-info",
         index: 2
      },
      {
         icon: Users,
         title: "Institutional & NGO Alliances",
         description: "We actively seek collaborations with other NGOs, foundations, academic institutions, and government bodies to amplify our reach, share best practices, and tackle complex challenges together.",
         benefits: ["Synergistic impact", "Resource & knowledge sharing", "Joint advocacy efforts", "Expanded program delivery"],
         color: "text-[hsl(var(--dream-gold))]",
         index: 3
      },
   ];

   const currentPartners: Partner[] = [
      { src: "https://logo.clearbit.com/google.com", alt: "Google Logo", link: "https://google.com" },
      { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft Logo", link: "https://microsoft.com" },
      { src: "https://logo.clearbit.com/salesforce.com", alt: "Salesforce Logo", link: "https://salesforce.com" },
      { src: "https://logo.clearbit.com/unicef.org", alt: "UNICEF Logo", link: "https://unicef.org" },
      { src: "https://logo.clearbit.com/tatatrusts.org", alt: "Tata Trusts Logo", link: "https://tatatrusts.org" },
      { src: "https://logo.clearbit.com/infosys.com", alt: "Infosys Foundation Logo", link: "https://infosys.com/infosys-foundation" },
   ];

   return (
      <div className="bg-background">
         <PageHeader
            title="Partner With Us for Greater Impact"
            subtitle="Together, we can achieve more. Dreamlight Welfare Society collaborates with corporations, foundations, NGOs, and institutions to create sustainable change and uplift communities."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16 md:mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Ways to Collaborate</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     We offer diverse partnership models to suit your organization's objectives and capacity.
                  </p>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
                  {partnershipTypes.map((type) => (
                     <PartnershipTypeCard key={type.title} {...type} />
                  ))}
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24 bg-[hsl(var(--dream-purple-light))]/10">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Our Valued Partners</h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                     We are grateful for the support of organizations that share our vision. (Logos are for demonstration)
                  </p>
               </div>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                  {currentPartners.map((partner, index) => (
                     <PartnerLogo key={partner.alt} {...partner} index={index} />
                  ))}
               </div>
            </div>
         </section>

         <section className="py-20 bg-card">
            <div className="max-w-3xl mx-auto px-4 text-center">
               <MessageSquare className="h-16 w-16 mx-auto text-[hsl(var(--dream-gold))] mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">Let's Discuss a Partnership</h2>
               <p className="text-foreground text-lg leading-relaxed mb-8">
                  If your organization is interested in exploring a partnership with Dreamlight Welfare Society, we would love to hear from you. Contact our partnerships team to start a conversation.
               </p>
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Link href="/contact?subject=PartnershipInquiry">
                     <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] text-white font-semibold px-10 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300">
                        Contact Our Partnerships Team
                     </Button>
                  </Link>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
