import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Award, Send, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';

const jobOpenings = [
  { id: 1, title: "Program Manager - Education", location: "New Delhi, India", type: "Full-time", department: "Programs", description: "Lead and manage our flagship education programs, ensuring impactful delivery and continuous improvement. Requires 5+ years experience in education project management.", postedDate: "2025-05-20" },
  { id: 2, title: "Communications Officer", location: "Remote (India-based)", type: "Full-time", department: "Communications", description: "Develop and execute communication strategies, manage social media, and create engaging content to highlight our work. 3+ years experience.", postedDate: "2025-05-15" },
  { id: 3, title: "Field Coordinator - Healthcare", location: "Jaipur, Rajasthan", type: "Contract", department: "Programs", description: "Oversee on-ground implementation of healthcare initiatives in rural Rajasthan. Strong community mobilization skills required.", postedDate: "2025-06-01" },
  { id: 4, title: "Fundraising Intern", location: "New Delhi, India", type: "Internship (6 months)", department: "Fundraising", description: "Support the fundraising team with research, proposal writing, and donor communication. Excellent opportunity for aspiring development professionals.", postedDate: "2025-05-25" },
  { id: 5, title: "Monitoring & Evaluation Specialist", location: "New Delhi / Remote Hybrid", type: "Full-time", department: "Impact", description: "Design and implement M&E frameworks to track program effectiveness and report on impact. Strong analytical skills needed.", postedDate: "2025-05-10" },
];

const departments = ["All", ...new Set(jobOpenings.map(job => job.department))];
const jobTypes = ["All", ...new Set(jobOpenings.map(job => job.type))];

const JobCard = ({ job, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-dream-gold flex flex-col"
    initial={{ opacity: 0, y: 30, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
  >
    <h3 className="text-xl font-bold text-dream-purple-dark mb-2">{job.title}</h3>
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-3">
      <span className="flex items-center"><MapPin size={12} className="mr-1 text-dream-purple"/>{job.location}</span>
      <span className="flex items-center"><Clock size={12} className="mr-1 text-dream-purple"/>{job.type}</span>
      <span className="flex items-center"><Briefcase size={12} className="mr-1 text-dream-purple"/>{job.department}</span>
    </div>
    <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{job.description.substring(0, 120)}...</p>
    <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-200">
      <p className="text-xs text-slate-400">Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
      <Button asChild size="sm" className="gradient-bg text-white rounded-full px-5 text-xs hover:opacity-95">
        <Link to={`/careers/${job.id}`}>View & Apply</Link>
      </Button>
    </div>
  </motion.div>
);

const CareersPage = () => {
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredJobs = jobOpenings.filter(job => 
    (departmentFilter === "All" || job.department === departmentFilter) &&
    (typeFilter === "All" || job.type === typeFilter)
  );

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Join Our Team, Make a Difference"
        subtitle="We're looking for passionate, talented individuals to help us achieve our mission. Explore current openings and find your place at Dreamlight Welfare Society."
        icon={Award}
        iconColor="text-dream-purple-dark"
        gradientFrom="from-dream-gold"
        gradientTo="to-dream-gold-light"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center text-sm font-medium text-slate-700 mr-3">
                <Filter size={18} className="mr-2 text-dream-purple"/> Filters:
              </div>
              <div className="flex flex-wrap gap-3">
                <select 
                  value={departmentFilter} 
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dream-purple focus:border-dream-purple"
                >
                  {departments.map(dep => <option key={dep} value={dep}>{dep} Department</option>)}
                </select>
                <select 
                  value={typeFilter} 
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dream-purple focus:border-dream-purple"
                >
                  {jobTypes.map(type => <option key={type} value={type}>{type} Type</option>)}
                </select>
              </div>
            </div>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Briefcase className="h-20 w-20 mx-auto text-slate-400 mb-6" />
              <p className="text-xl text-slate-600 mb-2">No current openings match your filters.</p>
              <p className="text-sm text-slate-500">Please check back later or adjust your search criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-dream-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Users className="h-12 w-12 md:h-16 md:w-16 mx-auto text-dream-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
          <ul className="space-y-3 text-slate-300 text-lg leading-relaxed mb-8 list-disc list-inside marker:text-dream-gold-light text-left max-w-md mx-auto">
            <li>Make a tangible impact on communities.</li>
            <li>Collaborative and supportive work environment.</li>
            <li>Opportunities for growth and development.</li>
            <li>Competitive non-profit sector salaries.</li>
            <li>Be part of a passionate, mission-driven team.</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light font-semibold px-10 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact">Spontaneous Application <Send size={18} className="ml-2"/></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;