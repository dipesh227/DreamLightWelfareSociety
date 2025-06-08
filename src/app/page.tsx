import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dream Light Welfare Society</h1>
          <ThemeToggle />
        </header>
        
        <main className="space-y-6">
          <div className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Welcome to our platform</h2>
            <p className="text-muted-foreground">
              This is a demo page to showcase the dark and light theme toggle functionality.
              The theme persists across page reloads and follows your system preference by default.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Light Theme</h3>
              <p className="text-secondary-foreground">
                Clean and bright interface for daytime usage.
              </p>
            </div>
            
            <div className="bg-accent p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Dark Theme</h3>
              <p className="text-accent-foreground">
                Easy on the eyes for nighttime or low-light environments.
              </p>
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-muted-foreground text-sm">
              Toggle the theme using the button in the top right corner.
              The theme will be saved and applied when you return to the site.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
