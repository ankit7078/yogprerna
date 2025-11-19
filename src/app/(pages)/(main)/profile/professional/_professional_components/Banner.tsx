'use client'

import React, { useEffect, useState } from "react";
import BannerCropModal from "../../_modals/BannerModal";
import { UserProps } from "@/types/types";
import { DeleteBannerModal } from "../../_modals/DeleteBannerModal";
import { Camera } from "lucide-react";

export default function Banner({ profile }: { profile: UserProps | null }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [originalFileName, setOriginalFileName] = useState("");
  const [bannerImage, setBannerImage] = useState<string>();
  const [showDeleteBannerModal, setShowDeleteBannerModal] = useState(false);

  useEffect(() => {
    setBannerImage(
      profile?.banner?.[0]
        ? `${process.env.NEXT_PUBLIC_MEDIA_URL}${profile?.banner?.[0]}`
        : ""
    );
  }, [profile]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
        setOriginalFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="relative">
        <div
          className="h-80 bg-[var(--blue-bg)] relative"
          style={{
            backgroundImage: bannerImage ? `url(${bannerImage})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-6 right-6 flex space-x-2">
            <label className="bg-[var(--primary-icon-l)] backdrop-blur-sm hover:bg-[var(--text-color-primary)] text-[var(--text-hover-color)] px-3 py-2 rounded-custom cursor-pointer flex items-center space-x-2 transition-all shadow-custom">
              <Camera className="h-4 w-4" />
              <span className="text-xs font-medium">Edit</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            {bannerImage && (
              <button
                onClick={() => setShowDeleteBannerModal(true)}
                className="bg-[var(--danger-button)] text-[var(--text-color-primary)] px-3 py-2 rounded-custom text-xs hover:bg-red-700 transition-all shadow-custom"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      {selectedImage && (
        <BannerCropModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          profile={profile}
          originalFileName={originalFileName}
        />
      )}
      {showDeleteBannerModal && (
        <DeleteBannerModal
          profile={profile}
          onClose={() => setShowDeleteBannerModal(false)}
        />
      )}
    </div>
  );
}
