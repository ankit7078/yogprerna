'use client'

import { UserProps } from "@/types/types";
import React, { useState } from "react";
import EditAboutModal from "./EditAboutModal";
import { ButtonGroup } from "@/common/ButtonGroup";
import { Pen, User } from "lucide-react";

export default function AboutSection({
  profile,
  getProfile,
}: {
  profile: UserProps | null;
  getProfile: () => void;
}) {
  const [showEditAboutModal, setShowEditAboutModal] = useState(false);
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="sub-heading font-bold flex items-center space-x-2">
            <User className="h-4 w-4 text-[var(--text-hover-color)]" />
            <span>About</span>
          </h2>
          <button
            onClick={() => setShowEditAboutModal(true)}
            className="text-[var(--text-hover-color)] bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
          >
            <Pen className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-5 text-[var(--found-text)]">
        {profile?.about ? (
          <p className=" leading-relaxed paragraph">
            {profile?.about}
          </p>
        ) : (
          <div className="text-center py-10 space-y-3">
            <User className="h-12 w-12 mx-auto" />
            <p className="italic">
              Add information about yourself to help others know you better...
            </p>
            <ButtonGroup label="Add About Info" onClick={() => setShowEditAboutModal(true)} />
          </div>
        )}
      </div>
      {showEditAboutModal && (
        <EditAboutModal
          profile={profile}
          onClose={() => setShowEditAboutModal(false)}
          onSave={getProfile}
        />
      )}
    </div>
  );
}
