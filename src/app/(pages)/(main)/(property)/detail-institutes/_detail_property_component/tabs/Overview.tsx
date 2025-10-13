// app/institutes/[detail]/_detail_property_component/tabs/Overview.tsx
import React from "react";
import { FaMapMarkerAlt, FaBuilding, FaGlobe } from "react-icons/fa";

const Overview: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-xl font-bold text-[var(--primary-color-2)] mb-3">
          About Iyengar Yoga Center
        </h2>
        <p className="text-[var(--subprimary-color)] leading-relaxed">
          Patanjala Yoga Kendra is an Authorized Iyengar Yoga Centre that was
          established in 1993 on the banks of the Holy River Ganges in
          Rishikesh, the world capital of Yoga. Our centre is recognised by
          <span className="font-semibold"> B. K. S. Iyengar Guruji</span> and
          RIMYI / Ramamani Iyengar Memorial Yoga Institute in Pune. The method
          of Yoga that is taught is Iyengar Yoga, as developed and taught by
          Shri Guruji, B. K. S. Iyengar, the world-famous Yoga Teacher. Guruji's
          method is firmly based in the ancient Indian tradition of Yoga as
          defined in the Yoga Sutras of Patanjali.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--text-primary)] text-[var(--subprimary-color)] shadow-sm rounded-xl p-5 border border-[var(--link-color)]">
          <div className="flex items-center gap-2 mb-3">
            <FaMapMarkerAlt className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold ">Location</h3>
          </div>
          <p className="mb-2">
            Swami Swatantranand Ashram, Next to Swami Dayananda Ashram, Sisham
            Jhadi, Chandreshwar Nagar, Rishikesh, Uttarakhand, India
          </p>
          <div className="flex items-center gap-2">
             <FaMapMarkerAlt className="h-4 w-4 " />
          <p>Rishikesh, Uttarakhand 249137</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaGlobe className="h-4 w-4" />
            <span>India</span>
          </div>
        </div>

        <div className="bg-[var(--text-primary)] text-[var(--subprimary-color)] shadow-sm rounded-xl p-5 border border-[var(--link-color)]">
          <div className="flex items-center gap-2 mb-3">
            <FaBuilding className="h-5 w-5 text-purple-600" />
            <h3 className="text-lg font-semibold ">
              Property Details
            </h3>
          </div>
          <p>
            Type : Private
          </p>
          <p>
            Academic Type: Yoga Studio
          </p>
          <p>
            Established: 1993
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;