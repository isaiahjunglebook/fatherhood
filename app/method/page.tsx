import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { method } from "@/content/method";

export const metadata: Metadata = {
  title: "The Method & Sources",
  description:
    "How the readiness quiz works, the three dimensions it measures, and the published research behind every lesson.",
};

export default function MethodPage() {
  return (
    <Container className="py-12 sm:py-16">
      <SectionHeading eyebrow="How it works" title={method.title} />
      <div className="mt-6 space-y-4">
        {method.intro.map((p) => (
          <p key={p.slice(0, 32)} className="text-[17px] leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {method.dimensions.map((d) => (
          <Card key={d.name}>
            <p className="font-serif text-lg font-semibold text-ink">{d.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <SectionHeading eyebrow="The receipts" title="Sources" />
        <div className="mt-6 space-y-8">
          {method.sources.map((group) => (
            <div key={group.area}>
              <p className="font-semibold text-ink">{group.area}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink-faint">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl border-2 border-line bg-white/60 p-6">
        <p className="font-serif text-xl font-semibold text-ink">
          {method.disclaimer.title}
        </p>
        <div className="mt-3 space-y-3">
          {method.disclaimer.body.map((p) => (
            <p key={p.slice(0, 32)} className="text-[15px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {method.disclaimer.resources.map((r) => (
            <li key={r} className="text-[15px] font-medium text-ink">
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
