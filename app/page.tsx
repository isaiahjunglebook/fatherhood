import { Hero } from "@/components/landing/Hero";
import { ResearchStrip } from "@/components/landing/ResearchStrip";
import { ChapterGrid } from "@/components/landing/ChapterGrid";
import { SocialProof } from "@/components/landing/SocialProof";
import { QuizCta } from "@/components/landing/QuizCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchStrip />
      <ChapterGrid />
      <SocialProof />
      <QuizCta />
    </>
  );
}
