import type { GlyphId } from "@/lib/quiz/types";

/**
 * The chapter marks — one minimal geometric glyph per threshold. Stroke-only,
 * drawn in currentColor on a 64×64 grid so they read as one family at any
 * size. Reused on The Path, and available to chapter pages / OG images later.
 */
const marks: Record<GlyphId, React.ReactNode> = {
  // A figure standing — a single vertical with a grounded base.
  man: (
    <>
      <path d="M32 10v38" />
      <path d="M20 52h24" />
    </>
  ),
  // Vesica piscis — two circles intersecting.
  conception: (
    <>
      <circle cx="26" cy="32" r="13" />
      <circle cx="38" cy="32" r="13" />
    </>
  ),
  // A smaller circle carried inside a larger one.
  pregnancy: (
    <>
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="36" r="7" />
    </>
  ),
  // Sunrise over the horizon.
  arrival: (
    <>
      <path d="M12 42h40" />
      <path d="M20 42a12 12 0 0 1 24 0" />
    </>
  ),
  // Two rings, interlocked side by side.
  bond: (
    <>
      <circle cx="25" cy="32" r="10" />
      <circle cx="39" cy="32" r="10" />
    </>
  ),
  // An ascending constellation, ending in an open point.
  guide: (
    <>
      <path d="M14 50l10-7 9-9 8-11" />
      <circle cx="14" cy="50" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="24" cy="43" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="33" cy="34" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="41" cy="23" r="1.75" fill="currentColor" stroke="none" />
      <circle cx="47" cy="14" r="3.5" />
    </>
  ),
};

export function ChapterGlyph({
  glyph,
  className = "",
}: {
  glyph: GlyphId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {marks[glyph]}
    </svg>
  );
}
