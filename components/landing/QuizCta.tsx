import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function QuizCta() {
  return (
    <section>
      <Container className="py-16 text-center">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-ink">
          Find out where you actually stand.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Eleven questions. Your readiness across three dimensions, your father
          archetype, and a chapter-by-chapter map — plus the free starter guide.
        </p>
        <div className="mt-7">
          <Button href="/quiz" className="w-full sm:w-auto">
            {site.cta.quiz}
          </Button>
          <p className="mt-3 text-sm text-ink-faint">{site.cta.quizSub}</p>
        </div>
      </Container>
    </section>
  );
}
