import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, UserCheck, Users, Phone } from 'lucide-react';
import PageHeader from '@/components/common/layout/PageHeader';

const teamMembersData = [
  { 
    name: "Sapna", 
    fatherHusbandName: "W/O Kailash Singh",
    role: "Adhyaksh (President)", 
    address: "Chandra Vatika, Khatima, Udham Singh Nagar, Uttarakhand - 262308",
    mobile: "8193991284",
    occupation: "Social Worker",
    dob: "27-JAN-1992",
    membership: "General",
    ao_pio: "AO",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:sapna.dreamlight@example.com" }, 
    expertise: ["Leadership", "Community Development", "Advocacy"] 
  },
  { 
    name: "Kailash Singh", 
    fatherHusbandName: "S/O Dev Bahadur Singh",
    role: "Upadhyaksh (Vice President)", 
    address: "Chandra Vatika, Ward No 1, Khatima, Udham Singh Nagar, Uttarakhand - 262308",
    mobile: "7037180518",
    occupation: "Service",
    dob: "01-JUL-1982",
    membership: "General",
    ao_pio: "",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:kailash.dreamlight@example.com" }, 
    expertise: ["Program Support", "Operations", "Logistics"] 
  },
  { 
    name: "Dipesh Joshi", 
    fatherHusbandName: "S/O Basant Ballabh Joshi",
    role: "Sachiv (Secretary)", 
    address: "Ward No 14, Unmu Khan, Udham Singh Nagar, Uttarakhand - 262308",
    mobile: "8630484930",
    occupation: "Service",
    dob: "15-APR-2001",
    membership: "General",
    ao_pio: "PO",
    imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:dipesh.dreamlight@example.com" }, 
    expertise: ["Documentation", "Communications", "Coordination"] 
  },
  { 
    name: "Poonam Devi", 
    fatherHusbandName: "W/O Ganesh Singh",
    role: "Koshadhyaksh (Treasurer)", 
    address: "Ward No 11, Chandra Vatika, PO Khatima, Dist. Udham Singh Nagar, Uttarakhand - 262308",
    mobile: "7456924640",
    occupation: "House Wife",
    dob: "28-OCT-1994",
    membership: "General",
    ao_pio: "",
    imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:poonam.dreamlight@example.com" }, 
    expertise: ["Financial Oversight", "Record Keeping", "Budgeting"] 
  },
  { 
    name: "Shalinee Rana", 
    fatherHusbandName: "D/O Prakash Singh Rana",
    role: "Sadasya (Member)", 
    address: "Ward No 13, Unmu Khan, Udham Singh Nagar, Khatima, Uttarakhand - 262308",
    mobile: "9105408629",
    occupation: "Student",
    dob: "25-MAY-1997",
    membership: "General",
    ao_pio: "",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:shalinee.dreamlight@example.com" }, 
    expertise: ["Youth Engagement", "Event Support", "Social Media"] 
  },
  { 
    name: "Suraj Kumar", 
    fatherHusbandName: "S/O Raju",
    role: "Sadasya (Member)", 
    address: "Cautia, Khatima, Ward No 1, Khatima, Udham Singh Nagar, Uttarakhand - 262308",
    mobile: "9179063946",
    occupation: "Service",
    dob: "23-JUN-1993",
    membership: "General",
    ao_pio: "",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:suraj.dreamlight@example.com" }, 
    expertise: ["Field Work", "Logistics Support", "Community Liaison"] 
  },
   { 
    name: "Parwati Devi", 
    fatherHusbandName: "D/O Ramesh Ram",
    role: "Sadasya (Member)", 
    address: "Village Ambad, Post Tanakpur, Tanakpur, Champawat, Uttarakhand",
    mobile: "8958491788",
    occupation: "Student",
    dob: "03-OCT-2002",
    membership: "General",
    ao_pio: "",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    socials: { mail: "mailto:parwati.dreamlight@example.com" }, 
    expertise: ["Community Outreach", "Volunteer Coordination Assistant", "Event Assistance"] 
  },
];

const TeamMemberCard = ({ name, role, fatherHusbandName, address, mobile, occupation, imageUrl, socials, expertise, index }) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
  >
    <div className="relative h-72">
      <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={name} src={imageUrl} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <div className="flex space-x-3 justify-center">
          {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-dream-gold"><Linkedin size={20}/></a>}
          {socials.mail && <a href={socials.mail} className="text-slate-200 hover:text-dream-gold"><Mail size={20}/></a>}
          {mobile && <a href={`tel:${mobile}`} className="text-slate-200 hover:text-dream-gold"><Phone size={20}/></a>}
        </div>
      </div>
    </div>
    <div className="p-6 text-center flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-dream-purple-dark mb-1">{name}</h3>
      <p className="text-dream-purple font-medium text-sm mb-1">{role}</p>
      <p className="text-slate-500 text-xs mb-1">{fatherHusbandName}</p>
      <p className="text-slate-500 text-xs mb-3">{occupation}</p>
      <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">{address}</p>
      <div className="mt-auto pt-3 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Key Responsibilities</h4>
        <div className="flex flex-wrap justify-center gap-1.5">
          {expertise.map(skill => (
            <span key={skill} className="bg-dream-purple-light/10 text-dream-purple text-[10px] px-2 py-0.5 rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Meet Our Dedicated Team"
        subtitle="The founding members of Dreamlight Welfare Society, united by a common goal: to make a lasting positive impact in Uttarakhand."
        icon={UserCheck}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-3">Founding Office Bearers & Members</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Guiding our vision and strategy with expertise and dedication.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembersData.map((member, index) => (
              <TeamMemberCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Users className="h-12 w-12 md:h-16 md:w-16 mx-auto text-dream-gold mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Join Our Mission</h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            We are always looking for passionate individuals to join our cause as volunteers or supporters. If you believe in our vision for Uttarakhand, we'd love to hear from you.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact#volunteer" 
              className="inline-block gradient-bg text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;