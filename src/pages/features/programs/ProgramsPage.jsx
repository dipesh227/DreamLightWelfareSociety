import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, Users, Briefcase, Leaf, Sun, FolderHeart as HandHeart, ShieldCheck, Lightbulb } from 'lucide-react'; // Added HandHeart, ShieldCheck, Lightbulb
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/common/hero/PageHero';

const ProgramHighlightCard = ({ icon: Icon, title, description, imageSrc, imageAlt, bgColor, iconBgColor, linkTo, id }) => (
  <motion.div 
    id={id}
    className={`scroll-reveal rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center my-12 ${bgColor}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <div className="md:w-2/5 w-full h-64 md:h-auto">
      <img  class="w-full h-full object-cover" alt={imageAlt} src={imageSrc} />
    </div>
    <div className="md:w-3/5 p-8 md:p-12">
      <div className={`${iconBgColor} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-md`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-dream-purple-dark mb-4">{title}</h3>
      <p className="text-slate-700 leading-relaxed mb-6">{description}</p>
      <Link to={linkTo}>
        <Button variant="outline" className="border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-6 py-2">
          Learn More & Support
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProgramsPage = () => {
  const programs = [
    { 
      id: "women-empowerment",
      icon: Users, 
      title: "Women Empowerment (महिला विकास)", 
      description: "Dedicated to uplifting women through skill development, leadership training, and creating economic opportunities. We foster environments where women can thrive and contribute to their communities.", 
      imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/40487706a2690e2472a06ccf506347f6.jpg",
      imageAlt: "Group of empowered Indian women smiling and collaborating",
      bgColor: "bg-dream-purple-light/10",
      iconBgColor: "bg-dream-purple",
      linkTo: "/donate?program=women-empowerment"
    },
    { 
      id: "child-development",
      icon: BookOpen, 
      title: "Child Development (बाल विकास)", 
      description: "Focusing on holistic child development, including education, nutrition, and healthcare. We aim to provide a safe and nurturing environment for children to reach their full potential.",
      imageSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/1ed4067759ff71d9c59baff57cdd5104.jpg",
      imageAlt: "Happy Indian children learning and playing",
      bgColor: "bg-green-500/10",
      iconBgColor: "bg-green-600",
      linkTo: "/donate?program=child-development"
    },
    { 
      id: "skill-training",
      icon: Lightbulb, 
      title: "Skill Training (कौशल प्रशिक्षण)", 
      description: "Providing practical skill training in areas like handicrafts, computer literacy, and self-employment techniques to enhance employability and income generation for youth and adults.",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbGwlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
      imageAlt: "People engaged in a skill training workshop in India",
      bgColor: "bg-blue-500/10",
      iconBgColor: "bg-blue-600",
      linkTo: "/donate?program=skill-training"
    },
    { 
      id: "health-awareness",
      icon: HandHeart, 
      title: "Health Awareness (स्वास्थ्य जागरूकता)", 
      description: "Conducting health camps and awareness programs on crucial topics like AIDS prevention, drug de-addiction, and general hygiene to promote healthier communities.",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwY2FtcCUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=70",
      imageAlt: "Healthcare worker conducting an awareness session in an Indian village",
      bgColor: "bg-dream-gold/10",
      iconBgColor: "bg-dream-gold",
      linkTo: "/donate?program=health-awareness"
    },
     { 
      id: "environment",
      icon: Leaf, 
      title: "Environmental Protection (पर्यावरण संरक्षण)", 
      description: "Implementing initiatives for environmental conservation, including tree plantation drives, promoting sustainable practices, and raising awareness about ecological balance.",
      imageSrc: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVudmlyb25tZW50JTIwY29uc2VydmF0aW9uJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70",
      imageAlt: "Volunteers planting saplings in India",
      bgColor: "bg-teal-500/10",
      iconBgColor: "bg-teal-600",
      linkTo: "/donate?program=environment"
    },
  ];

  return (
    <div className="bg-slate-50">
      <PageHero pageType="programs" />

      <div id="main-content">
        <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <ProgramHighlightCard key={index} {...program} />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sun className="h-16 w-16 mx-auto mb-6 text-dream-gold-light"/>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Vision</h2>
            <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
                Your contribution, big or small, fuels these vital programs and brings hope to countless individuals. Partner with us to build a brighter tomorrow for Uttarakhand.
            </p>
            <Link to="/donate">
                <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light rounded-full px-10 py-3 text-base font-semibold">
                    Donate Today
                </Button>
            </Link>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ProgramsPage;