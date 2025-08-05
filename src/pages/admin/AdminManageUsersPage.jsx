import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UserCog as UsersCog, UserPlus, Edit2, Trash2, Search, Filter, ArrowUpDown, Shield, UserCheck as VolunteerIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const initialUsers = [
  { id: 'U001', name: 'Admin User One', email: 'admin1@dreamlight.org', role: 'Super Admin', status: 'Active', lastLogin: '2025-06-10 10:00 AM' },
  { id: 'U002', name: 'Content Editor', email: 'editor@dreamlight.org', role: 'Editor', status: 'Active', lastLogin: '2025-06-11 09:30 AM' },
  { id: 'U003', name: 'Volunteer Coordinator', email: 'volunteer.coord@dreamlight.org', role: 'Coordinator', status: 'Active', lastLogin: '2025-06-11 11:00 AM' },
  { id: 'U004', name: 'Inactive Admin', email: 'inactive.admin@dreamlight.org', role: 'Admin', status: 'Inactive', lastLogin: '2025-03-01 14:00 PM' },
];

const TableHeader = ({ children, onSort, sortKey, currentSortKey, sortOrder }) => (
  <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100" onClick={() => onSort(sortKey)}>
    <div className="flex items-center">
      {children}
      {currentSortKey === sortKey && <ArrowUpDown size={14} className={`ml-1.5 ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />}
    </div>
  </th>
);

const AdminManageUsersPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const roles = ['All', ...new Set(initialUsers.map(u => u.role))];
  const statuses = ['All', ...new Set(initialUsers.map(u => u.status))];

  useEffect(() => {
    let filtered = initialUsers.filter(user => 
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterRole === 'All' || user.role === filterRole) &&
      (filterStatus === 'All' || user.status === filterStatus)
    );
    
    filtered.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setUsers(filtered);
  }, [searchTerm, filterRole, filterStatus, sortKey, sortOrder]);
  
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const getStatusColor = (status) => {
    if (status === 'Active') return 'bg-dws-green/10 text-dws-green';
    if (status === 'Inactive') return 'bg-red-100 text-red-700';
    return 'bg-slate-100 text-slate-700';
  };
  
  const getRoleIcon = (role) => {
    if (role === 'Super Admin') return <Shield size={14} className="mr-1.5 text-red-500" />;
    if (role === 'Admin') return <Shield size={14} className="mr-1.5 text-orange-500" />;
    if (role === 'Editor') return <Edit2 size={14} className="mr-1.5 text-dws-blue-light" />;
    if (role === 'Coordinator') return <VolunteerIcon size={14} className="mr-1.5 text-dws-green" />;
    return <UsersCog size={14} className="mr-1.5 text-slate-500" />;
  };

  const handleAddUser = () => {
    toast({ title: "Add User Clicked", description: "This feature is for demonstration. User creation would happen via a form and backend call." });
  };
  
  const handleEditUser = (userId) => {
    toast({ title: `Edit User ${userId}`, description: "User editing form would appear here." });
  };

  const handleDeleteUser = (userId) => {
    if(window.confirm(`Are you sure you want to delete user ${userId}? This is a demo action.`)){
      toast({ title: `Delete User ${userId}`, description: "User deletion simulated.", variant: "destructive" });
    }
  };


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center">
          <UsersCog size={26} className="mr-3 text-dws-blue-dark" /> Manage Admin Users
        </h1>
        <Button onClick={handleAddUser} className="bg-dws-blue-dark hover:bg-dws-blue-light text-white">
          <UserPlus size={18} className="mr-2" /> Add New User
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
              className="w-full p-2.5 pl-10 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
          <select 
            value={filterRole} 
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark bg-white"
          >
            {roles.map(role => <option key={role} value={role}>{role === 'All' ? 'All Roles' : role}</option>)}
          </select>
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark bg-white"
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
              <TableHeader onSort={handleSort} sortKey="email" currentSortKey={sortKey} sortOrder={sortOrder}>Email</TableHeader>
              <TableHeader onSort={handleSort} sortKey="role" currentSortKey={sortKey} sortOrder={sortOrder}>Role</TableHeader>
              <TableHeader onSort={handleSort} sortKey="lastLogin" currentSortKey={sortKey} sortOrder={sortOrder}>Last Login</TableHeader>
              <TableHeader onSort={handleSort} sortKey="status" currentSortKey={sortKey} sortOrder={sortOrder}>Status</TableHeader>
              <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map(user => (
              <motion.tr 
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-3 text-sm text-slate-700 font-medium">{user.name}</td>
                <td className="p-3 text-sm text-slate-700">{user.email}</td>
                <td className="p-3 text-sm text-slate-700 flex items-center">
                  {getRoleIcon(user.role)}
                  {user.role}
                </td>
                <td className="p-3 text-sm text-slate-700">{user.lastLogin}</td>
                <td className="p-3 text-sm">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-3 text-sm space-x-1">
                  <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100" onClick={() => handleEditUser(user.id)} title="Edit User">
                    <Edit2 size={16}/>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-100" onClick={() => handleDeleteUser(user.id)} title="Delete User">
                    <Trash2 size={16}/>
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="p-6 text-center text-slate-500">No users match the current filters.</p>
        )}
      </div>
       <div className="text-xs text-slate-500 text-right">
        Showing {users.length} of {initialUsers.length} users.
      </div>
    </motion.div>
  );
};

export default AdminManageUsersPage;