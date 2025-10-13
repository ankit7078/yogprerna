export default function YogaInstitutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
