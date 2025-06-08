import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="border-b border-blue-200/50 dark:border-blue-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-blue-900 dark:text-blue-100">DLWS Volunteer Portal</h1>
              <p className="text-sm text-blue-700 dark:text-blue-300">Community Service Platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-blue-700 dark:text-blue-300">Welcome, Volunteer</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}