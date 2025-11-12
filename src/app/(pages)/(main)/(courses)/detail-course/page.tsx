import UniversityCard from "./detail-institutes/_detail_property_component/UniversityCard";
import CourseDetails from "./detail-institutes/_detail_property_component/CourseDetails";
import RelatedInstitute from "./detail-institutes/_detail_property_component/RelatedInstitute";

function DetailPage() {
  return (
    <div className="bg-[var(--secondary-bg)]">
      <main className="max-w-7xl mx-auto px-2 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="sticky top-17">
              <UniversityCard />
            </div>
          </div>

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