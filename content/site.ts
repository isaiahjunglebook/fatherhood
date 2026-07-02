export const site = {
  name: "The Initiated Father",
  shortName: "Initiated Father",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-initiated-father.vercel.app",
  tagline: "Fatherhood is not something that happens to you. It's something you prepare for.",
  description:
    "A research-backed preparation path for men becoming fathers — from the man you are now through your child's seventh year. Take the readiness quiz and get your personal map.",
  nav: [
    { href: "/chapters/the-man", label: "Chapters" },
    { href: "/method", label: "The Method" },
    { href: "/about", label: "About" },
  ],
  cta: {
    quiz: "Take the readiness quiz",
    quizSub: "11 questions · 3 minutes · free",
  },
  footer: {
    line: "Made for the men who want to be ready.",
    disclaimer:
      "The Initiated Father is education, not medical or mental-health treatment. If you're struggling, talk to a professional.",
    crisis:
      "Crisis support: call or text 988 (Suicide & Crisis Lifeline) · Postpartum Support International helpline: 1-800-944-4773 (dads too).",
  },
  ebookPath: "/ebook/the-initiated-father-starter.pdf",
  ebookTitle: "The Initiated Father: Starter Guide",
} as const;
