export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl font-semibold leading-tight text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
