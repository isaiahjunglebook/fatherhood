import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { about } from "@/content/method";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why The Initiated Father exists: the preparation men used to get for fatherhood disappeared, and nothing replaced it. This is the replacement.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <SectionHeading eyebrow="The Initiated Father" title={about.title} />
      <div className="mt-6 space-y-4">
        {about.body.map((p) => (
          <p key={p.slice(0, 32)} className="text-[17px] leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/quiz" className="w-full sm:w-auto">
          {site.cta.quiz}
        </Button>
      </div>
    </Container>
  );
}
