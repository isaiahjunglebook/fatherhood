"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
  href: string;
  label: string;
  isActive: (pathname: string) => boolean;
  icon: React.ReactNode;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const tabs: Tab[] = [
  {
    href: "/",
    label: "Home",
    isActive: (p) => p === "/",
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    href: "/chapters",
    label: "Chapters",
    isActive: (p) => p.startsWith("/chapters"),
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 6.5c-1.5-1.7-3.8-2.5-6.5-2.5H4v14h1.5c2.7 0 5 .8 6.5 2.5 1.5-1.7 3.8-2.5 6.5-2.5H20V4h-1.5c-2.7 0-5 .8-6.5 2.5Z" />
        <path d="M12 6.5v14" />
      </svg>
    ),
  },
  {
    href: "/quiz",
    label: "Quiz",
    isActive: (p) => p.startsWith("/quiz") || p.startsWith("/results"),
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    ),
  },
  {
    href: "/method",
    label: "Method",
    isActive: (p) => p.startsWith("/method") || p.startsWith("/about"),
    icon: (
      <svg {...iconProps} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </svg>
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="App navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bone/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-4">
        {tabs.map((tab) => {
          const active = tab.isActive(pathname);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                active ? "text-terracotta-deep" : "text-ink-faint hover:text-ink"
              }`}
            >
              {tab.icon}
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
