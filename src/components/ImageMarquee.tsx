"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageMarquee({ images, alt }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const repeated = [...Array(3).fill(images).flat(), ...Array(3).fill(images).flat()];

  return (
    <>
      <div className="marquee-fade relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-x-hidden overflow-y-visible py-3">
        <div className="animate-marquee-slow flex w-max items-center gap-4 px-6 hover:[animation-play-state:paused] sm:gap-6">
          {repeated.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setLightbox(image)}
              className="relative aspect-square w-36 flex-shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-100 shadow-sm transition-transform duration-300 ease-out hover:z-20 hover:scale-110 hover:shadow-2xl sm:w-48"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="200px"
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90vh] max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt={alt}
              width={800}
              height={1000}
              className="h-auto max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg text-zinc-700 hover:text-zinc-900"
              aria-label="Zavřít"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
