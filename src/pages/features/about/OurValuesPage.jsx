
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Lightbulb, Leaf, BookHeart } from 'lucide-react';
import PageHeader from '@/components/common/layout/PageHeader';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ValueCard = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    className="bg-white p-8 rounded-2xl shadow-xl text-center card-hover"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
  >
    <div className={`inline-block p-4 rounded-full mb-5 ${color.replace('text-', 'bg-')}/10`}>
      <Icon className={`h-12 w-12 ${color}`} />
    </div>
    <h3 className="text-2xl font-bold text-dream-purple-dark mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const OurValuesPage = () => {
  const values = [
    { icon: Heart, title: "Compassion", description: "We approach our work with empathy and a deep understanding of the challenges faced by the communities we serve. Every action is driven by a desire to alleviate suffering and promote well-being.", color: "text-red-500" },
    { icon: ShieldCheck, title: "Integrity & Transparency", description: "We uphold the highest ethical standards in all our operations. We are committed to being accountable and transparent to our donors, partners, and beneficiaries.", color: "text-blue-500" },
    { icon: Users, title: "Collaboration", description: "We believe in the power of partnership. We work closely with communities, local governments, other NGOs, and stakeholders to achieve shared goals and maximize impact.", color: "text-green-500" },
    { icon: Lightbulb, title: "Innovation & Empowerment", description: "We continuously seek creative and effective solutions to complex social problems. We strive to empower individuals and communities to become agents of their own change.", color: "text-yellow-500" },
    { icon: Leaf, title: "Sustainability", description: "Our programs are designed for long-term impact. We focus on building self-reliant communities and promoting environmentally conscious practices for a sustainable future.", color: "text-teal-500" },
    { icon: BookHeart, title: "Respect & Dignity", description: "We treat every individual with respect and uphold their dignity. We champion inclusivity and ensure that our programs are accessible and beneficial to all, without discrimination.", color: "text-purple-500" },
  ];

  return (
    <div className="bg-slate-50">
      <PageHeader
        title="Our Guiding Principles"
        subtitle="The values that shape our culture, guide our decisions, and drive our commitment to making a meaningful difference in the world."
        icon={BookHeart}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">The Core of Dreamlight</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These six fundamental values are the bedrock of Dreamlight Welfare Society. They are not just words on a page, but principles we live by every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {values.map((value, index) => (
              <ValueCard key={value.title} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-dream-purple-light/10">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <img  class="rounded-xl shadow-2xl object-cover w-full h-auto max-h-[450px]" alt="Diverse team members collaborating with smiles" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">Living Our Values</h2>
              <p className="text-slate-700 leading-relaxed">
                Our values are integrated into every aspect of our work, from program design and implementation to our interactions with communities and partners. They ensure we remain true to our mission and consistently deliver impactful, ethical, and sustainable solutions.
              </p>
              <p className="text-slate-700 leading-relaxed">
                We regularly review our practices against these values to ensure we are not just achieving results, but doing so in a way that reflects our deepest commitments.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-8 py-3 mt-4">
                  Learn More About Our Story
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dream-gold text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Users className="h-16 w-16 mx-auto text-dream-purple-dark mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Join a Value-Driven Organization</h2>
          <p className="text-dream-purple/90 text-lg leading-relaxed mb-8">
            If these values resonate with you, consider joining our mission. Whether as a donor, volunteer, or partner, you can help us bring these principles to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-dream-purple text-white hover:bg-dream-purple-dark rounded-full px-10 py-3.5 text-base font-semibold w-full sm:w-auto">
                Support Our Work
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="border-2 border-dream-purple-dark text-dream-purple-dark hover:bg-dream-purple-dark/10 rounded-full px-10 py-3.5 text-base font-semibold w-full sm:w-auto">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurValuesPage;
