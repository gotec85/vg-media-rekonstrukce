"use client";

import { useState } from "react";
import type { VideoItem } from "@/data/services";

type Props = {
  videos: VideoItem[];
};

const MAX_COLS = 4;

export default function VideoGrid({ videos }: Props) {
  const [preview, setPreview] = useState<VideoItem | null>(null);

  // Group by aspect ratio, preserve insertion order of groups
  const groups: { aspect: VideoItem["aspect"]; items: VideoItem[] }[] = [];
  for (const v of videos) {
    const existing = groups.find((g) => g.aspect === v.aspect);
    if (existing) {
      existing.items.push(v);
    } else {
      groups.push({ aspect: v.aspect, items: [v] });
    }
  }

  return (
    <>
      <div className="mt-6 space-y-3">
        {groups.map((group) => (
          <div
            key={group.aspect}
            className={`grid gap-3 grid-cols-${Math.min(group.items.length, MAX_COLS)}`}
            style={{ gridTemplateColumns: `repeat(${Math.min(group.items.length, MAX_COLS)}, minmax(0, ${100 / MAX_COLS}%))` }}
          >
            {group.items.map((v, i) => (
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
