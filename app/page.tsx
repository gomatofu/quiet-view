import LiveGrid from "@/components/LiveGrid";
import LoFiToggle from "@/components/LoFiToggle";
import FooterPoem from "@/components/FooterPoem";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center px-8 py-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Quiet View
            </h1>
            <p className="text-base text-muted-foreground mt-2">
              Watch the world in real-time
            </p>
          </div>
          <LoFiToggle />
        </header>
        <div className="px-8 pb-6">
          <LiveGrid />
        </div>
        <FooterPoem />
      </div>
    </main>
  );
}