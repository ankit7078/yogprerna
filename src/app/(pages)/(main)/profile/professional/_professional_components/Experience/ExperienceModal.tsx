'use client'

import { ExperienceProps, PropertyProps, UserProps } from "@/types/types";
import React, { useState } from "react";
import ExpereienceList from "./modalComponents/ExpereienceList";
import ExpereienceForm from "./modalComponents/ExpereienceForm";
import { ButtonGroup } from "@/common/ButtonGroup";
import { X } from "lucide-react";

const EditExperienceModal = ({
  profile,
  onClose,
  getProfile,
  properties,
  profileProperties,
}: {
  profile: UserProps | null;
  onClose: () => void;
  getProfile: () => void;
  properties: PropertyProps[];
  profileProperties: PropertyProps[];
}) => {
  const [editingItem, setEditingItem] = useState<ExperienceProps | null>(null);

  const handleAddNew = () => {
    const newExp: ExperienceProps = {
      position: "",
      location: "",
      start_date: "",
      end_date: "",
      currentlyWorking: false,
    };
    setEditingItem(newExp);
  };

  const handleEdit = (exp: ExperienceProps) => {
    setEditingItem({ ...exp });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div
        className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-custom"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="bg-[var(--text-hover-color)] text-[var(--secondary-text)] px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="heading font-medium text-[var(--text-color-primary)]">Experience</h2>
            <button
              onClick={onClose}
              className="text-[var(--text-color-primary)] hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-1 rounded-md transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-5">
          {!editingItem && (
            <ButtonGroup label="Add Experience" onClick={handleAddNew} className="w-full" />
          )}

          {editingItem ? (
            <ExpereienceForm
              profile={profile}
              editingItem={editingItem}
              onClose={() => setEditingItem(null)}
              getProfile={getProfile}
              properties={properties}
            />
          ) : (
            <ExpereienceList
              profile={profile}
              handleEdit={handleEdit}
              properties={properties}
              profileProperties={profileProperties}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditExperienceModal;
