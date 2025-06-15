"use client";

interface LiveIframeProps {
  src: string;
  city: string;
}

export default function LiveIframe({ src, city }: LiveIframeProps) {
  return (
    <iframe
      src={src}
      title={`Live camera view of ${city}`}
      className="absolute inset-0 h-full w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}