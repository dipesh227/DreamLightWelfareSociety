
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Filter, Search, Check, X, Mail, Phone, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initialVolunteers = [
  { id: 'V001', name: 'Aarav Patel', email: 'aarav.p@example.com', phone: '9876543210', areaOfInterest: 'Education', status: 'Active', joinDate: '2024-11-15' },
  { id: 'V002', name: 'Bhavna Chauhan', email: 'bhavna.c@example.com', phone: '8765432109', areaOfInterest: 'Healthcare', status: 'Pending Approval', joinDate: '2025-01-05' },
  { id: 'V003', name: 'Chetan Reddy', email: 'chetan.r@example.com', phone: '7654321098', areaOfInterest: 'Events', status: 'Active', joinDate: '2024-08-20' },
  { id: 'V004', name: 'Diya Sharma', email: 'diya.s@example.com', phone: '6543210987', areaOfInterest: 'Communications', status: 'Inactive', joinDate: '2024-03-10' },
  { id: 'V005', name: 'Eshan Verma', email: 'eshan.v@example.com', phone: '5432109876', areaOfInterest: 'Education', status: 'Active', joinDate: '2025-02-01' },
];

const TableHeader = ({ children, onSort, sortKey, currentSortKey, sortOrder }) => (
  <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => onSort(sortKey)}>
    <div className="flex items-center">
      {children}
      {currentSortKey === sortKey && <ArrowUpDown size={14} className={`ml-1.5 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />}
    </div>
  </th>
);

const AdminManageVolunteersPage = () => {
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('joinDate');
  const [sortOrder, setSortOrder] = useState('desc');

  const areas = ['All', ...new Set(initialVolunteers.map(v => v.areaOfInterest))];
  const statuses = ['All', ...new Set(initialVolunteers.map(v => v.status))];

  useEffect(() => {
    let filtered = initialVolunteers.filter(volunteer => 
      (volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) || volunteer.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterArea === 'All' || volunteer.areaOfInterest === filterArea) &&
      (filterStatus === 'All' || volunteer.status === filterStatus)
    );
    
    filtered.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setVolunteers(filtered);
  }, [searchTerm, filterArea, filterStatus, sortKey, sortOrder]);
  
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    if (status === 'Active') return 'bg-green-100 text-green-700';
    if (status === 'Pending Approval') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Inactive') return 'bg-red-100 text-red-700';
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
        <h1 className="text-2xl font-semibold text-slate-800">Manage Volunteers</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Users size={18} className="mr-2" /> Add New Volunteer
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by Name or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2.5 pl-10 border border-slate-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
          <select 
            value={filterArea} 
            onChange={(e) => setFilterArea(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {areas.map(area => <option key={area} value={area}>{area === 'All' ? 'All Areas of Interest' : area}</option>)}
          </select>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {statuses.map(status => <option key={status} value={status}>{status === 'All' ? 'All Statuses' : status}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <TableHeader onSort={handleSort} sortKey="name" currentSortKey={sortKey} sortOrder={sortOrder}>Name</TableHeader>
              <TableHeader onSort={handleSort} sortKey="email" currentSortKey={sortKey} sortOrder={sortOrder}>Contact</TableHeader>
              <TableHeader onSort={handleSort} sortKey="areaOfInterest" currentSortKey={sortKey} sortOrder={sortOrder}>Area of Interest</TableHeader>
              <TableHeader onSort={handleSort} sortKey="joinDate" currentSortKey={sortKey} sortOrder={sortOrder}>Join Date</TableHeader>
              <TableHeader onSort={handleSort} sortKey="status" currentSortKey={sortKey} sortOrder={sortOrder}>Status</TableHeader>
              <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {volunteers.map(volunteer => (
              <motion.tr 
                key={volunteer.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-3 text-sm text-slate-700 font-medium">{volunteer.name}</td>
                <td className="p-3 text-sm text-slate-700">
                  <div className="flex items-center"><Mail size={14} className="mr-1.5 text-slate-400"/> {volunteer.email}</div>
                  <div className="flex items-center text-xs text-slate-500"><Phone size={12} className="mr-1.5 text-slate-400"/> {volunteer.phone}</div>
                </td>
                <td className="p-3 text-sm text-slate-700">{volunteer.areaOfInterest}</td>
                <td className="p-3 text-sm text-slate-700">{new Date(volunteer.joinDate).toLocaleDateString()}</td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(volunteer.status)}`}>
                    {volunteer.status}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  {volunteer.status === 'Pending Approval' && (
                    <>
                      <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-100"><Check size={18}/></Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-100"><X size={18}/></Button>
                    </>
                  )}
                  <Button variant="link" size="sm" className="text-blue-600 px-1">Details</Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {volunteers.length === 0 && (
          <p className="p-6 text-center text-slate-500">No volunteers match the current filters.</p>
        )}
      </div>
       <div className="text-xs text-slate-500 text-right">
        Showing {volunteers.length} of {initialVolunteers.length} volunteers.
      </div>
    </motion.div>
  );
};

export default AdminManageVolunteersPage;