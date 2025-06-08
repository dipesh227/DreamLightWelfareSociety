import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, UserCheck, Users, Award } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const teamMembersData = [
  { name: "Dr. Aisha Khan", role: "Founder & CEO", imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", bio: "A visionary leader with 15+ years in social development, Dr. Khan founded Dreamlight with a passion to empower marginalized communities through sustainable initiatives. Her expertise lies in strategic planning and forging impactful partnerships.", socials: { linkedin: "#", twitter: "#", mail: "mailto:aisha.khan@dreamlight.org" }, expertise: ["Strategic Planning", "Partnership Building", "Social Entrepreneurship"] },
  { name: "Rohan Mehta", role: "Director of Programs", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", bio: "Rohan brings a decade of on-ground experience in program implementation and M&E. He ensures Dreamlight's projects are effective, efficient, and truly meet community needs.", socials: { linkedin: "#", mail: "mailto:rohan.mehta@dreamlight.org" }, expertise: ["Project Management", "Monitoring & Evaluation", "Community Engagement"] },
  { name: "Priya Singh", role: "Head of Community Outreach", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", bio: "Priya is the bridge between Dreamlight and the communities we serve. Her empathetic approach and strong communication skills help build trust and foster collaboration.", socials: { twitter: "#", mail: "mailto:priya.singh@dreamlight.org" }, expertise: ["Community Mobilization", "Advocacy", "Communication"] },
  { name: "Vikram Reddy", role: "Finance & Operations Manager", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", bio: "With a keen eye for detail, Vikram manages Dreamlight's financial health and operational efficiency, ensuring transparency and accountability in all our endeavors.", socials: { linkedin: "#", mail: "mailto:vikram.reddy@dreamlight.org" }, expertise: ["Financial Management", "Operations", "Compliance"] },
  { name: "Sunita Sharma", role: "Lead Volunteer Coordinator", imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", bio: "Sunita passionately manages our incredible team of volunteers, matching skills with needs and ensuring a fulfilling experience for everyone involved.", socials: { mail: "mailto:sunita.sharma@dreamlight.org" }, expertise: ["Volunteer Management", "Event Coordination", "Team Building"] },
  { name: "Amit Patel", role: "Technology & Innovation Lead", imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", bio: "Amit leverages technology to enhance our program delivery and reach. He's passionate about using digital tools for social good.", socials: { linkedin: "#", twitter: "#" }, expertise: ["Digital Transformation", "Data Analysis", "Tech for Good"] },
];

const TeamMemberCard = ({ name, role, imageUrl, bio, socials, expertise, index }) => (
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
          {socials.twitter && <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-dream-gold"><Twitter size={20}/></a>}
          {socials.mail && <a href={socials.mail} className="text-slate-200 hover:text-dream-gold"><Mail size={20}/></a>}
        </div>
      </div>
    </div>
    <div className="p-6 text-center flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-dream-purple-dark mb-1">{name}</h3>
      <p className="text-dream-purple font-medium text-sm mb-3">{role}</p>
      <p className="text-slate-600 text-xs leading-relaxed mb-4 flex-grow">{bio}</p>
      <div className="mt-auto pt-3 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Expertise</h4>
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
        title="Meet Our Passionate Team"
        subtitle="The driving force behind Dreamlight Welfare Society is our dedicated team of professionals, advisors, and volunteers, all united by a common goal: to make a lasting positive impact."
        icon={UserCheck}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />
      
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-3">Core Leadership</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Guiding our vision and strategy with expertise and dedication.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembersData.slice(0,3).map((member, index) => (
              <TeamMemberCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-dream-purple-light/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-3">Key Team Members</h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">Driving our programs and operations forward with passion.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembersData.slice(3).map((member, index) => (
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
            We are always looking for passionate individuals to join our cause as volunteers, interns, or team members. If you believe in our vision, we'd love to hear from you.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/contact#volunteer" 
              className="inline-block gradient-bg text-white font-semibold px-10 py-4 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Opportunities
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;