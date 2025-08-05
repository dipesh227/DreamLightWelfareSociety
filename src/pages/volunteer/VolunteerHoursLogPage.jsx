
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, PlusCircle, Trash2, Edit2, Check, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

// Sample data, in a real app this would come from localStorage or API
const initialLoggedHours = [
  { id: 1, date: '2025-05-15', hours: 4, activity: 'Assisted at Education Workshop', approved: true },
  { id: 2, date: '2025-05-22', hours: 3, activity: 'Health Camp Registration Desk', approved: true },
  { id: 3, date: '2025-06-01', hours: 5, activity: 'Content Writing for Social Media', approved: false },
];

const VolunteerHoursLogPage = () => {
  const [loggedHours, setLoggedHours] = useState(() => {
    const savedHours = localStorage.getItem('volunteerLoggedHours');
    return savedHours ? JSON.parse(savedHours) : initialLoggedHours;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLog, setCurrentLog] = useState(null); // For editing
  const [formData, setFormData] = useState({ date: '', hours: '', activity: '' });
  
  useEffect(() => {
    localStorage.setItem('volunteerLoggedHours', JSON.stringify(loggedHours));
  }, [loggedHours]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitLog = (e) => {
    e.preventDefault();
    if (currentLog) { // Editing existing log
      setLoggedHours(loggedHours.map(log => log.id === currentLog.id ? { ...log, ...formData, hours: parseFloat(formData.hours), approved: false } : log));
      toast({ title: "Log Updated", description: "Your hour log has been updated and is pending approval.", className: "bg-blue-600 text-white" });
    } else { // Adding new log
      const newLog = { 
        id: Date.now(), 
        ...formData, 
        hours: parseFloat(formData.hours), 
        approved: false 
      };
      setLoggedHours([...loggedHours, newLog]);
      toast({ title: "Hours Logged Successfully", description: "Your hours have been submitted for approval.", className: "bg-green-600 text-white" });
    }
    setIsModalOpen(false);
    setCurrentLog(null);
    setFormData({ date: '', hours: '', activity: '' });
  };

  const handleEditLog = (log) => {
    setCurrentLog(log);
    setFormData({ date: log.date, hours: log.hours.toString(), activity: log.activity });
    setIsModalOpen(true);
  };

  const handleDeleteLog = (id) => {
    if (window.confirm("Are you sure you want to delete this log? This action cannot be undone.")) {
        setLoggedHours(loggedHours.filter(log => log.id !== id));
        toast({ title: "Log Deleted", description: "The hour log has been removed.", variant: "destructive" });
    }
  };
  
  const openNewLogModal = () => {
    setCurrentLog(null);
    setFormData({ date: new Date().toISOString().split('T')[0], hours: '', activity: '' }); // Prefill date
    setIsModalOpen(true);
  };

  const totalLoggedHours = loggedHours.reduce((sum, log) => sum + log.hours, 0);
  const totalApprovedHours = loggedHours.filter(log => log.approved).reduce((sum, log) => sum + log.hours, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center mb-3 sm:mb-0">
          <CalendarClock size={26} className="mr-3 text-dream-purple" /> Log Your Volunteer Hours
        </h1>
        <Button onClick={openNewLogModal} className="bg-dream-purple hover:bg-dream-purple-dark text-white">
          <PlusCircle size={18} className="mr-2" /> Add New Log
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-xs text-slate-500">Total Logged Hours</p>
          <p className="text-2xl font-bold text-dream-purple">{totalLoggedHours.toFixed(1)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-xs text-slate-500">Total Approved Hours</p>
          <p className="text-2xl font-bold text-green-600">{totalApprovedHours.toFixed(1)}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-xl overflow-x-auto">
        <h3 className="text-lg font-semibold text-slate-700 mb-4">Your Logged Hours</h3>
        {loggedHours.length > 0 ? (
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Hours</th>
                <th className="p-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Activity / Description</th>
                <th className="p-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="p-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loggedHours.slice().sort((a,b) => new Date(b.date) - new Date(a.date)).map(log => (
                <motion.tr 
                    key={log.id} 
                    initial={{ opacity: 0}} 
                    animate={{ opacity: 1 }} 
                    className="hover:bg-slate-50"
                >
                  <td className="p-3 text-sm text-slate-700">{new Date(log.date).toLocaleDateString()}</td>
                  <td className="p-3 text-sm text-slate-700 text-center">{log.hours.toFixed(1)}</td>
                  <td className="p-3 text-sm text-slate-700">{log.activity}</td>
                  <td className="p-3 text-sm text-center">
                    {log.approved ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        <Check size={14} className="mr-1" /> Approved
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                        <AlertTriangle size={14} className="mr-1" /> Pending
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-sm text-center space-x-1">
                    {!log.approved && (
                      <>
                        <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100" onClick={() => handleEditLog(log)} title="Edit Log">
                          <Edit2 size={16}/>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-100" onClick={() => handleDeleteLog(log.id)} title="Delete Log">
                          <Trash2 size={16}/>
                        </Button>
                      </>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-slate-500 py-8">You haven't logged any hours yet. Click "Add New Log" to start!</p>
        )}
      </div>

      {/* Modal for Adding/Editing Log */}
      {isModalOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => { setIsModalOpen(false); setCurrentLog(null); }}
        >
          <motion.div 
            initial={{ scale: 0.9, y:20 }}
            animate={{ scale: 1, y:0 }}
            exit={{ scale: 0.9, y:20 }}
            className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-dream-purple mb-6">{currentLog ? 'Edit Hour Log' : 'Log New Volunteer Hours'}</h2>
            <form onSubmit={handleSubmitLog} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full p-2 border border-slate-300 rounded-md focus:ring-dream-purple focus:border-dream-purple" />
              </div>
              <div>
                <label htmlFor="hours" className="block text-sm font-medium text-slate-700 mb-1">Hours (e.g., 2.5)</label>
                <input type="number" id="hours" name="hours" value={formData.hours} onChange={handleInputChange} step="0.1" min="0.1" required className="w-full p-2 border border-slate-300 rounded-md focus:ring-dream-purple focus:border-dream-purple" />
              </div>
              <div>
                <label htmlFor="activity" className="block text-sm font-medium text-slate-700 mb-1">Activity / Description</label>
                <textarea id="activity" name="activity" value={formData.activity} onChange={handleInputChange} rows={3} required className="w-full p-2 border border-slate-300 rounded-md focus:ring-dream-purple focus:border-dream-purple" placeholder="Briefly describe your volunteer activity..."></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={() => { setIsModalOpen(false); setCurrentLog(null); }}>Cancel</Button>
                <Button type="submit" className="gradient-bg text-white">{currentLog ? 'Update Log' : 'Submit Log'}</Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VolunteerHoursLogPage;