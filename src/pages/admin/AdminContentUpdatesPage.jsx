import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Home, Info, Users, Briefcase, FileText, Save, Eye, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const contentSections = [
  { id: 'homepage_hero', label: 'Homepage - Hero Section', icon: Home, fields: [ {name: 'title', type: 'text', label: 'Main Title'}, {name: 'subtitle', type: 'textarea', label: 'Subtitle'}, {name: 'cta_button_text', type: 'text', label: 'CTA Button Text'} ] },
  { id: 'about_story', label: 'About Us - Our Story', icon: Info, fields: [ {name: 'heading', type: 'text', label: 'Section Heading'}, {name: 'paragraph1', type: 'textarea', label: 'First Paragraph'}, {name: 'paragraph2', type: 'textarea', label: 'Second Paragraph'} ] },
  { id: 'programs_overview', label: 'Programs - Overview', icon: Briefcase, fields: [ {name: 'intro_text', type: 'textarea', label: 'Introduction Text'} ] },
  { id: 'contact_info', label: 'Contact Page - Info', icon: FileText, fields: [ {name: 'address', type: 'text', label: 'Office Address'}, {name: 'phone', type: 'text', label: 'Phone Number'}, {name: 'email', type: 'email', label: 'Email Address'} ] },
];


const AdminContentUpdatesPage = () => {
  const [selectedSection, setSelectedSection] = useState(contentSections[0]);
  const [formData, setFormData] = useState({}); 
  const [isLoading, setIsLoading] = useState(false);

  // In a real app, you'd fetch initial data for the selected section
  // useEffect(() => {
  //   // Fetch data for selectedSection.id and setFormData
  // }, [selectedSection]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveContent = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    console.log("Saving content for:", selectedSection.id, formData);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Content Updated (Simulated)",
        description: `Content for "${selectedSection.label}" has been saved.`,
        className: "bg-dws-green text-white",
      });
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-4 gap-8"
    >
      <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Content Sections</h2>
        <nav className="space-y-2">
          {contentSections.map(section => (
            <Button
              key={section.id}
              variant={selectedSection.id === section.id ? "default" : "ghost"}
              className={`w-full justify-start text-sm ${selectedSection.id === section.id ? 'bg-dws-blue-dark text-white' : 'text-slate-600 hover:bg-dws-blue-light/20 hover:text-dws-blue-dark'}`}
              onClick={() => {
                setSelectedSection(section);
                setFormData({}); // Clear form for new section
              }}
            >
              <section.icon size={16} className="mr-2.5" />
              {section.label}
            </Button>
          ))}
        </nav>
      </aside>

      <main className="lg:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800 flex items-center">
              <Edit3 size={24} className="mr-3 text-dws-blue-dark" />
              Editing: {selectedSection.label}
            </h1>
            <p className="text-sm text-slate-500 mt-1">Modify the content fields below. Changes are simulated for this demo.</p>
          </div>
          <Button variant="outline" size="sm" className="text-dws-blue-dark border-dws-blue-dark hover:bg-dws-blue-dark/10">
            <Eye size={16} className="mr-1.5" /> Preview Changes
          </Button>
        </div>
        
        <form onSubmit={handleSaveContent} className="space-y-6">
          {selectedSection.fields.map(field => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea 
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark shadow-sm"
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                />
              ) : (
                <input 
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-dws-blue-dark focus:border-dws-blue-dark shadow-sm"
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                />
              )}
            </div>
          ))}

          <div className="flex items-center justify-end pt-6 border-t border-slate-200 space-x-4">
            <Button type="button" variant="outline" disabled={isLoading}>
              Discard Changes
            </Button>
            <Button type="submit" className="gradient-bg text-white min-w-[120px]" disabled={isLoading}>
              {isLoading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></motion.div>
              ) : (
                <><Save size={18} className="mr-2" /> Save Content</>
              )}
            </Button>
          </div>
        </form>
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-yellow-700 text-sm flex items-start">
          <AlertCircle size={20} className="mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <strong>Demo Note:</strong> All content changes made here are for demonstration purposes only and will not persist. In a real application, this data would be saved to a backend database (e.g., Supabase).
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default AdminContentUpdatesPage;