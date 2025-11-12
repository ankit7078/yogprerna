'use client';

import React, { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import EnquiryForm from "./Enquiry";
import { ReadMore } from "@/ui/ReadMore";

const description = `Patanjala Yoga Kendra is an Authorized Iyengar Yoga Centre that was established in 1993 on the banks of the Holy River Ganges in Rishikesh, the world capital of Yoga. Our centre is recognised by B. K. S. Iyengar Guruji and RIMYI / Ramamani Iyengar Memorial Yoga Institute in Pune. The method of Yoga that is taught is Iyengar Yoga, as developed and taught by Shri Guruji, B. K. S. Iyengar, the world-famous Yoga Teacher. Guruji's method is firmly based in the ancient Indian tradition of Yoga as defined in the Yoga Sutras of Patanjali.`;

const mockFeatures = [
  "Deepen your understanding of Iyengar Yoga principles.",
  "Gain certification to teach basic yoga classes.",
  "Improve your personal practice and alignment.",
  "Learn modification and prop usage for all body types.",
];

const mockRequirements = [
  "A minimum of 1 year of consistent yoga practice.",
  "A desire to learn and grow.",
  "Completion of the pre-course reading list.",
  "Ability to attend all sessions.",
];

const TRUNCATE_LENGTH = 360;

const CourseDetails: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = description.length > TRUNCATE_LENGTH;

  return (
    <div className="">
      <div className="space-y-6 p-5 text-[var(--primary-text)] bg-[var(--primary-bg)] shadow-custom rounded-custom">
        <div>
          <h2 className="sub-heading font-semibold text-[var(--secondary-text)] mb-2">
            About Iyengar Yoga Center
          </h2>
          <ReadMore text={description} maxLength={350} />
        </div>

        {/* --- Highlights Section --- */}
        <div className="bg-[var(--secondary-bg)] rounded-custom shadow-custom p-5">
          <h3 className="sub-heading font-semibold text-[var(--secondary-text)] mb-4">What Will You Achieve</h3>
          <ul className="space-y-3">
            {mockFeatures.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[var(--text-hover-color)] flex-shrink-0" />
                <span className="text-[var(--primary-text)]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Requirements Section --- */}
        <div className="bg-[var(--secondary-bg)] rounded-custom shadow-custom p-5">
          <h3 className="sub-heading font-semibold text-[var(--secondary-text)] mb-4">Requirements</h3>
          <ul className="space-y-3">
            {mockRequirements.map((requirement: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[var(--text-hover-color)] flex-shrink-0" />
                <span className="text-[var(--primary-text)]">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-6">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default CourseDetails;
