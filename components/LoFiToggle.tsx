"use client";

import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";

export default function LoFiToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("https://stream.lofi.cafe/radio/8bit/lofi.cafe_8bit.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Failed to play audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900">
      <Music className="h-4 w-4 text-zinc-300" />
      <span className="text-sm text-zinc-300">Lo-Fi</span>
      <button
        onClick={toggleMusic}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
          isPlaying ? "bg-emerald-400" : "bg-zinc-800"
        }`}
        aria-label="Toggle lo-fi music"
      >
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 ${
            isPlaying 
              ? "translate-x-6 bg-white" 
              : "translate-x-0 bg-zinc-600"
          }`}
        />
      </button>
    </div>
  );
}