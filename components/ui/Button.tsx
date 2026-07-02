import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-terracotta text-bone hover:bg-terracotta-deep disabled:opacity-60 disabled:hover:bg-terracotta",
  outline: "border border-ink/20 text-ink hover:border-ink/50",
  ghost: "text-ink-faint hover:text-ink",
};

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors cursor-pointer";

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
