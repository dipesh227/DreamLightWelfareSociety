import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize, XCircle, ChevronLeft, ChevronRight, Image as ImageIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70", alt: "Children smiling in a classroom", category: "Education", title: "Joy of Learning" },
  { id: 2, src: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMGNhbXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70", alt: "Doctor checking a patient at a health camp", category: "Healthcare", title: "Community Health Drive" },
  { id: 3, src: "https://images.unsplash.com/photo-1519085360753-6a5897ba9f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYW4lMjB3YXRlciUyMHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70", alt: "Clean water flowing from a new tap", category: "Water & Sanitation", title: "Access to Clean Water" },
  { id: 4, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sdW50ZWVycyUyMGhlbHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70", alt: "Volunteers distributing supplies", category: "Community Support", title: "Volunteers in Action" },
  { id: 5, src: "https://images.unsplash.com/photo-1604580864964-0e03581370ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraWxsJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70", alt: "People learning a new skill in a workshop", category: "Livelihood", title: "Skill Development Workshop" },
  { id: 6, src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW52aXJvbm1lbnRhbCUyMGNsZWFudXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70", alt: "Group planting trees", category: "Environment", title: "Greener Tomorrow Initiative" },
  { id: 7, src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eSUyMGV2ZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=70", alt: "People at a charity event", category: "Events", title: "Annual Fundraising Gala" },
  { id: 8, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaXR5JTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70", alt: "Community meeting", category: "Community Support", title: "Town Hall Discussion" },
];

const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      nextIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    setSelectedImage(filteredItems[nextIndex]);
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <PageHeader
        title="Moments of Impact"
        subtitle="Explore our gallery to see the tangible results of your support and the smiles we help create. Each image tells a story of hope and transformation."
        icon={ImageIcon}
        iconColor="text-dream-purple-dark"
        gradientFrom="from-dream-gold"
        gradientTo="to-dream-gold-light"
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

          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  className="relative aspect-square rounded-xl overflow-hidden group shadow-lg cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.alt} src={item.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white text-sm font-semibold mb-1">{item.title}</h3>
                    <span className="text-dream-gold-light text-xs">{item.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/80 text-dream-purple p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                    <Maximize size={16} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredItems.length === 0 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-600 text-lg mt-12"
            >
              No images found for "{selectedCategory}". Try another category!
            </motion.p>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <img  class="w-full h-auto max-h-[85vh] object-contain" alt={selectedImage.alt} src={selectedImage.src} />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
                <p className="text-sm text-slate-300">{selectedImage.category}</p>
              </div>
              <button onClick={closeLightbox} className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors">
                <XCircle size={28} />
              </button>
              <button onClick={() => navigateLightbox('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors">
                <ChevronLeft size={32} />
              </button>
              <button onClick={() => navigateLightbox('next')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors">
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;