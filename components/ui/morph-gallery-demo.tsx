"use client";

import MorphGallery, { type MorphItem } from "@/components/ui/morph-gallery";

const ITEMS: MorphItem[] = [
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=200&q=80",
    alt: "Luxury Spa and Thermal Bath Sanctuary",
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=200&q=80",
    alt: "Holistic Yoga & Mindfulness Studio",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=200&q=80",
    alt: "Peaceful Meditation Mountain Retreat",
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=200&q=80",
    alt: "Nordic Cedar Sauna and Cold Plunge",
  },
];

export default function MorphGalleryDemo() {
  return (
    <div className="relative w-full">
      <MorphGallery items={ITEMS} autoplay={4500} loop={true} />
    </div>
  );
}
