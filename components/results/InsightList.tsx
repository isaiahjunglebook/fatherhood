import { Card } from "@/components/ui/Card";
import type { Insight } from "@/lib/quiz/types";

export function InsightList({ insights }: { insights: Insight[] }) {
  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <Card key={insight.id}>
          <p className="font-serif text-lg font-semibold leading-snug text-ink">
            {insight.title}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{insight.body}</p>
        </Card>
      ))}
    </div>
  );
}
