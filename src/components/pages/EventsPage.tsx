'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Clock, Tag, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';

// Define an Event type
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  spotsLeft: number | string;
}

const EventCard = ({ event, onRegister }: { event: Event; onRegister: (event: Event) => void }) => {
  const { title, date, time, location, description, category, spotsLeft } = event;
  return (<motion.div
    className="bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col border border-border"
    whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(58, 12, 163, 0.2)" }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <div className="relative h-56">      <Image
      className="w-full h-full object-cover"
      alt={title}
      src="https://images.unsplash.com/photo-1611798416123-c1255cff2c0e"
      fill
      style={{ objectFit: "cover" }}
    />
      <div className="absolute top-3 right-3 bg-dream-gold text-dream-purple-dark px-3 py-1 rounded-full text-xs font-semibold shadow-md">
        {category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-dream-purple-dark dark:text-dream-purple-light mb-3">{title}</h3>
      <div className="space-y-2 text-sm text-muted-foreground mb-4">
        <div className="flex items-center">
          <CalendarDays className="h-4 w-4 mr-2 text-dream-purple" /> {date}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-dream-purple" /> {time}
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-dream-purple" /> {location}
        </div>
      </div>        <p className="text-sm text-foreground/90 leading-relaxed mb-5 flex-grow">{description}</p>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
        <span className="text-xs text-dream-purple font-semibold">{spotsLeft} spots left</span>
        <Button
          onClick={() => onRegister(event)}
          size="sm"
          className="gradient-bg text-white hover:opacity-90 rounded-full px-5"
        >
          Register <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </div>
    </div>
  </motion.div>
  );
};

const EventsPage = () => {
  const [filter, setFilter] = useState('all');

  const eventsData: Event[] = [
    {
      id: 1,
      title: "Annual Charity Gala Dinner",
      date: "March 26, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "The Grand Ballroom, Khatima",
      description: "Join us for an elegant evening of fine dining, entertainment, and fundraising to support our educational programs. Special guest performances and auctions.",
      category: "Fundraising",
      spotsLeft: 50
    },
    {
      id: 2,
      title: "Community Health Camp",
      date: "March 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Greenwood Community Park",
      description: "Free health check-ups, consultations with doctors, and health awareness sessions for all community members. Volunteers needed!",
      category: "Healthcare",
      spotsLeft: 120
    },
    {
      id: 3,
      title: "Youth Skill Development Workshop",
      date: "March 18-20, 2025",
      time: "10:00 AM - 5:00 PM daily",
      location: "Dreamlight Vocational Center",
      description: "A 3-day intensive workshop for youth aged 16-24 focusing on digital literacy, communication skills, and entrepreneurship basics.",
      category: "Education",
      spotsLeft: 30
    },
    {
      id: 4,
      title: "Clean Water Project Inauguration",
      date: "April 5, 2025",
      time: "11:00 AM",
      location: "Village Rampur",
      description: "Celebrate the launch of our new clean water facility in Rampur, providing safe drinking water to over 500 families. Community feast to follow.",
      category: "Community",
      spotsLeft: "Open Event"
    },
    {
      id: 5,
      title: "Environmental Awareness Drive",
      date: "April 15, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "City Botanical Gardens",
      description: "Join us for a tree plantation drive and a session on waste management and recycling. Let's make our city greener!",
      category: "Environment",
      spotsLeft: 80
    },
  ];

  const handleRegister = (event: Event) => {
    alert(`Thank you for your interest in "${event.title}"! Registration details will be sent to your email soon. (This is a demo)`);
  };

  const filteredEvents = eventsData.filter(event =>
    filter === 'all' || event.category.toLowerCase() === filter
  );

  const categories = ['all', ...new Set(eventsData.map(e => e.category.toLowerCase()))];
  return (
    <div className="bg-background">
      <PageHeader
        title="Upcoming Events & Initiatives"
        subtitle="Join us at our events to support our cause, learn more about our work, or volunteer your time. Together, we can make a greater impact."
        icon={Calendar}
        gradientFrom="from-secondary"
        gradientTo="to-secondary/80"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                variant={filter === cat ? "default" : "outline"}
                className={`rounded-full px-6 py-2 text-sm capitalize transition-all duration-300
                  ${filter === cat
                    ? 'gradient-bg text-white shadow-lg'
                    : 'border-dream-purple text-dream-purple hover:bg-dream-purple/10 dark:border-dream-purple-light dark:text-dream-purple-light'}`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} onRegister={handleRegister} />
              ))}
            </div>
          ) : (<div className="text-center py-12">
            <Tag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">
              No events found for this category. Check back soon!
            </p>
          </div>
          )}
        </div>
      </section>      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDays className="h-16 w-16 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Host Your Own Fundraiser!</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Got an idea for an event? Partner with us to raise funds for a cause you care about. We&apos;ll provide support and resources to make your event a success.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-10 py-3 text-base font-semibold shadow-lg">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;