import React from 'react';
import { motion } from 'framer-motion';
import { FileHeart as FileShield, ShieldCheck, Users, AlertTriangle, Download } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PolicyPoint = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className={`p-2 rounded-full ${color.replace('text-', 'bg-')}/10 mt-1`}>
      <Icon className={`h-6 w-6 ${color}`} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-secondary-foreground">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const ChildProtectionPolicyPage = () => {
  const policyHighlights = [
    { icon: ShieldCheck, title: "Zero Tolerance for Abuse", description: "We have a strict zero-tolerance policy towards any form of child abuse, exploitation, or neglect by our staff, volunteers, partners, or associates.", color: "text-red-600", index: 0 },
    { icon: Users, title: "Safe Recruitment & Screening", description: "All individuals working with children undergo thorough background checks and screening processes. We provide mandatory child protection training.", color: "text-blue-600", index: 1 },
    { icon: AlertTriangle, title: "Clear Reporting Mechanisms", description: "We have established confidential and accessible channels for reporting any child safety concerns. All reports are taken seriously and investigated promptly.", color: "text-yellow-600", index: 2 },
    { icon: FileShield, title: "Child-Safe Programming", description: "Our programs are designed to be child-friendly and promote their well-being, safety, and participation in a respectful environment.", color: "text-green-600", index: 3 },
  ];

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Child Protection Policy"
        subtitle="Dreamlight Welfare Society is unequivocally committed to creating and maintaining a safe and protective environment for all children we interact with."
        icon={FileShield}
        gradientFrom="from-primary"
        gradientTo="to-dream-logo-blue-dark"
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-6">Our Unwavering Commitment</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              At Dreamlight Welfare Society, the safety and well-being of children are paramount. We recognize our responsibility to protect children from all forms of harm, abuse, and exploitation. This Child Protection Policy outlines our commitment and the measures we take to ensure a safe environment for every child involved in our programs and activities.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This policy applies to all staff, volunteers, consultants, partners, and anyone associated with Dreamlight Welfare Society who may come into contact with children.
            </p>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-10 text-center">Key Pillars of Our Policy</h2>
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
            className="text-center bg-secondary/10 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-secondary-foreground mb-4">Download Our Full Policy Document</h3>
            <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
              For a comprehensive understanding of our child protection framework, procedures, and commitments, please download the full policy document.
            </p>
            <a href="/policies/child-protection-policy.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 rounded-full px-8 py-3">
                <Download className="mr-2 h-5 w-5" /> Download PDF
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dream-logo-blue-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AlertTriangle className="h-16 w-16 mx-auto text-dream-logo-yellow-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Reporting a Concern</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            If you have any concerns about the safety or well-being of a child in relation to Dreamlight's activities, or if you wish to report a breach of this policy, please contact us immediately. All reports will be handled with confidentiality and urgency.
          </p>
          <Link to="/contact?subject=ChildProtectionConcern">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-dream-logo-yellow-light font-semibold px-10 py-3.5 rounded-full text-base shadow-lg">
              Report a Concern Securely
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChildProtectionPolicyPage;