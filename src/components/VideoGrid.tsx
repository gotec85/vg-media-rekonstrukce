"use client";

import { useState, useRef } from "react";
import type { VideoItem } from "@/data/services";

type Props = {
  videos: VideoItem[];
};

export default function VideoGrid({ videos }: Props) {
  const [preview, setPreview] = useState<VideoItem | null>(null);
  const gridVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hoveredIndexRef = useRef<number | null>(null);

  function showPreview(v: VideoItem, i: number) {
    gridVideoRefs.current.forEach((vid) => vid?.pause());
    hoveredIndexRef.current = i;
    setPreview(v);
  }

  function hidePreview() {
    gridVideoRefs.current.forEach((vid) => vid?.play().catch(() => {}));
    hoveredIndexRef.current = null;
    setPreview(null);
  }

  const colsClass = videos.length <= 2 ? "grid-cols-2" : videos.length === 3 ? "grid-cols-3" : "grid-cols-4";

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
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none bg-black/70">
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
