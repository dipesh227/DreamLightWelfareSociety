import { Inter } from 'next/font/google'
import './globals.css'
import AdminNavbar from '../components/layout/AdminNavbar'
import AdminSidebar from '../components/layout/AdminSidebar'
import { Toaster } from '../components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard - Dream Light Welfare Society',
  description: 'Administrative dashboard for managing Dream Light Welfare Society operations',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <AdminNavbar />
          <div className="flex">
            <AdminSidebar />
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