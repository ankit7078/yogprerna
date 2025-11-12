'use client'
import { PropertyProps } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import {
  LuChevronDown,
  LuWifi,
  LuCircleCheck,
  LuCircleX,
  LuBuilding,
} from "react-icons/lu";

export default function AmenityTable({
  selectedProperties,
}: {
  selectedProperties: PropertyProps[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const amenitySet = new Set<string>();
  selectedProperties.forEach((property) => {
    if (property.amenities) {
      Object.values(property.amenities).forEach((categoryArray) => {
        categoryArray.forEach((amenityObj) => {
          const amenityName = Object.keys(amenityObj)[0];
          amenitySet.add(amenityName);
        });
      });
    }
  });
  const allAmenities = Array.from(amenitySet).sort();

  return (
    <div className="bg-[var(--secondary-bg)] shadow-custom border border-[var(--primary-border)] overflow-hidden transition-all duration-300">
      <div
        className="text-[var(--primary-text)] bg-[var(--blue-bg)] cursor-pointer sm:px-6 px-2 py-3 transition-all duration-200 relative overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--secondary-bg)] text-[var(--text-hover-color)] backdrop-blur-sm flex items-center justify-center">
              <LuWifi size={16} />
            </div>
            <div className="text-[var(--text-color-primary)]">
              <h2 className="heading font-bold">
                Amenities Comparison
              </h2>
              <p>
                Compare facilities across {selectedProperties.length} colleges
              </p>
            </div>
          </div>
          <div
            className={`p-2 rounded-full bg-[var(--secondary-bg)] backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isOpen ? "rotate-180" : ""
              }`}
          >
            <LuChevronDown size={16} />
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out ${isOpen
          ? "max-h-none opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="p-0">
          {allAmenities.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[var(--primary-bg)] text-[var(--primary-text)] border-b border-[var(--primary-border)]">
                    <th className="p-4 font-semibold border-r border-[var(--primary-border)] min-w-[160px] sub-heading">
                      Amenity
                    </th>
                    {selectedProperties.map((prop, idx) => (
                      <th
                        key={idx}
                        className="text-center p-4 font-semibold border-r border-[var(--primary-border)] last:border-r-0 min-w-[200px]"
                      >
                        <div className="flex flex-col items-center">
                          {!prop?.property_logo?.[0] ? (
                            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-sm">
                              <span className="font-bold paragraph">
                                {prop.property_name.charAt(0)}
                              </span>
                            </div>
                          ) : (
                            <div className="relative w-14 h-14 rounded-custom shadow-custom hover:shadow-md transition-all duration-300 group-hover:scale-105 mb-3 overflow-hidden">
                              <Image
                                src={`${prop.property_logo?.[0]}`}
                                alt={prop.property_name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <span className="paragraph font-medium break-words text-center leading-tight">
                            {prop.property_name}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--primary-border)]">
                  {allAmenities.map((amenity, idx) => (
                    <tr
                      key={idx}
                      className="transition-colors duration-200"
                    >
                      <td className="font-semibold p-4 border-r border-[var(--primary-border)]">
                        <div className="flex items-center gap-3 text-[var(--primary-text)]">
                          <div className="w-7 h-7 bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] rounded-custom flex items-center justify-center shadow-custom flex-shrink-0">
                            <span className="text-sm">
                              <LuBuilding />
                            </span>
                          </div>
                          <span className="heading-sm break-words">{amenity}</span>
                        </div>
                      </td>
                      {selectedProperties.map((prop, pIdx) => {
                        let hasAmenity = false;
                        if (prop.amenities) {
                          Object.values(prop.amenities).forEach(
                            (categoryArray) => {
                              categoryArray.forEach((amenityObj) => {
                                if (amenityObj[amenity] !== undefined) {
                                  hasAmenity =
                                    amenityObj[amenity] === true ||
                                    (Array.isArray(amenityObj[amenity]) &&
                                      amenityObj[amenity].length > 0);
                                }
                              });
                            }
                          );
                        }
                        return (
                          <td
                            key={pIdx}
                            className="p-4 text-center border-r border-[var(--primary-border)] last:border-r-0"
                          >
                            <div className="flex justify-center">
                              {hasAmenity ? (
                                <div className="w-9 h-9 bg-gradient-to-br from-green-100 to-green-200 rounded-custom flex items-center justify-center shadow-custom">
                                  <LuCircleCheck
                                    size={18}
                                    className="text-[var(--text-success-color)]"
                                  />
                                </div>
                              ) : (
                                <div className="w-9 h-9 bg-gradient-to-br from-red-100 to-red-200 rounded-custom flex items-center justify-center shadow-custom">
                                  <LuCircleX
                                    size={18}
                                    className="text-[var(--danger-button)]"
                                  />
                                </div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--primary-text)] bg-[var(--primary-bg)]">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-custom">
                <LuWifi size={24} />
              </div>
              <h3 className="sub-heading font-semibold mb-2">
                No Amenities Data
              </h3>
              <p>
                No amenities data available for comparison
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}