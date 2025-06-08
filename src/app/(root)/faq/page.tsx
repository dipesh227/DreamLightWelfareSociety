'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, MessageCircle } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FAQ {
   q: string;
   a: string;
}

interface FAQCategory {
   category: string;
   questions: FAQ[];
}

const faqData: FAQCategory[] = [
   {
      category: "General",
      questions: [
         {
            q: "What is Dreamlight Welfare Society?",
            a: "Dreamlight Welfare Society is a non-profit organization dedicated to empowering underserved communities through sustainable programs in education, healthcare, livelihood, and environmental conservation."
         },
         {
            q: "Where does Dreamlight operate?",
            a: "We primarily operate in various regions across India, focusing on areas with the most significant need. Specific project locations can be found on our Programs and Impact pages."
         },
         {
            q: "Is Dreamlight a registered NGO?",
            a: "Yes, Dreamlight Welfare Society is a registered non-profit organization under the Societies Registration Act, 1860, and is compliant with all relevant local and national regulations."
         },
      ]
   },
   {
      category: "Donations",
      questions: [
         {
            q: "How can I donate?",
            a: "You can donate online through our secure portal on the Donate page. We also accept bank transfers and other forms of contribution; please contact us for details."
         },
         {
            q: "Is my donation tax-deductible?",
            a: "Yes, donations to Dreamlight Welfare Society are eligible for tax deductions under Section 80G of the Income Tax Act, 1961 (for Indian donors). International donors should consult their local tax laws."
         },
         {
            q: "How is my donation used?",
            a: "We are committed to transparency. At least 90-95% of all donations go directly to program activities and beneficiaries. Detailed financial breakdowns are available in our Annual Reports on the Transparency page."
         },
         {
            q: "Can I donate to a specific program?",
            a: "Yes, our donation form allows you to designate your gift to a specific area of work, such as Education, Healthcare, etc., or contribute to our general fund where it&apos;s needed most."
         }
      ]
   },
   {
      category: "Volunteering",
      questions: [
         {
            q: "How can I volunteer?",
            a: "Visit our Volunteer Portal page to see current opportunities. You can apply directly for roles that match your skills and interests. We welcome both on-site and remote volunteers."
         },
         {
            q: "What kind of skills are you looking for in volunteers?",
            a: "We need a wide range of skills, from teaching and medical expertise to content creation, event management, and administrative support. Check specific opportunity listings for requirements."
         },
         {
            q: "Is there an age limit for volunteering?",
            a: "Generally, volunteers should be 18 years or older. Younger individuals may participate in specific, supervised activities with parental consent. Please check individual opportunity details."
         }
      ]
   },
   {
      category: "Partnerships",
      questions: [
         {
            q: "How can my company partner with Dreamlight?",
            a: "We offer various corporate partnership opportunities, including CSR initiatives, program sponsorship, employee engagement programs, and cause-marketing campaigns. Please visit our Contact page to discuss potential collaborations."
         },
         {
            q: "Do you partner with other NGOs or institutions?",
            a: "Yes, we believe in collaboration for greater impact. We actively seek partnerships with other NGOs, government bodies, academic institutions, and community-based organizations."
         }
      ]
   }
];

const FaqItem: React.FC<{ faq: FAQ }> = ({ faq: { q, a } }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.div
         layout
         className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      >
         <motion.button
            layout
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-5 text-left text-md font-semibold text-dream-purple-dark focus:outline-none focus:ring-2 focus:ring-dream-purple focus:ring-offset-2"
         >
            {q}
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
               <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-dream-purple' : 'text-muted-foreground'}`} />
            </motion.div>
         </motion.button>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-5"
               >
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{a}</p>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
};

const FaqPage: React.FC = () => {
   const [searchTerm, setSearchTerm] = useState("");
   const [activeCategory, setActiveCategory] = useState(faqData[0].category);

   const filteredFaqData = faqData.map(cat => ({
      ...cat,
      questions: cat.questions.filter(
         item => item.q.toLowerCase().includes(searchTerm.toLowerCase()) || item.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
   })).filter(cat => cat.questions.length > 0);

   const activeCategoryData = searchTerm
      ? filteredFaqData
      : faqData.filter(cat => activeCategory === "All" || cat.category === activeCategory);

   return (
      <div className="bg-background min-h-screen">
         <PageHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Dreamlight Welfare Society, our work, donations, volunteering, and more."
            icon={HelpCircle}
            gradientFrom="from-dream-purple"
            gradientTo="to-dream-purple-dark"
         />

         <section className="py-16 md:py-24">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
               {/* Search */}
               <motion.div
                  className="mb-10 md:mb-12 max-w-xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 pl-12 pr-4 border border-border rounded-xl bg-card text-foreground focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all duration-200"
                     />
                     <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
               </motion.div>

               {/* Categories */}
               {!searchTerm && (
                  <motion.div
                     className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                  >
                     <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === "All"
                              ? "bg-dream-purple text-white shadow-lg"
                              : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                           }`}
                     >
                        All Categories
                     </button>
                     {faqData.map(cat => (
                        <button
                           key={cat.category}
                           onClick={() => setActiveCategory(cat.category)}
                           className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.category
                                 ? "bg-dream-purple text-white shadow-lg"
                                 : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              }`}
                        >
                           {cat.category}
                        </button>
                     ))}
                  </motion.div>
               )}

               {/* FAQ Items */}
               <div className="space-y-4 mb-16">
                  {activeCategoryData.map((category, categoryIndex) => (
                     <div key={category.category}>
                        {searchTerm && (
                           <h3 className="text-xl font-bold text-dream-purple-dark mb-4 mt-8 first:mt-0">
                              {category.category}
                           </h3>
                        )}
                        <div className="space-y-3">
                           {category.questions.map((faq, faqIndex) => (
                              <motion.div
                                 key={`${category.category}-${faqIndex}`}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                              >
                                 <FaqItem faq={faq} />
                              </motion.div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>

               {/* No Results */}
               {filteredFaqData.length === 0 && searchTerm && (
                  <motion.div
                     className="text-center py-12"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5 }}
                  >
                     <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                     <h3 className="text-xl font-semibold text-foreground mb-2">No FAQs Found</h3>
                     <p className="text-muted-foreground mb-6">
                        We couldn&apos;t find any FAQs matching &quot;{searchTerm}&quot;. Try different search terms or browse by category.
                     </p>
                     <Button onClick={() => setSearchTerm("")} variant="outline">
                        Clear Search
                     </Button>
                  </motion.div>
               )}

               {/* Contact for More Help */}
               <motion.div
                  className="bg-gradient-to-r from-dream-purple/10 to-dream-gold/10 p-8 rounded-2xl border border-dream-purple/20 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
               >
                  <MessageCircle className="h-12 w-12 mx-auto text-dream-purple-dark mb-4" />
                  <h3 className="text-2xl font-bold text-dream-purple-dark mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                     If you can&apos;t find the answer you&apos;re looking for, our team is here to help.
                     Reach out to us and we&apos;ll get back to you as soon as possible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/contact">
                        <Button className="btn-primary px-8 py-3 rounded-lg font-medium">
                           Contact Us
                        </Button>
                     </Link>
                     <Link href="/volunteer">
                        <Button className="btn-outline px-8 py-3 rounded-lg font-medium">
                           Join Our Community
                        </Button>
                     </Link>
                  </div>
               </motion.div>
            </div>
         </section>
      </div>
   );
};

export default FaqPage;
