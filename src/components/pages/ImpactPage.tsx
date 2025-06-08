'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Heart, 
  BookOpen, 
  Droplets, 
  Building, 
  TreePine,
  Award,
  Target,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const StatCard = ({ icon: Icon, number, label, description, color = "blue" }: {
  icon: any;
  number: string;
  label: string;
  description: string;
  color?: string;
}) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-red-500 to-red-600",
    indigo: "from-indigo-500 to-indigo-600"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
    >
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} mb-6 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-2"
        >
          {number}
        </motion.div>
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">{label}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProgressBar = ({ label, current, target, unit = "", color = "blue" }: {
  label: string;
  current: number;
  target: number;
  unit?: string;
  color?: string;
}) => {
  const percentage = Math.min((current / target) * 100, 100);
  
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-800 dark:text-slate-200">{label}</span>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {current.toLocaleString()}{unit} / {target.toLocaleString()}{unit}
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-3 rounded-full ${colorClasses[color as keyof typeof colorClasses]}`}
        />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 text-right">
        {percentage.toFixed(1)}% Complete
      </p>
    </motion.div>
  );
};

const ImpactStory = ({ title, description, stats, image }: {
  title: string;
  description: string;
  stats: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl"
  >
    <div className="md:flex">
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{stats}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const ImpactPage = () => {
  const impactStats = [
    {
      icon: Users,
      number: "12,500+",
      label: "Lives Touched",
      description: "Individuals directly benefited from our programs across education, healthcare, and community development",
      color: "blue"
    },
    {
      icon: BookOpen,
      number: "2,400",
      label: "Students Educated",
      description: "Children and adults provided with quality education and skill development opportunities",
      color: "green"
    },
    {
      icon: Heart,
      number: "8,900",
      label: "Healthcare Beneficiaries",
      description: "People received medical care, health check-ups, and wellness programs",
      color: "red"
    },
    {
      icon: Droplets,
      number: "45",
      label: "Clean Water Projects",
      description: "Villages now have access to safe drinking water and sanitation facilities",
      color: "blue"
    },
    {
      icon: TreePine,
      number: "15,000",
      label: "Trees Planted",
      description: "Contributing to environmental conservation and climate change mitigation",
      color: "green"
    },
    {
      icon: Building,
      number: "28",
      label: "Communities Served",
      description: "Villages and urban areas across Uttarakhand where we actively work",
      color: "purple"
    }
  ];

  const goals2025 = [
    { label: "Students in Education Programs", current: 2400, target: 5000, color: "green" },
    { label: "Healthcare Beneficiaries", current: 8900, target: 15000, color: "red" },
    { label: "Clean Water Access Points", current: 45, target: 100, color: "blue" },
    { label: "Women in Skill Programs", current: 850, target: 2000, color: "purple" }
  ];

  const impactStories = [
    {
      title: "Transforming Education in Rural Areas",
      description: "Our mobile education units have reached remote villages, providing quality education to children who previously had no access to schools. Through innovative teaching methods and technology, we've increased literacy rates by 65% in our target areas.",
      stats: "15 villages • 850 students • 65% literacy improvement",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80"
    },
    {
      title: "Community Health Revolution",
      description: "Our comprehensive healthcare program includes regular health camps, vaccination drives, and health education. We've significantly reduced preventable diseases and improved maternal and child health outcomes.",
      stats: "120 health camps • 8,900 people served • 40% reduction in preventable diseases",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
    },
    {
      title: "Clean Water for All",
      description: "Through innovative water purification systems and community-managed water points, we've provided clean drinking water access to thousands of families, dramatically reducing waterborne diseases.",
      stats: "45 water projects • 28 communities • 85% reduction in waterborne diseases",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433"
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Our Impact"
        subtitle="Measuring the difference we make in communities across Uttarakhand. Every number represents a life touched, a family supported, and a community strengthened."
        icon={TrendingUp}
        gradientFrom="from-green-600"
        gradientTo="to-blue-600"
      />

      {/* Impact Statistics */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Since our inception, we've been committed to creating measurable, sustainable impact in the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Goals */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-800">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Target className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our 2025 Goals
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Ambitious targets to expand our impact and reach more communities in need.
            </p>
          </motion.div>

          <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8">
            {goals2025.map((goal, index) => (
              <ProgressBar key={index} {...goal} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Stories of Change
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Behind every statistic is a human story of transformation, hope, and positive change.
            </p>
          </motion.div>

          <div className="space-y-12">
            {impactStories.map((story, index) => (
              <ImpactStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Impact
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Your support helps us reach more communities, touch more lives, and create lasting positive change. Join us in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
            >
              Donate Now
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors"
            >
              Partner With Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;