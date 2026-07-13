"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import { GalleryLightbox } from "./GalleryLightbox";

interface GalleryCardProps {
  image: string;
  title: string;
}

export function GalleryCard({
  image,
  title,
}: GalleryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-3xl
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Image */}

        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          <div className="flex h-full items-center justify-center">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-slate-900
                shadow-lg
                transition-all
                duration-500
                group-hover:scale-100
                scale-75
              "
            >
              <Search className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Bottom Title */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            translate-y-2
            transition-all
            duration-500
            group-hover:translate-y-0
          "
        >
          <h3
            className="
              text-xl
              font-bold
              tracking-wide
              text-white
            "
          >
            {title}
          </h3>
        </div>
      </div>

      <GalleryLightbox
        open={open}
        image={image}
        title={title}
        onClose={() => setOpen(false)}
      />
    </>
  );
}