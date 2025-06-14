"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    embedUrl: "https://www.youtube.com/embed/QOjmvL3e7Lc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "newyork",
    city: "New York",
    country: "USA",
    timezone: "America/New_York",
    embedUrl: "https://www.youtube.com/embed/KGuCGd726RA?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "london",
    city: "London",
    country: "UK",
    timezone: "Europe/London",
    embedUrl: "https://www.youtube.com/embed/JpWmGX55a40?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    embedUrl: "https://www.youtube.com/embed/4qBiwe05Ffs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    embedUrl: "https://www.youtube.com/embed/m1P4JTMiUXo?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
  {
    id: "saopaulo",
    city: "São Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    embedUrl: "https://www.youtube.com/embed/rCFlhvtAB-I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0",
  },
];

export default function LiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {liveCameras.map((camera) => (
        <div key={camera.id} className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden">
          <iframe
            src={camera.embedUrl}
            title={`${camera.city} Live Camera`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute bottom-6 left-6">
            <h3 className="text-xl font-medium text-white mb-1">
              {camera.city}
            </h3>
            <Clock timezone={camera.timezone} />
          </div>
        </div>
      ))}
    </div>
  );
}