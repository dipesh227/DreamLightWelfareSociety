import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Briefcase, ArrowRight, Sparkles, HeartHandshake as Handshake, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolvedCard = ({ icon: Icon, title, description, buttonText, linkTo, delay, iconBgColor, borderColor, textColor, hoverBgColor, buttonAction }) => (
  <motion.div 
    className={`text-center bg-white p-8 rounded-2xl shadow-xl card-hover flex flex-col items-center group`}
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div 
      className={`${iconBgColor} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
      whileHover={{ scale: 1.15, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="h-10 w-10 text-white" />
    </motion.div>
    <h3 className="text-2xl font-bold text-dws-blue-dark mb-4">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
    <Link to={linkTo} className="w-full mt-auto">
      <Button 
        onClick={buttonAction}
        variant={borderColor ? "outline" : "default"}
        className={`w-full rounded-full py-3.5 text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg
          ${borderColor 
            ? `border-2 ${borderColor} ${textColor} hover:${hoverBgColor} hover:text-white transform hover:scale-105` 
            : 'gradient-bg text-white hover:opacity-90 transform hover:scale-105'}`}
      >
        {buttonText} <ArrowRight className="ml-1.5 h-4 w-4" />
      </Button>
    </Link>
  </motion.div>
);


const GetInvolvedSection = ({ handleDonate, handleVolunteer }) => {
  const involvementOptions = [
    { 
      icon: Gift, 
      title: "Donate for Impact", 
      description: "Your contribution, whether large or small, directly funds our vital programs and brings lasting change to Indian communities.", 
      buttonText: "Make a Donation",
      linkTo: "/donate",
      buttonAction: handleDonate,
      iconBgColor: "bg-gradient-to-br from-dws-blue-dark to-dws-blue-light",
    },
    { 
      icon: Users, 
      title: "Volunteer Your Skills", 
      description: "Share your time and expertise. Join our dedicated team of volunteers and make a hands-on difference on the ground in India.", 
      buttonText: "Become a Volunteer",
      linkTo: "/volunteer", 
      buttonAction: handleVolunteer,
      iconBgColor: "bg-gradient-to-br from-dws-green to-dws-green/80",
      borderColor: "border-dws-green",
      textColor: "text-dws-green",
      hoverBgColor: "bg-dws-green"
    },
    { 
      icon: Handshake, 
      title: "Corporate Partnerships", 
      description: "Collaborate with Dreamlight. Align your CSR goals with our impactful projects for a mutually beneficial partnership.", 
      buttonText: "Explore Partnerships",
      linkTo: "/partnerships", 
      iconBgColor: "bg-gradient-to-br from-dws-gold to-dws-gold-light",
      borderColor: "border-dws-gold",
      textColor: "text-dws-gold",
      hoverBgColor: "bg-dws-gold"
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
       <div className="absolute -top-24 -left-24 w-80 h-80 bg-dws-blue-light/30 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
       <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-dws-gold-light/20 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true, amount:0.2}} 
          transition={{duration:0.6}}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block px-4 py-1.5 bg-dws-blue-light/10 text-dws-blue-dark font-semibold text-xs rounded-full uppercase tracking-wider mb-3.5">
            Join Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dws-blue-dark leading-tight text-shadow-md">
            Be the Change You Wish to See in India
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-5 leading-relaxed">
            There are many ways to contribute to Dreamlight's vision. Find the path that resonates with you and help us build a better future for communities across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {involvementOptions.map((option, index) => (
            <GetInvolvedCard key={index} {...option} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;