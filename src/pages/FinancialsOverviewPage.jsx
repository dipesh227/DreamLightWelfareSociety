import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, PieChart, BarChart3, FileText, Download, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/common/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MetricDisplay = ({ value, label, description, icon: Icon, color, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg text-center card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className={`inline-block p-3 rounded-full mb-4 ${color.replace('text-', 'bg-')}/10`}>
      <Icon className={`h-8 w-8 ${color}`} />
    </div>
    <p className={`text-4xl font-bold ${color} mb-1`}>{value}</p>
    <p className="text-md font-semibold text-slate-700 mb-2">{label}</p>
    <p className="text-xs text-slate-500">{description}</p>
  </motion.div>
);

const FinancialsOverviewPage = () => {
  const keyFinancials = [
    { value: "Target: ₹1 Cr", label: "Funds Goal (Current FY)", description: "From diverse sources including individuals, corporates, and grants for Uttarakhand projects.", icon: BarChart3, color: "text-dream-purple", index: 0 },
    { value: "Est. 90%+", label: "Program Expense Ratio", description: "Projected percentage of total expenses spent directly on program activities and services.", icon: PieChart, color: "text-green-600", index: 1 },
    { value: "<8%", label: "Administrative Overhead", description: "To be efficiently managed to maximize funds for direct impact.", icon: Landmark, color: "text-blue-600", index: 2 },
    { value: "<2%", label: "Fundraising Costs", description: "Strategic investments to secure future funding and sustainability for our NGO.", icon: FileText, color: "text-dream-gold", index: 3 },
  ];

  const fundSources = [
    { name: "Individual Donations", percentage: "40%", color: "bg-dream-purple" },
    { name: "Corporate Partnerships (CSR)", percentage: "35%", color: "bg-green-600" },
    { name: "Government & Institutional Grants", percentage: "20%", color: "bg-blue-600" },
    { name: "Other Income/Events", percentage: "5%", color: "bg-dream-gold" },
  ];

  const fundUtilization = [
    { name: "Women & Child Development", percentage: "35%", color: "bg-dream-purple" },
    { name: "Skill Training & Livelihood", percentage: "25%", color: "bg-green-600" },
    { name: "Health Awareness Programs", percentage: "20%", color: "bg-blue-600" },
    { name: "Environmental Projects", percentage: "12%", color: "bg-teal-500" },
    { name: "Admin & Fundraising", percentage: "8%", color: "bg-dream-gold" },
  ];

  const ChartBar = ({ name, percentage, color }) => (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-slate-600 mb-0.5">
        <span>{name}</span>
        <span>{percentage}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
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

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Financial Transparency"
        subtitle="Understanding how your contributions are utilized to create maximum impact. Dreamlight Welfare Society is committed to accountability and responsible stewardship of resources. Registered NGO: TRSOCI067080525216401."
        icon={Landmark}
        iconColor="text-dream-purple-dark"
        gradientFrom="from-dream-gold"
        gradientTo="to-dream-gold-light"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Our Financial Framework (Projected)</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key metrics illustrating our commitment to efficient resource utilization. (Figures are projections for the upcoming financial year)
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {keyFinancials.map((metric) => (
              <MetricDisplay key={metric.label} {...metric} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-dream-purple-dark mb-6">Projected Sources of Funding</h3>
              <div className="space-y-4">
                {fundSources.map((source, index) => <ChartBar key={index} {...source} />)}
              </div>
              <p className="text-xs text-slate-500 mt-4">Based on projected income for the next financial year. Percentages are estimates.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-dream-purple-dark mb-6">Projected Utilization of Contributions</h3>
              <div className="space-y-4">
                {fundUtilization.map((item, index) => <ChartBar key={index} {...item} />)}
              </div>
              <p className="text-xs text-slate-500 mt-4">Program expenses include direct project costs and support staff.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FileText className="h-16 w-16 mx-auto text-dream-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Detailed Reports & Audits</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            For a comprehensive understanding of our financial performance, governance, and impact, please refer to our detailed annual reports and audited financial statements, which will be available after the completion of our first financial year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/transparency">
              <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light font-semibold px-8 py-3.5 rounded-full text-base shadow-lg w-full sm:w-auto">
                <Download size={18} className="mr-2"/> View Reports (Future)
              </Button>
            </Link>
            <Link to="/contact?subject=FinancialInquiry">
              <Button size="lg" variant="outline" className="border-2 border-dream-gold-light text-dream-gold-light hover:bg-dream-gold-light/10 font-semibold px-8 py-3.5 rounded-full text-base w-full sm:w-auto">
                Contact Finance Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialsOverviewPage;