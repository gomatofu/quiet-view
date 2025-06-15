// LiveGrid.tsx – updated city & time overlay for a more modern, cohesive look
"use client";

import dynamic from "next/dynamic";
import Clock from "./Clock";

interface LiveCamera {
  id: string;
  city: string;
  country: string;
  timezone: string;
  embedUrl: string;
}

const liveCameras: LiveCamera[] = [
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    timezone: "Asia/Tokyo",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/tujkoXI8rWM?autoplay=1&mute=1&loop=1&controls=0&playlist=tujkoXI8rWM&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "newyork",
    city: "New York",
    country: "USA",
    timezone: "America/New_York",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/KGuCGd726RA?autoplay=1&mute=1&loop=1&controls=0&playlist=KGuCGd726RA&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "london",
    city: "London",
    country: "UK",
    timezone: "Europe/London",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/JpWmGX55a40?autoplay=1&mute=1&loop=1&controls=0&playlist=JpWmGX55a40&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/4qBiwe05Ffs?autoplay=1&mute=1&loop=1&controls=0&playlist=4qBiwe05Ffs&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/m1P4JTMiUXo?autoplay=1&mute=1&loop=1&controls=0&playlist=m1P4JTMiUXo&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "saopaulo",
    city: "São Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    embedUrl:
      "https://www.youtube-nocookie.com/embed/rCFlhvtAB-I?autoplay=1&mute=1&loop=1&controls=0&playlist=rCFlhvtAB-I&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
];

// Dynamically import to ensure client‑side rendering only, avoiding SSR issues with iframe
const LiveIframe = dynamic(() => import("./LiveIframe"), { ssr: false });

export default function LiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {liveCameras.map((camera) => (
        <figure
          key={camera.id}
          className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background"
        >
          <LiveIframe src={camera.embedUrl} city={camera.city} />

          {/* Gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent z-10" />

          {/* City name and time label */}
          <figcaption className="absolute bottom-3 left-4 z-20 text-zinc-100">
            <div className="text-sm font-semibold tracking-wide">{camera.city}</div>
            <div className="text-xs opacity-80">
              <Clock timezone={camera.timezone} />
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

