import React from "react";
import { LuPlus } from "react-icons/lu";

export default function MainGridCard({
  onClick,
  title,
  index,
}: {
  onClick: () => void;
  title: string;
  index: number;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden border-2 border-dashed border-[var(--primary-border)] bg-[var(--primary-bg)] hover:bg-[var(--secondary-bg)] rounded-custom flex flex-col items-center justify-center py-12 px-6 transition-all duration-500  hover:scale-105 shadow-custom hover:-translate-y-2"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-[var(--secondary-bg)] group-hover:bg-[var(--primary-bg)] flex items-center justify-center rounded-full mb-4 transition-all duration-500 shadow-custom   group-hover:shadow-xs group-hover:scale-110">
          <LuPlus
            size={24}
            className="text-[var(--text-hover-color)] group-hover:text-[var(--text-hover-color)] transition-all duration-300 group-hover:rotate-90  "
          />
        </div>

        <div className="text-center">
          <h3 className="text-[var(--primary-text)] font-bold group-hover:text-[var(--secondary-text)] transition-colors duration-300 mb-2" >
            {title} {index + 1}
          </h3>
          <p className="text-[var(--primary-text)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            Click to select Institute
          </p>
        </div>
      </div>
    </div>
  );
}