'use client'

import { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Award,
  BarChart,
  UserCheck,
  Globe,
  Users,
  Zap,
} from "lucide-react";


import InfoCard from "./InfoCard";
import ListItem from "./ListItem";
import { BackLink } from "../../../../../../common/BackButton";
import { ReadMore } from "@/ui/ReadMore";
import { ButtonGroup } from "@/common/ButtonGroup";

const TRUNCATE_LENGTH = 360;

const RetreatDetails = ({ retreat }) => {
  const description = retreat.description;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[var(--secondary-bg)] text-[var(--primary-text)] py-6 max-w-7xl mx-auto px-2 sm:px-8 font-inter">

      {/* Back Button */}
      <div className="pb-4">
        <BackLink href="/retreats" label="Back to Retreats" />
      </div>

      {/* GRID LAYOUT */}
      <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* RIGHT SIDEBAR — MOBILE FIRST (order-1) */}
        <div className="order-1 lg:order-2">
          <div className="relative bg-[var(--primary-bg)] rounded-custom overflow-hidden shadow-custom sticky top-28">
            <img
              src={retreat.image}
              alt={retreat.name}
              className="w-full object-cover aspect-[16/10]"
            />

            <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--text-color-primary)] text-[var(--primary-text-h)] text-sm font-medium rounded-custom shadow-custom">
              {retreat.type}
            </span>

            <div className="p-5">
              <div className="flex items-center mb-2">
                <div className="ml-3">
                  <h1 className="heading font-semibold text-[var(--primary-text)]">
                    Iyengar Yoga Centre
                  </h1>
                  <div className="flex items-center text-[var(--primary-text)] gap-10 lg:gap-6 justify-start">
                    <p>Yoga Studio</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 mt-4 gap-y-4">
                <a href="#enquiry">
                  <ButtonGroup
                    label="Send Enquiry"
                    type="submit"
                    className="w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT — DESKTOP FIRST (order-2 on mobile) */}
        <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">

          <h1 className="heading font-extrabold text-[var(--secondary-text)] mb-4">
            {retreat.name}
          </h1>

          {/* Retreat Information */}
          <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
            <h2 className="sub-heading font-bold text-[var(--secondary-text)] mb-4">
              Retreat Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard icon={<BarChart />} title="Difficulty" value={retreat.difficulty} />
              <InfoCard icon={<Award />} title="Certification" value={retreat.certification} />
              <InfoCard icon={<Zap />} title="Format" value={retreat.format} />
              <InfoCard icon={<UserCheck />} title="Best For" value={retreat.bestFor.join(', ')} />
              <InfoCard icon={<Globe />} title="Languages" value={retreat.languages.join(', ')} />
              <InfoCard icon={<Users />} title="Capacity" value={`${retreat.capacity} People`} />
            </div>
          </div>

          {/* Outcomes & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
              <h3 className="sub-heading mb-3 flex items-center gap-2 font-bold">
                <CheckCircle className="text-green-500" size={20} />What Will You Achieve
              </h3>

              <ul className="space-y-3">
                {retreat.keyOutcomes.map((item, index) => (
                  <ListItem key={index} text={item} type="include" />
                ))}
              </ul>
            </div>

            <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
              <h3 className="sub-heading mb-3 flex items-center gap-2 font-bold">
                <AlertTriangle className="text-yellow-500" size={20} /> Requirements
              </h3>

              <ul className="space-y-3">
                {retreat.requirements.map((item, index) => (
                  <ListItem key={index} text={item} type="include" />
                ))}
              </ul>
            </div>

          </div>

          {/* What's Included */}
          <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
            <h3 className="sub-heading font-bold text-[var(--secondary-text)] mb-4">
              What's Included
            </h3>

            <ul className="space-y-2">
              {retreat.inclusion.map((item, i) => (
                <ListItem key={i} text={item} type="include" />
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="bg-[var(--primary-bg)] p-5 rounded-custom shadow-custom">
            <ReadMore text={description} maxLength={350} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RetreatDetails;
