import Image from "next/image";
import { brand } from "@/data/home";
import { cn } from "@/lib/utils";

/** /public/logo-horizontal.png — `light` renders it white for dark/video backgrounds. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={217}
      height={72}
      priority
      className={cn(
        "h-8 w-auto object-contain transition-[filter] duration-500 md:h-10",
        light && "brightness-0 invert",
        className,
      )}
    />
  );
}
