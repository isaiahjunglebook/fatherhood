import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="animate-fade text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          For men becoming fathers
        </p>
        <h1 className="animate-rise mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          Fatherhood is not something that happens to you.
          <br />
          <span className="text-terracotta">It&rsquo;s something you prepare for.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          Women get nine months of books, appointments, and other mothers. Men get a
          hospital tour and a joke about sleep. The Initiated Father is the missing
          preparation — a research-backed path from the man you are now through your
          child&rsquo;s seventh year.
        </p>
        <div className="mt-8">
          <Button href="/quiz" className="w-full sm:w-auto">
            {site.cta.quiz}
          </Button>
          <p className="mt-3 text-sm text-ink-faint">{site.cta.quizSub}</p>
        </div>
      </Container>
    </section>
  );
}
