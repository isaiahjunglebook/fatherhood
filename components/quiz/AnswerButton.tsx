"use client";

export function AnswerButton({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full min-h-12 cursor-pointer rounded-xl border px-4 py-3.5 text-left text-[15px] leading-snug transition-colors ${
        selected
          ? "border-terracotta bg-terracotta-soft text-ink"
          : "border-line bg-white/60 text-ink-soft hover:border-terracotta/60"
      }`}
    >
      {label}
    </button>
  );
}
