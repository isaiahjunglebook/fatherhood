import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-ink">
        This page isn&rsquo;t on the map.
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-ink-soft">
        The path you&rsquo;re looking for doesn&rsquo;t exist — but yours does.
      </p>
      <div className="mt-8">
        <Button href="/">Back to the start</Button>
      </div>
    </Container>
  );
}
