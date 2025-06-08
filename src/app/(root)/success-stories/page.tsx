"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, ArrowRight, Filter, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      className="bg-card rounded-2xl shadow-xl overflow-hidden flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
   >
      <div className="relative h-56 overflow-hidden">
         <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={story.title} src={story.imageSrc} />
         <div className="absolute top-3 right-3 bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] px-3 py-1 rounded-full text-xs font-semibold shadow-md">{story.category}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
         <h3 className="text-xl font-bold text-[hsl(var(--dream-purple-dark))] mb-2">{story.title}</h3>
         <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{story.excerpt}</p>
         <Button onClick={() => onReadMore(story)} size="sm" variant="link" className="text-[hsl(var(--dream-purple))] hover:text-[hsl(var(--dream-gold))] font-semibold self-start px-0 group/link">
            Read Full Story <ArrowRight size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
         </Button>
      </div>
   </motion.div>
);

const StoryModal = ({ story, onClose }: { story: Story; onClose: () => void }) => (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      onClick={onClose}
   >
      <motion.div
         initial={{ scale: 0.8, opacity: 0, y: 20 }}
         animate={{ scale: 1, opacity: 1, y: 0 }}
         exit={{ scale: 0.8, opacity: 0, y: 20 }}
         transition={{ type: "spring", stiffness: 300, damping: 25 }}
         className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
         onClick={(e) => e.stopPropagation()}
      >
         <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--dream-purple-dark))]">{story.title}</h2>
            <button onClick={onClose} className="text-muted-foreground hover:text-[hsl(var(--dream-purple))]">
               <XCircle size={28} />
            </button>
         </div>
         <img className="w-full h-64 object-cover rounded-lg mb-6" alt={story.title} src={story.imageSrc} />
         <p className="text-sm text-[hsl(var(--dream-gold))] font-semibold mb-1">{story.category}</p>
         <p className="text-foreground leading-relaxed mb-6 whitespace-pre-line">{story.fullStory}</p>

         <h4 className="text-md font-semibold text-[hsl(var(--dream-purple-dark))] mb-2">Key Impacts:</h4>
         <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
            {story.impact.map((item, index) => <li key={index}>{item}</li>)}
         </ul>

         <Link href={story.relatedProgram}>
            <Button variant="outline" className="border-[hsl(var(--dream-purple))] text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10 rounded-full">
               Learn about our {story.category} programs
            </Button>
         </Link>
      </motion.div>
   </motion.div>
);

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="relative bg-gradient-to-br from-[hsl(var(--dream-gold))] to-[hsl(var(--dream-gold-light))] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <Award className="h-16 w-16 md:h-20 md:w-20 mx-auto text-[hsl(var(--dream-purple-dark))] mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--dream-purple-dark))] mb-6">
               {title}
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(var(--dream-purple-dark))]/80 max-w-4xl mx-auto leading-relaxed">
               {subtitle}
            </p>
         </motion.div>
      </div>
   </div>
);

export default function SuccessStoriesPage() {
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedStory, setSelectedStory] = useState<Story | null>(null);

   const filteredStories = selectedCategory === "All"
      ? storiesData
      : storiesData.filter(story => story.category === selectedCategory);

   return (
      <div className="bg-background min-h-screen">
         <PageHeader
            title="Stories of Transformation"
            subtitle="Witness the real-life impact of your support. These stories highlight the resilience, hope, and positive change fostered by Dreamlight's initiatives."
         />

         <section className="py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="mb-10 md:mb-14 flex flex-wrap justify-center items-center gap-3">
                  <Filter className="h-5 w-5 text-[hsl(var(--dream-purple))] mr-1 hidden sm:inline" />
                  {categories.map(category => (
                     <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full px-5 py-2 text-xs sm:text-sm capitalize transition-all duration-300 shadow-sm hover:shadow-md
                  ${selectedCategory === category
                              ? 'bg-gradient-to-r from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] text-white'
                              : 'border-[hsl(var(--dream-purple))]/50 text-[hsl(var(--dream-purple))] hover:bg-[hsl(var(--dream-purple))]/10'}`}
                     >
                        {category}
                     </Button>
                  ))}
               </div>

               {filteredStories.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                     {filteredStories.map(story => (
                        <StoryCard key={story.id} story={story} onReadMore={setSelectedStory} />
                     ))}
                  </div>
               ) : (
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="text-center text-muted-foreground text-lg mt-12"
                  >
                     No stories found for "{selectedCategory}". Please select another category.
                  </motion.p>
               )}
            </div>
         </section>

         <section className="py-16 md:py-24 bg-[hsl(var(--dream-purple-dark))] text-white">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <Users className="h-16 w-16 mx-auto mb-6 text-[hsl(var(--dream-gold-light))]" />
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Story</h2>
               <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
                  Have you been impacted by Dreamlight's work? We'd love to hear from you. Your story can inspire others and highlight the importance of community support.
               </p>
               <Link href="/contact?subject=MyStory">
                  <Button size="lg" className="bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] hover:bg-[hsl(var(--dream-gold-light))] rounded-full px-10 py-3 text-base font-semibold">
                     Contact Us to Share
                  </Button>
               </Link>
            </div>
         </section>

         <AnimatePresence>
            {selectedStory && <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />}
         </AnimatePresence>
      </div>
   );
}
