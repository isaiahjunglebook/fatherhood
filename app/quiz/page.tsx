import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { QuizFlow } from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "The Readiness Quiz",
  description:
    "Eleven questions, three minutes. Your fatherhood readiness across three dimensions, your archetype, and your personal chapter map.",
  openGraph: {
    images: [{ url: "/og/quiz.png", width: 1200, height: 630 }],
  },
};

export default function QuizPage() {
  return (
    <Container className="py-10 sm:py-14">
      <QuizFlow />
    </Container>
  );
}
