'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, Droplets, Briefcase, Leaf, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface ProgramHighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  imageAlt: string;
  bgColor: string;
  iconBgColor: string;
  linkTo: string;
  id: string;
}

const ProgramHighlightCard: React.FC<ProgramHighlightCardProps> = ({
  icon: Icon,
  title,
  description,
  imageAlt,
  bgColor,
  iconBgColor,
  linkTo,
  id
}) => (
  <motion.div
    id={id}
    className={`scroll-reveal rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center my-12 ${bgColor}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <div className="md:w-2/5 w-full h-64 md:h-auto">
      <Image className="w-full h-full object-cover" alt={imageAlt} src="https://images.unsplash.com/photo-1627577741153-74b82d87607b" width={500} height={500} />
    </div>
    <div className="md:w-3/5 p-8 md:p-12">
      <div className={`${iconBgColor} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-md`}>
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h3 className="text-3xl font-bold text-dream-purple-dark mb-4">{title}</h3>
      <p className="text-slate-700 leading-relaxed mb-6">{description}</p>
      <div className="space-y-2 text-sm text-slate-600 mb-8">
        <p><strong>Key Activities:</strong> Curriculum development, teacher training, resource provision, community workshops.</p>
        <p><strong>Expected Outcomes:</strong> Improved literacy, increased school enrollment, enhanced vocational skills.</p>
      </div>
      <Link href={linkTo}>
        <Button variant="outline" className="border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-6 py-2">
          Learn More & Support
        </Button>
      </Link>
    </div>
  </motion.div>
);

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      id: "education",
      icon: BookOpen,
      title: "Education Empowerment",
      description: "We believe education is the cornerstone of development. Our programs provide quality learning opportunities, from early childhood to adult literacy and vocational training, unlocking potential and fostering lifelong learning.",
      imageAlt: "Children learning in a classroom",
      bgColor: "bg-dream-purple-light/10",
      iconBgColor: "bg-dream-purple",
      linkTo: "/donate?program=education"
    },
    {
      id: "healthcare",
      icon: Stethoscope,
      title: "Community Health Initiatives",
      description: "Access to healthcare is a fundamental right. We run mobile clinics, health awareness campaigns, and support local health infrastructure to ensure communities receive essential medical care and health education.",
      imageAlt: "Doctor checking a patient",
      bgColor: "bg-green-500/10",
      iconBgColor: "bg-green-600",
      linkTo: "/donate?program=healthcare"
    },
    {
      id: "water",
      icon: Droplets,
      title: "Clean Water & Sanitation",
      description: "Safe water and proper sanitation are vital for health and dignity. We work to provide access to clean drinking water sources and promote hygiene practices, significantly reducing waterborne diseases.",
      imageAlt: "Clean water flowing from a tap",
      bgColor: "bg-blue-500/10",
      iconBgColor: "bg-blue-600",
      linkTo: "/donate?program=water"
    },
    {
      id: "livelihood",
      icon: Briefcase,
      title: "Sustainable Livelihoods",
      description: "We empower individuals with skills and resources to achieve economic independence. Our programs include vocational training, entrepreneurship support, and access to microfinance, fostering self-reliance.",
      imageAlt: "Person working at a craft",
      bgColor: "bg-dream-gold/10",
      iconBgColor: "bg-dream-gold",
      linkTo: "/donate?program=livelihood"
    },
    {
      id: "environment",
      icon: Leaf,
      title: "Environmental Conservation",
      description: "Protecting our planet is crucial for future generations. We engage in tree plantation drives, promote renewable energy, and educate communities on sustainable environmental practices.",
      imageAlt: "Hands planting a sapling",
      bgColor: "bg-teal-500/10",
      iconBgColor: "bg-teal-600",
      linkTo: "/donate?program=environment"
    },
  ];

  return (
    <div className="bg-slate-50">
      <header className="relative py-24 md:py-32 bg-gradient-to-br from-dream-gold to-dream-gold-light text-center overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-dream-purple-dark mb-4"
          >
            Our Fields of Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-dream-purple/90"
          >
            Discover the comprehensive programs we&apos;ve designed to address critical community needs and foster sustainable, positive change.
          </motion.p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <ProgramHighlightCard key={index} {...program} />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sun className="h-16 w-16 mx-auto mb-6 text-dream-gold-light" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Vision</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Your contribution, big or small, fuels these vital programs and brings hope to countless individuals. Partner with us to build a brighter tomorrow.
          </p>
          <Link href="/donate">
            <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light rounded-full px-10 py-3 text-base font-semibold">
              Donate Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;