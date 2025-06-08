import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolvedCard = ({ icon: Icon, title, description, buttonText, linkTo, delay, iconBgColor, borderColor, textColor, hoverBgColor, buttonAction }) => (
  <motion.div 
    className={`text-center bg-white p-8 rounded-2xl shadow-xl card-hover flex flex-col items-center`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
  >
    <div className={`${iconBgColor} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md`}>
      <Icon className="h-10 w-10 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-dream-purple-dark mb-4">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
    <Link to={linkTo} className="w-full mt-auto">
      <Button 
        onClick={buttonAction}
        variant={borderColor ? "outline" : "default"}
        className={`w-full rounded-full py-3 text-sm font-semibold transition-all duration-300
          ${borderColor 
            ? `border-2 ${borderColor} ${textColor} hover:${hoverBgColor} hover:text-white` 
            : 'gradient-bg text-white hover:opacity-90 shadow-md hover:shadow-lg'}`}
      >
        {buttonText} <ArrowRight className="ml-1.5 h-4 w-4" />
      </Button>
    </Link>
  </motion.div>
);


const GetInvolvedSection = ({ handleDonate, handleVolunteer }) => {
  const involvementOptions = [
    { 
      icon: Heart, 
      title: "Donate Securely", 
      description: "Your financial gift, big or small, directly fuels our programs and brings tangible change to communities.", 
      buttonText: "Make a Donation",
      linkTo: "/donate",
      buttonAction: handleDonate,
      iconBgColor: "bg-dream-purple",
    },
    { 
      icon: Users, 
      title: "Volunteer Your Time", 
      description: "Share your unique skills and passion. Join our dedicated team of volunteers and make a hands-on difference.", 
      buttonText: "Become a Volunteer",
      linkTo: "/contact#volunteer",
      buttonAction: handleVolunteer,
      iconBgColor: "bg-green-600",
      borderColor: "border-green-600",
      textColor: "text-green-600",
      hoverBgColor: "bg-green-600"
    },
    { 
      icon: Briefcase, 
      title: "Partner With Us", 
      description: "Collaborate with Dreamlight through corporate partnerships, event sponsorships, or program support.", 
      buttonText: "Explore Partnerships",
      linkTo: "/contact#partner",
      iconBgColor: "bg-dream-gold",
      borderColor: "border-dream-gold",
      textColor: "text-dream-gold",
      hoverBgColor: "bg-dream-gold"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-dream-purple-light/10 text-dream-purple font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
            Join Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dream-purple-dark leading-tight">
            Be the Change You Wish to See
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
            There are many ways to contribute to Dreamlight's vision. Find the path that resonates with you and help us build a better world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {involvementOptions.map((option, index) => (
            <GetInvolvedCard key={index} {...option} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;