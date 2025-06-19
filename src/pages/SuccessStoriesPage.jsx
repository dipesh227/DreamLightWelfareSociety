
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, BookOpen, Stethoscope, Droplets, Briefcase, Leaf, ArrowRight, Filter, ChevronLeft, ChevronRight, XCircle, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';

const storiesData = [
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

const StoryCard = ({ story, onReadMore }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
  >
    <div className="relative h-56 overflow-hidden">
      <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={story.title} src={story.imageSrc} />
      <div className="absolute top-3 right-3 bg-dream-gold text-dream-purple-dark px-3 py-1 rounded-full text-xs font-semibold shadow-md">{story.category}</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-dream-purple-dark mb-2">{story.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{story.excerpt}</p>
      <Button onClick={() => onReadMore(story)} size="sm" variant="link" className="text-dream-purple hover:text-dream-gold font-semibold self-start px-0 group/link">
        Read Full Story <ArrowRight size={16} className="ml-1.5 group-hover/link:translate-x-1 transition-transform" />
      </Button>
    </div>
  </motion.div>
);

const StoryModal = ({ story, onClose }) => (
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
      className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dream-purple-dark">{story.title}</h2>
        <button onClick={onClose} className="text-slate-500 hover:text-dream-purple">
          <XCircle size={28} />
        </button>
      </div>
      <img  class="w-full h-64 object-cover rounded-lg mb-6" alt={story.title} src={story.imageSrc} />
      <p className="text-sm text-dream-gold font-semibold mb-1">{story.category}</p>
      <p className="text-slate-700 leading-relaxed mb-6 whitespace-pre-line">{story.fullStory}</p>
      
      <h4 className="text-md font-semibold text-dream-purple-dark mb-2">Key Impacts:</h4>
      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 mb-6">
        {story.impact.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      
      <Link to={story.relatedProgram}>
        <Button variant="outline" className="border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full">
          Learn about our {story.category} programs
        </Button>
      </Link>
    </motion.div>
  </motion.div>
);

const SuccessStoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStory, setSelectedStory] = useState(null);

  const filteredStories = selectedCategory === "All"
    ? storiesData
    : storiesData.filter(story => story.category === selectedCategory);

  return (
    <div className="bg-slate-100 min-h-screen">
      <PageHeader
        title="Stories of Transformation"
        subtitle="Witness the real-life impact of your support. These stories highlight the resilience, hope, and positive change fostered by Dreamlight's initiatives."
        icon={Award}
        gradientFrom="from-dream-gold"
        gradientTo="to-dream-gold-light"
        iconColor="text-dream-purple-dark"
        bgPatternOpacity="opacity-20"
      />

      <section className="py-12 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-14 flex flex-wrap justify-center items-center gap-3">
            <Filter className="h-5 w-5 text-dream-purple mr-1 hidden sm:inline" />
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`rounded-full px-5 py-2 text-xs sm:text-sm capitalize transition-all duration-300 shadow-sm hover:shadow-md
                  ${selectedCategory === category 
                    ? 'gradient-bg text-white' 
                    : 'border-dream-purple/50 text-dream-purple hover:bg-dream-purple/10'}`}
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
              className="text-center text-slate-600 text-lg mt-12"
            >
              No stories found for "{selectedCategory}". Please select another category.
            </motion.p>
          )}
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-dream-purple-dark text-white">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-dream-gold-light"/>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Story</h2>
            <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
                Have you been impacted by Dreamlight's work? We'd love to hear from you. Your story can inspire others and highlight the importance of community support.
            </p>
            <Link to="/contact?subject=MyStory">
                <Button size="lg" className="bg-dream-gold text-dream-purple-dark hover:bg-dream-gold-light rounded-full px-10 py-3 text-base font-semibold">
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
};

export default SuccessStoriesPage;