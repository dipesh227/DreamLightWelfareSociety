import { Inter } from 'next/font/google'
import './globals.css'
import VolunteerNavbar from '../components/layout/VolunteerNavbar'
import VolunteerSidebar from '../components/layout/VolunteerSidebar'
import { Toaster } from '../components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Volunteer Dashboard - Dream Light Welfare Society',
  description: 'Volunteer dashboard for Dream Light Welfare Society volunteers',
}

export default function VolunteerLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <VolunteerNavbar />
          <div className="flex">
            <VolunteerSidebar />
            <main className="flex-1 ml-64 pt-16">
              <div className="p-6">
                {children}
              </div>
            </main>
          </div>
          <Toaster />
        </div>
      </body>
    </html>
  )
}