"use client";

import { Share } from "lucide-react";

export default function XShareButton() {
  const shareText = "Six quiet windows to the world ✨ Watching live cameras from cities around the globe with lo-fi music for a peaceful moment 🌍";
  const hashtags = "QuietView,LiveCamera,LoFi,Relax,Mindfulness,WorldView";
  const url = "https://quietview.app";

  const handleShare = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&hashtags=${encodeURIComponent(hashtags)}&url=${encodeURIComponent(url)}`;
    window.open(tweetUrl, '_blank', 'width=550,height=420');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-700/50 transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background group"
      title="Share on X (Twitter)"
      aria-label="Share Quiet View on X"
    >
      <Share 
        size={16} 
        className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200" 
      />
    </button>
  );
}