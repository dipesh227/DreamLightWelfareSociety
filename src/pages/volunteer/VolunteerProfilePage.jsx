import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, Heart, Save, Edit2, Upload, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const VolunteerProfilePage = () => {
  // Sample data - in a real app, this would come from an API or localStorage
  const [profileData, setProfileData] = useState({
    name: 'Aisha Volunteer',
    email: 'aisha.volunteer@example.com',
    phone: '9876512345',
    address: '123 Dream Lane, Hope City, India',
    areaOfInterest: 'Education, Child Welfare',
    skills: 'Teaching, Event Coordination, Basic First Aid',
    availability: 'Weekends, Weekday evenings',
    emergencyContactName: 'Rohan Volunteer',
    emergencyContactPhone: '9876554321',
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60' 
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({...prev, profilePicture: reader.result}));
        toast({ title: "Profile Picture Updated (Simulated)", description: "Your new picture is previewed. Save changes to apply." });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Simulate API call
    console.log("Saving profile data:", profileData);
    toast({
      title: "Profile Updated (Simulated)",
      description: "Your profile information has been successfully updated.",
      className: "bg-dws-green text-white",
    });
  };

  const ProfileField = ({ icon: Icon, label, value, name, editing, onChange, type = "text" }) => (
    <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-slate-500 flex items-center">
        <Icon size={16} className="mr-2 text-dws-blue-dark" /> {label}
      </dt>
      <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
        {editing ? (
          type === "textarea" ? (
            <textarea 
              name={name} 
              value={value} 
              onChange={onChange} 
              rows={3}
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-dws-blue-dark focus:border-dws-blue-dark" 
            />
          ) : (
            <input 
              type={type} 
              name={name} 
              value={value} 
              onChange={onChange} 
              className="w-full p-2 border border-slate-300 rounded-md focus:ring-dws-blue-dark focus:border-dws-blue-dark" 
            />
          )
        ) : (
          value || <span className="text-slate-400">Not specified</span>
        )}
      </dd>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-xl"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-4 border-b border-slate-200">
        <h1 className="text-2xl font-semibold text-slate-800 flex items-center mb-3 sm:mb-0">
          <User size={26} className="mr-3 text-dws-blue-dark" /> My Volunteer Profile
        </h1>
        <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "destructive" : "outline"} className="border-dws-blue-dark text-dws-blue-dark hover:bg-dws-blue-dark/10">
          {isEditing ? 'Cancel Editing' : <><Edit2 size={16} className="mr-2" /> Edit Profile</>}
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center">
            <motion.img
              key={profileData.profilePicture} // Re-trigger animation on change
              src={profileData.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-lg mb-4 border-4 border-dws-gold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            {isEditing && (
              <div className="relative">
                <Button type="button" variant="outline" size="sm" className="text-xs">
                  <Upload size={14} className="mr-1.5" /> Change Photo
                </Button>
                <input type="file" accept="image/*" onChange={handleProfileImageUpload} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
              </div>
            )}
            <p className="text-center text-xs text-slate-500 mt-2">Joined: Jan 15, 2024 (Sample)</p>
          </div>

          <div className="md:col-span-2">
            <dl className="divide-y divide-slate-200">
              <ProfileField icon={User} label="Full Name" value={profileData.name} name="name" editing={isEditing} onChange={handleInputChange} />
              <ProfileField icon={Mail} label="Email Address" value={profileData.email} name="email" type="email" editing={isEditing} onChange={handleInputChange} />
              <ProfileField icon={Phone} label="Phone Number" value={profileData.phone} name="phone" editing={isEditing} onChange={handleInputChange} />
              <ProfileField icon={MapPin} label="Address" value={profileData.address} name="address" editing={isEditing} onChange={handleInputChange} type="textarea"/>
              <ProfileField icon={Heart} label="Areas of Interest" value={profileData.areaOfInterest} name="areaOfInterest" editing={isEditing} onChange={handleInputChange} />
              <ProfileField icon={Briefcase} label="Skills" value={profileData.skills} name="skills" editing={isEditing} onChange={handleInputChange} type="textarea"/>
              <ProfileField icon={Calendar} label="Availability" value={profileData.availability} name="availability" editing={isEditing} onChange={handleInputChange}/>
              <h3 className="text-md font-semibold text-dws-blue-dark pt-6 pb-2">Emergency Contact</h3>
              <ProfileField icon={User} label="Contact Name" value={profileData.emergencyContactName} name="emergencyContactName" editing={isEditing} onChange={handleInputChange} />
              <ProfileField icon={Phone} label="Contact Phone" value={profileData.emergencyContactPhone} name="emergencyContactPhone" editing={isEditing} onChange={handleInputChange} />
            </dl>
          </div>
        </div>

        {isEditing && (
          <div className="mt-10 pt-6 border-t border-slate-200 flex justify-end">
            <Button type="submit" className="gradient-bg text-white">
              <Save size={18} className="mr-2" /> Save Changes
            </Button>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default VolunteerProfilePage;