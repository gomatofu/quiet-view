import LiveGrid from "@/components/LiveGrid";
import LoFiToggle from "@/components/LoFiToggle";
import FooterPoem from "@/components/FooterPoem";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center px-8 py-6">
          <div>
            <h1 className="text-3xl font-light text-white">
              Quiet View
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Watch the world in real-time
            </p>
          </div>
          <LoFiToggle />
        </header>
        <div className="px-8 pb-8">
          <LiveGrid />
        </div>
        <FooterPoem />
      </div>
    </main>
  );
}