
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiGlobeStandLight } from "react-icons/pi";

const Overview: React.FC = () => {
  return (
    <div className="space-y-6 p-5 text-[var(--primary-text)]">
      <div>
        <h2 className="heading font-semibold mb-3">
          About Iyengar Yoga Center
        </h2>
        <p className="leading-relaxed">
          Patanjala Yoga Kendra is an Authorized Iyengar Yoga Centre that was
          established in 1993 on the banks of the Holy River Ganges in
          Rishikesh, the world capital of Yoga. Our centre is recognised by
          B. K. S. Iyengar Guruji and
          RIMYI / Ramamani Iyengar Memorial Yoga Institute in Pune. The method
          of Yoga that is taught is Iyengar Yoga, as developed and taught by
          Shri Guruji, B. K. S. Iyengar, the world-famous Yoga Teacher. Guruji's
          method is firmly based in the ancient Indian tradition of Yoga as
          defined in the Yoga Sutras of Patanjali.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--secondary-bg)]  shadow-custom rounded-custom p-5">
          <div className="flex items-center gap-2 pb-2">
            {/* <FaMapMarkerAlt className="h-4 w-4 text-[var(--text-hover-color)]" /> */}
            <h3 className="sub-heading font-semibold ">Location</h3>
          </div>
          <p className="mb-2">
            Swami Swatantranand Ashram, Next to Swami Dayananda Ashram, Sisham
            Jhadi, Chandreshwar Nagar, Rishikesh, Uttarakhand, India
          </p>
          <div className="flex items-center gap-2">
            <SlLocationPin className="h-4 w-4 text-[var(--text-hover-color)]" />
            <p>Rishikesh, Uttarakhand 249137</p>
          </div>
          <div className="flex items-center gap-2">
            <PiGlobeStandLight className="h-4 w-4 text-[var(--text-hover-color)]" />
            <p>India</p>
          </div>
        </div>

        <div className="bg-[var(--secondary-bg)] shadow-custom rounded-custom p-5">
          <div className="flex items-center gap-2 pb-3">
            {/* <FaBuilding className="h-4 w-4 text-[var(--text-hover-color)]" /> */}
            <h3 className="sub-heading font-semibold ">
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