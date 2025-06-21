
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EventPreviewCard = ({ title, date, location, imagePlaceholder, description, delay, linkTo = "/events" }) => (
  <motion.div
    className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col group card-hover"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
  >
    <div className="relative h-56 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={title}
        src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold text-shadow-md leading-tight">{title}</h3>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center text-xs text-slate-500 mb-1.5">
        <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-dream-purple" /> {date}
      </div>
      <div className="flex items-center text-xs text-slate-500 mb-3">
        <MapPin className="h-3.5 w-3.5 mr-1.5 text-dream-purple" /> {location}
      </div>
      <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">{description.substring(0,90)}...</p>
      <Link to={linkTo} className="mt-auto self-start">
        <Button variant="link" size="sm" className="text-dream-purple px-0 group/btn text-xs font-medium hover:text-dream-gold transition-colors">
          Event Details <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const EventsPreviewSection = () => {
  const upcomingEvents = [
    { title: "Annual Diwali Charity Gala", date: "Oct 26, 2025", location: "The Ashoka Hotel, New Delhi", description: "An elegant evening of fundraising, cultural performances, and dinner for our education programs.", imagePlaceholder: "Elegant Indian gala event with traditional decorations and lighting", delay: 0 },
    { title: "Rural Health & Wellness Camp", date: "Nov 10, 2025", location: "Village Sariska, Rajasthan", description: "Free health check-ups, medicine distribution, and awareness sessions for rural communities.", imagePlaceholder: "Indian doctor examining a child in a rural health camp setup with villagers in background", delay: 0.1 },
    { title: "Youth Employability Workshop", date: "Nov 18, 2025", location: "Dreamlight Center, Mumbai", description: "Empowering underprivileged youth with digital literacy and communication skills for better job prospects.", imagePlaceholder: "Young Indian students in a computer lab learning new skills with instructor", delay: 0.2 },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-dream-purple-dark to-dream-purple text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true, amount:0.2}} 
          transition={{duration:0.6}}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block px-4 py-1.5 bg-dream-gold/90 text-dream-purple-dark font-semibold text-xs rounded-full uppercase tracking-wider mb-3.5 shadow-sm">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-shadow-lg">
            Upcoming Events & Gatherings
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mt-5 leading-relaxed">
            Join us at our upcoming events to learn, contribute, and connect with our vibrant community across India.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {upcomingEvents.map(event => (
            <EventPreviewCard key={event.title} {...event} />
          ))}
        </div>
        <div className="text-center mt-14 md:mt-18">
            <Link to="/events">
                <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light rounded-full px-10 py-3.5 text-base font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                    <Users size={20} className="mr-2.5 group-hover:animate-pulse" /> View All Events
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;
