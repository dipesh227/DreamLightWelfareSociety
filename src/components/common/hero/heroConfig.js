import { 
  Heart, 
  Users, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  DollarSign,
  Camera,
  FileText,
  Target,
  Lightbulb,
  Info,
  MessageCircle,
  UserCheck,
  Building,
  Newspaper,
  HelpCircle,
  BarChart3,
  Handshake,
  Image,
  TrendingUp,
  Star,
  Globe,
  Shield,
  Eye,
  Briefcase,
  GraduationCap,
  Sparkles
} from 'lucide-react';

// Background images - using high-quality, optimized images
const backgroundImages = {
  default: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  community: "https://images.unsplash.com/photo-1681745207024-42f0dfbcedd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  education: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  children: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  healthcare: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  environment: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  contact: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  donation: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  volunteer: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  events: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  gallery: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  impact: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  transparency: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
};

// Common stats that can be reused across pages
const commonStats = [
  { value: "12+", label: "Years Strong", icon: Award },
  { value: "75K+", label: "Lives Touched", icon: Users },
  { value: "95%", label: "Fund Utilization", icon: ShieldCheck },
  { value: "5", label: "Core Programs", icon: Target },
];

// Hero configurations for each page
export const heroConfigs = {
  // Homepage - Special treatment with logo and comprehensive stats
  home: {
    pageType: "home",
    title: "Igniting Hope, Empowering Futures",
    subtitle: "Building Tomorrow, One Community at a Time",
    description: "Dreamlight Welfare Society is a beacon of change, dedicated to uplifting communities in India through sustainable education, healthcare, and livelihood programs. Join our movement to transform lives.",
    backgroundImage: backgroundImages.community,
    showLogo: true,
    height: "min-h-screen",
    enableParallax: true,
    overlayColor: "bg-slate-900/60",
    gradientOverlay: "bg-gradient-to-b from-slate-900/40 via-slate-800/50 to-slate-900/70",
    stats: commonStats,
    primaryCta: {
      text: "Donate Now",
      href: "/donate",
      icon: Sparkles
    },
    secondaryCta: {
      text: "Get Involved",
      href: "/volunteer",
      icon: Users
    },
    showScrollIndicator: true,
    ariaLabel: "Dreamlight Welfare Society homepage hero section"
  },

  // About Page
  about: {
    pageType: "about",
    title: "Our Story of Change",
    subtitle: "Transforming Lives in Uttarakhand Since 2025",
    description: "Founded on June 4th, 2025, Dreamlight Welfare Society is dedicated to empowering communities through sustainable social welfare programs.",
    backgroundImage: backgroundImages.community,
    height: "min-h-[80vh]",
    enableParallax: true,
    overlayColor: "bg-slate-800/65",
    gradientOverlay: "bg-gradient-to-b from-slate-800/40 via-slate-700/55 to-slate-800/75",
    stats: [
      { value: "2025", label: "Founded", icon: Calendar },
      { value: "Local", label: "Focus on Uttarakhand", icon: MapPin },
      { value: "5", label: "Core Objectives", icon: Target },
      { value: "100%", label: "Transparency", icon: Eye }
    ],
    primaryCta: {
      text: "Our Values",
      href: "/our-values",
      icon: Heart
    },
    secondaryCta: {
      text: "Meet Our Team",
      href: "/team",
      icon: Users
    },
    ariaLabel: "About Dreamlight Welfare Society"
  },

  // Programs Page
  programs: {
    pageType: "programs",
    title: "Our Fields of Action",
    subtitle: "Comprehensive Programs for Sustainable Change",
    description: "Discover our targeted programs addressing critical community needs across women empowerment, child development, skill training, health awareness, and environmental protection.",
    backgroundImage: backgroundImages.education,
    height: "min-h-[75vh]",
    enableParallax: true,
    overlayColor: "bg-slate-700/60",
    gradientOverlay: "bg-gradient-to-b from-emerald-900/30 via-slate-700/60 to-slate-800/70",
    stats: [
      { value: "5", label: "Active Programs", icon: BookOpen },
      { value: "Women", label: "Empowerment Focus", icon: Users },
      { value: "Skills", label: "Training Provided", icon: GraduationCap },
      { value: "Health", label: "Awareness Campaigns", icon: Heart }
    ],
    primaryCta: {
      text: "Support Our Programs",
      href: "/donate",
      icon: Heart
    },
    secondaryCta: {
      text: "Get Involved",
      href: "/volunteer",
      icon: Users
    },
    ariaLabel: "Dreamlight Welfare Society programs"
  },

  // Contact Page
  contact: {
    pageType: "contact",
    title: "Get in Touch With Us",
    subtitle: "We'd Love to Hear From You",
    description: "Whether you have questions, want to volunteer, partner with us, or just say hello, we're here to connect and collaborate.",
    backgroundImage: backgroundImages.contact,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-slate-700/65",
    gradientOverlay: "bg-gradient-to-b from-amber-900/25 via-slate-700/65 to-slate-800/75",
    stats: [
      { value: "24/7", label: "Online Support", icon: MessageCircle },
      { value: "3", label: "Contact Methods", icon: Phone },
      { value: "Quick", label: "Response Time", icon: Mail },
      { value: "Local", label: "Khatima Office", icon: MapPin }
    ],
    primaryCta: {
      text: "Send Message",
      href: "#contact-form",
      icon: Mail
    },
    secondaryCta: {
      text: "Visit Office",
      href: "#office-location",
      icon: MapPin
    },
    ariaLabel: "Contact Dreamlight Welfare Society"
  },

  // Donate Page
  donate: {
    pageType: "donate",
    title: "Make a Difference Today",
    subtitle: "Your Contribution Creates Lasting Change",
    description: "Every donation, no matter the size, helps us build stronger communities and transform lives. Join us in creating a brighter future for those in need.",
    backgroundImage: backgroundImages.donation,
    height: "min-h-[75vh]",
    enableParallax: true,
    overlayColor: "bg-slate-800/60",
    gradientOverlay: "bg-gradient-to-b from-violet-900/30 via-slate-800/60 to-slate-900/75",
    stats: [
      { value: "95%", label: "Direct Program Use", icon: DollarSign },
      { value: "Safe", label: "Secure Payments", icon: Shield },
      { value: "Tax", label: "Deductible", icon: FileText },
      { value: "Impact", label: "Transparent Reporting", icon: BarChart3 }
    ],
    primaryCta: {
      text: "Donate Securely",
      href: "#donation-form",
      icon: Heart
    },
    secondaryCta: {
      text: "Learn About Impact",
      href: "/impact",
      icon: TrendingUp
    },
    ariaLabel: "Donate to Dreamlight Welfare Society"
  },

  // Events Page
  events: {
    pageType: "events",
    title: "Community Events & Activities",
    subtitle: "Join Us in Making a Difference",
    description: "Participate in our upcoming events, workshops, and community activities. Together, we can create meaningful change and build stronger communities.",
    backgroundImage: backgroundImages.events,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-slate-700/65",
    gradientOverlay: "bg-gradient-to-b from-blue-900/25 via-slate-700/65 to-slate-800/75",
    stats: [
      { value: "Monthly", label: "Community Events", icon: Calendar },
      { value: "Open", label: "Public Participation", icon: Users },
      { value: "Free", label: "Entry for All", icon: Heart },
      { value: "Impact", label: "Driven Activities", icon: Target }
    ],
    primaryCta: {
      text: "View Events",
      href: "#events-list",
      icon: Calendar
    },
    secondaryCta: {
      text: "Volunteer at Events",
      href: "/volunteer",
      icon: Users
    },
    ariaLabel: "Dreamlight Welfare Society events"
  },

  // Gallery Page
  gallery: {
    pageType: "gallery",
    title: "Moments of Impact",
    subtitle: "Capturing Change in Action",
    description: "Explore our visual journey of transformation, community engagement, and the lives we've touched through our various programs and initiatives.",
    backgroundImage: backgroundImages.gallery,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-slate-800/65",
    gradientOverlay: "bg-gradient-to-b from-purple-900/30 via-slate-800/65 to-slate-900/75",
    stats: [
      { value: "1000+", label: "Photos & Videos", icon: Camera },
      { value: "Stories", label: "of Change", icon: Heart },
      { value: "Events", label: "Documented", icon: Calendar },
      { value: "Lives", label: "Captured", icon: Users }
    ],
    primaryCta: {
      text: "View Gallery",
      href: "#photo-gallery",
      icon: Image
    },
    secondaryCta: {
      text: "Share Your Story",
      href: "/contact",
      icon: MessageCircle
    },
    ariaLabel: "Dreamlight Welfare Society photo gallery"
  },

  // Team Page
  team: {
    pageType: "team",
    title: "Meet Our Dedicated Team",
    subtitle: "Passionate People Driving Change",
    description: "Get to know the inspiring individuals behind Dreamlight Welfare Society - our founders, leaders, and dedicated team members committed to making a difference.",
    backgroundImage: backgroundImages.team,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-slate-700/65",
    gradientOverlay: "bg-gradient-to-b from-orange-900/25 via-slate-700/65 to-slate-800/75",
    stats: [
      { value: "Dedicated", label: "Leadership Team", icon: Users },
      { value: "Diverse", label: "Expertise", icon: Star },
      { value: "Passionate", label: "Volunteers", icon: Heart },
      { value: "United", label: "Vision", icon: Target }
    ],
    primaryCta: {
      text: "Join Our Team",
      href: "/volunteer",
      icon: UserCheck
    },
    secondaryCta: {
      text: "Contact Leadership",
      href: "/contact",
      icon: Mail
    },
    ariaLabel: "Dreamlight Welfare Society team members"
  },

  // Impact Page
  impact: {
    pageType: "impact",
    title: "Measuring Our Impact",
    subtitle: "Real Stories, Real Change",
    description: "Discover the tangible difference we're making in communities across Uttarakhand through data-driven insights and inspiring success stories.",
    backgroundImage: backgroundImages.impact,
    height: "min-h-[75vh]",
    enableParallax: true,
    overlayColor: "bg-slate-700/65",
    gradientOverlay: "bg-gradient-to-b from-green-900/30 via-slate-700/65 to-slate-800/75",
    stats: commonStats,
    primaryCta: {
      text: "View Impact Report",
      href: "/impact-report",
      icon: BarChart3
    },
    secondaryCta: {
      text: "Success Stories",
      href: "/success-stories",
      icon: Star
    },
    ariaLabel: "Dreamlight Welfare Society impact metrics"
  },

  // Volunteer Portal
  'volunteer-portal': {
    pageType: "volunteer",
    title: "Volunteer Portal",
    subtitle: "Your Gateway to Making a Difference",
    description: "Access your volunteer dashboard, track your hours, view upcoming opportunities, and connect with fellow volunteers in our community.",
    backgroundImage: backgroundImages.volunteer,
    height: "min-h-[70vh]",
    enableParallax: true,
    overlayColor: "bg-slate-800/65",
    gradientOverlay: "bg-gradient-to-b from-violet-900/30 via-slate-800/65 to-slate-900/75",
    stats: [
      { value: "Active", label: "Volunteer Network", icon: Users },
      { value: "Flexible", label: "Opportunities", icon: Calendar },
      { value: "Skills", label: "Development", icon: GraduationCap },
      { value: "Impact", label: "Tracking", icon: BarChart3 }
    ],
    primaryCta: {
      text: "Access Dashboard",
      href: "/volunteer/dashboard",
      icon: BarChart3
    },
    secondaryCta: {
      text: "Find Opportunities",
      href: "/volunteer/opportunities",
      icon: Target
    },
    ariaLabel: "Volunteer portal for Dreamlight Welfare Society"
  },

  // Default configuration for pages not specifically defined
  default: {
    pageType: "default",
    title: "Dreamlight Welfare Society",
    subtitle: "Empowering Communities, Creating Change",
    description: "Working together to build stronger, more sustainable communities through education, healthcare, and empowerment programs.",
    backgroundImage: backgroundImages.default,
    height: "min-h-[60vh]",
    enableParallax: true,
    overlayColor: "bg-slate-800/60",
    gradientOverlay: "bg-gradient-to-b from-slate-800/40 via-slate-700/60 to-slate-800/70",
    stats: [],
    primaryCta: {
      text: "Learn More",
      href: "/about",
      icon: Info
    },
    secondaryCta: {
      text: "Get Involved",
      href: "/volunteer",
      icon: Users
    },
    ariaLabel: "Dreamlight Welfare Society"
  }
};

// Helper function to get hero config for a specific page
export const getHeroConfig = (pageName, customConfig = {}) => {
  const config = heroConfigs[pageName] || heroConfigs.default;
  return {
    ...config,
    ...customConfig, // Allow override of any configuration
  };
};

// Helper function to get optimized background image URL
export const getOptimizedImageUrl = (url, width = 2000, quality = 80) => {
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=${quality}`;
  }
  return url;
};

export default heroConfigs;