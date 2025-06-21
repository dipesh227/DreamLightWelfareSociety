import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Users, Briefcase, FileText, Send, MessageCircle } from 'lucide-react';
import PageHero from '@/components/common/hero/PageHero';

const ContactInfoItemBig = ({ icon: Icon, title, lines, iconBgColor, iconColor }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className={`${iconBgColor} p-4 rounded-full mb-4`}>
      <Icon className={`h-8 w-8 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold text-dream-purple-dark mb-2">{title}</h3>
    {lines.map((line, index) => <p key={index} className="text-slate-600 text-sm">{line}</p>)}
  </motion.div>
);

const ContactPage = () => {
  const contactDetails = [
    { icon: MapPin, title: "Our Main Office", lines: ["Devi W/O Ramesh Singh", "Chandra Vatika, Khatima", "Udham Singh Nagar, Uttarakhand, 262308"], iconBgColor: "bg-dream-purple-light/20", iconColor: "text-dream-purple" },
    { icon: Phone, title: "Call Us", lines: ["Sapna (Adhyaksh): +91 8193991284", "Kailash Singh (Upadhyaksh): +91 7037180518", "Dipesh Joshi (Sachiv): +91 8630484930"], iconBgColor: "bg-green-500/10", iconColor: "text-green-600" },
    { icon: Mail, title: "Email Us", lines: ["info@dreamlightwelfare.org (General)", "sapna.dreamlight@example.com (Adhyaksh)"], iconBgColor: "bg-dream-gold/10", iconColor: "text-dream-gold" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will get back to you as soon as possible.",
      className: "bg-dream-purple text-white border-dream-gold",
    });
    e.target.reset();
  };

  return (
    <div className="bg-slate-50">
      <PageHero pageType="contact" />

      <div id="main-content">
        <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {contactDetails.map((detail, index) => (
              <ContactInfoItemBig key={index} {...detail} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-dream-purple-dark mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow" placeholder="e.g., John Doe"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow" placeholder="you@example.com"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                  <input type="text" id="subject" name="subject" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow" placeholder="Reason for your message"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-shadow" placeholder="Write your message here..."></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full gradient-bg text-white text-base py-3 rounded-lg hover:opacity-90 shadow-lg">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay:0.1 }}
            >
              <div id="volunteer" className="bg-white p-8 rounded-2xl shadow-xl">
                <Users className="h-10 w-10 mb-4 text-dream-purple" />
                <h3 className="text-2xl font-bold text-dream-purple-dark mb-3">Volunteer With Us</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Share your skills and time to make a direct impact. We have various opportunities for individuals and groups.
                </p>
                <Button variant="outline" className="border-dream-purple text-dream-purple hover:bg-dream-purple/10 rounded-full px-6">Learn About Volunteering</Button>
              </div>
              <div id="partner" className="bg-white p-8 rounded-2xl shadow-xl">
                <Briefcase className="h-10 w-10 mb-4 text-dream-gold" />
                <h3 className="text-2xl font-bold text-dream-purple-dark mb-3">Partner With Us</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Collaborate with us on projects, sponsor an event, or explore corporate social responsibility initiatives.
                </p>
                <Button variant="outline" className="border-dream-gold text-dream-gold hover:bg-dream-gold/10 rounded-full px-6">Explore Partnerships</Button>
              </div>
               <div id="reports" className="bg-white p-8 rounded-2xl shadow-xl">
                <FileText className="h-10 w-10 mb-4 text-green-600" />
                <h3 className="text-2xl font-bold text-dream-purple-dark mb-3">Our Reports</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  We believe in transparency. Access our annual reports and financial statements to see how your support is utilized.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600/10 rounded-full px-6">View Annual Reports</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dream-purple-dark mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "How can I donate?", a: "You can donate online through our secure portal on the Donate page, or contact us for bank transfer details or other methods." },
              { q: "Is my donation tax-deductible?", a: "Yes, Dreamlight Welfare Society is a registered non-profit organization, and donations are typically tax-deductible. Please consult your tax advisor for specifics." },
              { q: "How is my donation used?", a: "We are committed to transparency. At least 90% of donations go directly to program activities. You can view our annual reports for detailed financial breakdowns." },
              { q: "Can I volunteer remotely?", a: "Yes, we have several remote volunteering opportunities, especially in areas like content creation, digital marketing, and research. Check our volunteer section or contact us." },
            ].map((faq, index) => (
              <details key={index} className="bg-white p-4 rounded-lg shadow-md group">
                <summary className="font-semibold text-slate-700 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="transform transition-transform duration-200 group-open:rotate-45 text-dream-purple">+</span>
                </summary>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContactPage;