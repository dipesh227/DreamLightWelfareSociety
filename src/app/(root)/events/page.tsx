import { Metadata } from 'next';
import EventsPage from '@/components/pages/EventsPage';

export const metadata: Metadata = {
  title: 'Events & Activities | Dream Light Welfare Society - Community Engagement',
  description: 'Join our upcoming community events, workshops, and volunteer activities. Dream Light Welfare Society organizes impactful events for social welfare and community development in Uttarakhand.',
  keywords: [
    'community events',
    'volunteer activities',
    'social welfare events',
    'NGO workshops',
    'Uttarakhand events',
    'community engagement',
    'charity events',
    'volunteer opportunities',
    'Dream Light Welfare Society events'
  ],
  openGraph: {
    title: 'Community Events & Activities - Dream Light Welfare Society',
    description: 'Participate in meaningful community events and volunteer activities that create positive social impact.',
    type: 'website',
    url: 'https://dreamlightwelfare.org/events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Events & Activities - Dream Light Welfare Society',
    description: 'Join our impactful community events and volunteer activities.',
  },
  alternates: {
    canonical: 'https://dreamlightwelfare.org/events',
  },
};

export default function Events() {
  return <EventsPage />;
}