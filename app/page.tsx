import LiveGrid from "@/components/LiveGrid";
import LoFiToggle from "@/components/LoFiToggle";
import FooterPoem from "@/components/FooterPoem";
import BuyMeCoffee from "@/components/BuyMeCoffee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center px-8 py-8" role="banner">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Quiet View
            </h1>
            <p className="text-base text-muted-foreground mt-2" role="doc-subtitle">
              Watch the world in real-time
            </p>
          </div>
          <LoFiToggle />
        </header>
        <section className="px-8 pb-6" role="main" aria-label="Live camera feeds from cities around the world">
          <LiveGrid />
        </section>
        <FooterPoem />
      </div>
      <BuyMeCoffee />
    </main>
  );
}