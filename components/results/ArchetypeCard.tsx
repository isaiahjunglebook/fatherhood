import type { Archetype } from "@/lib/quiz/types";

export function ArchetypeCard({ archetype }: { archetype: Archetype }) {
  return (
    <section className="rounded-2xl bg-ink p-6 text-bone sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
        Your archetype
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
        {archetype.name}
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed text-bone/80">{archetype.essence}</p>
    </section>
  );
}
