import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, PlusCircle, Edit2, Trash2, Search, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initialEvents = [
  { id: 'E001', name: "Annual Charity Gala Dinner", date: "2025-10-26", time: "7:00 PM", location: "The Grand Ballroom", category: "Fundraising", status: "Published", attendees: 150, targetFunds: 50000, raisedFunds: 55000 },
  { id: 'E002', name: "Community Health Camp", date: "2025-11-10", time: "9:00 AM", location: "Greenwood Community Park", category: "Healthcare", status: "Published", attendees: 200, targetFunds: 5000, raisedFunds: 0 },
  { id: 'E003', name: "Youth Skill Workshop Series", date: "2025-11-18", time: "10:00 AM", location: "Dreamlight Vocational Center", category: "Education", status: "Draft", attendees: 0, targetFunds: 2000, raisedFunds: 0 },
  { id: 'E004', name: "Tree Plantation Drive", date: "2025-12-05", time: "11:00 AM", location: "City Botanical Gardens", category: "Environment", status: "Published", attendees: 75, targetFunds: 1000, raisedFunds: 1200 },
];

const TableHeader = ({ children, onSort, sortKey, currentSortKey, sortOrder }) => (
  <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => onSort(sortKey)}>
    <div className="flex items-center">
      {children}
      {currentSortKey === sortKey && <ArrowUpDown size={14} className={`ml-1.5 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />}
    </div>
  </th>
);


const AdminManageEventsPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  
  const categories = ['All', ...new Set(initialEvents.map(e => e.category))];
  const statuses = ['All', ...new Set(initialEvents.map(e => e.status))];

  useEffect(() => {
    let filtered = initialEvents.filter(event => 
      (event.name.toLowerCase().includes(searchTerm.toLowerCase()) || event.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterCategory === 'All' || event.category === filterCategory) &&
      (filterStatus === 'All' || event.status === filterStatus)
    );
    
    filtered.sort((a, b) => {
      if (sortKey === 'attendees' || sortKey === 'targetFunds' || sortKey === 'raisedFunds') {
        return sortOrder === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
      }
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setEvents(filtered);
  }, [searchTerm, filterCategory, filterStatus, sortKey, sortOrder]);
  
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    if (status === 'Published') return 'bg-dws-green/10 text-dws-green';
    if (status === 'Draft') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Cancelled') return 'bg-red-100 text-red-700';
    return 'bg-slate-100 text-slate-700';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-slate-800">Manage Events</h1>
        <Button className="bg-dws-blue-dark hover:bg-dws-blue-light text-white">
          <PlusCircle size={18} className="mr-2" /> Create New Event
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by Name or Location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2.5 pl-10 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark bg-white"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>)}
          </select>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark bg-white"
          >
            {statuses.map(stat => <option key={stat} value={stat}>{stat === 'All' ? 'All Statuses' : stat}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <TableHeader onSort={handleSort} sortKey="name" currentSortKey={sortKey} sortOrder={sortOrder}>Event Name</TableHeader>
              <TableHeader onSort={handleSort} sortKey="date" currentSortKey={sortKey} sortOrder={sortOrder}>Date & Time</TableHeader>
              <TableHeader onSort={handleSort} sortKey="location" currentSortKey={sortKey} sortOrder={sortOrder}>Location</TableHeader>
              <TableHeader onSort={handleSort} sortKey="category" currentSortKey={sortKey} sortOrder={sortOrder}>Category</TableHeader>
              <TableHeader onSort={handleSort} sortKey="attendees" currentSortKey={sortKey} sortOrder={sortOrder}>Attendees</TableHeader>
              <TableHeader onSort={handleSort} sortKey="status" currentSortKey={sortKey} sortOrder={sortOrder}>Status</TableHeader>
              <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {events.map(event => (
              <motion.tr 
                key={event.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-3 text-sm text-slate-700 font-medium">{event.name}</td>
                <td className="p-3 text-sm text-slate-700">
                  {new Date(event.date).toLocaleDateString()}
                  <span className="text-xs text-slate-500 block">{event.time}</span>
                </td>
                <td className="p-3 text-sm text-slate-700">{event.location}</td>
                <td className="p-3 text-sm text-slate-700">{event.category}</td>
                <td className="p-3 text-sm text-slate-700 text-center">{event.attendees}</td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </td>
                <td className="p-3 text-sm space-x-1">
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100"><Edit2 size={16}/></Button>
                  <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-100"><Trash2 size={16}/></Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {events.length === 0 && (
          <p className="p-6 text-center text-slate-500">No events match the current filters.</p>
        )}
      </div>
      <div className="text-xs text-slate-500 text-right">
        Showing {events.length} of {initialEvents.length} events.
      </div>
    </motion.div>
  );
};

export default AdminManageEventsPage;