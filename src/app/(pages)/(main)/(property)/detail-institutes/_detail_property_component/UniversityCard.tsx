'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, BookOpen, MapPin, TrendingUp } from "lucide-react";
import { ButtonGroup, ButtonGroupSecondary } from "@/common/ButtonGroup";
import { FaBalanceScale } from "react-icons/fa";

const UniversityCard: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" overflow-hidden bg-[var(--primary-bg)] sm:rounded-2xl shadow-custom">
      <div className="aspect-video relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="University"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <img
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Institute Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <h1 className="heading font-semibold text-[var(--primary-text)]">
              Iyengar Yoga Centre
            </h1>
            <div className="flex items-center text-[var(--primary-text)] gap-10 lg:gap-6 justify-start">
              <p className="">
                Yoga Studio
              </p>
              <div className="flex justify-center  items-center gap-2">
                <p>YP Rank : </p>
                <div className="justify-center items-center gap-1 flex">
                  <p className=" font-semFibold">4</p>
                  <TrendingUp className="w-4 h-4 text-[var(--text-success-color)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Circle Button */}
        <div className="flex items-center gap-2 ms-2 cursor-pointer cursor-pointer py-1">
          <button
            onClick={() => setOpen(!open)}
            className="relative flex items-center justify-center w-3 h-3 rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-500 transition cursor-pointer "
          >
            {open && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-300"></span>
          </button>
          <h2 className="heading-sm text-[var(--text-hover-color)] font-medium">Claim Your Property</h2>
        </div>

        <div className="flex items-center text-[var(--primary-text)] gap-1 ms-2">
          <MapPin className="w-4 h-4 text-[var(--text-hover-color)]" />
          <h2 className="heading-sm">Rishikesh, Uttarakhand</h2>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4 text-center text-[var(--primary-text)]">
          <div className="flex items-center justify-center px-2 py-1 rounded-custom shadow-custom bg-[var(--secondary-bg)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 me-2">
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-xs font-semibold ">
              4.0 / 5
            </p>
          </div>
          <div className="flex  items-center px-2 py-1 justify-center rounded-custom shadow-custom bg-[var(--secondary-bg)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 me-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-xs font-semibold">
              10+
            </p>
          </div>
          <div className="flex items-center gap-2 py-1 px-2 rounded-custom justify-center shadow-custom bg-[var(--secondary-bg)]"> 
            <FaBalanceScale className="text-green-500"/> 
     
          <button className="text-xs font-semibold">
          Compare
          </button>
               </div>
        </div>
        <div className="md:col-span-2 mt-4 gap-y-4">
          <a
            href="#enquiry"
          >
            <ButtonGroup
              label="Send Enquiry"
              type="submit"
              className="w-full"
            />
          </a>
          
          {/* <a
            href="#enquiry"
          >
            <ButtonGroupSecondary
              label="Compare"
              type="submit"
              className="w-full mt-3"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;