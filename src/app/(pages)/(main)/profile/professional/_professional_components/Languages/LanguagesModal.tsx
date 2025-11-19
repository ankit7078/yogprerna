'use client'

import { ButtonGroup } from "@/common/ButtonGroup";
import API from "@/contexts/API";
import {
  AllLanaguagesProps,
  SelectOptionProps,
  UserProps,
} from "@/types/types";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LuTrash, LuX } from "react-icons/lu";
import CreatableSelect from "react-select/creatable";

const LanguagesModal = ({
  profile,
  onClose,
  getProfile,
  allLanguages,
}: {
  profile: UserProps | null;
  onClose: () => void;
  allLanguages: AllLanaguagesProps[];
  getProfile: () => void;
}) => {
  const [newLanguage, setNewLanguage] = useState<SelectOptionProps | null>(
    null
  );
  const [languages, setLanguages] = useState<number[]>([]);

  useEffect(() => {
    if (profile) {
      setLanguages(profile?.languages || []);
    }
  }, [profile]);

  const options = allLanguages?.map((lang) => ({
    label: lang.language,
    value: lang.uniqueId,
  }));

  const handleAddLanguage = async () => {
    if (!newLanguage) return;

    const existingOption = allLanguages?.find(
      (lang) => lang.uniqueId === newLanguage.value
    );

    const payload = {
      userId: profile?.uniqueId,
      ...(existingOption
        ? { languageId: newLanguage.value }
        : { language: newLanguage.label }),
    };

    try {
      const response = await API.patch(`/profile/language`, payload);
      toast.success(response.data.message);
      setNewLanguage(null);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Failed to add language.");
    } finally {
      getProfile();
    }
  };

  const handleRemoveLanguage = async (language: number) => {
    try {
      const response = await API.patch(
        `/profile/language/remove/${profile?.uniqueId}`,
        { language: language }
      );
      toast.success(response.data.message);
      setLanguages((prev) => prev.filter((lang) => lang !== language));
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(err.response?.data?.error || "Failed to add language.");
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
        <div className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Edit Languages</h2>
            <button
              onClick={onClose}
              className="hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
            >
              <LuX className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6 p-5">
          <div className="bg-[var(--secondary-bg)] p-4 rounded-custom shadow-custom">
            <h3 className="heading font-semibold mb-3">Add Language</h3>
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <div className="flex-1 border border-[var(--primary-border)] rounded-custom text-xs">
                <CreatableSelect
                  options={options}
                  onChange={(selected) => setNewLanguage(selected)}
                  value={newLanguage}
                  placeholder="Add or type a language"
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
                      borderRadius: "8px"
                    }),
                    menuPortal: (base) => ({
                      ...base,
                      zIndex: 50,
                    }),
                  }}
                />
              </div>
              <ButtonGroup
                label="Add Language"
                onClick={handleAddLanguage}
              />
            </div>
          </div>

          {/* Current Languages */}
          <div className="mb-6">
            {(languages?.length || 0) > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {languages?.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom px-4 py-3 shadow-custom"
                  >
                    <div>
                      <span className="font-semibold text-gray-900">
                        {getLanguageNameById(language, allLanguages)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveLanguage(language)}
                      className="text-[var(--secondary-text)] bg-[var(--danger-button)] p-2 rounded-custom transition-all"
                    >
                      <LuTrash className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-[var(--secondary-bg)] text-[var(--primary-text)] shadow-custom rounded-custom">
                <p className="italic">
                  No languages added yet. Search and add languages above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesModal;
