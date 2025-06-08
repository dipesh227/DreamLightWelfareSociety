"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, PieChart, ShieldCheck, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Report {
   title: string;
   date: string;
   type: string;
   downloadLink: string;
   summary: string;
}

interface Metric {
   icon: React.ComponentType<any>;
   value: string;
   label: string;
   color: string;
}

const ReportCard = ({ title, date, type, downloadLink, summary, index }: Report & { index: number }) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[hsl(var(--dream-gold))]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
   >
      <div className="flex justify-between items-start mb-2">
         <span className="text-xs font-semibold text-[hsl(var(--dream-gold))] bg-[hsl(var(--dream-gold))]/10 px-2.5 py-1 rounded-full">{type}</span>
         <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-[hsl(var(--dream-purple-dark))] mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{summary}</p>
      <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-[hsl(var(--dream-purple))] hover:text-[hsl(var(--dream-purple-dark))] font-semibold group">
         View Report <Download size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
      </a>
   </motion.div>
);

const MetricCard = ({ icon: Icon, value, label, color, index }: Metric & { index: number }) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
   >
      <Icon className={`h-10 w-10 mx-auto mb-3 ${color}`} />
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
   </motion.div>
);

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="relative bg-gradient-to-br from-[hsl(var(--dream-gold))] to-[hsl(var(--dream-gold-light))] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <ShieldCheck className="h-16 w-16 md:h-20 md:w-20 mx-auto text-[hsl(var(--dream-purple-dark))] mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">
               {title}
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--dream-purple-dark))]/80 max-w-4xl mx-auto leading-relaxed">
               {subtitle}
            </p>
         </motion.div>
      </div>
   </div>
);

export default function TransparencyPage() {
   const reports: Report[] = [
      {
         title: "Annual Impact Report 2024",
         date: "March 15, 2025",
         type: "Annual Report",
         downloadLink: "/reports/annual-report-2024.pdf",
         summary: "A comprehensive overview of our activities, achievements, and financial performance in 2024."
      },
      {
         title: "Financial Statement Q4 2024",
         date: "January 30, 2025",
         type: "Financial Report",
         downloadLink: "/reports/financials-q4-2024.pdf",
         summary: "Detailed financial statements for the fourth quarter of 2024, audited by independent auditors."
      },
      {
         title: "Education Program Evaluation 2024",
         date: "February 20, 2025",
         type: "Program Report",
         downloadLink: "/reports/education-evaluation-2024.pdf",
         summary: "An in-depth evaluation of our education programs' impact and outcomes over the past year."
      },
   ];

   const keyMetrics: Metric[] = [
      { icon: PieChart, value: "92%", label: "Funds Directly to Programs", color: "text-success" },
      { icon: BarChart2, value: "75,000+", label: "Beneficiaries Reached", color: "text-[hsl(var(--dream-purple))]" },
      { icon: ShieldCheck, value: "100%", label: "Compliance with Standards", color: "text-info" },
      { icon: Eye, value: "Full", label: "Financial Audit Transparency", color: "text-[hsl(var(--dream-gold))]" },
   ];

   return (
      <div className="bg-background">
         <PageHeader
            title="Our Commitment to Transparency"
            subtitle="We believe in open accountability. Explore our reports, financial statements, and impact metrics to see how your support makes a difference."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Key Transparency Metrics</h2>
                  <p className="text-muted-foreground text-lg max-w-xl mx-auto">We are proud to share how we utilize resources and measure our impact.</p>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  {keyMetrics.map((metric, index) => (
                     <MetricCard key={metric.label} {...metric} index={index} />
                  ))}
               </div>

               <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-10 text-center md:text-left">Reports & Publications</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {reports.map((report, index) => (
                     <ReportCard key={report.title} {...report} index={index} />
                  ))}
               </div>
               <div className="mt-12 text-center">
                  <Link href="/contact#reports-archive">
                     <Button variant="outline" className="border-[hsl(var(--dream-purple))] text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10 rounded-full px-8 py-3">
                        View Full Reports Archive
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24 bg-[hsl(var(--dream-purple-dark))] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
               <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto text-[hsl(var(--dream-gold-light))] mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Governance & Policies</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Dreamlight Welfare Society is governed by an independent board and adheres to strict ethical guidelines and financial controls. Our policies on data privacy, child protection, and anti-corruption are publicly available.
               </p>
               <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <a
                     href="/policies/governance-overview.pdf"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] font-semibold px-10 py-4 rounded-full text-base shadow-lg hover:bg-[hsl(var(--dream-gold-light))] transition-all duration-300"
                  >
                     Read Our Governance Overview
                  </a>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
