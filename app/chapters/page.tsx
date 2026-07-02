import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ChapterHub } from "@/components/chapters/ChapterHub";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "The six chapters of The Initiated Father — from the man you are now through your child's seventh year. Your progress is saved on this device.",
};

export default function ChaptersPage() {
  return (
    <Container className="py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
        The path
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Six chapters, from the man to the father
      </h1>
      <p className="mt-4 max-w-xl text-ink-soft">
        Work through them in the order your{" "}
        <a href="/quiz" className="font-semibold text-terracotta-deep underline underline-offset-2 hover:text-terracotta">
          readiness quiz
        </a>{" "}
        gives you — or start anywhere. Your progress is saved on this
        device.
      </p>
      <div className="mt-10">
        <ChapterHub />
      </div>
    </Container>
  );
}
