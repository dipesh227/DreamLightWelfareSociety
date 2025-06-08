import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dream Light Welfare Society - Registered NGO Uttarakhand',
    short_name: 'Dream Light Welfare',
    description: 'Dream Light Welfare Society is a government registered nonprofit organization under Uttarakhand Government dedicated to charitable work, women empowerment, child development, education, and rural development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['nonprofit', 'charity', 'welfare', 'women-empowerment', 'child-development', 'education', 'healthcare', 'rural-development'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}