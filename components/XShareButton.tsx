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
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-200 group text-xs"
      title="Share on X (Twitter)"
      aria-label="Share Quiet View on X"
    >
      <Share 
        size={12} 
        className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200" 
      />
      <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
        Share
      </span>
    </button>
  );
}