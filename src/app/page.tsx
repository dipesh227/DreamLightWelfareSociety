import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
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
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Dream Light Welfare Society</h1>
                <p className="text-sm text-muted-foreground">Government Registered NGO | Uttarakhand</p>
                <p className="text-xs text-muted-foreground">Registration No: TRSOC067080525216401</p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 space-y-8">
          {/* Hero Section */}
          <div className="bg-card text-card-foreground p-8 rounded-lg border">
            <h2 className="text-3xl font-semibold mb-4">Registered Charitable Organization</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Welcome to Dream Light Welfare Society, a government registered nonprofit organization
              under the Uttarakhand Government, dedicated to charitable work and social welfare.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded on June 4, 2025, and registered under the Societies Registration Act 1860,
              we work for women empowerment, child development, education, healthcare, and rural development.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="text-sm text-primary font-medium">
                📍 Address: C/o Mrs Vimla Devi, Chandra Vatika, Khatima, Udham Singh Nagar, Uttarakhand - 262308
              </p>
            </div>
          </div>

          {/* Portal Access Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white p-8 rounded-lg border border-slate-700">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Portal</h3>
                <p className="text-slate-300 text-sm">
                  Administrative dashboard for organization management, member tracking, and program oversight.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/admin/login">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
                    Admin Login
                  </button>
                </Link>
                <p className="text-xs text-slate-400 text-center">
                  For authorized administrators only
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">Volunteer Portal</h3>
                <p className="text-blue-700 text-sm">
                  Community service platform for volunteers to join programs, track activities, and make impact.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/volunteer/login">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors">
                    Volunteer Login
                  </button>
                </Link>
                <p className="text-xs text-blue-600 text-center">
                  Join our community service initiatives
                </p>
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">👩‍💼 Women Empowerment</h3>
              <p className="text-secondary-foreground">
                Training and skill development programs for women, promoting gender equality
                and economic independence through various empowerment initiatives.
              </p>
            </div>
            
            <div className="bg-accent p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">👶 Child Development</h3>
              <p className="text-accent-foreground">
                Comprehensive child development programs focusing on education, health,
                and overall well-being of children in rural and urban areas.
              </p>
            </div>
            
            <div className="bg-card border p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">🌱 Environmental Programs</h3>
              <p className="text-card-foreground">
                Environmental awareness and cleanliness programs implemented village by village
                to promote sustainable development and ecological balance.
              </p>
            </div>
          </div>

          {/* Leadership & Contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-medium mb-3 text-primary">Our Registered Objectives</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Training and skill development programs</li>
                <li>• Women empowerment and participation initiatives</li>
                <li>• Child development and welfare programs</li>
                <li>• Youth development and employment programs</li>
                <li>• Healthcare and medical programs</li>
                <li>• Environmental and cleanliness initiatives</li>
                <li>• General education and literacy programs</li>
                <li>• Rural development and self-employment</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Leadership Team</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">President:</span>
                  <span className="text-muted-foreground">Sapana</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Vice President:</span>
                  <span className="text-muted-foreground">Kailash Singh</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Secretary:</span>
                  <span className="text-muted-foreground">Dipesh Joshi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Treasurer:</span>
                  <span className="text-muted-foreground">Poonam Devi</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Contact: +91-8193991284 | sapnam481@gmail.com
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
