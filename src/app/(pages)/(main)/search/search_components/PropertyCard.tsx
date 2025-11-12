import { generateSlug } from "@/contexts/Callbacks";
import { PropertyProp } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuLandmark, LuMap } from "react-icons/lu";

export default function PropertyCard({
  property,
}: {
  property: PropertyProp;
}) {
  return (
    <section className="w-full">
      <div className="bg-[var(--primary-bg)] text-[var(--text-hover-color)] p-5 rounded-custom shadow-custom flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mt-2">
        <div className="flex items-center sm:items-start gap-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[var(--primary-icon-l)] rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={
                property?.property_logo?.[0]
                  ? property.property_logo[0]
                  : "img/property-img/property-1.png"
              }
              alt={property?.property_name || "Property Logo"}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <Link
              href={`/${generateSlug(property?.category)}/${property.property_slug}`}
              className="sub-heading font-semibold hover:text-[var(--primary-text-h)] line-clamp-1"
            >
              {property?.property_name}
            </Link>

            <div className="flex items-center gap-1 text-xs sm:text-sm mt-1 flex-wrap">
              <LuMap className="w-4 h-4" />
              <span className="truncate max-w-[200px] text-[var(--primary-text)] sm:max-w-none">
                {property?.property_city && `${property?.property_city}, `}
                {property?.property_state && `${property?.property_state}, `}
                {property?.property_country && property?.property_country}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:self-end justify-end sm:justify-start">
          <LuLandmark className="w-3 h-3 sm:w-4 sm:h-4" />
          <h3 className="text-xs sm:text-lg font-bold">{property?.category}</h3>
        </div>
      </div>
    </section>
  );
}
