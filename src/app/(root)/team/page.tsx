'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Users, Award } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

interface TeamMember {
   name: string;
   role: string;
   imageUrl: string;
   bio: string;
   socials: {
      linkedin?: string;
      twitter?: string;
      mail?: string;
   };
   expertise: string[];
}

const teamMembersData: TeamMember[] = [
   {
      name: "Dr. Aisha Khan",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "A visionary leader with 15+ years in social development, Dr. Khan founded Dreamlight with a passion to empower marginalized communities through sustainable initiatives. Her expertise lies in strategic planning and forging impactful partnerships.",
      socials: {
         linkedin: "#",
         twitter: "#",
         mail: "mailto:aisha.khan@dreamlight.org"
      },
      expertise: ["Strategic Planning", "Partnership Building", "Social Entrepreneurship"]
   },
   {
      name: "Rohan Mehta",
      role: "Director of Programs",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "Rohan brings a decade of on-ground experience in program implementation and M&E. He ensures Dreamlight&apos;s projects are effective, efficient, and truly meet community needs.",
      socials: {
         linkedin: "#",
         mail: "mailto:rohan.mehta@dreamlight.org"
      },
      expertise: ["Project Management", "Monitoring & Evaluation", "Community Engagement"]
   },
   {
      name: "Priya Singh",
      role: "Head of Community Outreach",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "Priya is the bridge between Dreamlight and the communities we serve. Her empathetic approach and strong communication skills help build trust and foster collaboration.",
      socials: {
         twitter: "#",
         mail: "mailto:priya.singh@dreamlight.org"
      },
      expertise: ["Community Mobilization", "Advocacy", "Communication"]
   },
   {
      name: "Vikram Reddy",
      role: "Finance & Operations Manager",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "With a keen eye for detail, Vikram manages Dreamlight&apos;s financial health and operational efficiency, ensuring transparency and accountability in all our endeavors.",
      socials: {
         linkedin: "#",
         mail: "mailto:vikram.reddy@dreamlight.org"
      },
      expertise: ["Financial Management", "Operations", "Compliance"]
   },
   {
      name: "Sunita Sharma",
      role: "Lead Volunteer Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "Sunita passionately manages our incredible team of volunteers, matching skills with needs and ensuring a fulfilling experience for everyone involved.",
      socials: {
         mail: "mailto:sunita.sharma@dreamlight.org"
      },
      expertise: ["Volunteer Management", "Event Coordination", "Team Building"]
   },
   {
      name: "Amit Patel",
      role: "Technology & Innovation Lead",
      imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      bio: "Amit leverages technology to enhance our program delivery and reach. He&apos;s passionate about using digital tools for social good.",
      socials: {
         linkedin: "#",
         twitter: "#"
      },
      expertise: ["Digital Transformation", "Data Analysis", "Tech for Good"]
   }
];

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => (
   <motion.div
      className="bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col group card-hover"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
   >
      <div className="relative h-72">
         <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={member.name}
            src={member.imageUrl}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
            <div className="flex space-x-3 justify-center">
               {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-dream-gold transition-colors">
                     <Linkedin size={20} />
                  </a>
               )}
               {member.socials.twitter && (
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-dream-gold transition-colors">
                     <Twitter size={20} />
                  </a>
               )}
               {member.socials.mail && (
                  <a href={member.socials.mail} className="text-slate-200 hover:text-dream-gold transition-colors">
                     <Mail size={20} />
                  </a>
               )}
            </div>
         </div>
      </div>
      <div className="p-6 text-center flex-grow flex flex-col">
         <h3 className="text-2xl font-bold text-dream-purple-dark mb-1">{member.name}</h3>
         <p className="text-dream-purple font-medium text-sm mb-3">{member.role}</p>
         <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow">{member.bio}</p>
         <div className="mt-auto pt-3 border-t border-border">
            <h4 className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Expertise</h4>
            <div className="flex flex-wrap justify-center gap-1.5">
               {member.expertise.map(skill => (
                  <span key={skill} className="bg-dream-purple-light/10 text-dream-purple text-[10px] px-2 py-0.5 rounded-full border border-dream-purple-light/20">
                     {skill}
                  </span>
               ))}
            </div>
         </div>
      </div>
   </motion.div>
);

const TeamPage: React.FC = () => {
   return (
      <div className="bg-background min-h-screen">
         <PageHeader
            title="Meet Our Dedicated Team"
            subtitle="Behind every successful initiative is a passionate team of individuals committed to creating positive change. Meet the dedicated professionals who drive Dreamlight&apos;s mission forward."
            icon={Users}
            gradientFrom="from-dream-purple"
            gradientTo="to-dream-purple-dark"
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-4">
                     Our Leadership & Core Team
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                     A diverse group of professionals united by our shared commitment to empowering communities
                     and creating sustainable social impact.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {teamMembersData.map((member, index) => (
                     <TeamMemberCard key={member.name} member={member} index={index} />
                  ))}
               </div>

               <motion.div
                  className="bg-card p-8 md:p-12 rounded-2xl shadow-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
               >
                  <Award className="h-12 w-12 mx-auto mb-6 text-dream-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold text-dream-purple-dark mb-4">
                     Join Our Growing Team
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                     Are you passionate about social change and looking for a meaningful career?
                     We&apos;re always seeking dedicated individuals to join our mission.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a
                        href="/careers"
                        className="btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center"
                     >
                        View Open Positions
                     </a>
                     <a
                        href="/contact"
                        className="btn-outline px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center"
                     >
                        Contact Us
                     </a>
                  </div>
               </motion.div>
            </div>
         </section>
      </div>
   );
};

export default TeamPage;
