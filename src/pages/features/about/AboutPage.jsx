import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart, Award, ShieldCheck, Info, CalendarClock, FolderHeart as HandHeart, Leaf } from 'lucide-react';
import PageHero from '@/components/common/hero/PageHero';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StatCard = ({ value, label, icon: Icon, color }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-lg text-center card-hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className={`h-12 w-12 mx-auto mb-3 ${color}`} />
    <p className="text-3xl font-bold text-dream-purple-dark">{value}</p>
    <p className="text-sm text-slate-600">{label}</p>
  </motion.div>
);

const TimelineEvent = ({ year, title, description, alignLeft, index }) => (
  <motion.div 
    className={`flex ${alignLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full mb-8 md:mb-0`}
    initial={{ opacity: 0, x: alignLeft ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, delay: index * 0.15 }}
  >
    <div className="hidden md:flex w-5/12"></div>
    <div className="hidden md:flex w-1/12 justify-center">
      <div className="h-full w-1 bg-dream-purple-light rounded-t-full rounded-b-full"></div>
    </div>
    <div className="w-full md:w-5/12">
      <div className={`bg-white p-6 rounded-xl shadow-xl relative ${alignLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div className={`absolute ${alignLeft ? 'md:right-full md:-mr-5' : 'md:left-full md:-ml-5'} top-1/2 -translate-y-1/2 hidden md:block`}>
          <div className="bg-dream-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
            {year}
          </div>
        </div>
        <div className="md:hidden bg-dream-purple text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md mb-3">{year}</div>
        <h3 className="text-lg font-semibold text-dream-purple-dark mb-1">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);


const AboutPage = () => {
  const timelineData = [
    { year: "2025", title: "Dreamlight Founded (June 4th)", description: "Established as Dreamlight Welfare Society in Khatima, Udham Singh Nagar, Uttarakhand, with a focus on social welfare and community development." },
    { year: "2025", title: "Initial Program Focus", description: "Core objectives set: Women Empowerment, Child Development, Skill Training (Handicrafts, Computers, Self-Employment), Health Awareness (AIDS, Drug De-addiction), and Environmental Protection." },
    { year: "Future", title: "Expanding Reach", description: "Plans to systematically expand programs and impact across Uttarakhand, collaborating with communities and stakeholders." },
    { year: "Future", title: "Innovation in Service", description: "Continuously seeking innovative methods and technologies to enhance program delivery and effectiveness." },
  ];

  return (
    <div className="bg-slate-50">
      <PageHero pageType="about" />

      <div id="main-content">
        <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img  class="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px]" alt="Diverse group of people from Uttarakhand collaborating happily" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/c076b4d6c0fc48bb8e464e764c60e182.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Our Purpose & Commitment</h2>
              <p className="text-slate-700 leading-relaxed">
                Dreamlight Welfare Society is driven by a core commitment to social welfare (समाज कल्याण) and societal upliftment. We aim to foster positive change by implementing targeted programs addressing key social and economic challenges.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our key objectives (लक्ष्य) include:
              </p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li className="flex items-center"><Users className="mr-2 h-4 w-4 text-dream-purple" /> Women Empowerment (महिला विकास) & Child Development (बाल विकास)</li>
                <li className="flex items-center"><Lightbulb className="mr-2 h-4 w-4 text-dream-purple" /> Skill Training: Handicrafts, Computers, Self-Employment (कौशल प्रशिक्षण)</li>
                <li className="flex items-center"><HandHeart className="mr-2 h-4 w-4 text-dream-purple" /> Health Awareness: AIDS Prevention, Drug De-addiction (स्वास्थ्य जागरूकता)</li>
                <li className="flex items-center"><Leaf className="mr-2 h-4 w-4 text-dream-purple" /> Environmental Protection & Awareness (पर्यावरण संरक्षण)</li>
              </ul>
              <Link to="/our-values">
                <Button variant="link" className="text-dream-purple px-0 hover:text-dream-gold">
                  Discover Our Core Values <Heart size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-12">Our Journey: Beginnings & Aspirations</h2>
            <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
              <div className="absolute h-full border border-dream-purple-light/50 border-dashed" style={{left: '50%', display: 'none' /* Hide for now, enable for desktop timeline */}}></div>
              {timelineData.map((event, index) => (
                <TimelineEvent key={index} {...event} alignLeft={index % 2 === 0} index={index} />
              ))}
            </div>
          </div>
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-12">Our Commitments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <StatCard value="New" label="Organization (Est. 2025)" icon={CalendarClock} color="text-dream-gold" />
              <StatCard value="Local" label="Focus on Uttarakhand" icon={Users} color="text-dream-purple" />
              <StatCard value="Core" label="Objectives Defined" icon={ShieldCheck} color="text-dream-purple-light" />
              <StatCard value="Future" label="Growth & Impact" icon={Target} color="text-green-500" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Meet Our Founding Team</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-10">The passionate individuals driving our mission forward.</p>
            <Link to="/team">
              <Button size="lg" className="gradient-bg text-white rounded-full px-10 py-3.5 hover:opacity-90">
                View Our Team <Users size={18} className="ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;