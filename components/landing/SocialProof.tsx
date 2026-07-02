import { Container } from "@/components/layout/Container";

export function SocialProof() {
  return (
    <section className="border-b border-line bg-ink text-bone">
      <Container className="py-16">
        <blockquote className="font-serif text-2xl font-medium leading-snug sm:text-3xl">
          &ldquo;Most cultures in history treated the passage into fatherhood as an
          initiation — something a man was deliberately prepared for by other men.
          Then, quietly, we stopped. This is the modern version of that old idea.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm text-bone/60">
          The premise, from{" "}
          <a href="/about" className="underline underline-offset-2 hover:text-bone">
            why this exists
          </a>
        </p>
        <div className="mt-10 grid gap-6 border-t border-bone/10 pt-8 text-sm text-bone/70 sm:grid-cols-3">
          <p>
            <strong className="text-bone">Honest assessment.</strong> Eleven questions,
            three dimensions, no participation trophies.
          </p>
          <p>
            <strong className="text-bone">A personal map.</strong> Your archetype, your
            chapter order, your specific blind spots.
          </p>
          <p>
            <strong className="text-bone">Research, not vibes.</strong> Every lesson
            cites its sources. No pastels, no drill-sergeant cosplay.
          </p>
        </div>
      </Container>
    </section>
  );
}
