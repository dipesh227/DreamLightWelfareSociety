
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Heart, Award, ShieldCheck, Info, CalendarClock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
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
    { year: "2010", title: "Dreamlight Founded", description: "Started as a small community initiative focusing on local education support in New Delhi." },
    { year: "2012", title: "First Health Camp", description: "Expanded services to include basic healthcare, organizing our first successful community health camp." },
    { year: "2015", title: "Clean Water Project Launch", description: "Initiated our first major clean water project, providing safe drinking water to a rural village." },
    { year: "2018", title: "Vocational Training Center", description: "Established a dedicated center for skill development and livelihood programs for youth." },
    { year: "2020", title: "COVID-19 Relief Efforts", description: "Pivoted operations to provide emergency relief, food, and medical supplies during the pandemic." },
    { year: "2023", title: "Environmental Wing Added", description: "Launched new programs focused on environmental conservation and sustainable practices." },
    { year: "2025", title: "Expanding National Reach", description: "Strategic plan to expand operations to three new states, aiming to double our impact." },
  ];


  return (
    <div className="bg-slate-50">
      <PageHeader 
        title="Our Story of Change"
        subtitle="Dreamlight Welfare Society was born from a simple belief: everyone deserves a chance to shine. We are committed to empowering communities and transforming lives."
        icon={Info}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img  class="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[500px]" alt="Diverse group of people collaborating happily" src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Our Journey & Purpose</h2>
              <p className="text-slate-700 leading-relaxed">
                Founded in 2010, Dreamlight Welfare Society started as a small initiative to support local education. Witnessing the profound impact of dedicated effort, we expanded our horizons to address broader community needs including healthcare, clean water, and sustainable livelihoods.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our purpose is to act as a catalyst for positive change, empowering individuals and communities to break cycles of poverty and build self-reliant, brighter futures. We believe in a holistic approach, addressing interconnected challenges with sustainable solutions.
              </p>
              <Link to="/our-values">
                <Button variant="link" className="text-dream-purple px-0 hover:text-dream-gold">
                  Discover Our Core Values <Heart size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-12">Our Milestones: A Journey of Impact</h2>
            <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
              <div className="absolute h-full border border-dream-purple-light/50 border-dashed" style={{left: '50%', display: 'none' /* Hide for now, enable for desktop timeline */}}></div>
              {timelineData.map((event, index) => (
                <TimelineEvent key={index} {...event} alignLeft={index % 2 === 0} index={index} />
              ))}
            </div>
          </div>
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <StatCard value="12+" label="Years of Service" icon={CalendarClock} color="text-dream-gold" />
              <StatCard value="75K+" label="Lives Touched" icon={Users} color="text-dream-purple" />
              <StatCard value="50+" label="Projects Completed" icon={ShieldCheck} color="text-dream-purple-light" />
              <StatCard value="92%" label="Program Fund Utilization" icon={Target} color="text-green-500" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Meet Our Dedicated Team</h2>
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
  );
};

export default AboutPage;
