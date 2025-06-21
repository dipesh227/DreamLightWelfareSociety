import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import PageHeader from '@/components/common/layout/PageHeader';

const faqData = [
  {
    category: "General",
    questions: [
      { q: "What is Dreamlight Welfare Society?", a: "Dreamlight Welfare Society is a non-profit organization dedicated to empowering underserved communities through sustainable programs in education, healthcare, livelihood, and environmental conservation." },
      { q: "Where does Dreamlight operate?", a: "We primarily operate in various regions across India, focusing on areas with the most significant need. Specific project locations can be found on our Programs and Impact pages." },
      { q: "Is Dreamlight a registered NGO?", a: "Yes, Dreamlight Welfare Society is a registered non-profit organization under the Societies Registration Act, 1860, and is compliant with all relevant local and national regulations." },
    ]
  },
  {
    category: "Donations",
    questions: [
      { q: "How can I donate?", a: "You can donate online through our secure portal on the Donate page. We also accept bank transfers and other forms of contribution; please contact us for details." },
      { q: "Is my donation tax-deductible?", a: "Yes, donations to Dreamlight Welfare Society are eligible for tax deductions under Section 80G of the Income Tax Act, 1961 (for Indian donors). International donors should consult their local tax laws." },
      { q: "How is my donation used?", a: "We are committed to transparency. At least 90-95% of all donations go directly to program activities and beneficiaries. Detailed financial breakdowns are available in our Annual Reports on the Transparency page." },
      { q: "Can I donate to a specific program?", a: "Yes, our donation form allows you to designate your gift to a specific area of work, such as Education, Healthcare, etc., or contribute to our general fund where it's needed most." }
    ]
  },
  {
    category: "Volunteering",
    questions: [
      { q: "How can I volunteer?", a: "Visit our Volunteer Portal page to see current opportunities. You can apply directly for roles that match your skills and interests. We welcome both on-site and remote volunteers." },
      { q: "What kind of skills are you looking for in volunteers?", a: "We need a wide range of skills, from teaching and medical expertise to content creation, event management, and administrative support. Check specific opportunity listings for requirements." },
      { q: "Is there an age limit for volunteering?", a: "Generally, volunteers should be 18 years or older. Younger individuals may participate in specific, supervised activities with parental consent. Please check individual opportunity details." }
    ]
  },
  {
    category: "Partnerships",
    questions: [
      { q: "How can my company partner with Dreamlight?", a: "We offer various corporate partnership opportunities, including CSR initiatives, program sponsorship, employee engagement programs, and cause-marketing campaigns. Please visit our Contact page to discuss potential collaborations." },
      { q: "Do you partner with other NGOs or institutions?", a: "Yes, we believe in collaboration for greater impact. We actively seek partnerships with other NGOs, government bodies, academic institutions, and community-based organizations." }
    ]
  }
];

const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      layout
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left text-md font-semibold text-dream-purple-dark focus:outline-none"
      >
        {q}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-dream-purple' : 'text-slate-500'}`} />
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
            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const filteredFaqData = faqData.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      item => item.q.toLowerCase().includes(searchTerm.toLowerCase()) || item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div className="bg-slate-100">
       <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Dreamlight Welfare Society, our work, donations, volunteering, and more."
        icon={HelpCircle}
        gradientFrom="from-dream-purple"
        gradientTo="to-dream-purple-dark"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 md:mb-12 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search FAQs (e.g., donation, volunteer, programs)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border border-slate-300 rounded-xl focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4 space-y-2">
              {faqData.map(cat => (
                <button 
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${activeCategory === cat.category 
                      ? 'bg-dream-purple text-white shadow-md' 
                      : 'bg-white text-slate-700 hover:bg-dream-purple-lighter/70 hover:text-dream-purple'}`}
                >
                  {cat.category}
                </button>
              ))}
            </aside>

            <main className="md:w-3/4">
              {filteredFaqData.filter(cat => searchTerm || cat.category === activeCategory).map(category => (
                (searchTerm || category.category === activeCategory) && category.questions.length > 0 && (
                  <motion.div 
                    key={category.category} 
                    className="mb-10"
                    initial={{ opacity: 0, y:10 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold text-dream-purple-dark mb-6 pb-2 border-b-2 border-dream-gold">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <FaqItem key={index} q={item.q} a={item.a} />
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
              {filteredFaqData.length === 0 && searchTerm && (
                <p className="text-center text-slate-600 text-lg">No FAQs match your search term "{searchTerm}".</p>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;