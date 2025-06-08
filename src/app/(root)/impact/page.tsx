import { Metadata } from 'next';
import ImpactPage from '@/components/pages/ImpactPage';

export const metadata: Metadata = {
  title: 'Our Impact | Dream Light Welfare Society - Measuring Social Change',
  description: 'Discover the measurable impact of Dream Light Welfare Society across education, healthcare, water access, and community development in Uttarakhand. See how we are transforming lives.',
  keywords: [
    'social impact',
    'NGO impact measurement',
    'community development results',
    'education impact',
    'healthcare outcomes',
    'clean water access',
    'Uttarakhand development',
    'social welfare impact',
    'Dream Light Welfare Society results'
  ],
  openGraph: {
    title: 'Our Social Impact - Dream Light Welfare Society',
    description: 'Measurable results in community development, education, healthcare, and social welfare across Uttarakhand.',
    type: 'website',
    url: 'https://dreamlightwelfare.org/impact',
    images: [
      {
        url: 'https://dreamlightwelfare.org/images/impact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Light Welfare Society Impact Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Social Impact - Dream Light Welfare Society',
    description: 'Transforming communities through measurable social impact.',
  },
  alternates: {
    canonical: 'https://dreamlightwelfare.org/impact',
  },
};

export default function Impact() {
  return <ImpactPage />;
}