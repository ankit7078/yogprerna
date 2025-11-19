'use client'

import React, { useState } from "react";
import { ResumeModal } from "./ResumeModal";
import { UserProps } from "@/types/types";
import Link from "next/link";
import { Download, Eye, Plus } from "lucide-react";

export default function ResumeSection({
  profile,
  getProfile,
}: {
  profile: UserProps | null;
  getProfile: () => void;
}) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <h3 className="heading font-bold flex items-center space-x-2">
          <Download className="h-4 w-4 text-[var(--text-hover-color)]" />
          <span>Resume/CV</span>
        </h3>
      </div>
      <div className="p-6">
        {profile?.resume ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${profile?.resume}`}
                target="_blank"
                className="bg-[var(--secondary-bg)] text-[var(--primary-text)] px-4 py-3 rounded-custom flex items-center justify-center space-x-2 transition-all"
              >
                <Eye className="h-4 w-4" />
                <span className="paragraph font-medium">View</span>
              </Link>
              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm font-medium">Update</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-3 text-[var(--found-text)]">
            <Download className="h-10 w-10 mx-auto" />
            <p className="italic">
              Upload your resume to showcase your qualifications
            </p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="mt-4 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] px-4 py-2 rounded-custom cursor-pointer
             hover:shadow-sm hover:scale-105 active:scale-95 
             transition-all duration-300 ease-in-out  
             animate-fadeIn mx-auto  flex items-center justify-center space-x-2 transition-all"
            >
              <Plus className="h-4 w-4" />
              <span className="font-medium">Upload CV</span>
            </button>
          </div>
        )}
      </div>
      {showUploadModal && (
        <ResumeModal
          profile={profile}
          closeModal={() => setShowUploadModal(false)}
          onUploaded={getProfile}
        />
      )}
    </div>
  );
}
