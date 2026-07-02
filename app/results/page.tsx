import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { ResultsView } from "@/components/results/ResultsView";

export const metadata: Metadata = {
  title: "Your Readiness Map",
  description:
    "Your fatherhood archetype, your scores across three dimensions, and your personalized chapter sequence.",
  robots: { index: false },
  openGraph: {
    images: [{ url: "/og/results.png", width: 1200, height: 630 }],
  },
};

export default function ResultsPage() {
  return (
    <Container className="py-10 sm:py-14">
      <Suspense>
        <ResultsView />
      </Suspense>
    </Container>
  );
}
