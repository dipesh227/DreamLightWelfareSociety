
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, lines, iconBgColor, iconColor }) => (
  <div className="flex items-start space-x-4">
    <div className={`${iconBgColor} p-3 rounded-full`}>
      <Icon className={`h-6 w-6 ${iconColor}`} />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {lines.map((line, index) => <p key={index} className="text-gray-600">{line}</p>)}
    </div>
  </div>
);

const SocialLink = ({ href, icon: Icon, bgColor, label }) => (
  <a href={href} aria-label={label} className={`${bgColor} p-3 rounded-full text-white hover:opacity-80 transition-opacity`}>
    <Icon className="h-5 w-5" />
  </a>
);

const ContactSection = () => {
  const contactDetails = [
    { icon: MapPin, title: "Address", lines: ["123 Welfare Street, Community Center", "New Delhi, India 110001"], iconBgColor: "bg-dream-purple-light/20", iconColor: "text-dream-purple" },
    { icon: Phone, title: "Phone", lines: ["+91 98765 43210", "+91 87654 32109"], iconBgColor: "bg-green-100", iconColor: "text-green-600" },
    { icon: Mail, title: "Email", lines: ["info@dreamlightwelfare.org", "contact@dreamlightwelfare.org"], iconBgColor: "bg-dream-gold-light/20", iconColor: "text-dream-gold" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, bgColor: "bg-blue-600", label: "Facebook" },
    { href: "#", icon: Twitter, bgColor: "bg-blue-400", label: "Twitter" },
    { href: "#", icon: Instagram, bgColor: "bg-pink-600", label: "Instagram" },
    { href: "#", icon: Youtube, bgColor: "bg-red-600", label: "Youtube" },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Get in touch with us to learn more about our programs or how you can get involved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-reveal space-y-8">
            {contactDetails.map((detail, index) => (
              <ContactInfoItem key={index} {...detail} />
            ))}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dream-purple focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full gradient-bg text-white hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
