"use client";

import { useRef, useState } from "react";
import YouTube from "react-youtube";
import { Music } from "lucide-react";

export default function LoFiToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<YT.Player | null>(null);

  /** YouTube が準備できたらプレーヤー参照を保存 */
  const onReady = (event: { target: YT.Player }) => {
    playerRef.current = event.target;
  };

  /** 再生 / 停止トグル */
  const toggleMusic = () => {
    if (!playerRef.current) return;        // まだ初期化前
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();       // ← ユーザー操作直後なのでブロックされない
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* --- UI 部分 ------------------------------------------------ */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50">
        <Music className="h-3.5 w-3.5 text-[#14B8A6] text-accent" />
        <span className="text-sm text-zinc-300">
          Lo-Fi
        </span>
        <button
          onClick={toggleMusic}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background focus:outline-none ${
            isPlaying ? "bg-[#14B8A6]" : "bg-[#333333]"
          }`}
          aria-label={isPlaying ? "Pause lo-fi music" : "Play lo-fi music"}
          aria-checked={isPlaying}
          role="switch"
        >
          <div
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-300 ${
              isPlaying
                ? "translate-x-5 bg-white"
                : "translate-x-0 bg-[#14B8A6]"
            }`}
          />
        </button>
      </div>

      {/* --- 隠しプレーヤー ----------------------------------------- */}
      <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden opacity-0">
        <YouTube
          videoId="jfKfPfyJRdk"
          onReady={onReady}
          opts={{
            playerVars: {
              autoplay: 0,        // ← ここでは 0。クリックで playVideo() する
              controls: 0,
              loop: 1,
              playlist: "jfKfPfyJRdk",
              modestbranding: 1,
              rel: 0,
            },
          }}
        />
      </div>
    </>
  );
}
