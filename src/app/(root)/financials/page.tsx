"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, BarChart3, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FinancialMetric {
   value: string;
   label: string;
   description: string;
   icon: React.ComponentType<any>;
   color: string;
   index: number;
}

interface ChartData {
   name: string;
   percentage: string;
   color: string;
}

const MetricDisplay = ({ value, label, description, icon: Icon, color, index }: FinancialMetric) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
   >
      <div className={`inline-block p-3 rounded-full mb-4 ${color.replace('text-', 'bg-')}/10`}>
         <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <p className={`text-4xl font-bold ${color} mb-1`}>{value}</p>
      <p className="text-md font-semibold text-foreground mb-2">{label}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
   </motion.div>
);

const ChartBar = ({ name, percentage, color }: ChartData) => (
   <div className="mb-3">
      <div className="flex justify-between text-xs text-muted-foreground mb-0.5">
         <span>{name}</span>
         <span>{percentage}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
         <motion.div
            className={`h-2.5 rounded-full ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
         />
      </div>
   </div>
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
            <Landmark className="h-16 w-16 md:h-20 md:w-20 mx-auto text-[hsl(var(--dream-purple-dark))] mb-6" />
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

export default function FinancialsOverviewPage() {
   const keyFinancials: FinancialMetric[] = [
      {
         value: "₹5 Cr+",
         label: "Total Funds Raised (Last FY)",
         description: "From diverse sources including individuals, corporates, and grants.",
         icon: BarChart3,
         color: "text-[hsl(var(--dream-purple))]",
         index: 0
      },
      {
         value: "92%",
         label: "Program Expense Ratio",
         description: "Percentage of total expenses spent directly on program activities and services.",
         icon: PieChart,
         color: "text-success",
         index: 1
      },
      {
         value: "6%",
         label: "Administrative Overhead",
         description: "Efficiently managed to maximize funds for direct impact.",
         icon: Landmark,
         color: "text-info",
         index: 2
      },
      {
         value: "2%",
         label: "Fundraising Costs",
         description: "Investments made to secure future funding and sustainability.",
         icon: FileText,
         color: "text-[hsl(var(--dream-gold))]",
         index: 3
      },
   ];

   const fundSources: ChartData[] = [
      { name: "Individual Donations", percentage: "45%", color: "bg-[hsl(var(--dream-purple))]" },
      { name: "Corporate Partnerships (CSR)", percentage: "30%", color: "bg-success" },
      { name: "Grants & Foundations", percentage: "20%", color: "bg-info" },
      { name: "Other Income", percentage: "5%", color: "bg-[hsl(var(--dream-gold))]" },
   ];

   const fundUtilization: ChartData[] = [
      { name: "Education Programs", percentage: "40%", color: "bg-[hsl(var(--dream-purple))]" },
      { name: "Healthcare Initiatives", percentage: "25%", color: "bg-success" },
      { name: "Livelihood & Skill Development", percentage: "15%", color: "bg-info" },
      { name: "Water & Environment", percentage: "12%", color: "bg-teal-500" },
      { name: "Admin & Fundraising", percentage: "8%", color: "bg-[hsl(var(--dream-gold))]" },
   ];

   return (
      <div className="bg-background">
         <PageHeader
            title="Financial Transparency"
            subtitle="Understanding how your contributions are utilized to create maximum impact. We are committed to accountability and responsible stewardship of resources."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16 md:mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Our Financial Health at a Glance</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     Key metrics from our latest audited financial year, demonstrating our commitment to efficient resource utilization. (Figures are illustrative)
                  </p>
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  {keyFinancials.map((metric) => (
                     <MetricDisplay key={metric.label} {...metric} />
                  ))}
               </div>

               <div className="grid md:grid-cols-2 gap-12 items-start">
                  <motion.div
                     className="bg-card p-8 rounded-2xl shadow-xl"
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7 }}
                  >
                     <h3 className="text-2xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">Sources of Our Funding</h3>
                     <div className="space-y-4">
                        {fundSources.map((source, index) => <ChartBar key={index} {...source} />)}
                     </div>
                     <p className="text-xs text-muted-foreground mt-4">Based on Last Financial Year's data. Percentages are approximate.</p>
                  </motion.div>
                  <motion.div
                     className="bg-card p-8 rounded-2xl shadow-xl"
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7, delay: 0.1 }}
                  >
                     <h3 className="text-2xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">How We Utilize Your Contributions</h3>
                     <div className="space-y-4">
                        {fundUtilization.map((item, index) => <ChartBar key={index} {...item} />)}
                     </div>
                     <p className="text-xs text-muted-foreground mt-4">Program expenses include direct project costs and support staff.</p>
                  </motion.div>
               </div>
            </div>
         </section>

         <section className="py-16 md:py-24 bg-[hsl(var(--dream-purple-dark))] text-white">
            <div className="max-w-3xl mx-auto px-4 text-center">
               <FileText className="h-16 w-16 mx-auto text-[hsl(var(--dream-gold-light))] mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Detailed Reports & Audits</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  For a comprehensive understanding of our financial performance, governance, and impact, please refer to our detailed annual reports and audited financial statements.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/transparency">
                     <Button size="lg" className="bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] hover:bg-[hsl(var(--dream-gold-light))] font-semibold px-8 py-3.5 rounded-full text-base shadow-lg w-full sm:w-auto">
                        <Download size={18} className="mr-2" /> View Annual Reports
                     </Button>
                  </Link>
                  <Link href="/contact?subject=FinancialInquiry">
                     <Button size="lg" variant="outline" className="border-2 border-[hsl(var(--dream-gold-light))] text-[hsl(var(--dream-gold-light))] hover:bg-[hsl(var(--dream-gold-light))]/10 font-semibold px-8 py-3.5 rounded-full text-base w-full sm:w-auto">
                        Contact Finance Team
                     </Button>
                  </Link>
               </div>
            </div>
         </section>
      </div>
   );
}
