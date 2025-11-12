import React, { useState } from "react";
import { LuTarget } from "react-icons/lu";
import { UserProps } from "@/types/types";
import ProfileScoreModal from "./ProfileScoreModal";
import ScoreProgress from "./ScoreProgress";

export default function ProfileScore({
  profile,
}: {
  profile: UserProps | null;
}) {
  const [showProgresModal, setShowProgressModal] = useState(false);
  const score = profile?.score ?? 0;

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <h3 className="heading font-bold flex items-center space-x-2">
          <LuTarget className="h-4 w-4 text-[var(--text-hover-color)]" />
          <span>Profile Score</span>
        </h3>
      </div>
      <div className="p-6 text-[var(--found-text)] ">
        <ScoreProgress score={score} />
        <div className="text-center">
          <p>
            {score < 100
              ? "Complete your profile to improve your score"
              : "Your profile is complete!"}
          </p>
          <button
            onClick={() => setShowProgressModal(true)}
            className="mt-4 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-custom cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out  
             animate-fadeIn mx-auto  flex items-center justify-center space-x-2 transition-all"
          >
            {score < 100 ? "Improve Score" : "View Details"}
          </button>
        </div>
      </div>
      {showProgresModal && (
        <ProfileScoreModal profile={profile} onClose={() => setShowProgressModal(false)} />
      )}
    </div>
  );
}
