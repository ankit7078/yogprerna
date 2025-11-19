'use client'

import React from "react";
import ScoreProgress from "./ScoreProgress";
import { UserProps } from "@/types/types";
import { User, Image, Phone, Type, MapPin, FileText, Briefcase, GraduationCap, Sparkles, Languages, Download, X, Check } from "lucide-react";

interface ProfileScoreModalProps {
  onClose: () => void;
  profile: UserProps | null;
}

const ProfileScoreModal: React.FC<ProfileScoreModalProps> = ({
  profile,
  onClose,
}) => {
  const score = profile?.score ?? 0;

  const scoreItems = [
    {
      icon: User,
      title: "Avatar",
      description: "Upload a clear, professional profile picture.",
      completed: (profile?.avatar?.length || 0) > 0,
    },
    {
      icon: Image,
      title: "Banner",
      description: "Add a banner image to personalize your profile background.",
      completed: (profile?.banner?.length || 0) > 0,
    },
    {
      icon: Phone,
      title: "Alt Phone Number",
      description: "Add an alternate contact number for easier reachability.",
      completed: profile?.alt_mobile_no,
    },
    {
      icon: Type,
      title: "Heading",
      description: "Add a professional headline to showcase your focus.",
      completed: profile?.heading,
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Add your complete address to improve discoverability.",
      completed:
        profile?.address &&
        profile?.pincode &&
        profile?.city &&
        profile?.state &&
        profile?.country,
    },
    {
      icon: FileText,
      title: "About",
      description: "Write a compelling summary to introduce yourself.",
      completed: profile?.about,
    },
    {
      icon: Briefcase,
      title: "Work Experience",
      description: "Add your work history to strengthen your credibility.",
      completed: (profile?.experiences?.length || 0) > 0,
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Showcase your educational background and achievements.",
      completed: (profile?.education?.length || 0) > 0,
    },
    {
      icon: Sparkles,
      title: "Skills",
      description: "List your skills to highlight your expertise.",
      completed: (profile?.skills?.length || 0) > 0,
    },
    {
      icon: Languages,
      title: "Languages",
      description:
        "List languages you speak to connect with diverse opportunities.",
      completed: (profile?.languages?.length || 0) > 0,
    },
    {
      icon: Download,
      title: "Resume/CV",
      description: "Upload your resume to showcase your qualifications.",
      completed: profile?.resume,
    },
  ];

  const completedItems = scoreItems.filter((item) => item.completed).length;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom max-w-2xl w-full max-h-[90vh] overflow-hidden  shadow-custom flex flex-col">
        <div className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] shadow-custom px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="heading font-bold">Profile Score</h2>
            <p>
              Complete your profile to improve visibility
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:text-[var(--text-hover-color)] hover:bg-[var(--primary-icon-l)] cursor-pointer p-2 rounded-custom transition-all"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1">
          <div className="text-center mb-8">
            <ScoreProgress score={score} />
            <h3 className="sub-heading font-bold mb-2">
              {completedItems} of {scoreItems.length} sections completed
            </h3>
            <p>
              {scoreItems.length === completedItems
                ? "Congratulations! Your profile is complete."
                : `Complete ${scoreItems.length - completedItems
                } more sections to reach 100%`}
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="heading font-semibold mb-4">
              Profile Sections
            </h4>
            {scoreItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-5 rounded-custom border transition-all ${item.completed
                      ? "bg-[var(--bg-success-l)] border-0 shadow-custom"
                      : "bg-[var(--danger-button-l)] border-0 shadow-custom"
                    }`}
                >
                  <div className="flex items-center space-x-4 text-[var(--text-color-primary)]">
                    <div
                      className={`w-10 h-10 rounded-custom flex items-center justify-center ${item.completed ? "bg-[var(--danger-button)]" : "bg-[var(--danger-button)]"
                        }`}
                    >
                      {item.completed ? (
                        <Check className="h-4 w-4 " />
                      ) : (
                        <Icon className="h-4 w-4 " />
                      )}
                    </div>
                    <div>
                      <h5 className="heading-sm font-semibold text-[var(--text-muted)]">
                        {item.title}
                      </h5>
                      <p className="text-[var(--primary-text)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScoreModal;
