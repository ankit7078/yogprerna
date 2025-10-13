// app/institutes/[detail]/page.tsx
import UniversityCard from "./_detail_property_component/UniversityCard";
import CourseDetails from "./_detail_property_component/CourseDetails";
import RelatedInstitute from "./_detail_property_component/RelatedInstitute";

function DetailPage() {
  return (
    <div className="min-h-screen bg-[var(--text-primary)]">
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-0 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left column with sticky UniversityCard */}
          <div className="lg:col-span-1">
            <div className="sticky top-10">
              <UniversityCard />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-0">
            <CourseDetails />
            <RelatedInstitute />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailPage;