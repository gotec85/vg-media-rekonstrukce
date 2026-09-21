"use client";

import { useState } from "react";

type Props = {
  videos: string[];
};

export default function VideoGrid({ videos }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <div className="mt-6 columns-2 gap-3 space-y-3 sm:columns-3">
        {videos.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden rounded-2xl bg-zinc-900 shadow-sm transition-transform duration-300 ease-out hover:scale-105 hover:shadow-xl"
            onMouseEnter={() => setPreview(src)}
            onMouseLeave={() => setPreview(null)}
          >
            <video
              src={src}
              className="w-full"
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
              src={preview}
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
