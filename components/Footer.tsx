"use client";

import Link from "next/link";

export default function Footer() {
  const shareText = "Six quiet windows to the world ✨ Watching live cameras from cities around the globe with lo-fi music for a peaceful moment 🌍";
  const hashtags = "QuietView,LiveCamera,LoFi,Relax,Mindfulness,WorldView";
  const url = "https://quietview.app";

  const handleShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&hashtags=${encodeURIComponent(hashtags)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank', 'width=550,height=420');
  };

  return (
    <footer className="w-full py-8 mt-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400">
          © Quietview —{" "}
          <Link 
            href="/terms" 
            className="hover:text-zinc-200 transition-colors"
          >
            Terms
          </Link>
          {" | "}
          <Link 
            href="/privacy" 
            className="hover:text-zinc-200 transition-colors"
          >
            Privacy
          </Link>
          {" | "}
          <button
            onClick={handleShare}
            className="hover:text-zinc-200 transition-colors"
          >
            Share
          </button>
          {" | "}
          <a
            href="https://x.com/AuNEGqil1FrGWHI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            X
          </a>
          {" | "}
          <a
            href="https://buymeacoffee.com/gomatofu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            Support
          </a>
        </p>
      </div>
    </footer>
  );
}