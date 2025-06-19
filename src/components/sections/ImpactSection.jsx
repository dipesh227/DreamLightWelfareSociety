
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Stethoscope, Globe, Star, TrendingUp } from 'lucide-react'; 

const ImpactStatCard = ({ icon: Icon, value, label, iconColor, bgColor, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.05, y: -8, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
    className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-xl card-hover border-t-4 border-transparent hover:border-dream-purple transition-all"
  >
    <div className={`${bgColor} p-3.5 md:p-4 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-5 shadow-lg`}>
      <Icon className={`h-8 w-8 md:h-10 md:w-10 ${iconColor}`} />
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-dream-purple-dark mb-2">{value}</h3>
    <p className="text-slate-500 text-sm md:text-base">{label}</p>
  </motion.div>
);

const ImpactSection = () => {
  const stats = [
    { icon: Users, value: "75,000+", label: "Lives Impacted in India", iconColor: "text-dream-purple", bgColor: "bg-dream-purple-lighter", delay: 0 },
    { icon: BookOpen, value: "250+", label: "Schools & Learning Centers", iconColor: "text-green-600", bgColor: "bg-green-100", delay: 0.1 },
    { icon: Stethoscope, value: "120+", label: "Health Initiatives", iconColor: "text-blue-600", bgColor: "bg-blue-100", delay: 0.2 },
    { icon: Globe, value: "30+", label: "Communities Empowered", iconColor: "text-dream-gold", bgColor: "bg-dream-gold/20", delay: 0.3 },
  ];

  const testimonials = [
    {
      quote: "Dreamlight's educational support gave my daughter, Lakshmi, the wings to fly. She's now pursuing engineering, a first in our village.",
      author: "Radha Krishnan, Mother, Tamil Nadu",
      imagePlaceholder: "Smiling Indian mother with her daughter in graduation attire, symbolizing educational success"
    },
    {
      quote: "The skill development program by Dreamlight helped me start my own tailoring business. I am now financially independent and support my family.",
      author: "Sunita Devi, Entrepreneur, Rajasthan",
      imagePlaceholder: "Indian woman confidently working at a sewing machine in her shop, showcasing livelihood empowerment"
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6}}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block px-4 py-1.5 bg-dream-gold-light/30 text-dream-gold font-semibold text-xs rounded-full uppercase tracking-wider mb-3.5">
            Real Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dream-purple-dark mb-5 md:mb-7">
            Measuring Our <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in transparency and tangible outcomes. Discover the profound difference your support makes in the lives of individuals and communities across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat) => (
            <ImpactStatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[4/3.5] shadow-2xl rounded-2xl overflow-hidden group"
          >
             <img   
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Happy Indian children in a classroom, benefiting from NGO educational programs and showing positive impact"
              src="https://images.unsplash.com/photo-1697790698221-5e5712c82e92" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white p-3 bg-black/30 rounded-lg backdrop-blur-sm">
                <div className="flex items-center text-sm font-medium text-dream-gold-light mb-1">
                  <TrendingUp size={18} className="mr-1.5"/> Real Change
                </div>
                <h3 className="text-xl font-bold text-shadow-md">Transforming Futures</h3>
            </div>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg glass-effect border border-dream-purple/10 card-hover"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration:0.6, ease: "easeOut" }}
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-dream-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 mb-3 text-shadow-sm italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-dream-purple-dark text-sm">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
