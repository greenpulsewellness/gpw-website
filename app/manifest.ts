import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GreenPulse Wellness",
    short_name: "GreenPulse",
    description: "Commercial recovery, rehabilitation and longevity equipment for wellness destinations across India.",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/loop-mark.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
