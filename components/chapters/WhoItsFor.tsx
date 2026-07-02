import { Card } from "@/components/ui/Card";

export function WhoItsFor({ items }: { items: readonly string[] }) {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
        Who this chapter is for
      </p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
            <span aria-hidden className="mt-[2px] text-terracotta">
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
