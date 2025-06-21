'use client'

import { motion } from 'framer-motion'
import { Users, FolderHeart as HandHeart, Calendar, BarChart3, AlertTriangle, CheckCircle, Edit3 } from 'lucide-react'
import Link from 'next/link'

const StatCard = ({ title, value, icon: Icon, color, linkTo, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${color.border} card-hover`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{title}</p>
        <p className={`text-3xl font-bold ${color.text}`}>{value}</p>
      </div>
      <div className={`p-3 rounded-full ${color.bg}`}>
        <Icon className={`h-6 w-6 ${color.icon}`} />
      </div>
    </div>
    {linkTo && (
      <Link href={linkTo} className={`text-xs ${color.text} hover:underline mt-3 block`}>
        View Details &rarr;
      </Link>
    )}
  </motion.div>
)

const QuickActionCard = ({ title, icon: Icon, linkTo, color, index }) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(5px)' }}
    animate={{ opacity: 1, filter: 'blur(0px)' }}
    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    className="bg-white p-5 rounded-xl shadow-lg text-center card-hover"
  >
    <Link href={linkTo} className="flex flex-col items-center">
      <div className={`p-4 rounded-full mb-3 ${color.bg}`}>
        <Icon className={`h-8 w-8 ${color.icon}`} />
      </div>
      <p className={`font-semibold ${color.text}`}>{title}</p>
    </Link>
  </motion.div>
)

export default function AdminDashboard() {
  // These would come from an API or localStorage in a real app
  const stats = [
    { title: "Total Donations (Month)", value: "$12,500", icon: HandHeart, color: { text: "text-green-600", border: "border-green-500", bg: "bg-green-100", icon: "text-green-600" }, linkTo: "/admin/donations" },
    { title: "New Volunteers (Month)", value: "23", icon: Users, color: { text: "text-blue-600", border: "border-blue-500", bg: "bg-blue-100", icon: "text-blue-600" }, linkTo: "/admin/volunteers" },
    { title: "Upcoming Events", value: "4", icon: Calendar, color: { text: "text-dream-purple", border: "border-dream-purple", bg: "bg-dream-purple-lighter", icon: "text-dream-purple" }, linkTo: "/admin/events" },
    { title: "Site Visitors (Today)", value: "1,287", icon: BarChart3, color: { text: "text-dream-gold", border: "border-dream-gold", bg: "bg-dream-gold/20", icon: "text-dream-gold" }, linkTo: "/admin/reports" },
  ]

  const quickActions = [
    { title: "Add New Event", icon: Calendar, linkTo: "/admin/events/new", color: { text: "text-dream-purple", bg: "bg-dream-purple-lighter", icon: "text-dream-purple" } },
    { title: "Review Donations", icon: HandHeart, linkTo: "/admin/donations", color: { text: "text-green-600", bg: "bg-green-100", icon: "text-green-600" } },
    { title: "Approve Volunteers", icon: Users, linkTo: "/admin/volunteers/pending", color: { text: "text-blue-600", bg: "bg-blue-100", icon: "text-blue-600" } },
    { title: "Update Homepage", icon: Edit3, linkTo: "/admin/content/homepage", color: { text: "text-orange-600", bg: "bg-orange-100", icon: "text-orange-600" } },
  ]

  const recentActivities = [
    { id: 1, message: "New donation of $100 received from John Doe.", icon: HandHeart, iconColor: "text-green-500", time: "2 mins ago" },
    { id: 2, message: "Priya Sharma applied to volunteer for 'Education Program'.", icon: Users, iconColor: "text-blue-500", time: "15 mins ago" },
    { id: 3, message: "'Annual Charity Gala' event page published.", icon: Calendar, iconColor: "text-dream-purple", time: "1 hour ago" },
    { id: 4, message: "Content for 'About Us' page updated.", icon: Edit3, iconColor: "text-orange-500", time: "3 hours ago" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.title} {...stat} index={index} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <QuickActionCard key={action.title} {...action} index={index} />
          ))}
        </div>
      </section>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Recent Activity</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            {recentActivities.map((activity) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-start space-x-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
              >
                <div className="p-2 bg-slate-100 rounded-full">
                  <activity.icon size={18} className={activity.iconColor} />
                </div>
                <div>
                  <p className="text-sm text-slate-700">{activity.message}</p>
                  <p className="text-xs text-slate-400">{activity.time}</p>
                </div>
              </motion.div>
            ))}
             <Link href="#" className="text-sm text-dream-purple hover:underline mt-2 block text-right">View all activity &rarr;</Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">System Status</h2>
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <div className="flex items-center text-sm">
              <CheckCircle size={18} className="mr-2 text-green-500" />
              <span className="text-slate-700">Website: <span className="font-semibold text-green-600">Online</span></span>
            </div>
            <div className="flex items-center text-sm">
              <CheckCircle size={18} className="mr-2 text-green-500" />
              <span className="text-slate-700">Donation Gateway: <span className="font-semibold text-green-600">Active</span></span>
            </div>
            <div className="flex items-center text-sm">
              <AlertTriangle size={18} className="mr-2 text-yellow-500" />
              <span className="text-slate-700">Email Service: <span className="font-semibold text-yellow-600">Degraded Performance</span></span>
            </div>
             <div className="flex items-center text-sm">
              <CheckCircle size={18} className="mr-2 text-green-500" />
              <span className="text-slate-700">Volunteer Portal: <span className="font-semibold text-green-600">Operational</span></span>
            </div>
            <Link href="#" className="text-xs text-dream-purple hover:underline mt-2 block">View system health details &rarr;</Link>
          </div>
        </section>
      </div>
    </motion.div>
  )
}