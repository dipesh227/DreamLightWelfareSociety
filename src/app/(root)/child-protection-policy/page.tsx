"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileHeart as FileShield, ShieldCheck, Users, AlertTriangle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PolicyPoint {
   icon: React.ComponentType<any>;
   title: string;
   description: string;
   color: string;
   index: number;
}

const PolicyPoint = ({ icon: Icon, title, description, color, index }: PolicyPoint) => (
   <motion.div
      className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
   >
      <div className={`p-2 rounded-full ${color.replace('text-', 'bg-')}/10 mt-1`}>
         <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <div>
         <h3 className="text-lg font-semibold text-[hsl(var(--dream-purple-dark))]">{title}</h3>
         <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
   </motion.div>
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
            <FileShield className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white mb-6" />
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

export default function ChildProtectionPolicyPage() {
   const policyHighlights: PolicyPoint[] = [
      {
         icon: ShieldCheck,
         title: "Zero Tolerance for Abuse",
         description: "We have a strict zero-tolerance policy towards any form of child abuse, exploitation, or neglect by our staff, volunteers, partners, or associates.",
         color: "text-destructive",
         index: 0
      },
      {
         icon: Users,
         title: "Safe Recruitment & Screening",
         description: "All individuals working with children undergo thorough background checks and screening processes. We provide mandatory child protection training.",
         color: "text-info",
         index: 1
      },
      {
         icon: AlertTriangle,
         title: "Clear Reporting Mechanisms",
         description: "We have established confidential and accessible channels for reporting any child safety concerns. All reports are taken seriously and investigated promptly.",
         color: "text-warning",
         index: 2
      },
      {
         icon: FileShield,
         title: "Child-Safe Programming",
         description: "Our programs are designed to be child-friendly and promote their well-being, safety, and participation in a respectful environment.",
         color: "text-success",
         index: 3
      },
   ];

   return (
      <div className="bg-background">
         <PageHeader
            title="Child Protection Policy"
            subtitle="Dreamlight Welfare Society is unequivocally committed to creating and maintaining a safe and protective environment for all children we interact with."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className="bg-card p-8 md:p-12 rounded-2xl shadow-xl mb-12"
               >
                  <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">Our Unwavering Commitment</h2>
                  <p className="text-foreground leading-relaxed mb-4">
                     At Dreamlight Welfare Society, the safety and well-being of children are paramount. We recognize our responsibility to protect children from all forms of harm, abuse, and exploitation. This Child Protection Policy outlines our commitment and the measures we take to ensure a safe environment for every child involved in our programs and activities.
                  </p>
                  <p className="text-foreground leading-relaxed">
                     This policy applies to all staff, volunteers, consultants, partners, and anyone associated with Dreamlight Welfare Society who may come into contact with children.
                  </p>
               </motion.div>

               <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dream-purple-dark))] mb-10 text-center">Key Pillars of Our Policy</h2>
               <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {policyHighlights.map((point) => (
                     <PolicyPoint key={point.title} {...point} />
                  ))}
               </div>

               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-center bg-[hsl(var(--dream-gold))]/10 p-8 rounded-2xl"
               >
                  <h3 className="text-xl font-semibold text-[hsl(var(--dream-purple-dark))] mb-4">Download Our Full Policy Document</h3>
                  <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                     For a comprehensive understanding of our child protection framework, procedures, and commitments, please download the full policy document.
                  </p>
                  <a href="/policies/child-protection-policy.pdf" target="_blank" rel="noopener noreferrer">
                     <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] text-white hover:opacity-90 rounded-full px-8 py-3">
                        <Download className="mr-2 h-5 w-5" /> Download PDF
                     </Button>
                  </a>
               </motion.div>
            </div>
         </section>

         <section className="py-16 md:py-20 bg-[hsl(var(--dream-purple-dark))] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
               <AlertTriangle className="h-16 w-16 mx-auto text-[hsl(var(--dream-gold-light))] mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Reporting a Concern</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  If you have any concerns about the safety or well-being of a child in relation to Dreamlight's activities, or if you wish to report a breach of this policy, please contact us immediately. All reports will be handled with confidentiality and urgency.
               </p>
               <Link href="/contact?subject=ChildProtectionConcern">
                  <Button size="lg" className="bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] hover:bg-[hsl(var(--dream-gold-light))] font-semibold px-10 py-3.5 rounded-full text-base shadow-lg">
                     Report a Concern Securely
                  </Button>
               </Link>
            </div>
         </section>
      </div>
   );
}
