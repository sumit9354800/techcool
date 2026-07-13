"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

interface GalleryLightboxProps {
  open: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export function GalleryLightbox({
  open,
  image,
  title,
  onClose,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-sm
      p-6
      "
      onClick={onClose}
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="
        absolute
        right-6
        top-6
        rounded-full
        bg-white
        p-3
        shadow-lg
        transition
        hover:scale-105
        "
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image */}

      <div
        className="
        relative
        w-full
        max-w-5xl
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="border-t border-slate-200 p-6">
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}