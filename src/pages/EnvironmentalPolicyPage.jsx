
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Sun, Droplets, FileText, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PolicyPrinciple = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className={`inline-block p-3 rounded-full mb-4 ${color.replace('text-', 'bg-')}/10`}>
      <Icon className={`h-8 w-8 ${color}`} />
    </div>
    <h3 className="text-xl font-semibold text-dream-purple-dark mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const EnvironmentalPolicyPage = () => {
  const principles = [
    { icon: Recycle, title: "Reduce, Reuse, Recycle", description: "We prioritize waste reduction in all our operations and programs, promote recycling initiatives, and encourage the reuse of materials wherever feasible.", color: "text-green-600", index: 0 },
    { icon: Sun, title: "Promote Renewable Energy", description: "We advocate for and support the adoption of renewable energy solutions in the communities we serve and within our own facilities to minimize carbon footprint.", color: "text-yellow-500", index: 1 },
    { icon: Droplets, title: "Water Conservation", description: "We implement water-saving practices in our projects and promote awareness about responsible water usage and conservation techniques among beneficiaries.", color: "text-blue-500", index: 2 },
    { icon: Leaf, title: "Biodiversity Protection", description: "Our environmental programs include initiatives like tree plantation, habitat restoration, and promoting sustainable agriculture to protect local biodiversity.", color: "text-teal-500", index: 3 },
  ];

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Our Environmental Commitment"
        subtitle="Dreamlight Welfare Society is dedicated to promoting environmental sustainability and responsible stewardship of natural resources in all our endeavors."
        icon={Leaf}
        iconColor="text-dream-purple-dark"
        gradientFrom="from-green-500"
        gradientTo="to-teal-600"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dream-purple-dark mb-6">Protecting Our Planet, Securing Our Future</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Dreamlight Welfare Society recognizes the critical link between environmental health and human well-being. We are committed to minimizing our environmental footprint and actively promoting sustainable practices within the communities we serve and our own operations.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This Environmental Policy outlines our core principles and strategies for fostering a healthier planet for current and future generations.
            </p>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-dream-purple-dark mb-10 text-center">Our Guiding Environmental Principles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {principles.map((principle) => (
              <PolicyPrinciple key={principle.title} {...principle} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center bg-green-500/5 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-dream-purple-dark mb-4">Download Our Full Environmental Policy</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
              For detailed information on our environmental strategies, targets, and implementation plans, please download our complete policy document.
            </p>
            <a href="/policies/environmental-policy.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 py-3">
                <Download className="mr-2 h-5 w-5" /> Download Policy PDF
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dream-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Leaf className="h-16 w-16 mx-auto text-dream-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Green Initiatives</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Support our environmental programs or partner with us to implement sustainable solutions. Together, we can make a significant positive impact on our planet.
          </p>
          <Link to="/contact?subject=EnvironmentalPartnership">
            <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light font-semibold px-10 py-3.5 rounded-full text-base shadow-lg">
              Partner for Sustainability
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalPolicyPage;
