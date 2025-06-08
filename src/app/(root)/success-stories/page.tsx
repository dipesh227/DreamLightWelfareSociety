"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Stethoscope, Droplets, Briefcase, ArrowRight, Filter, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface Story {
   id: number;
   title: string;
   category: string;
   imageSrc: string;
   excerpt: string;
   fullStory: string;
   impact: string[];
   relatedProgram: string;
}

const storiesData: Story[] = [
   {
      id: 1,
      title: "Rani's Journey to Education",
      category: "Education",
      imageSrc: "https://images.unsplash.com/photo-1503944583220-79d8c830d13d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBzdHVkeWluZyUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=70",
      excerpt: "Rani, a young girl from a remote village, dreamed of becoming a teacher. With Dreamlight's support, she not only completed her schooling but is now inspiring others.",
      fullStory: "Rani grew up in a village where girls' education was often overlooked. Her parents, daily wage earners, struggled to make ends meet. Dreamlight's 'Education for All' initiative identified Rani's potential and provided her with a scholarship, school supplies, and mentorship. She excelled in her studies, overcoming numerous challenges. Today, Rani is pursuing her higher education and volunteers as a tutor for younger children in her community, embodying the change she wishes to see.",
      impact: ["Scholarship provided", "Mentorship program", "Community role model"],
      relatedProgram: "/programs#education"
   },
   {
      id: 2,
      title: "Clean Water Transforms a Community",
      category: "Water & Sanitation",
      imageSrc: "https://images.unsplash.com/photo-1570604216199-50395a139d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xlYW4lMjB3YXRlciUyMGluZGlhJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
      excerpt: "The village of Adarsh Nagar faced severe water scarcity and health issues due to contaminated water. Dreamlight's intervention brought clean, accessible water, revitalizing the entire community.",
      fullStory: "For years, the residents of Adarsh Nagar, particularly women and children, spent hours fetching water from distant, often unsafe sources. Waterborne diseases were rampant. Dreamlight, in collaboration with local leaders, installed a solar-powered water filtration plant and constructed community taps. We also conducted hygiene awareness workshops. The results were transformative: improved health, reduced drudgery for women, and more time for children to attend school.",
      impact: ["Access to safe drinking water for 500+ families", "Reduced waterborne diseases by 70%", "Hygiene awareness workshops conducted"],
      relatedProgram: "/programs#water"
   },
   {
      id: 3,
      title: "Empowering Women through Skill Development",
      category: "Livelihood",
      imageSrc: "https://images.unsplash.com/photo-1599280337006-faf2c26775a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBzZXdpbmclMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70",
      excerpt: "A group of women in a semi-urban slum found new hope and financial independence through Dreamlight's tailoring and entrepreneurship program.",
      fullStory: "In a bustling slum, many women possessed skills but lacked opportunities. Dreamlight initiated a skill development center offering training in tailoring, embroidery, and basic business management. We provided sewing machines and initial raw materials. The women formed a cooperative, producing garments and handicrafts. They now earn a sustainable income, contribute to their families' well-being, and have gained significant confidence and social standing.",
      impact: ["Vocational training for 50+ women", "Formation of a women's cooperative", "Increased household income"],
      relatedProgram: "/programs#livelihood"
   },
];

const categories = ["All", ...new Set(storiesData.map(story => story.category))];

const StoryCard = ({ story, onReadMore }: { story: Story; onReadMore: (story: Story) => void }) => (
   <motion.div
      className="bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
   >
      <div className="relative h-56 overflow-hidden">
         <Image
            src={story.imageSrc}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
         <span className="inline-block text-xs font-semibold text-[hsl(var(--dream-gold))] bg-[hsl(var(--dream-gold))]/10 px-2.5 py-1 rounded-full mb-3 self-start">
            {story.category}
         </span>
         <h3 className="text-xl font-bold text-[hsl(var(--dream-purple-dark))] mb-3">{story.title}</h3>
         <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{story.excerpt}</p>
         <Button
            onClick={() => onReadMore(story)}
            variant="outline"
            className="w-full border-[hsl(var(--dream-purple))] text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10 group/btn"
         >
            Read Full Story
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
         </Button>
      </div>
   </motion.div>
);

const StoryModal = ({ story, isOpen, onClose }: { story: Story | null; isOpen: boolean; onClose: () => void }) => {
   if (!isOpen || !story) return null;

   return (
      <motion.div
         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         onClick={onClose}
      >
         <motion.div
            className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
         >
            <div className="relative h-64 md:h-80">
               <Image
                  src={story.imageSrc}
                  alt={story.title}
                  fill
                  className="object-cover"
               />
               <Button
                  onClick={onClose}
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
               >
                  <XCircle className="h-4 w-4" />
               </Button>
            </div>
            <div className="p-6 md:p-8">
               <span className="inline-block text-xs font-semibold text-[hsl(var(--dream-gold))] bg-[hsl(var(--dream-gold))]/10 px-2.5 py-1 rounded-full mb-4">
                  {story.category}
               </span>
               <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">{story.title}</h2>
               <p className="text-muted-foreground leading-relaxed mb-6">{story.fullStory}</p>

               <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Impact Achieved:</h3>
                  <ul className="space-y-2">
                     {story.impact.map((item, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                           <div className="w-2 h-2 bg-[hsl(var(--dream-gold))] rounded-full mr-3"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               <Link href={story.relatedProgram}>
                  <Button className="gradient-bg text-white">
                     Learn About Related Programs
                  </Button>
               </Link>
            </div>
         </motion.div>
      </motion.div>
   );
};

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="relative bg-gradient-to-br from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <Award className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
               {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
               {subtitle}
            </p>
         </motion.div>
      </div>
   </div>
);

export default function SuccessStoriesPage() {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedStory, setSelectedStory] = useState<Story | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const filteredStories = selectedCategory === "All"
      ? storiesData
      : storiesData.filter(story => story.category === selectedCategory);

   const handleReadMore = (story: Story) => {
      setSelectedStory(story);
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedStory(null);
   };

   return (
      <div className="bg-background">
         <PageHeader
            title="Stories of Change"
            subtitle="Real people, real impact. Discover how Dreamlight Welfare Society's programs have transformed lives and communities across India."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">
                     Celebrating Impact Through Stories
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                     Each story represents lives touched, communities uplifted, and dreams realized through collective effort and compassion.
                  </p>
               </div>

               <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {categories.map((category) => (
                     <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className={`rounded-full px-6 py-2 transition-all duration-200 ${selectedCategory === category
                              ? "gradient-bg text-white"
                              : "border-[hsl(var(--dream-purple))] text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10"
                           }`}
                     >
                        <Filter className="h-4 w-4 mr-2" />
                        {category}
                     </Button>
                  ))}
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredStories.map((story) => (
                     <StoryCard key={story.id} story={story} onReadMore={handleReadMore} />
                  ))}
               </div>

               {filteredStories.length === 0 && (
                  <div className="text-center py-12">
                     <p className="text-muted-foreground">No stories found for the selected category.</p>
                  </div>
               )}
            </div>
         </section>

         <section className="py-16 md:py-24 bg-[hsl(var(--dream-purple-light))]/10">
            <div className="max-w-3xl mx-auto px-4 text-center">
               <BookOpen className="h-16 w-16 mx-auto text-[hsl(var(--dream-gold))] mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">
                  Be Part of the Next Story
               </h2>
               <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Your support can help us create more success stories. Join us in our mission to transform lives and build stronger communities.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/donate">
                     <Button size="lg" className="gradient-bg text-white px-8 py-3">
                        Support Our Programs
                     </Button>
                  </Link>
                  <Link href="/volunteer">
                     <Button size="lg" variant="outline" className="border-[hsl(var(--dream-purple))] text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10 px-8 py-3">
                        Volunteer With Us
                     </Button>
                  </Link>
               </div>
            </div>
         </section>

         <StoryModal story={selectedStory} isOpen={isModalOpen} onClose={closeModal} />
      </div>
   );
}