import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-light text-foreground mb-6">
          This window seems to be closed
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. But you can still find peace 
          watching the world through our six quiet windows.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background focus:outline-none"
          aria-label="Return to homepage"
        >
          Return to Quiet View
        </Link>
        
        {/* Decorative dots */}
        <div className="mt-12 flex justify-center gap-4 opacity-40">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </main>
  );
}