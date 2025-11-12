import React from "react";
import {
  Star,
  BookOpen,
  MapPin,
  TrendingUp,
  Clock,
  GraduationCap,
  Layers,
} from "lucide-react";
import { ButtonGroup } from "@/common/ButtonGroup";

const UniversityCard: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[var(--primary-bg)] shadow-custom rounded-custom transition-all duration-300 ">
      <div className="aspect-video relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="University"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 🔹 Content Section */}
      <div className="p-5">
        <div className="flex flex-col text-[var(--primary-text)]">
          <h1 className="heading font-semibold text-[var(--text-color)]">
            Iyengar Yoga Centre
          </h1>
          <h3 className="sub-heading mt-1">IYC</h3>
          <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-hover-color)]" />
              <p>1 Year</p>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[var(--text-hover-color)]" />
              <p>Diploma</p>
            </div>

            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[var(--text-hover-color)]" />
              <p>Diploma Course</p>
            </div>

            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--text-hover-color)]" />
              <p>Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;
