
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FolderHeart as HandHeart, CalendarCheck, WalletCards as IdCard, FileText, CheckCircle, ArrowRight, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import PageHero from '@/components/common/hero/PageHero';

const volunteerOpportunities = [
  { id: 1, title: "Classroom Assistant (Education Program)", area: "Education", location: "New Delhi Centers", commitment: "Min. 5 hrs/week", skills: ["Teaching", "Patience", "Communication"], description: "Assist teachers in classrooms, help students with learning activities, and contribute to a positive learning environment." },
  { id: 2, title: "Health Camp Volunteer (Medical Outreach)", area: "Healthcare", location: "Various Rural Areas", commitment: "Event-based (1-2 days)", skills: ["Medical background (preferred but not mandatory for general support)", "Organization", "Empathy"], description: "Support medical professionals during health camps, assist with patient registration, and help manage logistics." },
  { id: 3, title: "Content Creator (Digital Team)", area: "Communications", location: "Remote", commitment: "Flexible (project-based)", skills: ["Writing", "Graphic Design", "Video Editing"], description: "Create engaging content (articles, social media posts, videos) to showcase our impact and raise awareness." },
  { id: 4, title: "Event Support Volunteer (Fundraising Events)", area: "Events", location: "City Venues", commitment: "Event-based", skills: ["Customer Service", "Organization", "Enthusiasm"], description: "Help with setup, registration, guest management, and other tasks during our fundraising events." },
];

const featuredVolunteers = [
  { name: "Priya Sharma", role: "Lead Classroom Volunteer", quote: "Volunteering with Dreamlight has been an incredibly rewarding experience. Seeing the children's progress makes every moment worthwhile.", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60" },
  { name: "Rajesh Kumar", role: "Remote Content Writer", quote: "Even from afar, I feel connected to the mission. It's amazing to use my writing skills to support such a great cause.", imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60" },
];

const OpportunityCard = ({ opportunity, onApply }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-dream-gold flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-bold text-dream-purple-dark mb-2">{opportunity.title}</h3>
    <div className="text-xs text-slate-500 mb-3 space-y-0.5">
      <p><span className="font-semibold text-dream-purple">Area:</span> {opportunity.area}</p>
      <p><span className="font-semibold text-dream-purple">Location:</span> {opportunity.location}</p>
      <p><span className="font-semibold text-dream-purple">Commitment:</span> {opportunity.commitment}</p>
    </div>
    <p className="text-sm text-slate-600 leading-relaxed mb-3 flex-grow">{opportunity.description}</p>
    <div className="mb-3">
      <h4 className="text-xs font-semibold text-slate-500 mb-1">Skills Needed:</h4>
      <div className="flex flex-wrap gap-1.5">
        {opportunity.skills.map(skill => (
          <span key={skill} className="bg-dream-purple-lighter text-dream-purple text-[10px] px-2 py-0.5 rounded-full">{skill}</span>
        ))}
      </div>
    </div>
    <Button onClick={() => onApply(opportunity.title)} size="sm" className="w-full mt-auto gradient-bg text-white rounded-full text-xs hover:opacity-95">
      Apply Now <ArrowRight size={14} className="ml-1.5" />
    </Button>
  </motion.div>
);

const VolunteerSpotlightCard = ({ name, role, quote, imageUrl, index }) => (
  <motion.div
    className="bg-dream-purple-light/10 p-6 rounded-xl shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <img  class="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-white" alt={name} src={imageUrl} />
    <h4 className="text-lg font-semibold text-dream-purple-dark">{name}</h4>
    <p className="text-xs text-dream-purple mb-2">{role}</p>
    <Star className="w-5 h-5 text-dream-gold mx-auto mb-2 fill-dream-gold" />
    <p className="text-sm italic text-slate-600">"{quote}"</p>
  </motion.div>
);

const VolunteerPortalPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleApply = (title) => {
    toast({
      title: "Application Submitted (Demo)",
      description: `Thank you for your interest in "${title}"! We will review your application and get back to you soon.`,
      className: "bg-dream-purple text-white border-dream-gold shadow-xl",
    });
  };

  const filteredOpportunities = volunteerOpportunities.filter(op => 
    op.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    op.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
    op.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-slate-100">
      <PageHero pageType="volunteer-portal" />

      <div id="main-content">
        <section id="opportunities" className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-3">Current Volunteer Opportunities</h2>
            <p className="text-slate-600 text-lg">Find a role that matches your skills and passion.</p>
          </div>
          <div className="mb-10 max-w-lg mx-auto">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search opportunities (e.g., Education, Remote, Writing)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3.5 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>
          {filteredOpportunities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredOpportunities.map(op => <OpportunityCard key={op.id} opportunity={op} onApply={handleApply} />)}
            </div>
          ) : (
             <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-600 text-lg mt-12"
            >
              No opportunities match your search. Try different keywords or check back soon!
            </motion.p>
          )}
        </div>
      </section>

      <section id="volunteer-spotlight" className="py-16 md:py-24 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-3">Volunteer Spotlight</h2>
            <p className="text-slate-600 text-lg">Celebrating the incredible individuals who dedicate their time and talent.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredVolunteers.map((volunteer, index) => (
              <VolunteerSpotlightCard key={volunteer.name} {...volunteer} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="id-card" className="py-16 md:py-24 bg-dream-gold/10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IdCard className="h-16 w-16 mx-auto text-dream-purple mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Volunteer ID Cards</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            As an official Dreamlight Volunteer, you'll receive a personalized ID card. This card identifies you as a valued member of our team during events and field activities.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg text-left space-y-4 max-w-lg mx-auto">
            <h4 className="text-xl font-semibold text-dream-purple-dark mb-3">How to Get Your ID Card (Simulated):</h4>
            <p className="flex items-start text-sm text-slate-600"><CheckCircle size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0"/>Successfully complete the volunteer registration and onboarding process.</p>
            <p className="flex items-start text-sm text-slate-600"><CheckCircle size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0"/>Attend a mandatory orientation session (online or in-person).</p>
            <p className="flex items-start text-sm text-slate-600"><CheckCircle size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0"/>Submit a passport-sized photograph through your volunteer dashboard (coming soon).</p>
            <p className="flex items-start text-sm text-slate-600"><CheckCircle size={18} className="mr-2 mt-0.5 text-green-500 flex-shrink-0"/>Your ID card will be processed and mailed to you or available for pickup at our office/events.</p>
            <p className="text-xs text-slate-500 mt-4">Note: This is a conceptual feature for demonstration. Actual ID card processing will be detailed upon system implementation.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dream-purple-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto text-dream-gold-light mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Volunteer Resources & Guidelines</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Access our volunteer handbook, code of conduct, and other important resources to ensure a safe, respectful, and impactful volunteering experience. (Links to these resources will be available soon).
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light font-semibold px-10 py-3.5 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/contact?subject=VolunteerResources">Request Resources</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default VolunteerPortalPage;
