
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderHeart as HandHeart, Filter, Download, Search, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample data - replace with actual data fetching
const initialDonations = [
  { id: 'D001', donorName: 'Aisha Sharma', amount: 100, date: '2025-05-28', program: 'Education', status: 'Completed', paymentMethod: 'Credit Card' },
  { id: 'D002', donorName: 'Rohan Mehta', amount: 50, date: '2025-05-27', program: 'General Fund', status: 'Completed', paymentMethod: 'PayPal' },
  { id: 'D003', donorName: 'Priya Singh', amount: 250, date: '2025-05-26', program: 'Healthcare', status: 'Pending', paymentMethod: 'Bank Transfer' },
  { id: 'D004', donorName: 'Vikram Reddy', amount: 75, date: '2025-05-25', program: 'Education', status: 'Completed', paymentMethod: 'Credit Card' },
  { id: 'D005', donorName: 'Sunita Patel', amount: 150, date: '2025-05-24', program: 'Clean Water', status: 'Failed', paymentMethod: 'Credit Card' },
];

const TableHeader = ({ children, onSort, sortKey, currentSortKey, sortOrder }) => (
  <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => onSort(sortKey)}>
    <div className="flex items-center">
      {children}
      {currentSortKey === sortKey && <ArrowUpDown size={14} className={`ml-1.5 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />}
    </div>
  </th>
);

const AdminManageDonationsPage = () => {
  const [donations, setDonations] = useState(initialDonations);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProgram, setFilterProgram] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const programs = ['All', ...new Set(initialDonations.map(d => d.program))];
  const statuses = ['All', ...new Set(initialDonations.map(d => d.status))];

  useEffect(() => {
    let filtered = initialDonations.filter(donation => 
      (donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) || donation.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterProgram === 'All' || donation.program === filterProgram) &&
      (filterStatus === 'All' || donation.status === filterStatus)
    );

    filtered.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    
    setDonations(filtered);
  }, [searchTerm, filterProgram, filterStatus, sortKey, sortOrder]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  
  const getStatusColor = (status) => {
    if (status === 'Completed') return 'bg-green-100 text-green-700';
    if (status === 'Pending') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Failed') return 'bg-red-100 text-red-700';
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
        <h1 className="text-2xl font-semibold text-slate-800">Manage Donations</h1>
        <Button className="bg-dream-purple hover:bg-dream-purple-dark text-white">
          <Download size={18} className="mr-2" /> Export Data
        </Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by Donor or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2.5 pl-10 border border-slate-300 rounded-lg text-sm focus:ring-dream-purple focus:border-dream-purple"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
          <select 
            value={filterProgram} 
            onChange={(e) => setFilterProgram(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dream-purple focus:border-dream-purple bg-white"
          >
            {programs.map(p => <option key={p} value={p}>{p === 'All' ? 'All Programs' : p}</option>)}
          </select>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dream-purple focus:border-dream-purple bg-white"
          >
            {statuses.map(s => <option key={s} value={s}>{s === 'All' ? 'All Statuses' : s}</option>)}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <TableHeader onSort={handleSort} sortKey="id" currentSortKey={sortKey} sortOrder={sortOrder}>ID</TableHeader>
              <TableHeader onSort={handleSort} sortKey="donorName" currentSortKey={sortKey} sortOrder={sortOrder}>Donor Name</TableHeader>
              <TableHeader onSort={handleSort} sortKey="amount" currentSortKey={sortKey} sortOrder={sortOrder}>Amount</TableHeader>
              <TableHeader onSort={handleSort} sortKey="date" currentSortKey={sortKey} sortOrder={sortOrder}>Date</TableHeader>
              <TableHeader onSort={handleSort} sortKey="program" currentSortKey={sortKey} sortOrder={sortOrder}>Program</TableHeader>
              <TableHeader onSort={handleSort} sortKey="status" currentSortKey={sortKey} sortOrder={sortOrder}>Status</TableHeader>
              <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {donations.map(donation => (
              <motion.tr 
                key={donation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-3 text-sm text-slate-700">{donation.id}</td>
                <td className="p-3 text-sm text-slate-700 font-medium">{donation.donorName}</td>
                <td className="p-3 text-sm text-slate-700">${donation.amount.toFixed(2)}</td>
                <td className="p-3 text-sm text-slate-700">{new Date(donation.date).toLocaleDateString()}</td>
                <td className="p-3 text-sm text-slate-700">{donation.program}</td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(donation.status)}`}>
                    {donation.status}
                  </span>
                </td>
                <td className="p-3 text-sm">
                  <Button variant="link" size="sm" className="text-dream-purple px-1">View</Button>
                  <Button variant="link" size="sm" className="text-blue-600 px-1">Edit</Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {donations.length === 0 && (
          <p className="p-6 text-center text-slate-500">No donations match the current filters.</p>
        )}
      </div>
      <div className="text-xs text-slate-500 text-right">
        Showing {donations.length} of {initialDonations.length} donations.
      </div>
    </motion.div>
  );
};

export default AdminManageDonationsPage;