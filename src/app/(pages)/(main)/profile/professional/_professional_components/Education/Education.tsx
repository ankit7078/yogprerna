import { AllDegreeAndInstituteProps, UserProps } from "@/types/types";
import React, { useState } from "react";
import { LuCalendar, LuPen, LuTarget } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import EducationModal from "./EducationModal";
import { ButtonGroup } from "@/common/ButtonGroup";

export default function EducationSection({
  profile,
  allDegreeAndInstitute,
  getProfile,
}: {
  profile: UserProps | null;
  allDegreeAndInstitute: AllDegreeAndInstituteProps | null;
  getProfile: () => void;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom  overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="heading font-bold flex items-center space-x-2">
            <PiStudent className="h-4 w-4 text-[var(--text-hover-color)]" />
            <span>Education</span>
            <span className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] px-2 py-1 rounded-full paragraph font-medium">
              {profile?.education?.length}
            </span>
          </h2>
          <button
            onClick={() => setShowEditModal(true)}
            className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
          >
            <LuPen className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-5">
        {(profile?.education?.length || 0) > 0 ? (
          <div className="space-y-4">
            {profile?.education?.map((edu, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 rounded-custom p-5"
              >
                <div className="w-14 h-14 rounded-custom flex items-center justify-center flex-shrink-0 shadow-custom"></div>
                <div className="flex-1">
                  <h3 className="font-bold heading">
                    {allDegreeAndInstitute &&
                      getInstituteById(
                        edu?.institute || 0,
                        allDegreeAndInstitute
                      )}
                  </h3>
                  <p className=" font-medium">
                    {allDegreeAndInstitute &&
                      getDegreeById(edu.degree || 0, allDegreeAndInstitute)}
                  </p>
                  <div className="flex items-center space-x-4 mt-2 paragraph">
                    <div className="flex items-center space-x-1">
                      <LuCalendar className="h-4 w-4" />
                      <span>
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
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 space-y-3 text-[var(--found-text)]">
            <LuTarget className="h-12 w-12 mx-auto" />
            <p className="italic">
              Add your education details to highlight your academic
              background...
            </p>
            <ButtonGroup label="Add Education" onClick={() => setShowEditModal(true)} />
          </div>
        )}
      </div>
      {showEditModal && (
        <EducationModal
          profile={profile}
          onClose={() => setShowEditModal(false)}
          allDegreeAndInstitute={allDegreeAndInstitute}
          getProfile={getProfile}
        />
      )}
    </div>
  );
}
