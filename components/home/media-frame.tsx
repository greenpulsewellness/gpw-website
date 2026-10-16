"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { MediaSlot } from "@/data/home";
import { cn } from "@/lib/utils";
import { skipImageOptimization } from "@/lib/sanity/image";
import { LazyVideo } from "./lazy-video";

type MediaFrameProps = {
  media: MediaSlot;
  /** next/image sizes hint */
  sizes?: string;
  className?: string;
  /** Placeholder colouring: oat (default), wood, or pine for video sections */
  tone?: "oat" | "wood" | "pine";
  /** Where the placeholder label sits */
  labelPosition?: "center" | "top-right";
  /** Hide the placeholder label (tiny thumbnails) */
  compact?: boolean;
  /** Load video immediately (above the fold) */
  eager?: boolean;
  /** Controlled video playback; omit to autoplay in view */
  playing?: boolean;
};

/**
 * Fills its (relative, sized) parent with the slot's image or video.
 * With no `src` yet, renders a labelled oat/wood placeholder frame.
 */
export function MediaFrame({
  media,
  sizes = "100vw",
  className,
  tone = "oat",
  labelPosition = "center",
  compact = false,
  eager = false,
  playing,
}: MediaFrameProps) {
  const [imgError, setImgError] = useState(false);
  const isExternal = skipImageOptimization(media.src);

  useEffect(() => {
    setImgError(false);
  }, [media.src]);

  if (media.src && media.kind === "image" && !imgError) {
    return (
      <Image
        key={media.src}
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={eager}
        loading={eager ? undefined : "lazy"}
        unoptimized={isExternal}
        className={cn("object-cover", className)}
        onError={() => setImgError(true)}
      />
    );
  }
  if (media.src && media.kind === "video") {
    return (
      <LazyVideo src={media.src} poster={media.poster} eager={eager} playing={playing} className={className} />
    );
  }
  return (
    <MediaPlaceholder
      media={media}
      tone={tone}
      labelPosition={labelPosition}
      compact={compact}
      className={className}
    />
  );
}

const tones = {
  oat: { bg: "bg-[#0d0d0d]", frame: "border-white/10", text: "text-neutral-400", meta: "text-neutral-500" },
  wood: { bg: "bg-[#141414]", frame: "border-white/15", text: "text-neutral-300", meta: "text-neutral-400" },
  pine: { bg: "bg-black", frame: "border-white/15", text: "text-white/80", meta: "text-neutral-400" },
};

function MediaPlaceholder({
  media,
  tone,
  labelPosition,
  compact,
  className,
}: {
  media: MediaSlot;
  tone: NonNullable<MediaFrameProps["tone"]>;
  labelPosition: NonNullable<MediaFrameProps["labelPosition"]>;
  compact: boolean;
  className?: string;
}) {
  const t = tones[tone];
  const inset = compact ? "inset-1.5" : "inset-3 sm:inset-4";
  return (
    <div
      role={media.alt ? "img" : undefined}
      aria-label={media.alt || undefined}
      aria-hidden={media.alt ? undefined : true}
      className={cn("absolute inset-0 overflow-hidden", t.bg, className)}
    >
      {/* viewfinder frame + corner ticks */}
      <div className={cn("absolute rounded-[inherit] border", inset, t.frame)} />
      {!compact && (
        <>
          <Corner className="left-3 top-3 sm:left-4 sm:top-4" tone={t.frame} />
          <Corner className="right-3 top-3 rotate-90 sm:right-4 sm:top-4" tone={t.frame} />
          <Corner className="bottom-3 right-3 rotate-180 sm:bottom-4 sm:right-4" tone={t.frame} />
          <Corner className="bottom-3 left-3 -rotate-90 sm:bottom-4 sm:left-4" tone={t.frame} />
          <div
            className={cn(
              "absolute flex p-6",
              labelPosition === "center"
                ? "inset-0 items-center justify-center text-center"
                : "right-4 top-24 max-w-[16rem] text-right sm:right-8 md:top-28",
            )}
          >
            <div className="label-mono">
              <span className={cn("block", t.text)}>{media.label}</span>
              <span className={cn("mt-1.5 block", t.meta)}>
                {media.kind} · {media.aspect}
                {media.duration ? ` · ${media.duration}` : ""}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Corner({ className, tone }: { className?: string; tone: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("absolute size-3 border-l-2 border-t-2", tone, className)}
    />
  );
}
