import React from "react";
import { Star, BookOpen, MapPin, TrendingUp } from "lucide-react";
import { ButtonGroup, ButtonGroupSecondary } from "@/common/ButtonGroup";

const UniversityCard: React.FC = () => {
  return (
    <div className=" overflow-hidden bg-[var(--primary-bg)] sm:rounded-2xl shadow-custom">
      <div className="aspect-video relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="University"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
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
        <div className="flex items-center text-[var(--primary-text)] ms-2">
          <MapPin className="w-4 h-4 mr-2" />
          <h2 className="sub-heading-1">Rishikesh, Uttarakhand</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4 text-center text-[var(--primary-text)]">
          <div className="flex items-center justify-center p-3 rounded-custom shadow-sm bg-[var(--secondary-bg)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 me-2">
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-xs md:text-sm font-semibold ">
              4.0 / 5
            </p>
          </div>
          <div className="flex  items-center p-3 justify-center rounded-custom shadow-sm bg-[var(--secondary-bg)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 me-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-sm md:text-sm font-semibold">
              10+
            </p>
          </div>
          <div className="flex  items-center p-3 rounded-custom justify-center shadow-sm bg-[var(--secondary-bg)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 me-2">
              <Star className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm md:text-sm font-semibold">
              100
            </p>
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
          <a
            href="#enquiry"
          >
            <ButtonGroupSecondary
              label="Compare"
              type="submit"
              className="w-full mt-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;