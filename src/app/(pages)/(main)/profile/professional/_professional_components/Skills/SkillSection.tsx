'use client'

import { AllSkillsProps, UserProps } from "@/types/types";
import React, { useState } from "react";
import { getSkillNameById } from "@/contexts/Callbacks";
import SkillsModal from "./SkillsModal";
import { Pen, Target } from "lucide-react";

export default function SkillSection({
  profile,
  allSkills,
  getProfile,
}: {
  profile: UserProps | null;
  allSkills: AllSkillsProps[];
  getProfile: () => void;
}) {
  const [showSkillsEditForm, setShowSkillsEditForm] = useState(false);
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="heading font-bold flex items-center space-x-2">
            <Target className="h-4 w-4 text-[var(--text-hover-color)]" />
            <span>Skills</span>
            <span className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] px-2 py-1 rounded-full paragraph font-medium">
              {profile?.skills.length}
            </span>
          </h2>
          <button
            onClick={() => setShowSkillsEditForm(true)}
            className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-lg transition-all"
          >
            <Pen className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-6">
        {(profile?.skills.length || 0) > 0 ? (
          <div className="flex flex-wrap gap-3">
            {profile?.skills?.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-6 py-2 rounded-custom paragraph font-medium bg-blue-100 text-blue-800 shadow-custom transition-all"
              >
                {getSkillNameById(skill, allSkills)}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 space-y-3 text-[var(--found-text)]">
            <Target className="h-12 w-12 mx-auto" />
            <p className="italic">
              Add Skills you speak to connect with more people...
            </p>
            <button
              onClick={() => setShowSkillsEditForm(true)}
              className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-lg cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out 
             animate-fadeIn"
            >
              Add Skills
            </button>
          </div>
        )}
      </div>
      {showSkillsEditForm && (
        <SkillsModal
          profile={profile}
          allSkills={allSkills}
          getProfile={getProfile}
          onClose={() => setShowSkillsEditForm(false)}
        />
      )}
    </div>
  );
}
