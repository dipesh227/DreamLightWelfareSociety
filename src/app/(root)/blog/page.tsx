"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BlogPost {
   id: number;
   title: string;
   excerpt: string;
   author: string;
   date: string;
   category: string;
   imageUrl: string;
   slug: string;
}

const blogPosts: BlogPost[] = [
   {
      id: 1,
      title: "The Power of Education: How Small Steps Lead to Big Changes",
      excerpt: "Education is the cornerstone of progress. In this post, we explore how Dreamlight's education initiatives are transforming lives one child at a time.",
      author: "Dr. Aisha Khan",
      date: "2025-06-01",
      category: "Education",
      imageUrl: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "power-of-education-small-steps-big-changes"
   },
   {
      id: 2,
      title: "Community Health: Building Resilient Healthcare Systems",
      excerpt: "Discover how our community health programs are creating sustainable healthcare solutions in rural and underserved areas.",
      author: "Dr. Rajesh Patel",
      date: "2025-05-28",
      category: "Healthcare",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "community-health-building-resilient-systems"
   },
   {
      id: 3,
      title: "Environmental Conservation: Our Green Initiatives Making a Difference",
      excerpt: "Learn about our environmental programs and how they're contributing to a more sustainable future for our communities.",
      author: "Priya Sharma",
      date: "2025-05-25",
      category: "Environment",
      imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "environmental-conservation-green-initiatives"
   }
];

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => (
   <motion.article
      className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
   >
      <div className="relative h-48 overflow-hidden">
         <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
         />
         <div className="absolute top-4 left-4">
            <span className="bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] px-3 py-1 rounded-full text-xs font-semibold">
               {post.category}
            </span>
         </div>
      </div>
      <div className="p-6">
         <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
            <span className="flex items-center">
               <Calendar size={14} className="mr-1" />
               {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
               })}
            </span>
            <span className="flex items-center">
               <User size={14} className="mr-1" />
               {post.author}
            </span>
         </div>
         <h2 className="text-xl font-bold text-[hsl(var(--dream-purple-dark))] mb-3 line-clamp-2">
            {post.title}
         </h2>
         <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
         </p>
         <Link href={`/blog/${post.slug}`}>
            <Button variant="link" className="text-[hsl(var(--dream-purple))] hover:text-[hsl(var(--dream-gold))] font-semibold p-0 group">
               Read More
               <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
         </Link>
      </div>
   </motion.article>
);

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="relative bg-gradient-to-br from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <BookOpen className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white mb-6" />
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

export default function BlogPage() {
   return (
      <div className="bg-background">
         <PageHeader
            title="Our Blog"
            subtitle="Stories, insights, and updates from the field. Discover the impact of our work and the communities we serve."
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                     <BlogCard key={post.id} post={post} index={index} />
                  ))}
               </div>

               {/* Coming Soon Message */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-16 text-center bg-card p-8 rounded-2xl shadow-lg"
               >
                  <BookOpen className="h-12 w-12 mx-auto text-[hsl(var(--dream-gold))] mb-4" />
                  <h3 className="text-2xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">
                     More Stories Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                     We're working on bringing you more inspiring stories, insights, and updates from our work in the field.
                     Stay tuned for regular updates about our programs and the communities we serve.
                  </p>
                  <Link href="/contact?subject=BlogUpdates">
                     <Button className="bg-gradient-to-r from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] text-white px-8 py-3 rounded-full">
                        Get Notified of New Posts
                     </Button>
                  </Link>
               </motion.div>
            </div>
         </section>
      </div>
   );
}
