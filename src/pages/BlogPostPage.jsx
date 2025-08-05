
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader'; // Assuming you might want a generic header
import { Button } from '@/components/ui/button';

// Sample data - in a real app, this would come from an API or state management
const samplePosts = [
  { id: 1, title: "The Ripple Effect of Girls' Education in Rural Communities", date: "2025-05-28", author: "Dr. Aisha Khan", category: "Education", imageSrc: "https://images.unsplash.com/photo-1541829070764-81954faccfb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=80", content: "<p>The education of girls is not merely a matter of social justice; it is a powerful catalyst for societal transformation, particularly in rural communities. When girls are educated, the ripple effects extend far beyond the individual, influencing families, economies, and the overall well-being of society.</p><p>In many rural areas, girls face significant barriers to education, including poverty, cultural norms, early marriage, and lack of accessible schools. Dreamlight Welfare Society's 'Education for All' initiative directly tackles these challenges by providing scholarships, school supplies, safe learning environments, and community awareness programs.</p><h3 class='text-xl font-semibold my-4 text-dream-purple-dark'>Breaking Cycles of Poverty</h3><p>Educated girls are more likely to marry later, have fewer and healthier children, and earn higher incomes. This economic empowerment allows them to invest back into their families and communities, breaking intergenerational cycles of poverty. They become role models, inspiring other girls and challenging restrictive social norms.</p><h3 class='text-xl font-semibold my-4 text-dream-purple-dark'>Improving Health Outcomes</h3><p>An educated mother is better equipped to make informed decisions about her children's health, nutrition, and hygiene. This leads to lower child mortality rates, improved maternal health, and a greater likelihood of children receiving vaccinations and proper medical care.</p><h3 class='text-xl font-semibold my-4 text-dream-purple-dark'>Fostering Community Development</h3><p>Educated women are more likely to participate in community decision-making processes and advocate for positive change. They contribute to more stable and resilient communities. Our programs often see increased female leadership in local governance after educational interventions.</p><p>Investing in girls' education is one of the most effective ways to achieve sustainable development. At Dreamlight, we witness these transformative effects daily. Join us in empowering more girls to reach their full potential and reshape their communities for a brighter future.</p>" },
  { id: 2, title: "Innovations in Community Healthcare: Our Mobile Clinic Success", date: "2025-05-15", author: "Rohan Mehta", category: "Healthcare", imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoY2FyZSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80", content: "<p>Content for healthcare blog post...</p>" },
  // Add other posts similarly
];

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = samplePosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-dream-purple-dark">Post not found</h1>
        <p className="text-slate-600 mt-2">The blog post you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="mt-6 inline-block">
          <Button className="gradient-bg text-white">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="bg-slate-50">
      <PageHeader
        title={post.category}
        subtitle="Insights from Dreamlight Welfare Society"
        icon={Tag} 
        gradientFrom="from-dream-purple-light"
        gradientTo="to-dream-purple"
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" className="inline-flex items-center text-sm text-dream-purple hover:text-dream-gold mb-6 group">
            <ArrowLeft size={18} className="mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dream-purple-dark mb-4 leading-tight">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-8 gap-x-4 gap-y-2">
            <span className="flex items-center"><CalendarDays size={16} className="mr-1.5 text-dream-purple"/> {post.date}</span>
            <span className="flex items-center"><User size={16} className="mr-1.5 text-dream-purple"/> By {post.author}</span>
            <span className="flex items-center"><Tag size={16} className="mr-1.5 text-dream-purple"/> {post.category}</span>
          </div>

          <img  class="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-10" alt={post.title} src={post.imageSrc} />

          <div 
            className="prose prose-lg max-w-none text-slate-700 leading-relaxed prose-headings:text-dream-purple-dark prose-a:text-dream-purple hover:prose-a:text-dream-gold prose-strong:text-dream-purple-dark"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-dream-purple-dark mb-3">Share this article:</h3>
            <div className="flex space-x-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=Check%20out%20this%20article%20from%20Dreamlight%20Welfare%20Society:%20${encodeURIComponent(shareUrl)}`} className="p-2 bg-slate-500 text-white rounded-full hover:bg-slate-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/donate">
              <Button size="lg" className="gradient-bg text-white rounded-full px-10 py-3.5 hover:opacity-90">
                Support Our Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPostPage;
