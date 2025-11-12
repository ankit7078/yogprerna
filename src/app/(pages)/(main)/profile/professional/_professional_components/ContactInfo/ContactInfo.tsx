import { UserProps } from "@/types/types";
import React from "react";
import {
  LuMail,
  LuMap,
  LuPhone,
  LuPhoneCall,
  LuPhoneIncoming,
} from "react-icons/lu";

export default function ContactInfo({
  profile,
}: {
  profile: UserProps | null;
}) {
  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom overflow-hidden">
      <div className="bg-[var(--primary-heading-bg)] text-[var(--secondary-text)] px-6 py-4">
        <h3 className="heading font-bold flex items-center space-x-2">
          <LuPhoneIncoming className="h-4 w-4 text-[var(--text-hover-color)]" />
          <span>Contact Info</span>
        </h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-[var(--secondary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom">
          <div className="w-8 h-8 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-custom flex items-center justify-center">
            <LuMail className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="heading-sm font-medium uppercase tracking-wide">
              Email
            </p>
            <p className="break-words">{profile?.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-[var(--secondary-bg)] text-[var(--primary-text)] rounded-custom shadow-custom">
          <div className="w-8 h-8 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-lg flex items-center justify-center">
            <LuPhoneCall className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="heading-sm font-medium uppercase tracking-wide">
              Primary Phone
            </p>
            <p className="break-words">{profile?.mobile_no}</p>
          </div>
        </div>
        {profile?.alt_mobile_no && (
          <div className="flex items-center space-x-3 p-3 bg-[var(--secondary-bg)] text-[var(--primary-text)] rounded-custom  shadow-custom flex-1 min-w-0">
            <div className="w-8 h-8 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-lg flex items-center justify-center">
              <LuPhone className="h-5 w-5" />
            </div>
            <div>
              <p className="heading-sm font-medium uppercase tracking-wide">
                Alternate Phone
              </p>
              <p className="break-words">
                {profile?.alt_mobile_no}
              </p>
            </div>
          </div>
        )}
        {profile?.address &&
          profile?.pincode &&
          profile?.city &&
          profile?.state &&
          profile?.country && (
            <div className="flex items-center space-x-3 p-3  bg-[var(--secondary-bg)] text-[var(--primary-text)] rounded-custom  shadow-custom flex-1 min-w-0">
              <div className="w-8 h-8 bg-[var(--text-hover-color)] text-[var(--text-color-primary)] rounded-lg flex items-center justify-center">
                <LuMap className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium uppercase tracking-wide">
                  Location
                </p>
                <p className="break-words">
                  {profile?.address} {profile?.pincode} {profile?.city}{" "}
                  {profile?.state} {profile?.country}
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
