'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, HandHeart, Search, Star, Clock, MapPin, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from '@/components/ui/use-toast';
import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';

interface VolunteerOpportunity {
   id: number;
   title: string;
   area: string;
   location: string;
   commitment: string;
   skills: string[];
   description: string;
}

interface FeaturedVolunteer {
   name: string;
   role: string;
   quote: string;
   imageUrl: string;
}

const volunteerOpportunities: VolunteerOpportunity[] = [
   {
      id: 1,
      title: "Classroom Assistant (Education Program)",
      area: "Education",
      location: "New Delhi Centers",
      commitment: "Min. 5 hrs/week",
      skills: ["Teaching", "Patience", "Communication"],
      description: "Assist teachers in classrooms, help students with learning activities, and contribute to a positive learning environment."
   },
   {
      id: 2,
      title: "Health Camp Volunteer (Medical Outreach)",
      area: "Healthcare",
      location: "Various Rural Areas",
      commitment: "Event-based (1-2 days)",
      skills: ["Medical background (preferred but not mandatory for general support)", "Organization", "Empathy"],
      description: "Support medical professionals during health camps, assist with patient registration, and help manage logistics."
   },
   {
      id: 3,
      title: "Content Creator (Digital Team)",
      area: "Communications",
      location: "Remote",
      commitment: "Flexible (project-based)",
      skills: ["Writing", "Graphic Design", "Video Editing"],
      description: "Create engaging content (articles, social media posts, videos) to showcase our impact and raise awareness."
   },
   {
      id: 4,
      title: "Event Support Volunteer (Fundraising Events)",
      area: "Events",
      location: "City Venues",
      commitment: "Event-based",
      skills: ["Customer Service", "Organization", "Enthusiasm"],
      description: "Help with setup, registration, guest management, and other tasks during our fundraising events."
   },
];

const featuredVolunteers: FeaturedVolunteer[] = [
   {
      name: "Priya Sharma",
      role: "Lead Classroom Volunteer",
      quote: "Volunteering with Dreamlight has been an incredibly rewarding experience. Seeing the children's progress makes every moment worthwhile.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
   },
   {
      name: "Rajesh Kumar",
      role: "Remote Content Writer",
      quote: "Even from afar, I feel connected to the mission. It's amazing to use my writing skills to support such a great cause.",
      imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60"
   },
];

interface OpportunityCardProps {
   opportunity: VolunteerOpportunity;
   onApply: (opportunity: VolunteerOpportunity) => void;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, onApply }) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[hsl(var(--dream-gold))] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
   >
      <h3 className="text-lg font-bold text-[hsl(var(--dream-purple-dark))] mb-2">{opportunity.title}</h3>
      <div className="text-xs text-muted-foreground mb-3 space-y-0.5">
         <p className="flex items-center"><Tag className="h-3 w-3 mr-1" /> <strong>Area:</strong> {opportunity.area}</p>
         <p className="flex items-center"><MapPin className="h-3 w-3 mr-1" /> <strong>Location:</strong> {opportunity.location}</p>
         <p className="flex items-center"><Clock className="h-3 w-3 mr-1" /> <strong>Commitment:</strong> {opportunity.commitment}</p>
      </div>
      <p className="text-sm text-foreground mb-4 flex-grow leading-relaxed">{opportunity.description}</p>
      <div className="mb-4">
         <strong className="text-xs text-muted-foreground">Skills Needed:</strong>
         <div className="flex flex-wrap gap-1 mt-1">
            {opportunity.skills.map((skill, index) => (
               <span key={index} className="bg-[hsl(var(--dream-purple-lighter))] text-[hsl(var(--dream-purple))] text-xs px-2 py-1 rounded-full">{skill}</span>
            ))}
         </div>
      </div>
      <Button
         onClick={() => onApply(opportunity)}
         className="mt-auto gradient-bg text-white hover:opacity-95 rounded-full transition-all duration-200"
      >
         Apply Now <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
   </motion.div>
);

interface TestimonialCardProps {
   volunteer: FeaturedVolunteer;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ volunteer }) => (
   <motion.div
      className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
   >
      <div className="flex items-center mb-4">
         <Image
            src={volunteer.imageUrl}
            alt={volunteer.name}
            width={60}
            height={60}
            className="w-15 h-15 rounded-full object-cover mr-4"
         />
         <div>
            <h4 className="font-semibold text-foreground">{volunteer.name}</h4>
            <p className="text-sm text-[hsl(var(--dream-purple))]">{volunteer.role}</p>
         </div>
      </div>
      <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
         &ldquo;{volunteer.quote}&rdquo;
      </blockquote>
      <div className="flex mt-3">
         {[1, 2, 3, 4, 5].map(star => (
            <Star key={star} className="h-4 w-4 text-[hsl(var(--dream-gold))] fill-current" />
         ))}
      </div>
   </motion.div>
);

const VolunteerPage: React.FC = () => {
   const handleApply = (opportunity: VolunteerOpportunity) => {
      toast({
         title: "Application Submitted!",
         description: `Thank you for your interest in the ${opportunity.title} role. We will contact you soon with next steps.`,
      });
   };

   return (
      <>
         <PageHeader
            title="Volunteer With Us"
            description="Join our community of dedicated volunteers and make a lasting impact in the lives of others."
            icon={HandHeart}
         />

         <motion.section
            className="py-12 md:py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
         >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                  {volunteerOpportunities.map((opportunity) => (
                     <OpportunityCard
                        key={opportunity.id}
                        opportunity={opportunity}
                        onApply={handleApply}
                     />
                  ))}
               </div>

               <div className="mt-20 mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                     What Our Volunteers Say
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2">
                     {featuredVolunteers.map((volunteer, index) => (
                        <TestimonialCard key={index} volunteer={volunteer} />
                     ))}
                  </div>
               </div>

               <div className="text-center">
                  <Link href="/volunteer-portal">
                     <Button
                        size="lg"
                        className="rounded-full bg-[hsl(var(--dream-purple))] text-white hover:bg-[hsl(var(--dream-purple))]"
                     >
                        <Users className="mr-2 h-5 w-5" />
                        Access Volunteer Portal
                     </Button>
                  </Link>
               </div>
            </div>
         </motion.section>
      </>
   );
};

export default VolunteerPage;
