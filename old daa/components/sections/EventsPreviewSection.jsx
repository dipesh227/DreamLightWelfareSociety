import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EventPreviewCard = ({ title, date, location, imageSrc, description, delay }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    <img  class="w-full h-48 object-cover" alt={title} src="https://images.unsplash.com/photo-1611798416123-c1255cff2c0e" />
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-dream-purple-dark mb-2">{title}</h3>
      <div className="flex items-center text-xs text-slate-500 mb-1">
        <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-dream-purple" /> {date}
      </div>
      <div className="flex items-center text-xs text-slate-500 mb-3">
        <MapPin className="h-3.5 w-3.5 mr-1.5 text-dream-purple" /> {location}
      </div>
      <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">{description.substring(0,70)}...</p>
      <Link to="/events" className="mt-auto self-start">
        <Button variant="link" size="sm" className="text-dream-purple px-0 group text-xs">
          Event Details <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const EventsPreviewSection = () => {
  const upcomingEvents = [
    { title: "Annual Charity Gala", date: "Oct 26, 2025", location: "The Grand Ballroom", description: "An elegant evening of fundraising for education programs.", imageSrc: "placeholder_gala_preview.jpg", delay: 0 },
    { title: "Community Health Camp", date: "Nov 10, 2025", location: "Greenwood Park", description: "Free health check-ups and awareness sessions for all.", imageSrc: "placeholder_health_camp_preview.jpg", delay: 0.1 },
    { title: "Youth Skill Workshop", date: "Nov 18, 2025", location: "Dreamlight Center", description: "Empowering youth with digital and communication skills.", imageSrc: "placeholder_workshop_preview.jpg", delay: 0.2 },
  ];

  return (
    <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-dream-gold/80 text-dream-purple-dark font-semibold text-xs rounded-full uppercase tracking-wider mb-3">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Upcoming Events & Gatherings
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4">
            Join us at our upcoming events to learn, contribute, and connect with our community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map(event => (
            <EventPreviewCard key={event.title} {...event} />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
            <Link to="/events">
                <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light rounded-full px-10 py-3 text-base font-semibold">
                    View All Events
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreviewSection;