// app/institutes/[detail]/_detail_property_component/UniversityCard.tsx
import React from "react";
import { Star, BookOpen, MapPin, TrendingUp } from "lucide-react";

const UniversityCard: React.FC = () => {
  return (
    <div className=" overflow-hidden bg-[var(--primary-color)] sm:rounded-2xl sm:shadow-sm">
      <div className="aspect-video relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="University"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-2">
        <div className="flex items-center mb-4">
          <img
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Institute Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <h1 className="text-lg md:text-2xl font-semibold  text-[var(--text-color)]">
              Iyengar Yoga Centre
            </h1>
            <div className="flex items-center text-[var(--subprimary-color)] mt-1 gap-10 lg:gap-6 justify-start">
              <p className=" text-sm md:text-base ">
                Yoga Studio
              </p>
              <div className="flex justify-center text-sm md:text-base items-center gap-2">
                <h5 className="">YP Rank : </h5>
                <div className="justify-center items-center gap-1 flex">
                  <p className=" font-semFibold">4</p>
                  <TrendingUp className="w-5 h-5 text-[var(--text-success-color)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-[var(--subprimary-color)] text-sm md:text-base ms-2">
          <MapPin className="w-4 h-4  mr-2" />
          <span>Rishikesh, Uttarakhand</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6 text-center text-[var(--subprimary-color)]">
          <div className="flex items-center justify-center p-3 rounded-lg shadow-sm bg-[var(--text-primary)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100 me-2">
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-xs md:text-sm font-semibold ">
              4.0 / 5
            </p>
          </div>
          <div className="flex  items-center p-3 justify-center rounded-lg shadow-sm bg-[var(--text-primary)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 me-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
            </div>
            <p className="text-sm md:text-sm font-semibold">
              10+
            </p>
          </div>
          <div className="flex  items-center p-3 rounded-lg justify-center shadow-sm bg-[var(--text-primary)]">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 me-2">
              <Star className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-sm md:text-sm font-semibold">
              100
            </p>
          </div>
        </div>
        <div className="md:col-span-2 mt-6">
          <a
            href="#enquiry"
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:opacity-90 transition"
          >
            Enquiry
          </a>
        </div>
      </div>
    </div>
  );
};

export default UniversityCard;