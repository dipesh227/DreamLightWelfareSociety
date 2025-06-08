import "../globals.css"

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<div className="min-h-screen bg-gradient-to-br from-dream-gold/10 via-dream-purple/10 to-dream-purple/20 dark:from-background dark:via-dream-purple-dark/20 dark:to-dream-purple-dark/30">
    <div className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-foreground">DLWS Volunteer Portal</h1>
            <p className="text-sm text-muted-foreground">Community Service Platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Welcome, Volunteer</span>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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