import { AllLanaguagesProps, UserProps } from "@/types/types";
import React, { useState } from "react";
import { LuPen, LuTarget } from "react-icons/lu";
import LanguagesModal from "./LanguagesModal";

export default function LanguagesSection({
  profile,
  allLanguages,
  getProfile,
}: {
  profile: UserProps | null;
  allLanguages: AllLanaguagesProps[];
  getProfile: () => void;
}) {
  const [showLanguagesEditForm, setShowLanguagesEditForm] = useState(false);
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="heading font-bold flex items-center space-x-2">
            <LuTarget className="h-4 w-4 text-[var(--text-hover-color)]" />
            <span>Languages</span>
            <span className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] px-2 py-1 rounded-full paragraph font-medium">
              {profile?.languages.length}
            </span>
          </h2>
          <button
            onClick={() => setShowLanguagesEditForm(true)}
            className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-lg transition-all"
          >
            <LuPen className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-5">
        {(profile?.languages.length || 0) > 0 ? (
          <div className="flex flex-wrap gap-3">
            {profile?.languages?.map((language, index) => (
              <span
                key={index}
                className="inline-flex items-center px-6 py-2 rounded-custom paragraph font-medium bg-blue-100 to-emerald-100 text-purple-800 shadow-custom transition-all"
              >
                {getLanguageNameById(language, allLanguages)}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 space-y-3 text-[var(--found-text)]">
            <LuTarget className="h-12 w-12 mx-auto" />
            <p className="italic">
              Add languages you speak to connect with more people...
            </p>
            <button
              onClick={() => setShowLanguagesEditForm(true)}
              className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-custom cursor-pointer
             hover:shadow-custom hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out 
             animate-fadeIn"
            >
              Add Languages
            </button>
          </div>
        )}
      </div>
      {showLanguagesEditForm && (
        <LanguagesModal
          profile={profile}
          allLanguages={allLanguages}
          getProfile={getProfile}
          onClose={() => setShowLanguagesEditForm(false)}
        />
      )}
    </div>
  );
}
