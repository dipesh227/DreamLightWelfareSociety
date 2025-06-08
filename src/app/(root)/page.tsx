import ClientLayout from '@/components/layout/ClientLayout';
import HomePage from '@/components/pages/HomePage';

export default function Home() {
  const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/9d4946d7-c457-49e5-84af-9b4b147f9101/d2bfdf7cdd6c053e918e6d40f2ee77c1.jpg";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    "name": "Dream Light Welfare Society",
    "alternateName": "डॲीमलाइट वेल्फेर सोसाइटी",
    "description": "Dream Light Welfare Society is a registered nonprofit organization under Uttarakhand Government dedicated to charitable work, women empowerment, child development, education, healthcare, and rural development.",
    "url": "https://dreamlightwelfaresociety.org",
    "logo": "https://dreamlightwelfaresociety.org/logo.png",
    "foundingDate": "2025-06-04",
    "identifier": "TRSOC067080525216401",
    "mission": "To work for charitable purposes including women empowerment, child development, education, healthcare, environmental programs, and rural development across India.",
    "areaServed": {
      "@type": "State",
      "name": "Uttarakhand, India"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C/o Mrs Vimla Devi W/o Ramesh Singh Chandra Vatika",
      "addressLocality": "Khatima",
      "addressRegion": "Udham Singh Nagar",
      "addressCountry": "India",
      "postalCode": "262308"
    },
    "knowsAbout": [
      "Women Empowerment",
      "Child Development",
      "Education",
      "Healthcare",
      "Environmental Programs",
      "Rural Development",
      "Training Programs",
      "Youth Development"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Sapana",
        "jobTitle": "President"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8193991284",
      "contactType": "customer service",
      "areaServed": "Uttarakhand",
      "availableLanguage": ["Hindi", "English"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientLayout logoUrl={logoUrl}>
        <HomePage logoUrl={logoUrl} />
      </ClientLayout>
    </>
  );
}
