import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Calendar, CheckSquare, MessageSquare, Award, User, CalendarClock, WalletCards as IdCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DashboardCard = ({ title, value, icon: Icon, linkTo, color, index, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border} card-hover`}
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className={`text-lg font-semibold ${color.text}`}>{title}</h3>
      <div className={`p-2 rounded-full ${color.bg}`}>
        <Icon className={`h-5 w-5 ${color.icon}`} />
      </div>
    </div>
    {value && <p className="text-3xl font-bold text-slate-700 mb-1">{value}</p>}
    {description && <p className="text-xs text-slate-500 mb-3">{description}</p>}
    <Link to={linkTo} className={`text-xs ${color.text} hover:underline font-medium`}>
      {value ? 'View Details' : 'Go to Section'} &rarr;
    </Link>
  </motion.div>
);

const UpcomingEventCard = ({ title, date, time, location, linkTo }) => (
 <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-dws-gold/10 p-4 rounded-lg border border-dws-gold/30"
  >
    <h4 className="font-semibold text-dws-gold-dark text-sm">{title}</h4>
    <p className="text-xs text-slate-600">{date} at {time}</p>
    <p className="text-xs text-slate-500">{location}</p>
    <Link to={linkTo || "/events"} className="text-xs text-dws-blue-dark hover:underline mt-1 block">View Event</Link>
  </motion.div>
);


const VolunteerDashboardPage = () => {
  // Sample data, replace with actual volunteer data
  const volunteerData = {
    name: "Aisha Volunteer", // Will be replaced by actual user data later
    totalHours: 125,
    upcomingEvents: 2,
    completedTasks: 15,
    badges: 3,
  };

  const quickLinks = [
    { title: "Log Volunteer Hours", icon: CalendarClock, linkTo: "/volunteer-dashboard/hours-log", color: { text: "text-dws-blue-dark", border: "border-dws-blue-dark", bg: "bg-dws-blue-light/20", icon: "text-dws-blue-dark"} },
    { title: "View My ID Card", icon: IdCard, linkTo: "/volunteer-dashboard/id-card", color: { text: "text-dws-green", border: "border-dws-green", bg: "bg-dws-green/10", icon: "text-dws-green"} },
    { title: "Update My Profile", icon: User, linkTo: "/volunteer-dashboard/profile", color: { text: "text-dws-blue-light", border: "border-dws-blue-light", bg: "bg-dws-blue-light/10", icon: "text-dws-blue-light"} },
    { title: "Browse Opportunities", icon: Calendar, linkTo: "/volunteer", color: { text: "text-orange-600", border: "border-orange-500", bg: "bg-orange-100", icon: "text-orange-600"} },
  ];
  
  const sampleUpcomingEvents = [
     { title: "Community Cleanup Drive", date: "July 15, 2025", time: "9:00 AM", location: "City Park South Entrance" },
     { title: "Education Workshop Prep", date: "July 22, 2025", time: "2:00 PM", location: "Dreamlight Main Office" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-1">Welcome back, {volunteerData.name}!</h2>
        <p className="text-sm text-slate-500 mb-6">Here's an overview of your volunteer activity.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Hours Logged" value={volunteerData.totalHours} icon={CalendarClock} linkTo="/volunteer-dashboard/hours-log" color={{text: "text-dws-blue-dark", border: "border-dws-blue-dark", bg:"bg-dws-blue-light/20", icon:"text-dws-blue-dark"}} index={0} />
          <DashboardCard title="Upcoming Events" value={volunteerData.upcomingEvents} icon={Calendar} linkTo="/events" color={{text: "text-dws-blue-light", border: "border-dws-blue-light", bg:"bg-dws-blue-light/10", icon:"text-dws-blue-light"}} index={1} />
          <DashboardCard title="Completed Tasks" value={volunteerData.completedTasks} icon={CheckSquare} linkTo="#" color={{text: "text-dws-green", border: "border-dws-green", bg:"bg-dws-green/10", icon:"text-dws-green"}} index={2} />
          <DashboardCard title="Badges Earned" value={volunteerData.badges} icon={Award} linkTo="/volunteer-dashboard/achievements" color={{text: "text-dws-gold", border: "border-dws-gold", bg:"bg-dws-gold/20", icon:"text-dws-gold"}} index={3} />
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <DashboardCard key={link.title} {...link} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Upcoming Assigned Events</h2>
          {sampleUpcomingEvents.length > 0 ? (
            <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
              {sampleUpcomingEvents.map((event, index) => (
                <UpcomingEventCard key={index} {...event} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Calendar size={36} className="mx-auto text-slate-400 mb-2" />
              <p className="text-sm text-slate-500">No upcoming events assigned. Check the main events page for opportunities!</p>
              <Link to="/events">
                <Button variant="link" className="text-dws-blue-dark mt-2 text-sm">View All Events</Button>
              </Link>
            </div>
          )}
        </section>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Announcements</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-3">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-slate-100 rounded-full mt-0.5"><MessageSquare size={16} className="text-dws-blue-dark"/></div>
            <div>
              <p className="text-sm font-medium text-slate-700">New Volunteer Handbook Available!</p>
              <p className="text-xs text-slate-500">Please review the updated guidelines in the resources section. <Link to="#" className="text-dws-blue-dark hover:underline">Read more</Link></p>
            </div>
          </div>
           <div className="flex items-start space-x-3 pt-3 border-t border-slate-100">
            <div className="p-2 bg-slate-100 rounded-full mt-0.5"><Award size={16} className="text-dws-gold"/></div>
            <div>
              <p className="text-sm font-medium text-slate-700">Congratulations to our "Volunteer of the Month"!</p>
              <p className="text-xs text-slate-500">Check out the spotlight on Priya Sharma for her amazing contributions. <Link to="/volunteer#volunteer-spotlight" className="text-dws-blue-dark hover:underline">Learn more</Link></p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VolunteerDashboardPage;