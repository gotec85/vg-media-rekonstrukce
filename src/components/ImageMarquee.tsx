"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  reverse?: boolean;
};

export default function ImageMarquee({ images, alt, reverse = false }: Props) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const repeated = [...Array(3).fill(images).flat(), ...Array(3).fill(images).flat()];

  return (
    <>
      <div className="marquee-fade relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-x-hidden overflow-y-visible py-3">
        <div className={`${reverse ? "animate-marquee-reverse" : "animate-marquee-slow"} flex w-max items-center gap-4 px-6 hover:[animation-play-state:paused] sm:gap-6`}>
          {repeated.map((image, index) => (
            <div
              key={`${image}-${index}`}
              onMouseEnter={() => setLightbox(image)}
              onMouseLeave={() => setLightbox(null)}
              className="relative aspect-square w-36 flex-shrink-0 overflow-hidden rounded-2xl bg-zinc-100 shadow-sm transition-transform duration-300 ease-out hover:z-20 hover:scale-110 hover:shadow-2xl sm:w-48"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div className="relative max-h-[90vh] max-w-2xl w-full drop-shadow-2xl">
            <Image
              src={lightbox}
              alt={alt}
              width={800}
              height={1000}
              className="h-auto max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
