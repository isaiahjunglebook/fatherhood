import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-line bg-bone/90 backdrop-blur-sm sticky top-0 z-40">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-1">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden px-3 py-2.5 text-sm text-ink-faint transition-colors hover:text-ink sm:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="ml-2 rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-bone transition-colors hover:bg-terracotta-deep"
          >
            Take the quiz
          </Link>
        </nav>
      </Container>
    </header>
  );
}
