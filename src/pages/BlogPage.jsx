
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rss, CalendarDays, User, Tag, Search, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const samplePosts = [
  { id: 1, title: "The Ripple Effect of Girls' Education in Rural Communities", date: "2025-05-28", author: "Dr. Aisha Khan", category: "Education", excerpt: "Discover how educating girls transforms not just individual lives but entire communities, breaking cycles of poverty and fostering development...", imageSrc: "https://images.unsplash.com/photo-1541829070764-81954faccfb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70" },
  { id: 2, title: "Innovations in Community Healthcare: Our Mobile Clinic Success", date: "2025-05-15", author: "Rohan Mehta", category: "Healthcare", excerpt: "Learn about the challenges and triumphs of bringing essential healthcare services to remote areas through our innovative mobile clinic program...", imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=70" },
  { id: 3, title: "Why Clean Water is More Than Just a Resource: A Community Perspective", date: "2025-04-30", author: "Priya Singh", category: "Water & Sanitation", excerpt: "Explore the profound impact of access to clean water on health, education, and economic empowerment from the voices of those we serve...", imageSrc: "https://images.unsplash.com/photo-1500304477595-3e0909380608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xlYW4lMjB3YXRlciUyMGluJTIwYWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=70" },
  { id: 4, title: "Empowering Artisans: Sustainable Livelihoods Through Traditional Crafts", date: "2025-04-10", author: "Vikram Reddy", category: "Livelihood", excerpt: "A look into how our livelihood programs are preserving traditional crafts while creating sustainable income opportunities for rural artisans...", imageSrc: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXNhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=70" },
];

const categories = ["All", ...new Set(samplePosts.map(post => post.category))];

const BlogPostCard = ({ post, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group card-hover"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <Link to={`/blog/${post.id}`} className="block">
      <div className="relative h-56">
        <img  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={post.title} src={post.imageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute top-3 right-3 bg-dream-gold text-dream-purple-dark px-2.5 py-1 rounded-full text-xs font-semibold shadow-md">{post.category}</span>
      </div>
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <Link to={`/blog/${post.id}`} className="block">
        <h3 className="text-xl font-bold text-dream-purple-dark mb-2 group-hover:text-dream-purple transition-colors">{post.title}</h3>
      </Link>
      <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
        <span className="flex items-center"><CalendarDays size={14} className="mr-1"/> {post.date}</span>
        <span className="flex items-center"><User size={14} className="mr-1"/> {post.author}</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="mt-auto self-start">
        <Button variant="link" className="text-dream-purple px-0 hover:text-dream-gold">
          Read More <ArrowRight size={16} className="ml-1.5" />
        </Button>
      </Link>
    </div>
  </motion.div>
);

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = samplePosts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || post.category === selectedCategory)
  );

  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Dreamlight Insights & Updates"
        subtitle="Explore our latest articles, stories from the field, and updates on our work. Discover the impact we're making together."
        icon={Rss}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3.5 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <Button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-4 py-1.5 text-xs capitalize transition-all duration-300
                    ${selectedCategory === cat 
                      ? 'gradient-bg text-white shadow-md' 
                      : 'border-dream-purple/50 text-dream-purple hover:bg-dream-purple/10'}`}
                >
                  <Tag size={12} className="mr-1.5 opacity-70"/>{cat}
                </Button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-600 text-lg py-12"
            >
              No articles found matching your criteria. Try adjusting your search or filters.
            </motion.p>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-dream-gold text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Rss className="h-16 w-16 mx-auto text-dream-purple-dark mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-dream-purple-dark mb-6">Subscribe for Updates</h2>
          <p className="text-dream-purple/90 text-lg leading-relaxed mb-8">
            Don't miss out on our latest news, success stories, and event announcements. Subscribe to the Dreamlight newsletter.
          </p>
          <Link to="/#footer-newsletter"> {/* Assuming newsletter is in footer */}
            <Button size="lg" className="bg-dream-purple text-white hover:bg-dream-purple-dark rounded-full px-10 py-3.5 text-base font-semibold">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
