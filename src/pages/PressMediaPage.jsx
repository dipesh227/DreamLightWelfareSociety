import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Download, Mail, CalendarDays, ExternalLink, FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/common/layout/PageHeader';

const pressReleases = [
  {
    id: 1,
    date: "2025-05-15",
    title: "Dreamlight Launches 'Education for All' Initiative, Aiming to Reach 10,000 Children",
    summary: "Dreamlight Welfare Society today announced its ambitious 'Education for All' initiative, a comprehensive program designed to provide quality education and resources to 10,000 underprivileged children across five states over the next three years.",
    link: "/press/education-for-all-launch.pdf",
    category: "Press Release"
  },
  {
    id: 2,
    date: "2025-04-22",
    title: "Record Funds Raised at Annual Dreamlight Charity Gala for Healthcare Projects",
    summary: "The annual Dreamlight Charity Gala, held last Saturday, successfully raised a record-breaking amount dedicated to expanding community healthcare services, including mobile clinics and maternal health programs.",
    link: "/press/gala-record-funds.pdf",
    category: "Press Release"
  },
  {
    id: 3,
    date: "2025-03-10",
    title: "Dreamlight in the News: The Impact Times Features Our Clean Water Project",
    summary: "Our recent clean water project in rural Rajasthan, providing safe drinking water to over 5,000 villagers, was featured in The Impact Times. Read the full coverage.",
    externalLink: "https://example.com/news/dreamlight-water-project",
    category: "In The News"
  },
];

const mediaAssets = [
  { name: "Dreamlight Logo Pack (EPS, PNG, SVG)", downloadLink: "/media/dreamlight-logos.zip", icon: FileText, type: "Logos" },
  { name: "Founder Dr. Aisha Khan - High-Res Photos", downloadLink: "/media/aisha-khan-photos.zip", icon: FileText, type: "Photos" },
  { name: "Impact Stories Brochure 2025", downloadLink: "/media/impact-brochure-2025.pdf", icon: BookOpen, type: "Publications" },
  { name: "Annual Report 2024", downloadLink: "/reports/annual-report-2024.pdf", icon: BookOpen, type: "Reports" },
  { name: "Brand Guidelines", downloadLink: "/media/dreamlight-brand-guidelines.pdf", icon: FileText, type: "Guidelines" },
];

const PressReleaseCard = ({ date, title, summary, link, externalLink, category, index }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-dws-blue-dark"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between items-start mb-2">
      <span className="text-xs font-semibold text-dws-blue-dark bg-dws-blue-light/10 px-2.5 py-1 rounded-full">{category}</span>
      <span className="text-xs text-slate-500 flex items-center"><CalendarDays size={14} className="mr-1.5" /> {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
    </div>
    <h3 className="text-xl font-bold text-dws-blue-dark mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed mb-4">{summary}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-dws-gold hover:text-dws-gold-dark font-semibold group">
        Read Full Release <Download size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    )}
    {externalLink && (
      <a href={externalLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-dws-gold hover:text-dws-gold-dark font-semibold group">
        View Coverage <ExternalLink size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
      </a>
    )}
  </motion.div>
);

const MediaAssetItem = ({ name, downloadLink, icon: Icon, type, index }) => (
  <motion.div
    className="bg-slate-50 p-4 rounded-lg flex items-center justify-between hover:bg-dws-blue-light/10 transition-colors duration-200"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="flex items-center">
      <Icon size={24} className="mr-3 text-dws-blue-dark" />
      <div>
        <p className="text-sm font-medium text-dws-blue-dark">{name}</p>
        <p className="text-xs text-slate-500">{type}</p>
      </div>
    </div>
    <a href={downloadLink} download className="text-dws-gold p-2 rounded-full hover:bg-dws-gold/20 transition-colors">
      <Download size={20} />
    </a>
  </motion.div>
);

const PressMediaPage = () => {
  return (
    <div className="bg-slate-100">
      <PageHeader
        title="Press & Media Center"
        subtitle="Stay updated with Dreamlight's latest announcements, news coverage, and access our media resources."
        icon={Newspaper}
        gradientFrom="from-dws-blue-dark"
        gradientTo="to-dws-blue-light"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-dws-blue-dark mb-10">Latest News & Releases</h2>
              <div className="space-y-8">
                {pressReleases.map((item, index) => (
                  <PressReleaseCard key={item.id} {...item} index={index} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link to="/blog">
                  <Button variant="outline" className="border-dws-blue-dark text-dws-blue-dark hover:bg-dws-blue-dark/10 rounded-full px-8 py-3">
                    View All News & Blog Posts
                  </Button>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-dws-blue-dark mb-6">Media Contact</h3>
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-semibold text-dws-blue-dark">Ms. Ananya Sharma</p>
                  <p className="text-sm text-slate-600">Communications Manager</p>
                  <a href="mailto:media@dreamlightwelfare.org" className="text-sm text-dws-gold hover:underline flex items-center mt-2">
                    <Mail size={16} className="mr-1.5" /> media@dreamlightwelfare.org
                  </a>
                  <a href="tel:+919876500000" className="text-sm text-dws-gold hover:underline flex items-center mt-1">
                    <Mail size={16} className="mr-1.5" /> +91 98765 00000 (For media inquiries only)
                  </a>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-dws-blue-dark mb-6">Media Kit & Assets</h3>
                <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
                  {mediaAssets.map((asset, index) => (
                    <MediaAssetItem key={asset.name} {...asset} index={index} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressMediaPage;