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
    <div className="p-6 m-2 sm:m-0 sm:mt-4 bg-[var(--primary-bg)] text-[var(--secondary-text)] rounded-custom shadow-custom">
      <h2 className="heading font-semibold  mb-4 border-b border-[var(--primary-border)] pb-2">
        Related Institutes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {institutes.map((institute, index) => (
          <div
            key={index}
            className="flex items-center p-3 rounded-custom shadow-custom text-[var(--primary-text)] hover:shadow-sm bg-[var(--secondary-bg)] transition duration-200"
          >
            <img
              src={institute.image}
              alt={institute.name}
              className="w-14 h-14 rounded-md object-cover mr-4"
            />
            <div>
              <h3 className="sub-heading font-semibold transition">
                {institute.name}
              </h3>
              <p>{institute.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedInstitutes;