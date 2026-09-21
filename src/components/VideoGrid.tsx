"use client";

import { useState } from "react";
import type { VideoItem } from "@/data/services";

type Props = {
  videos: VideoItem[];
};

export default function VideoGrid({ videos }: Props) {
  const [preview, setPreview] = useState<VideoItem | null>(null);

  return (
    <>
      <div className="mt-6 grid grid-cols-4 gap-3">
        {videos.map((v, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-zinc-900 shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setPreview(v)}
            onMouseLeave={() => setPreview(null)}
          >
            <video
              src={v.src}
              style={{ aspectRatio: v.aspect }}
              className="w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <div className="relative max-h-[90vh] max-w-sm w-full drop-shadow-2xl">
            <video
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
