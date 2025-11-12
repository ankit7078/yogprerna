import { getPropertyDetails } from "@/contexts/Callbacks";
import { ExperienceProps, PropertyProps, UserProps } from "@/types/types";
import React from "react";
import { LuPen } from "react-icons/lu";

export default function ExpereienceList({
  profile,
  handleEdit,
  properties,
  profileProperties,
}: {
  profile: UserProps | null;
  handleEdit: (exp: ExperienceProps) => void;
  properties: PropertyProps[];
  profileProperties: PropertyProps[];
}) {
  return (
    <div>
      <div className="space-y-4 mb-6">
        {profile?.experiences.map((exp, index) => (
          <div key={index} className="bg-[--primary-bg] text-[var(--primary-text)] rounded-custom p-5 shadow-custom">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-custom flex items-center justify-center flex-shrink-0"></div>
                <div>
                  <h3 className="heading font-semibold">
                    {exp.position}
                  </h3>
                  <p className="font-medium">
                    {exp?.property_id
                      ? getPropertyDetails(exp?.property_id, properties)
                          ?.property_name
                      : exp?.property_name_id &&
                        getPropertyDetails(
                          exp?.property_name_id,
                          profileProperties
                        )?.property_name}
                  </p>
                  <p>{exp.location}</p>
                  <p>
                    {new Date(exp.start_date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {exp.currentlyWorking
                      ? "Present"
                      : new Date(exp.end_date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(exp)}
                  className="p-2 rounded-custom transition-all"
                >
                  <LuPen className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
