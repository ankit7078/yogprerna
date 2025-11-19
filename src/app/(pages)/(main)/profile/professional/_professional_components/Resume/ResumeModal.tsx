'use client'

import { ButtonGroup } from "@/common/ButtonGroup";
import API from "@/contexts/API";
import { UserProps } from "@/types/types";
import { AxiosError } from "axios";
import { FileText, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export function ResumeModal({
  profile,
  closeModal,
  onUploaded,
}: {
  profile: UserProps | null;
  closeModal: () => void;
  onUploaded: () => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileSelect = e.target.files?.[0];
    if (!fileSelect) return;

    if (fileSelect.type !== "application/pdf") {
      toast.error("Please upload a PDF file only.");
      return;
    }

    const maxSizeInBytes = 5 * 1024 * 1024;

    if (fileSelect.size > maxSizeInBytes) {
      toast.error("File size exceeds 5MB limit. Please upload a smaller file.");
      return;
    }

    setSelectedFile(fileSelect);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please upload a PDF file only.");
      return;
    }
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("userId", String(profile?.uniqueId));
      formData.append("resume", selectedFile);

      const response = await API.post(`/profile/doc/resume`, formData);
      toast.success(response.data.message);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      toast.error(
        err instanceof Error ? err.message : "Failed to upload resume"
      );
    } finally {
      setIsLoading(false);
      onUploaded();
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom max-w-xl w-full shadow-custom overflow-hidden">
        <div className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <FileText className="h-4 w-4" />
            <h2 className="heading font-bold">
              Upload Your Resume
            </h2>
          </div>
          <button
            onClick={closeModal}
            className="hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-center">
          {!selectedFile ? (
            <>
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-full flex items-center justify-center">
                  <FileText className="h-12 w-12" />
                </div>
              </div>
              <h3 className="sub-heading font-bold text-[var(--secondary-text)]">
                Enhance Your Profile with Your Resume
              </h3>
              <p>
                Uploading your resume helps us understand your skills and match
                you with opportunities.
              </p>
              <label className="cursor-pointer inline-block">
                <span
                  className="mt-4 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-lg cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out 
             animate-fadeIn"
                >
                  Upload CV
                </span>
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </>
          ) : (
            <div className="space-y-3">
              <div className="w-24 h-24 bg-[var(--bg-success-l)] text-[var(--text-success-color)] rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-12 w-12" />
              </div>
              <div>
                <p className="font-medium">
                  {selectedFile.name}
                </p>
                <p className="text-xs">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          <p className="text-center text-[var(--danger-button)] bg-[var(--danger-button-l)] p-3 rounded-custom shadow-custom">
            Only PDF files under 5MB are accepted.
          </p>

          <div className="flex justify-end space-x-3">
            <ButtonGroup
              label="Cancel"
              onClick={closeModal}
            />
            <ButtonGroup
              label="Upload Resume"
              disabled={!selectedFile || isLoading}
              onClick={handleUpload}
            />  
          </div>
        </div>
      </div>
    </div>
  );
}
