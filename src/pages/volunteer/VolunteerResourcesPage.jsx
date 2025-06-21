
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ShieldCheck, Users, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const resources = [
  { 
    title: "Volunteer Handbook (PDF)", 
    description: "Comprehensive guide covering our mission, policies, volunteer roles, and code of conduct.", 
    icon: BookOpen, 
    link: "/resources/volunteer-handbook.pdf", // Placeholder link
    type: "Download" 
  },
  { 
    title: "Child Protection Policy Summary (PDF)", 
    description: "Key points and reporting procedures from our Child Protection Policy.", 
    icon: ShieldCheck, 
    link: "/resources/child-protection-summary.pdf", 
    type: "Download" 
  },
  { 
    title: "Event Volunteering Checklist (DOCX)", 
    description: "A handy checklist for volunteers participating in our events.", 
    icon: FileText, 
    link: "/resources/event-checklist.docx", 
    type: "Download" 
  },
  { 
    title: "Communication Guidelines", 
    description: "Best practices for communicating with beneficiaries, staff, and fellow volunteers.", 
    icon: Users, 
    link: "/blog/communication-tips", // Example internal link
    type: "Read Online" 
  },
  { 
    title: "External Training: Basic First Aid (Link)", 
    description: "Recommended online resource for basic first aid certification (external provider).", 
    icon: ExternalLink, 
    link: "https://example.com/first-aid-training", // Placeholder external link
    type: "External Link" 
  },
];

const ResourceCard = ({ resource, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-lg flex flex-col"
  >
    <div className="flex items-center mb-3">
      <div className="p-2 bg-dream-purple-lighter rounded-full mr-3">
        <resource.icon size={20} className="text-dream-purple" />
      </div>
      <h3 className="text-lg font-semibold text-dream-purple-dark">{resource.title}</h3>
    </div>
    <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-grow">{resource.description}</p>
    <a 
      href={resource.link} 
      target={resource.type === "External Link" ? "_blank" : "_self"} 
      rel={resource.type === "External Link" ? "noopener noreferrer" : ""}
      download={resource.type === "Download"}
    >
      <Button 
        variant={resource.type === "Download" ? "default" : "outline"} 
        size="sm" 
        className={`w-full text-xs ${resource.type === "Download" ? "gradient-bg text-white" : "text-dream-purple border-dream-purple hover:bg-dream-purple/10"}`}
      >
        {resource.type === "Download" && <Download size={14} className="mr-1.5" />}
        {resource.type === "External Link" && <ExternalLink size={14} className="mr-1.5" />}
        {resource.type}
      </Button>
    </a>
  </motion.div>
);

const VolunteerResourcesPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-2xl font-semibold text-slate-800 flex items-center">
        <BookOpen size={26} className="mr-3 text-dream-purple" /> Volunteer Resources
      </h1>
      <p className="text-slate-600">
        Access important documents, guidelines, and training materials to support your volunteering journey with Dreamlight.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={resource.title} resource={resource} index={index} />
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-dream-gold/10 border border-dream-gold/30 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-dream-gold-darker mb-2">Need Help or Have Questions?</h3>
        <p className="text-sm text-slate-700 mb-4">
          If you can't find what you're looking for or need further assistance, please don't hesitate to reach out to your volunteer coordinator or contact us.
        </p>
        <Link to="/contact?subject=VolunteerResourceQuery">
          <Button className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-darker">
            Contact Support
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default VolunteerResourcesPage;
