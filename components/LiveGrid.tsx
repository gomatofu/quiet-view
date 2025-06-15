"use client";

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
    embedUrl: "https://www.youtube-nocookie.com/embed/tujkoXI8rWM?autoplay=1&mute=1&loop=1&controls=0&playlist=tujkoXI8rWM&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "newyork",
    city: "New York",
    country: "USA",
    timezone: "America/New_York",
    embedUrl: "https://www.youtube-nocookie.com/embed/KGuCGd726RA?autoplay=1&mute=1&loop=1&controls=0&playlist=KGuCGd726RA&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "london",
    city: "London",
    country: "UK",
    timezone: "Europe/London",
    embedUrl: "https://www.youtube-nocookie.com/embed/JpWmGX55a40?autoplay=1&mute=1&loop=1&controls=0&playlist=JpWmGX55a40&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    embedUrl: "https://www.youtube-nocookie.com/embed/4qBiwe05Ffs?autoplay=1&mute=1&loop=1&controls=0&playlist=4qBiwe05Ffs&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    embedUrl: "https://www.youtube-nocookie.com/embed/m1P4JTMiUXo?autoplay=1&mute=1&loop=1&controls=0&playlist=m1P4JTMiUXo&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
  {
    id: "saopaulo",
    city: "São Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    embedUrl: "https://www.youtube-nocookie.com/embed/rCFlhvtAB-I?autoplay=1&mute=1&loop=1&controls=0&playlist=rCFlhvtAB-I&modestbranding=1&rel=0&showinfo=0&disablekb=1",
  },
];

export default function LiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {liveCameras.map((camera) => (
        <div
          key={camera.id}
          className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background"
        >
          <iframe
            src={camera.embedUrl}
            title={`Live camera view of ${camera.city}, ${camera.country}. Current time: ${camera.timezone}`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            tabIndex={0}
            role="img"
            aria-label={`Live camera feed from ${camera.city}, ${camera.country}`}
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-zinc-100 px-3 py-2 rounded-sm z-10">
            <h3 className="text-sm font-light tracking-wide">{camera.city}</h3>
            <div className="text-xs opacity-80">
              <Clock timezone={camera.timezone} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
