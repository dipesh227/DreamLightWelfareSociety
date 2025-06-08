'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Bell,
  Settings,
  FileText,
  BarChart3,
  Activity,
  Globe
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
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600"
  };

  return (<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
        <p className="text-sm text-primary mt-1">{change}</p>
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} shadow-lg`}>
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>
    </div>
  </motion.div>
  );
};

const QuickAction = ({ title, description, icon: Icon, onClick }: {
  title: string;
  description: string;
  icon: React.ElementType;
  onClick: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="w-full bg-card/80 backdrop-blur-xl rounded-xl p-4 border border-border shadow-lg text-left hover:shadow-xl transition-all"
  >
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-gradient-to-br from-destructive to-destructive/90 rounded-lg shadow-md">
        {Icon && <Icon className="w-5 h-5 text-destructive-foreground" />}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.button>
);

export default function AdminDashboardPage() {
  return (<div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/10">
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back, Admin. Here&apos;s what&apos;s happening today.
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button size="sm" variant="outline" className="bg-card/50">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </Button>
          <Button size="sm" variant="outline" className="bg-card/50">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Volunteers"
          value="1,234"
          change="+12.5% from last month"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Active Programs"
          value="18"
          change="+3 new this month"
          icon={Activity}
          color="green"
        />
        <StatCard
          title="Donations"
          value="₹2,45,670"
          change="+23.1% from last month"
          icon={DollarSign}
          color="purple"
        />
        <StatCard
          title="Events"
          value="7"
          change="2 upcoming"
          icon={Calendar}
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-1">            <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <QuickAction
              title="Manage Volunteers"
              description="View and manage volunteer accounts"
              icon={Users}
              onClick={() => { }}
            />
            <QuickAction
              title="Create Event"
              description="Schedule a new community event"
              icon={Calendar}
              onClick={() => { }}
            />
            <QuickAction
              title="Generate Report"
              description="Create monthly activity report"
              icon={FileText}
              onClick={() => { }}
            />
            <QuickAction
              title="System Settings"
              description="Configure platform settings"
              icon={Settings}
              onClick={() => { }}
            />
          </div>
        </motion.div>
        </div>

        {/* Recent Activity & Notifications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }} className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                Recent Activity
              </h2>
              <Button size="sm" variant="ghost">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { action: "New volunteer registration", user: "Priya Sharma", time: "2 min ago", icon: Users },
                { action: "Program update published", user: "Admin", time: "15 min ago", icon: FileText },
                { action: "Event scheduled", user: "Rahul Kumar", time: "1 hour ago", icon: Calendar },
                { action: "Donation received", user: "Anonymous", time: "2 hours ago", icon: DollarSign },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-primary to-primary/90 rounded-lg">
                    {activity.icon && <activity.icon className="w-4 h-4 text-primary-foreground" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Analytics Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                Analytics Overview
              </h2>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Last 30 days</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-primary">+45%</p>
                <p className="text-sm text-muted-foreground">Volunteer Growth</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-lg font-bold text-secondary">2.3K</p>
                <p className="text-sm text-muted-foreground">Website Visits</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>        {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border shadow-lg"
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">
          System Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">Database</span>
            <span className="text-sm font-medium text-primary">Operational</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">API Services</span>
            <span className="text-sm font-medium text-primary">Operational</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span className="text-sm text-muted-foreground">Email Service</span>
            <span className="text-sm font-medium text-warning">Maintenance</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  );
}