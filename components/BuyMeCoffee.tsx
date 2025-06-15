"use client";

import { Coffee } from "lucide-react";

export default function BuyMeCoffee() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://buymeacoffee.com/gomatofu"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black group"
        title="Buy Me A Coffee"
      >
        <Coffee 
          size={20} 
          className="text-black transition-transform duration-200 group-hover:scale-110" 
        />
      </a>
    </div>
  );
}