import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Stethoscope, Globe, Star, TrendingUp, BarChart3, PieChart, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';

const ImpactStatCardBig = ({ icon: Icon, value, label, description, iconColor, bgColor, delay = 0 }) => (
  <motion.div 
    className={`scroll-reveal text-center ${bgColor} p-8 rounded-2xl shadow-xl card-hover flex flex-col items-center justify-center`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className={`p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 bg-white shadow-md`}>
      <Icon className={`h-10 w-10 ${iconColor}`} />
    </div>
    <h3 className="text-4xl md:text-5xl font-bold text-dream-purple-dark mb-2">{value}</h3>
    <p className="text-slate-700 font-semibold text-lg mb-3">{label}</p>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role, imageSrc, delay = 0 }) => (
  <motion.div 
    className="bg-white p-8 rounded-2xl shadow-xl relative"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="absolute -top-5 -left-5 bg-dream-gold text-white p-3 rounded-full shadow-lg">
      <Star className="h-6 w-6 fill-current" />
    </div>
    <img  class="w-20 h-20 rounded-full object-cover mb-4 mx-auto md:mx-0 md:float-left md:mr-6" alt={author} src="https://images.unsplash.com/photo-1591013078076-42ae16047f45" />
    <p className="text-slate-700 italic leading-relaxed mb-4 text-lg">"{quote}"</p>
    <div className="text-right md:text-left md:clear-left">
      <p className="font-bold text-dream-purple-dark text-md">- {author}</p>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  </motion.div>
);

const ImpactPage = () => {
  const stats = [
    { icon: Users, value: "75,000+", label: "Lives Transformed", description: "Directly impacting individuals and families through our diverse programs.", iconColor: "text-dream-purple", bgColor: "bg-dream-purple-light/20", delay: 0 },
    { icon: BookOpen, value: "350+", label: "Educational Initiatives", description: "Supporting schools, literacy programs, and vocational training centers.", iconColor: "text-green-600", bgColor: "bg-green-500/10", delay: 0.1 },
    { icon: Stethoscope, value: "150+", label: "Healthcare Interventions", description: "Mobile clinics, health camps, and sanitation projects improving community well-being.", iconColor: "text-blue-600", bgColor: "bg-blue-500/10", delay: 0.2 },
    { icon: Globe, value: "40+", label: "Communities Empowered", description: "Working closely with villages and urban settlements to foster sustainable development.", iconColor: "text-dream-gold", bgColor: "bg-dream-gold/10", delay: 0.3 },
  ];

  const testimonials = [
    {
      quote: "Dreamlight's skill development program gave me the confidence and ability to start my own tailoring business. My family's life has changed for the better.",
      author: "Sunita Devi",
      role: "Entrepreneur, Livelihood Program Beneficiary",
      imageSrc: "placeholder_sunita.jpg",
      delay: 0
    },
    {
      quote: "Thanks to the new well built by Dreamlight, our children no longer get sick from contaminated water. We have more time for farming and education.",
      author: "Ramesh Patel",
      role: "Farmer, Clean Water Project Village",
      imageSrc: "placeholder_ramesh.jpg",
      delay: 0.15
    }
  ];

  return (
    <div className="bg-slate-50">
      <PageHeader
        title="The Ripple Effect of Your Support"
        subtitle="Every contribution creates waves of positive change. See the tangible difference we're making together in communities across the region."
        icon={BarChart2}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Our Impact by the Numbers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We are committed to transparency and measuring our success through real-world outcomes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-24">
            {stats.map((stat, index) => (
              <ImpactStatCardBig key={index} {...stat} />
            ))}
          </div>

          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark text-center mb-12">Voices from the Community</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-dream-purple-dark mb-6">Our Commitment to Transparency</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We believe that accountability is key to building trust and maximizing impact. Dreamlight Welfare Society is dedicated to transparent operations, ensuring that every donation is used effectively and efficiently to benefit the communities we serve.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><BarChart3 className="h-5 w-5 mr-3 mt-1 text-dream-purple flex-shrink-0"/>Regular impact reports and financial disclosures.</li>
                <li className="flex items-start"><PieChart className="h-5 w-5 mr-3 mt-1 text-dream-gold flex-shrink-0"/>Clear breakdown of fund allocation for programs and operations.</li>
                <li className="flex items-start"><TrendingUp className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0"/>Continuous monitoring and evaluation to improve program effectiveness.</li>
              </ul>
              <Link to="/contact#reports">
                <Button variant="link" className="text-dream-purple mt-6 px-0">
                  View Our Annual Reports <TrendingUp className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img  class="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]" alt="Infographic showing fund distribution" src="https://images.unsplash.com/photo-1689330306004-8c72d2399132" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-dream-gold to-dream-gold-light text-center">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
            <Users className="h-16 w-16 mx-auto mb-6 text-dream-purple-dark"/>
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Be a Part of the Change</h2>
            <p className="text-lg md:text-xl mb-8 text-dream-purple/90 max-w-2xl mx-auto">
                Your support empowers us to continue this vital work. Join our community of donors and volunteers to create a lasting legacy of hope and opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate">
                    <Button size="lg" className="bg-dream-purple text-white hover:bg-dream-purple-dark rounded-full px-10 py-3 text-base font-semibold w-full sm:w-auto">
                        Donate Now
                    </Button>
                </Link>
                 <Link to="/contact#volunteer">
                    <Button size="lg" variant="outline" className="border-2 border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-10 py-3 text-base font-semibold w-full sm:w-auto">
                        Volunteer With Us
                    </Button>
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;