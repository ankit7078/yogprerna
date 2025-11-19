'use client'

import React, { useState } from "react";
import EducationList from "./modalComponents/EducationList";
import EducationForm from "./modalComponents/EducationForm";
import {
  AllDegreeAndInstituteProps,
  EducationProps,
  UserProps,
} from "@/types/types";
import { ButtonGroup } from "@/common/ButtonGroup";
import { X } from "lucide-react";

const EducationModal = ({
  profile,
  allDegreeAndInstitute,
  onClose,
  getProfile,
}: {
  profile: UserProps | null;
  onClose: () => void;
  getProfile: () => void;
  allDegreeAndInstitute: AllDegreeAndInstituteProps | null;
}) => {
  const [editingItem, setEditingItem] = useState<EducationProps | null>(null);

  const handleAddNew = () => {
    const newEdu: EducationProps = {
      degree: null,
      institute: null,
      start_date: "",
      end_date: "",
      currentlyStuding: false,
    };
    setEditingItem(newEdu);
  };

  const handleEdit = (edu: EducationProps) => {
    setEditingItem({ ...edu });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div
        className="bg-[var(--primary-bg)] text-[var(--text-color-primary)] rounded-custom max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-custom"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="bg-[var(--text-hover-color)] text-[var(--secondary-text)] px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="heading font-bold text-[var(--text-color-primary)]">Education</h2>
            <button
              onClick={onClose}
              className="text-[var(--text-color-primary)] hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-lg transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!editingItem && (
             <ButtonGroup label="Add Education" onClick={handleAddNew} className="w-full" />
          )}
          {editingItem ? (
            <EducationForm
              profile={profile}
              allDegreeAndInstitute={allDegreeAndInstitute}
              onClose={() => setEditingItem(null)}
              editingItem={editingItem}
              getProfile={getProfile}
            />
          ) : (
            <EducationList
              profile={profile}
              handleEdit={handleEdit}
              allDegreeAndInstitute={allDegreeAndInstitute}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
