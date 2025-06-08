'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Award, Send, Filter, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

interface JobOpening {
   id: number;
   title: string;
   location: string;
   type: string;
   department: string;
   description: string;
   postedDate: string;
}

const jobOpenings: JobOpening[] = [
   {
      id: 1,
      title: "Program Manager - Education",
      location: "New Delhi, India",
      type: "Full-time",
      department: "Programs",
      description: "Lead and manage our flagship education programs, ensuring impactful delivery and continuous improvement. Requires 5+ years experience in education project management.",
      postedDate: "2025-05-20"
   },
   {
      id: 2,
      title: "Communications Officer",
      location: "Remote (India-based)",
      type: "Full-time",
      department: "Communications",
      description: "Develop and execute communication strategies, manage social media, and create engaging content to highlight our work. 3+ years experience.",
      postedDate: "2025-05-15"
   },
   {
      id: 3,
      title: "Field Coordinator - Healthcare",
      location: "Jaipur, Rajasthan",
      type: "Contract",
      department: "Programs",
      description: "Oversee on-ground implementation of healthcare initiatives in rural Rajasthan. Strong community mobilization skills required.",
      postedDate: "2025-06-01"
   },
   {
      id: 4,
      title: "Fundraising Intern",
      location: "New Delhi, India",
      type: "Internship (6 months)",
      department: "Fundraising",
      description: "Support the fundraising team with research, proposal writing, and donor communication. Excellent opportunity for aspiring development professionals.",
      postedDate: "2025-05-25"
   },
   {
      id: 5,
      title: "Monitoring & Evaluation Specialist",
      location: "New Delhi / Remote Hybrid",
      type: "Full-time",
      department: "Impact",
      description: "Design and implement M&E frameworks to track program effectiveness and report on impact. Strong analytical skills needed.",
      postedDate: "2025-05-10"
   },
];

const departments = ["All", ...new Set(jobOpenings.map(job => job.department))];
const jobTypes = ["All", ...new Set(jobOpenings.map(job => job.type))];

const JobCard: React.FC<{ job: JobOpening; index: number }> = ({ job, index }) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-dream-gold flex flex-col card-hover"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
   >
      <h3 className="text-xl font-bold text-dream-purple-dark mb-2">{job.title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
         <span className="flex items-center"><MapPin size={12} className="mr-1 text-dream-purple" />{job.location}</span>
         <span className="flex items-center"><Clock size={12} className="mr-1 text-dream-purple" />{job.type}</span>
         <span className="flex items-center"><Briefcase size={12} className="mr-1 text-dream-purple" />{job.department}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{job.description.substring(0, 120)}...</p>
      <div className="flex justify-between items-center mt-auto pt-3 border-t border-border">
         <p className="text-xs text-muted-foreground">Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
         <Button asChild size="sm" className="gradient-bg text-white rounded-full px-5 text-xs hover:opacity-95">
            <Link href={`/careers/${job.id}`}>View & Apply</Link>
         </Button>
      </div>
   </motion.div>
);

const CareersPage: React.FC = () => {
   const [departmentFilter, setDepartmentFilter] = useState("All");
   const [typeFilter, setTypeFilter] = useState("All");

   const filteredJobs = jobOpenings.filter(job =>
      (departmentFilter === "All" || job.department === departmentFilter) &&
      (typeFilter === "All" || job.type === typeFilter)
   );

   return (
      <div className="bg-background min-h-screen">
         <PageHeader
            title="Join Our Team, Make a Difference"
            subtitle="We&apos;re looking for passionate, talented individuals to help us achieve our mission. Explore current openings and find your place at Dreamlight Welfare Society."
            icon={Award}
            iconColor="text-dream-purple-dark"
            gradientFrom="from-dream-gold"
            gradientTo="to-dream-gold-light"
            bgPatternOpacity="opacity-20"
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Filters */}
               <motion.div
                  className="mb-10 md:mb-14 p-6 bg-card rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                     <div className="flex items-center text-sm font-medium text-foreground mr-3">
                        <Filter size={18} className="mr-2 text-dream-purple" /> Filters:
                     </div>
                     <div className="flex flex-wrap gap-3">
                        <select
                           value={departmentFilter}
                           onChange={(e) => setDepartmentFilter(e.target.value)}
                           className="p-2.5 border border-border rounded-lg text-sm bg-background text-foreground focus:ring-dream-purple focus:border-dream-purple"
                        >
                           {departments.map(dep => <option key={dep} value={dep}>{dep} Department</option>)}
                        </select>
                        <select
                           value={typeFilter}
                           onChange={(e) => setTypeFilter(e.target.value)}
                           className="p-2.5 border border-border rounded-lg text-sm bg-background text-foreground focus:ring-dream-purple focus:border-dream-purple"
                        >
                           {jobTypes.map(type => <option key={type} value={type}>{type} Type</option>)}
                        </select>
                     </div>
                  </div>
               </motion.div>

               {/* Job Listings */}
               {filteredJobs.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                     {filteredJobs.map((job, index) => (
                        <JobCard key={job.id} job={job} index={index} />
                     ))}
                  </div>
               ) : (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-center py-12 mb-16"
                  >
                     <Briefcase className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                     <h3 className="text-xl font-semibold text-foreground mb-2">No Jobs Found</h3>
                     <p className="text-muted-foreground">Try adjusting your filters or check back later for new opportunities.</p>
                  </motion.div>
               )}

               {/* Why Work With Us */}
               <motion.div
                  className="bg-gradient-to-r from-dream-purple/10 to-dream-gold/10 p-8 md:p-12 rounded-2xl border border-dream-purple/20 mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
               >
                  <div className="text-center mb-8">
                     <Users className="h-12 w-12 mx-auto text-dream-purple-dark mb-4" />
                     <h2 className="text-3xl font-bold text-dream-purple-dark mb-4">Why Work With Dreamlight?</h2>
                     <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join a team that&apos;s passionate about creating meaningful change and making a real difference in communities across India.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                     <div className="text-center">
                        <div className="bg-dream-purple/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                           <Award className="h-8 w-8 text-dream-purple" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Meaningful Impact</h3>
                        <p className="text-sm text-muted-foreground">Work on projects that directly improve lives and communities</p>
                     </div>
                     <div className="text-center">
                        <div className="bg-dream-gold/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                           <Users className="h-8 w-8 text-dream-gold" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Collaborative Culture</h3>
                        <p className="text-sm text-muted-foreground">Work alongside dedicated professionals in a supportive environment</p>
                     </div>
                     <div className="text-center">
                        <div className="bg-dream-purple-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                           <Briefcase className="h-8 w-8 text-dream-purple-light" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Growth Opportunities</h3>
                        <p className="text-sm text-muted-foreground">Develop your skills and advance your career in social development</p>
                     </div>
                  </div>
               </motion.div>

               {/* Contact HR */}
               <motion.div
                  className="bg-card p-8 rounded-2xl shadow-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
               >
                  <h3 className="text-2xl font-bold text-dream-purple-dark mb-4">Don&apos;t See a Perfect Match?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                     We&apos;re always interested in hearing from passionate individuals. Send us your resume and let us know how you&apos;d like to contribute to our mission.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                     <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-dream-purple" />
                        <span className="font-medium text-foreground">careers@dreamlightwelfare.org</span>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-dream-purple" />
                        <span className="font-medium text-foreground">+91 98765 43210</span>
                     </div>
                  </div>
                  <Button className="btn-primary px-8 py-3 rounded-lg font-medium mt-6">
                     <Send className="mr-2 h-4 w-4" />
                     Send Your Resume
                  </Button>
               </motion.div>
            </div>
         </section>
      </div>
   );
};

export default CareersPage;
