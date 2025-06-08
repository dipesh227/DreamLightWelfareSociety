'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CalendarDays, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
   id: number;
   title: string;
   date: string;
   author: string;
   category: string;
   imageSrc: string;
   content: string;
   readTime: string;
   slug: string;
}

// Sample data - in a real app, this would come from an API or database
const samplePosts: BlogPost[] = [
   {
      id: 1,
      slug: "girls-education-rural-communities",
      title: "The Ripple Effect of Girls' Education in Rural Communities",
      date: "2025-05-28",
      author: "Dr. Aisha Khan",
      category: "Education",
      readTime: "8 min read",
      imageSrc: "https://images.unsplash.com/photo-1541829070764-81954faccfb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg leading-relaxed mb-6">The education of girls is not merely a matter of social justice; it is a powerful catalyst for societal transformation, particularly in rural communities. When girls are educated, the ripple effects extend far beyond the individual, influencing families, economies, and the overall well-being of society.</p>
        
        <p class="mb-6">In many rural areas, girls face significant barriers to education, including poverty, cultural norms, early marriage, and lack of accessible schools. Dreamlight Welfare Society's 'Education for All' initiative directly tackles these challenges by providing scholarships, school supplies, safe learning environments, and community awareness programs.</p>
        
        <h3 class="text-2xl font-semibold my-6 text-[hsl(var(--dream-purple-dark))]">Breaking Cycles of Poverty</h3>
        <p class="mb-6">Educated girls are more likely to marry later, have fewer and healthier children, and earn higher incomes. This economic empowerment allows them to invest back into their families and communities, breaking intergenerational cycles of poverty. They become role models, inspiring other girls and challenging restrictive social norms.</p>
        
        <h3 class="text-2xl font-semibold my-6 text-[hsl(var(--dream-purple-dark))]">Improving Health Outcomes</h3>
        <p class="mb-6">An educated mother is better equipped to make informed decisions about her children's health, nutrition, and hygiene. This leads to lower child mortality rates, improved maternal health, and a greater likelihood of children receiving vaccinations and proper medical care.</p>
        
        <h3 class="text-2xl font-semibold my-6 text-[hsl(var(--dream-purple-dark))]">Fostering Community Development</h3>
        <p class="mb-6">Educated women are more likely to participate in community decision-making processes and advocate for positive change. They contribute to more stable and resilient communities. Our programs often see increased female leadership in local governance after educational interventions.</p>
        
        <p class="mb-6">Investing in girls' education is one of the most effective ways to achieve sustainable development. At Dreamlight, we witness these transformative effects daily. Join us in empowering more girls to reach their full potential and reshape their communities for a brighter future.</p>
      </div>
    `
   },
   {
      id: 2,
      slug: "mobile-clinic-healthcare-innovation",
      title: "Innovations in Community Healthcare: Our Mobile Clinic Success",
      date: "2025-05-15",
      author: "Rohan Mehta",
      category: "Healthcare",
      readTime: "6 min read",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg leading-relaxed mb-6">Healthcare accessibility remains one of the most pressing challenges in rural and underserved communities. Our innovative mobile clinic program has been a game-changer, bringing quality medical care directly to those who need it most.</p>
        
        <p class="mb-6">Since launching our mobile clinic initiative two years ago, we have reached over 15,000 patients across 50 remote villages, providing essential healthcare services that would otherwise be inaccessible.</p>
        
        <h3 class="text-2xl font-semibold my-6 text-[hsl(var(--dream-purple-dark))]">Technology Meets Compassion</h3>
        <p class="mb-6">Our mobile clinics are equipped with state-of-the-art medical equipment, including digital X-ray machines, ultrasound devices, and telemedicine capabilities that connect rural patients with specialist doctors in urban centers.</p>
        
        <h3 class="text-2xl font-semibold my-6 text-[hsl(var(--dream-purple-dark))]">Community Impact</h3>
        <p class="mb-6">The program has resulted in a 40% reduction in preventable diseases in served communities and has trained over 200 local health workers who continue to provide basic healthcare services between clinic visits.</p>
      </div>
    `
   },
];

const BlogPostPage: React.FC = () => {
   const params = useParams();
   const slug = params?.slug as string;
   const post = samplePosts.find(p => p.slug === slug);

   if (!post) {
      return (
         <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center py-20">
               <h1 className="text-3xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Post not found</h1>
               <p className="text-muted-foreground mt-2 mb-6">The blog post you are looking for does not exist or has been moved.</p>
               <Link href="/blog">
                  <Button className="gradient-bg text-white rounded-full px-8 py-3">
                     <ArrowLeft className="mr-2 h-4 w-4" />
                     Back to Blog
                  </Button>
               </Link>
            </div>
         </div>
      );
   }

   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
   const shareText = `Check out this article: ${post.title}`;

   const shareLinks = [
      {
         name: 'Facebook',
         icon: Facebook,
         url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
         color: 'text-info hover:text-info/80'
      },
      {
         name: 'Twitter',
         icon: Twitter,
         url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
         color: 'text-sky-500 hover:text-sky-600'
      },
      {
         name: 'LinkedIn',
         icon: Linkedin,
         url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
         color: 'text-info hover:text-info/80'
      },
      {
         name: 'Email',
         icon: Mail,
         url: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
         color: 'text-gray-600 hover:text-gray-700'
      }
   ];

   return (
      <div className="min-h-screen bg-background">
         {/* Header */}
         <div className="bg-gradient-to-r from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] text-white py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
               <Link href="/blog" className="inline-flex items-center text-[hsl(var(--dream-gold-light))] hover:text-white mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
               </Link>

               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
               >
                  <div className="flex items-center gap-4 text-sm text-[hsl(var(--dream-gold-light))] mb-4">
                     <span className="bg-[hsl(var(--dream-gold))]/20 px-3 py-1 rounded-full">{post.category}</span>
                     <span className="flex items-center"><CalendarDays className="mr-1 h-4 w-4" /> {new Date(post.date).toLocaleDateString()}</span>
                     <span className="flex items-center"><Clock className="mr-1 h-4 w-4" /> {post.readTime}</span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

                  <div className="flex items-center text-[hsl(var(--dream-gold-light))]">
                     <User className="mr-2 h-4 w-4" />
                     <span>By {post.author}</span>
                  </div>
               </motion.div>
            </div>
         </div>

         {/* Featured Image */}
         <div className="relative h-96 md:h-[500px] overflow-hidden">
            <Image
               src={post.imageSrc}
               alt={post.title}
               fill
               className="object-cover"
               priority
            />
         </div>

         {/* Content */}
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
               {/* Main Content */}
               <div className="lg:col-span-3">
                  <motion.article
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.2 }}
                     className="prose prose-lg max-w-none"
                  >
                     <div
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                     />
                  </motion.article>

                  {/* Share Section */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.4 }}
                     className="mt-12 pt-8 border-t border-border"
                  >
                     <h3 className="text-xl font-semibold text-[hsl(var(--dream-purple-dark))] mb-4">Share this article</h3>
                     <div className="flex gap-4">
                        {shareLinks.map((link) => (
                           <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors ${link.color}`}
                              aria-label={`Share on ${link.name}`}
                           >
                              <link.icon className="h-5 w-5" />
                           </a>
                        ))}
                     </div>
                  </motion.div>
               </div>

               {/* Sidebar */}
               <div className="lg:col-span-1">
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.7, delay: 0.3 }}
                     className="sticky top-8 space-y-8"
                  >
                     {/* Author Info */}
                     <div className="bg-card p-6 rounded-xl shadow-lg">
                        <h4 className="font-semibold text-[hsl(var(--dream-purple-dark))] mb-2">About the Author</h4>
                        <p className="text-sm text-muted-foreground">
                           {post.author} is a passionate advocate for social change and has been working with Dreamlight Welfare Society for over 3 years.
                        </p>
                     </div>

                     {/* Related Posts */}
                     <div className="bg-card p-6 rounded-xl shadow-lg">
                        <h4 className="font-semibold text-[hsl(var(--dream-purple-dark))] mb-4">Related Articles</h4>
                        <div className="space-y-4">
                           {samplePosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                                 <div className="flex gap-3">
                                    <Image
                                       src={relatedPost.imageSrc}
                                       alt={relatedPost.title}
                                       width={60}
                                       height={60}
                                       className="w-15 h-15 object-cover rounded-lg"
                                    />
                                    <div className="flex-1 min-w-0">
                                       <h5 className="text-sm font-medium text-foreground group-hover:text-[hsl(var(--dream-purple))] transition-colors line-clamp-2">
                                          {relatedPost.title}
                                       </h5>
                                       <p className="text-xs text-muted-foreground mt-1">{relatedPost.category}</p>
                                    </div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>

                     {/* Call to Action */}
                     <div className="bg-gradient-to-br from-[hsl(var(--dream-purple))] to-[hsl(var(--dream-purple-dark))] p-6 rounded-xl text-white">
                        <h4 className="font-semibold mb-2">Support Our Mission</h4>
                        <p className="text-sm mb-4 text-[hsl(var(--dream-gold-light))]">
                           Help us continue our impactful work in communities across the country.
                        </p>
                        <Link href="/donate">
                           <Button className="w-full bg-[hsl(var(--dream-gold))] text-[hsl(var(--dream-purple-dark))] hover:bg-[hsl(var(--dream-gold-light))] rounded-full">
                              Donate Now
                           </Button>
                        </Link>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* Newsletter Signup */}
         <section className="py-16 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
               >
                  <h3 className="text-2xl font-bold text-[hsl(var(--dream-purple-dark))] mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground mb-8">Subscribe to our newsletter for the latest updates and stories from the field.</p>
                  <Link href="/contact">
                     <Button className="gradient-bg text-white rounded-full px-8 py-3">
                        Subscribe to Newsletter
                     </Button>
                  </Link>
               </motion.div>
            </div>
         </section>
      </div>
   );
};

export default BlogPostPage;
