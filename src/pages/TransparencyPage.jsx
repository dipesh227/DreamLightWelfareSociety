import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, PieChart, ShieldCheck, Download, ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/common/layout/PageHeader';


const ReportCard = ({ title, date, type, downloadLink, summary, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-dws-gold"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-semibold text-dws-gold bg-dws-gold/10 px-2.5 py-1 rounded-full">{type}</span>
      <span className="text-xs text-slate-500">{date}</span>
    </div>
    <h3 className="text-xl font-bold text-dws-blue-dark mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed mb-4">{summary}</p>
    <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-dws-blue-dark hover:text-dws-blue-light font-semibold group">
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
    { title: "NGO Registration Certificate", date: "June 04, 2025", type: "Legal Document", downloadLink: "/reports/ngo-registration-cert.pdf", summary: "Official registration certificate of Dreamlight Welfare Society (Reg. No. TRSOCI067080525216401)." },
    { title: "Annual Impact Report (Projected - End of FY1)", date: "March 2026 (Est.)", type: "Annual Report", downloadLink: "#", summary: "A comprehensive overview of our activities, achievements, and financial performance for our first year. (To be published)" },
    { title: "Financial Statement (Projected - End of FY1)", date: "March 2026 (Est.)", type: "Financial Report", downloadLink: "#", summary: "Detailed financial statements for our first year of operation, audited by independent auditors. (To be published)" },
  ];

  const keyMetrics = [
    { icon: PieChart, value: "Est. 90%+", label: "Funds to Programs (Projected)", color: "text-dws-green" },
    { icon: BarChart2, value: "Focused", label: "Impact in Uttarakhand", color: "text-dws-blue-dark" },
    { icon: ShieldCheck, value: "100%", label: "Compliance with Societies Act", color: "text-dws-blue-light" },
    { icon: Eye, value: "Full", label: "Commitment to Audit", color: "text-dws-gold" },
  ];

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Our Commitment to Transparency"
        subtitle="We believe in open accountability. Dreamlight Welfare Society (Reg. No. TRSOCI067080525216401, Est. 04-JUN-2025) is committed to transparent operations."
        icon={ShieldCheck}
        iconColor="text-dws-blue-dark"
        gradientFrom="from-dws-gold"
        gradientTo="to-dws-gold-light"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dws-blue-dark mb-4">Key Transparency Metrics</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">We are proud to share how we utilize resources and measure our impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {keyMetrics.map((metric, index) => (
              <MetricCard key={metric.label} {...metric} index={index} />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-dws-blue-dark mb-10 text-center md:text-left">Reports & Publications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <ReportCard key={report.title} {...report} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              As a newly established NGO, our detailed financial and impact reports will be available after the completion of our first operational year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dws-blue-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto text-dws-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Governance & Policies</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Dreamlight Welfare Society is governed by its founding members as per the Societies Registration Act, 1860. We are committed to establishing strict ethical guidelines and financial controls. Our policies on data privacy, child protection, and anti-corruption are under development and will be made publicly available.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact?subject=GovernanceInquiry"
              className="inline-block bg-dws-gold text-dws-blue-dark font-semibold px-10 py-4 rounded-full text-base shadow-lg hover:bg-dws-gold-light transition-all duration-300"
            >
              Inquire About Governance
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransparencyPage;