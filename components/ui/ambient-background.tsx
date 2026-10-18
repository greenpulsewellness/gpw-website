// One continuous glow field. The tile repeats vertically, and every glow's radius
// fits entirely inside the tile (centre distance to the top/bottom edge >= radius),
// so it fades to transparent before the edge and stacked sections show no seams.
const TILE = 1800;
const GLOWS = [
  `radial-gradient(circle 450px at 0% 450px, rgba(16,185,129,0.15), transparent)`,
  `radial-gradient(circle 450px at 100% 990px, rgba(5,150,105,0.12), transparent)`,
  `radial-gradient(circle 270px at 25% 1530px, rgba(45,212,191,0.10), transparent)`,
].join(",");

export function AmbientBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundImage: GLOWS, backgroundSize: `100% ${TILE}px`, backgroundRepeat: "repeat-y" }}
    />
  );
}
