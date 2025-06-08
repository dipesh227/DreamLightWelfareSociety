import { Metadata } from 'next';
import GalleryPage from '@/components/pages/GalleryPage';

export const metadata: Metadata = {
  title: 'Photo Gallery | Dream Light Welfare Society - Our Impact in Pictures',
  description: 'Explore our photo gallery showcasing community impact, volunteer activities, and social welfare programs. See how Dream Light Welfare Society is making a difference in Uttarakhand communities.',
  keywords: [
    'NGO photo gallery',
    'community impact photos',
    'volunteer activities',
    'social welfare pictures',
    'Uttarakhand NGO gallery',
    'charity work photos',
    'community development images',
    'Dream Light Welfare Society gallery'
  ],
  openGraph: {
    title: 'Photo Gallery - Dream Light Welfare Society Impact',
    description: 'Visual stories of our community impact and volunteer activities making a difference in lives.',
    type: 'website',
    url: 'https://dreamlightwelfare.org/gallery',
    images: [
      {
        url: 'https://dreamlightwelfare.org/images/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Light Welfare Society Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery - Dream Light Welfare Society',
    description: 'Visual stories of community impact and positive change.',
  },
  alternates: {
    canonical: 'https://dreamlightwelfare.org/gallery',
  },
};

export default function Gallery() {
  return <GalleryPage />;
}