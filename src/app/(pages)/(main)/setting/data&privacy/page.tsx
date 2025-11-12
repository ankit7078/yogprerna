"use client";
import { ShieldCheck } from "lucide-react";

export default function DataPrivacy() {
  return (
    <div className="text-[var(--secondary-text)]">
      <h1 className="heading font-semibold">
        Data & privacy
      </h1>
      <p className="text-[var(--primary-text)] text-sm">
        Key privacy options to help you choose the data saved in your account,
        the ads you see, info you share with others, and more.
      </p>

      <div className="mt-10 border border-[var(--primary-border)] rounded-custom shadow-custom transition">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-5">
          <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
            <ShieldCheck className="w-6 h-6 text-[var(--text-hover-color)]" />
          </div>

          <div className="flex-1">
            <h2 className="sub-heading font-medium mb-1">
              Privacy suggestions available
            </h2>
            <p className="text-[var(--primary-text)]">
              Take the Privacy Checkup and choose the settings that are right
              for you.
            </p>
            {/* <button className="text-blue-600 font-medium hover:underline">
              Review suggestion (1)
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className="max-w-4xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold mb-3">
          Your data & privacy options
        </h3>
        <p className="text-gray-600 text-base">
          Things you’ve done and places you’ve been
        </p>
      </div> */}
    </div>
  );
}
