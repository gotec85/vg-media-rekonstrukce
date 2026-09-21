"use client";

import { useState, useRef } from "react";
import type { VideoItem } from "@/data/services";

type Props = {
  videos: VideoItem[];
  extraIframe?: { src: string; aspect: string };
};

export default function VideoGrid({ videos, extraIframe }: Props) {
  const [preview, setPreview] = useState<VideoItem | null>(null);
  const gridVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hoveredIndexRef = useRef<number | null>(null);

  function showPreview(v: VideoItem, i: number) {
    // pause grid video so it doesn't play in background
    const gridVid = gridVideoRefs.current[i];
    if (gridVid) gridVid.pause();
    hoveredIndexRef.current = i;
    setPreview(v);
  }

  function hidePreview() {
    // resume grid video
    const i = hoveredIndexRef.current;
    if (i !== null) {
      const gridVid = gridVideoRefs.current[i];
      if (gridVid) gridVid.play().catch(() => {});
    }
    hoveredIndexRef.current = null;
    setPreview(null);
  }

  const totalItems = videos.length + (extraIframe ? 1 : 0);
  const colsClass =
    totalItems <= 2 ? "grid-cols-2" : totalItems === 3 ? "grid-cols-3" : "grid-cols-4";

  return (
    <>
      <div className={`mt-6 grid ${colsClass} gap-3`}>
        {videos.map((v, i) => (
          <div
            key={i}
            style={{ aspectRatio: v.aspect }}
            className="overflow-hidden rounded-2xl bg-zinc-900 shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => showPreview(v, i)}
            onMouseLeave={hidePreview}
          >
            <video
              ref={(el) => {
                gridVideoRefs.current[i] = el;
              }}
              src={v.src}
              className="w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
        {extraIframe && (
          <div
            style={{ aspectRatio: extraIframe.aspect }}
            className="overflow-hidden rounded-2xl bg-zinc-900 shadow-sm"
          >
            <iframe
              src={extraIframe.src}
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
              title="AI video ukázka"
            />
          </div>
        )}
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="relative max-h-[90vh] max-w-sm w-full drop-shadow-2xl">
            <video
              key={preview.src}
              ref={(el) => {
                if (!el) return;
                el.currentTime = 0;
                el.volume = 1;
                el.muted = false;
                el.play().catch(() => {
                  el.muted = true;
                });
              }}
              src={preview.src}
              style={{ aspectRatio: preview.aspect }}
              className="h-auto max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
