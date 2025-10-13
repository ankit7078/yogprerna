// app/institutes/[detail]/_detail_property_component/tabs/WorkingHours.tsx
import React from "react";
import { Clock, CheckCircle } from "lucide-react";

const workingHours = [
  { day: "Monday", time: "5:30 AM - 9:00 PM" },
  { day: "Tuesday", time: "5:30 AM - 9:00 PM" },
  { day: "Wednesday", time: "5:30 AM - 9:00 PM" },
  { day: "Thursday", time: "5:30 AM - 9:00 PM" },
  { day: "Friday", time: "5:30 AM - 9:00 PM" },
  { day: "Saturday", time: "5:30 AM - 9:00 PM" },
  { day: "Sunday", time: "5:30 AM - 9:00 PM" },
];

export default function WorkingHours() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="flex justify-center items-centerbg-gray-50">
      <div className="w-full overflow-hidden bg-white">
     

        <ul className="divide-y divide-gray-200">
          {workingHours.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-5 py-3 hover:bg-purple-50 transition ${
                item.day === today ? "bg-purple-100" : ""
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                {item.day}
                <CheckCircle
                  size={18}
                  className="text-green-600"
                />
              </span>
              <span className="font-semibold text-gray-800">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}