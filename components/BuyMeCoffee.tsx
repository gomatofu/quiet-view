"use client";

import Image from "next/image";

export default function BuyMeCoffee() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://buymeacoffee.com/gomatofu"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          width={200}
          height={60}
          className="rounded-lg shadow-lg"
          priority
        />
      </a>
    </div>
  );
}