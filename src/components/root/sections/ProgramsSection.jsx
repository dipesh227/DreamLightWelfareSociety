
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, Droplets, Briefcase, ArrowRight, School, HeartPulse, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramCard = ({ icon: Icon, title, description, linkTo, delay, iconBgColor, borderColor, imagePlaceholder }) => (
  <motion.div 
    className={`bg-white rounded-2xl shadow-xl card-hover flex flex-col overflow-hidden group`}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative h-52 bg-slate-200 overflow-hidden">
      <img   
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        alt={description}
        src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      <div className={`absolute top-4 left-4 ${iconBgColor} p-3.5 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-dream-purple-dark mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow">{description}</p>
      <Link to={linkTo} className="mt-auto self-start">
        <Button variant="link" className={`${borderColor.replace('border-', 'text-').replace('border-dream-purple', 'text-dream-purple')} px-0 group/btn font-medium hover:text-dream-gold transition-colors`}>
          Explore Program <ArrowRight className="ml-1.5 h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProgramsSection = () => {
  const programs = [
    { 
      icon: School, 
      title: "Education Empowerment", 
      description: "Providing quality education and skill development to children and adults across India, unlocking their potential.", 
      linkTo: "/programs#education",
      iconBgColor: "bg-dream-purple",
      borderColor: "border-dream-purple",
      imagePlaceholder: "Indian children learning in a vibrant classroom with a teacher"
    },
    { 
      icon: HeartPulse, 
      title: "Community Healthcare", 
      description: "Ensuring access to essential healthcare, promoting preventive care, and fostering well-being in Indian communities.", 
      linkTo: "/programs#healthcare",
      iconBgColor: "bg-green-600",
      borderColor: "border-green-600",
      imagePlaceholder: "Healthcare worker assisting an elderly Indian patient in a village setting"
    },
    { 
      icon: Zap, 
      title: "Clean Water & Energy", 
      description: "Implementing sustainable solutions for safe drinking water and renewable energy, vital for health and progress in India.", 
      linkTo: "/programs#water",
      iconBgColor: "bg-blue-600",
      borderColor: "border-blue-600",
      imagePlaceholder: "Solar panels in a rural Indian village with a community water pump"
    },
    { 
      icon: Users, 
      title: "Sustainable Livelihoods", 
      description: "Empowering Indian individuals and families with skills and resources for economic independence and self-reliance.", 
      linkTo: "/programs#livelihood",
      iconBgColor: "bg-dream-gold",
      borderColor: "border-dream-gold",
      imagePlaceholder: "Indian women engaged in a local craft workshop, smiling and productive"
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block px-4 py-1.5 bg-dream-purple-light/10 text-dream-purple font-semibold text-xs rounded-full uppercase tracking-wider mb-3.5">
            Our Core Initiatives
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dream-purple-dark leading-tight">
            Creating Pathways to Progress in India
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-5">
            Our comprehensive programs are designed to address critical needs and build resilient communities across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} delay={index * 0.1} />
          ))}
        </div>
        <div className="text-center mt-14 md:mt-18">
            <Link to="/programs">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 rounded-full px-10 py-3.5 text-base font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 group">
                   <Briefcase className="mr-2 h-5 w-5 group-hover:animate-pulse"/> Discover All Programs
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
