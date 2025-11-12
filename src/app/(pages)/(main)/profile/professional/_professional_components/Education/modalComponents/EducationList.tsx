// import { getDegreeById, getInstituteById } from "@/contexts/Callbacks";
import {
  AllDegreeAndInstituteProps,
  EducationProps,
  UserProps,
} from "@/types/types";
import React from "react";
import { LuPen } from "react-icons/lu";

export default function EducationList({
  profile,
  handleEdit,
  allDegreeAndInstitute,
}: {
  profile: UserProps | null;
  handleEdit: (edu: EducationProps) => void;
  allDegreeAndInstitute: AllDegreeAndInstituteProps | null;
}) {
  return (
    <div className="space-y-4 mb-6">
      {profile?.education?.map((edu, index) => (
        <div
          key={index}
          className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom p-4 shadow-custom"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-[var(--primary-text)]">
                  {allDegreeAndInstitute &&
                    getDegreeById(edu.institute || 0, allDegreeAndInstitute)}
                </h3>
                <p className=" font-medium">
                  {allDegreeAndInstitute &&
                    getInstituteById(edu.degree || 0, allDegreeAndInstitute)}
                </p>
                <p>
                  {new Date(edu.start_date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {edu.currentlyStuding
                    ? "Present"
                    : new Date(edu.end_date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(edu)}
                className="p-2 rounded-custom transition-all"
              >
                <LuPen className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
