import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Chapter } from "@/lib/quiz/types";

export function LessonBody({ chapter }: { chapter: Chapter }) {
  return (
    <article>
      <SectionHeading eyebrow="Free lesson" title={chapter.lesson.title} />
      <div
        className="prose-tif mt-6"
        // Trusted content authored in content/chapters.ts — no user input.
        dangerouslySetInnerHTML={{ __html: chapter.lesson.html }}
      />
    </article>
  );
}
