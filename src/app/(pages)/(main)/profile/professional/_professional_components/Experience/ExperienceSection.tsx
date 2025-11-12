import { PropertyProps, UserProps } from "@/types/types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LuAward, LuCalendar, LuMap, LuPen } from "react-icons/lu";
import EditExperienceModal from "./ExperienceModal";
import API from "@/contexts/API";
import { getPropertyDetails } from "../../../../../../../contexts/Callbacks";
import { ButtonGroup } from "@/common/ButtonGroup";

export default function ExperienceSection({
  profile,
  getProfile,
}: {
  profile: UserProps | null;
  getProfile: () => void;
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [profileProperties, setProfileProperties] = useState<PropertyProps[]>(
    []
  );

  const getProperties = useCallback(async () => {
    try {
      const response = await API.get(`/property`);
      setProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  const getProfileProperties = useCallback(async () => {
    try {
      const response = await API.get(`/profile/properties`);
      setProfileProperties(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProfileProperties();
  }, [getProfileProperties]);

  const groupedExperiences = useMemo(() => {
    if (!profile?.experiences) return [];

    const map = new Map<string, typeof profile.experiences>();

    profile.experiences.forEach((exp) => {
      const key =
        exp.property_id?.toString() ??
        exp.property_name_id?.toString() ??
        exp.position;
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)?.push(exp);
    });

    return Array.from(map.values());
  }, [profile]);

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom  overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4 ">
        <div className="flex items-center justify-between">
          <h2 className="sub-heading font-bold flex items-center space-x-2">
            <LuAward className="h-4 w-4 text-[var(--text-hover-color)]" />
            <span>Experience</span>
            <span className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] px-2 py-1 rounded-full paragraph font-medium">
              {profile?.experiences?.length ?? 0}
            </span>
          </h2>
          <button
            onClick={() => setShowEditModal(true)}
            className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-lg transition-all"
          >
            <LuPen className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-5">
        {groupedExperiences.length > 0 ? (
          <div className="space-y-6">
            {groupedExperiences.map((experiences, index) => {
              const firstExp = experiences[0];

              const propertyName = firstExp.property_id
                ? getPropertyDetails(firstExp.property_id, properties)
                  ?.property_name
                : firstExp.property_name_id
                  ? getPropertyDetails(
                    firstExp.property_name_id,
                    profileProperties
                  )?.property_name
                  : "";

              return (
                <div key={index} className="relative">
                  {index !== groupedExperiences.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-full bg-blue-200 to-transparent"></div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-custom flex items-center justify-center flex-shrink-0 shadow-custom">
                      <span className="text-white font-bold heading"></span>
                    </div>
                    <div className="flex-1 bg-blue-50 rounded-custom p-4 border border-blue-100">
                      <h3 className="font-bold sub-heading">
                        {propertyName || "Unknown Company"}
                      </h3>
                      <div className="space-y-2 mt-2">
                        {experiences.map((expItem, idx) => (
                          <div
                            key={idx}
                            className="border-t border-purple-100 pt-2 first:border-t-0 first:pt-0"
                          >
                            <p className="font-semibold">
                              {expItem.position}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <LuMap className="h-4 w-4" />
                                <span>{expItem.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <LuCalendar className="h-4 w-4" />
                                <span>
                                  {new Date(
                                    expItem.start_date
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                  })}{" "}
                                  {" - "}
                                  {expItem.currentlyWorking
                                    ? "Present"
                                    : new Date(
                                      expItem.end_date
                                    ).toLocaleDateString("en-US", {
                                      month: "short",
                                      year: "numeric",
                                    })}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center space-y-3 py-10  text-[var(--found-text)]">
            <LuAward className="h-12 w-12 mx-auto" />
            <p className="italic">
              Add your work experience to showcase your professional journey...
            </p>
            <ButtonGroup label="Add Experience" onClick={() => setShowEditModal(true)} />
          </div>
        )}
      </div>

      {showEditModal && (
        <EditExperienceModal
          profile={profile}
          getProfile={getProfile}
          onClose={() => setShowEditModal(false)}
          properties={properties}
          profileProperties={profileProperties}
        />
      )}
    </div>
  );
}
