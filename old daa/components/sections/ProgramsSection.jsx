import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, Droplets, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramCard = ({ icon: Icon, title, description, linkTo, delay, iconBgColor, borderColor }) => (
  <motion.div 
    className={`bg-white p-8 rounded-2xl shadow-lg card-hover border-t-4 ${borderColor} flex flex-col`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
  >
    <div className={`${iconBgColor} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 self-start shadow-md`}>
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-dream-purple-dark mb-4">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
    <Link to={linkTo} className="mt-auto self-start">
      <Button variant="link" className="text-dream-purple px-0 group">
        Explore Program <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  </motion.div>
);

const ProgramsSection = () => {
  const programs = [
    { 
      icon: BookOpen, 
      title: "Education Empowerment", 
      description: "Providing quality education and skill development to unlock potential and create opportunities for children and adults.", 
      linkTo: "/programs#education",
      iconBgColor: "bg-dream-purple",
      borderColor: "border-dream-purple"
    },
    { 
      icon: Stethoscope, 
      title: "Community Health", 
      description: "Ensuring access to essential healthcare services, promoting preventive care, and fostering well-being for all.", 
      linkTo: "/programs#healthcare",
      iconBgColor: "bg-green-600",
      borderColor: "border-green-600"
    },
    { 
      icon: Droplets, 
      title: "Clean Water Access", 
      description: "Implementing sustainable solutions for safe drinking water and sanitation, vital for health and dignity.", 
      linkTo: "/programs#water",
      iconBgColor: "bg-blue-600",
      borderColor: "border-blue-600"
    },
    { 
      icon: Briefcase, 
      title: "Sustainable Livelihoods", 
      description: "Empowering individuals with skills and resources for economic independence and self-reliance.", 
      linkTo: "/programs#livelihood",
      iconBgColor: "bg-dream-gold",
      borderColor: "border-dream-gold"
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-dream-purple-light/10 text-dream-purple font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
            Our Core Initiatives
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dream-purple-dark leading-tight">
            Creating Pathways to Progress
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            Our comprehensive programs are designed to address critical needs and build resilient communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} delay={index * 0.1} />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
            <Link to="/programs">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 rounded-full px-10 py-3 text-base font-semibold">
                    Discover All Programs
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;