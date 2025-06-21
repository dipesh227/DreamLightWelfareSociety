import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">Dream Light Welfare Society</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering communities through education, healthcare, and sustainable development since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs#education" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/programs#healthcare" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/programs#women-empowerment" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link href="/programs#child-development" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Child Development
                </Link>
              </li>
              <li>
                <Link href="/programs#water-sanitation" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Water & Sanitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Community Street<br />
                  New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 11 2345 6789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@dreamlightwelfare.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dream Light Welfare Society. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/transparency" className="text-gray-400 hover:text-white transition-colors text-sm">
                Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}