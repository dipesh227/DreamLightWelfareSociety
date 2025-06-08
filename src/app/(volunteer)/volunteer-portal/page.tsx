'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Award,
  TrendingUp,
  BookOpen,
  Droplets,
  TreePine,
  Building,
  CheckCircle2,
  Star,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatCard = ({ title, value, change, icon: Icon, color = "blue" }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color?: string;
}) => {
  const colorClasses = {
    blue: "from-primary to-primary/90",
    green: "from-success to-success/90",
    purple: "from-primary to-secondary",
    orange: "from-warning to-warning/90"
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-border/20 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          <p className="text-sm text-success mt-1">{change}</p>
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
};

const EventCard = ({ title, date, time, location, description, participants, category, status }: {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: number;
  category: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}) => {
  const statusColors = {
    upcoming: "bg-info/10 text-info border border-info/20",
    ongoing: "bg-success/10 text-success border border-success/20",
    completed: "bg-muted text-muted-foreground border border-border"
  };

  const categoryIcons = {
    education: BookOpen,
    environment: TreePine,
    healthcare: Heart,
    community: Building,
    water: Droplets
  };

  const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || Building;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/70 backdrop-blur-xl rounded-xl p-6 border border-border/20 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-gradient-to-br from-primary to-primary/90 rounded-lg">
            <CategoryIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4" />
          <span>{participants} participants</span>
        </div>
      </div>      <div className="mt-4 pt-4 border-t border-border">
        <Button
          size="sm"
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
          disabled={status === 'completed'}
        >
          {status === 'completed' ? 'Completed' : status === 'ongoing' ? 'View Details' : 'Join Event'}
        </Button>
      </div>
    </motion.div>
  );
};

export default function VolunteerPortalPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const upcomingEvents = [
    {
      title: "Community Clean-up Drive",
      date: "Jan 15, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Central Park, Khatima",
      description: "Join us for a community-wide clean-up initiative to beautify our neighborhood.",
      participants: 25,
      category: "environment",
      status: "upcoming" as const
    },
    {
      title: "Educational Workshop",
      date: "Jan 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center",
      description: "Teaching digital literacy to local youth and adults.",
      participants: 15,
      category: "education",
      status: "upcoming" as const
    },
    {
      title: "Health Awareness Camp",
      date: "Jan 12, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Village Health Center",
      description: "Providing basic health check-ups and awareness sessions.",
      participants: 30,
      category: "healthcare",
      status: "ongoing" as const
    }
  ];
  const achievements = [
    { title: "Volunteer of the Month", description: "December 2023", icon: Award, color: "text-warning" },
    { title: "Community Helper", description: "50+ hours served", icon: Heart, color: "text-destructive" },
    { title: "Event Organizer", description: "Led 3 successful events", icon: Star, color: "text-info" },
    { title: "Team Player", description: "Perfect attendance", icon: CheckCircle2, color: "text-success" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Volunteer Portal
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Priya! Ready to make a difference today?
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button size="sm" variant="outline" className="bg-card/50">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90">
            <Heart className="w-4 h-4 mr-2" />
            New Activity
          </Button>
        </div>
      </motion.div>      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-card/50 p-1 rounded-xl">
        {['overview', 'events', 'achievements', 'schedule'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${activeTab === tab
              ? 'bg-primary text-white shadow-md'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Hours Volunteered"
              value="127"
              change="+23 this month"
              icon={Clock}
              color="blue"
            />
            <StatCard
              title="Events Attended"
              value="18"
              change="+3 this month"
              icon={Calendar}
              color="green"
            />
            <StatCard
              title="Impact Score"
              value="4.8"
              change="⭐ Excellent"
              icon={TrendingUp}
              color="purple"
            />
            <StatCard
              title="Community Rank"
              value="#12"
              change="Top 5% volunteer"
              icon={Award}
              color="orange"
            />
          </div>

          {/* Recent Activities */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-border/20 shadow-lg"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Recent Activities
            </h2>
            <div className="space-y-3">
              {[
                { activity: "Completed health awareness session", time: "2 hours ago", type: "completed" },
                { activity: "Joined community clean-up drive", time: "1 day ago", type: "joined" },
                { activity: "Organized educational workshop", time: "3 days ago", type: "organized" },
                { activity: "Received volunteer recognition", time: "1 week ago", type: "achievement" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-success to-success/90 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {item.activity}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {activeTab === 'events' && (<div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            Available Events
          </h2>
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 text-info" />
            <span className="text-sm text-muted-foreground">
              {upcomingEvents.length} events available
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
      )}      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">
            Your Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/70 backdrop-blur-xl rounded-xl p-6 border border-border/20 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary/90 rounded-xl">
                    <achievement.icon className={`w-6 h-6 text-white`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}      {activeTab === 'schedule' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card/70 backdrop-blur-xl rounded-2xl p-6 border border-border/20 shadow-lg"
        >
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Your Schedule
          </h2>
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Schedule management feature coming soon!
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}