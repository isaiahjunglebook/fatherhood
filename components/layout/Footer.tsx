import Link from "next/link";
import { site } from "@/content/site";
import { chapters } from "@/content/chapters";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-ink text-bone">
      <Container className="py-12">
        <p className="font-serif text-xl font-semibold">{site.name}</p>
        <p className="mt-1 text-sm text-bone/60">{site.footer.line}</p>

        <div className="mt-8 grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="mb-3 font-semibold text-bone/80">Chapters</p>
            <ul className="space-y-2">
              {chapters.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/chapters/${c.slug}`}
                    className="text-bone/60 transition-colors hover:text-bone"
                  >
                    {c.number}. {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-bone/80">Explore</p>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="text-bone/60 transition-colors hover:text-bone">
                  The readiness quiz
                </Link>
              </li>
              <li>
                <Link href="/method" className="text-bone/60 transition-colors hover:text-bone">
                  The method &amp; sources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-bone/60 transition-colors hover:text-bone">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-2 border-t border-bone/10 pt-6 text-xs leading-relaxed text-bone/40">
          <p>{site.footer.disclaimer}</p>
          <p>{site.footer.crisis}</p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
