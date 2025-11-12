export default function YogaInstitutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-[var(--secondary-bg)] text-[var(--primary-text)] py-8">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
