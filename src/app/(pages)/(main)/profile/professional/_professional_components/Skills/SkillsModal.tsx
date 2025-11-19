'use client'

import { ButtonGroup } from "@/common/ButtonGroup";
import API from "@/contexts/API";
import { getSkillNameById } from "@/contexts/Callbacks";
import { AllSkillsProps, SelectOptionProps, UserProps } from "@/types/types";
import { AxiosError } from "axios";
import { Trash, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CreatableSelect from "react-select/creatable";

const SkillsModal = ({
  profile,
  onClose,
  getProfile,
  allSkills,
}: {
  profile: UserProps | null;
  onClose: () => void;
  allSkills: AllSkillsProps[];
  getProfile: () => void;
}) => {
  const [newSkill, setNewSkill] = useState<SelectOptionProps | null>(null);
  const [skills, setSkills] = useState<number[]>([]);

  useEffect(() => {
    if (profile?.skills) {
      setSkills(profile.skills);
    }
  }, [profile]);

  const options = allSkills?.map((ski) => ({
    label: ski.skill,
    value: ski.uniqueId,
  }));

  const handleAddSkill = async () => {
    if (!newSkill) return;

    const existingOption = allSkills?.find(
      (ski) => ski.uniqueId === newSkill.value
    );

    const payload = {
      userId: profile?.uniqueId,
      ...(existingOption
        ? { skillId: newSkill.value }
        : { skill: newSkill.label }),
    };

    try {
      const response = await API.patch(`/profile/skill`, payload);
      toast.success(response.data.message);
      setNewSkill(null);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Failed to add Skill.");
    } finally {
      getProfile();
    }
  };

  const handleRemoveSkill = async (skill: number) => {
    try {
      const response = await API.patch(
        `/profile/skill/remove/${profile?.uniqueId}`,
        { skill: skill }
      );
      toast.success(response.data.message);
      setSkills((prev) => prev.filter((ski) => ski !== skill));
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Failed to add skill.");
    } finally {
      getProfile();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div
        className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-custom"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="heading font-bold">Edit Skills</h2>
            <button
              onClick={onClose}
              className="hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-5">
          <div className="bg-[var(--secondary-bg)] p-4 rounded-xl mb-6 shadow-custom">
            <h3 className="heading font-semibold mb-3">Add Skill</h3>
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <div className="flex-1 border border-[var(--primary-border)] rounded-custom">
                <CreatableSelect
                  options={options}
                  onChange={(selected) => setNewSkill(selected)}
                  value={newSkill}
                  placeholder="Add or type a Skill"
                  isClearable
                  menuPortalTarget={document.body}
                  menuPosition="fixed"
                  maxMenuHeight={200}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderWidth: "0px",
                      minHeight: "2.4rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      boxShadow: "none",
                      borderRadius:"12px"
                    }),
                    menuPortal: (base) => ({
                      ...base,
                      zIndex: 50,
                    }),
                  }}
                />
              </div>
              <ButtonGroup
              label="Add Skill"
                onClick={handleAddSkill}
              />
            </div>
          </div>

          {/* Current Skill */}
          <div className="mb-6">
            {(skills?.length || 0) > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[var(--secondary-bg)] rounded-custom px-4 py-3 shadow-custom"
                  >
                    <div>
                      <span className="font-semibold">
                        {getSkillNameById(skill, allSkills)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-[var(--secondary-text)] bg-[var(--danger-button)] p-2 rounded-custom transition-all"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-[var(--secondary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom">
                <p className="italic">
                  No Skills added yet. Search and add Skills above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsModal;
