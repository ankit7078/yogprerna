// app/institutes/[detail]/_detail_property_component/RelatedInstitute.tsx
import React from "react";

const institutes = [
  {
    name: "Kunwar Yoga Classes",
    location: "Dehradun",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Nirvikalp Yog Studio",
    location: "Dehradun",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Palm Trees Yoga Resort",
    location: "Dehradun",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "The Yogatique",
    location: "Dehradun",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const RelatedInstitutes: React.FC = () => {
  return (
    <div className="p-6 mt-4 bg-[var(--primary-color)] text-[var(--primary-color-2)] border border-[var(--link-color)] rounded-xl sm:shadow-sm">
      <h2 className="text-xl font-semibold  mb-4 border-b border-[var(--subprimary-color)] pb-2">
        Related Institutes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {institutes.map((institute, index) => (
          <div
            key={index}
            className="flex items-center p-4 rounded-lg shadow-xs text-[var(--subprimary-color)] hover:shadow-sm bg-[var(--text-primary)] transition duration-200"
          >
            <img
              src={institute.image}
              alt={institute.name}
              className="w-14 h-14 rounded-md object-cover mr-4 border border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold  transition">
                {institute.name}
              </h3>
              <p className="text-sm ">{institute.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedInstitutes;