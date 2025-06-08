'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Image as ImageIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery data - replace with real images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      alt: "Community health camp",
      category: "healthcare",
      title: "Community Health Camp",
      description: "Free health check-ups and consultations for rural communities"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80",
      alt: "Education program",
      category: "education",
      title: "Digital Literacy Workshop",
      description: "Teaching computer skills to local youth"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1593113598332-cd288d649433",
      alt: "Clean water project",
      category: "water",
      title: "Clean Water Initiative",
      description: "Installing water purification systems in remote villages"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      alt: "Volunteer training",
      category: "volunteers",
      title: "Volunteer Training Session",
      description: "Preparing our dedicated volunteers for community service"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
      alt: "Environmental program",
      category: "environment",
      title: "Tree Plantation Drive",
      description: "Community-wide environmental conservation effort"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1574267432553-4b4628081c31",
      alt: "Women empowerment",
      category: "empowerment",
      title: "Women's Skill Development",
      description: "Empowering women through vocational training"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
      alt: "Child development",
      category: "children",
      title: "Child Development Program",
      description: "Supporting children's education and well-being"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
      alt: "Community event",
      category: "events",
      title: "Annual Charity Gala",
      description: "Fundraising event for community development"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d",
      alt: "Rural development",
      category: "development",
      title: "Rural Infrastructure Project",
      description: "Building sustainable infrastructure in remote areas"
    }
  ];

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    let newIndex = currentImageIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <PageHeader
        title="Gallery"
        subtitle="Capturing moments of impact, hope, and community transformation. See our work in action through these powerful images."
        icon={Camera}
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Filter className="w-5 h-5 text-slate-600 dark:text-slate-400 mr-2" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Filter by category</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 text-sm capitalize transition-all duration-300 ${selectedCategory === category
                      ? 'gradient-bg text-white shadow-lg'
                      : 'border-purple-500 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20'
                    }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedImage.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded-full capitalize">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;