import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, PieChart, ShieldCheck, Download, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';


const ReportCard = ({ title, date, type, downloadLink, summary, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-dream-gold"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-semibold text-dream-gold bg-dream-gold/10 px-2.5 py-1 rounded-full">{type}</span>
      <span className="text-xs text-slate-500">{date}</span>
    </div>
    <h3 className="text-xl font-bold text-dream-purple-dark mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed mb-4">{summary}</p>
    <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-dream-purple hover:text-dream-purple-dark font-semibold group">
      View Report <Download size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
    </a>
  </motion.div>
);

const MetricCard = ({ icon: Icon, value, label, color, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg text-center"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Icon className={`h-10 w-10 mx-auto mb-3 ${color}`} />
    <p className={`text-3xl font-bold ${color}`}>{value}</p>
    <p className="text-sm text-slate-600">{label}</p>
  </motion.div>
);

const TransparencyPage = () => {
  const reports = [
    { title: "Annual Impact Report 2024", date: "March 15, 2025", type: "Annual Report", downloadLink: "/reports/annual-report-2024.pdf", summary: "A comprehensive overview of our activities, achievements, and financial performance in 2024." },
    { title: "Financial Statement Q4 2024", date: "January 30, 2025", type: "Financial Report", downloadLink: "/reports/financials-q4-2024.pdf", summary: "Detailed financial statements for the fourth quarter of 2024, audited by independent auditors." },
    { title: "Education Program Evaluation 2024", date: "February 20, 2025", type: "Program Report", downloadLink: "/reports/education-evaluation-2024.pdf", summary: "An in-depth evaluation of our education programs' impact and outcomes over the past year." },
  ];

  const keyMetrics = [
    { icon: PieChart, value: "92%", label: "Funds Directly to Programs", color: "text-green-600" },
    { icon: BarChart2, value: "75,000+", label: "Beneficiaries Reached", color: "text-dream-purple" },
    { icon: ShieldCheck, value: "100%", label: "Compliance with Standards", color: "text-blue-600" },
    { icon: Eye, value: "Full", label: "Financial Audit Transparency", color: "text-dream-gold" },
  ];

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Our Commitment to Transparency"
        subtitle="We believe in open accountability. Explore our reports, financial statements, and impact metrics to see how your support makes a difference."
        icon={ShieldCheck}
        iconColor="text-dream-purple-dark"
        gradientFrom="from-dream-gold"
        gradientTo="to-dream-gold-light"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Key Transparency Metrics</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">We are proud to share how we utilize resources and measure our impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {keyMetrics.map((metric, index) => (
              <MetricCard key={metric.label} {...metric} index={index} />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-10 text-center md:text-left">Reports & Publications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <ReportCard key={report.title} {...report} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact#reports-archive"> {/* Example link, adjust as needed */}
              <Button variant="outline" className="border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-8 py-3">
                View Full Reports Archive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto text-dream-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Governance & Policies</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Dreamlight Welfare Society is governed by an independent board and adheres to strict ethical guidelines and financial controls. Our policies on data privacy, child protection, and anti-corruption are publicly available.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/policies/governance-overview.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-dream-gold text-dream-purple-dark font-semibold px-10 py-4 rounded-full text-base shadow-lg hover:bg-dream-gold-light transition-all duration-300"
            >
              Read Our Governance Overview
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransparencyPage;