import React from "react";
import { Clock, CheckCircle, XCircle } from "lucide-react";

const workingHours = [
  { day: "Monday", time: "5:30 AM - 9:00 PM" },
  { day: "Tuesday", time: "5:30 AM - 9:00 PM" },
  { day: "Wednesday", time: "5:30 AM - 9:00 PM" },
  { day: "Thursday", time: "5:30 AM - 9:00 PM" },
  { day: "Friday", time: "5:30 AM - 9:00 PM" },
  { day: "Saturday", time: "7:00 AM - 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function WorkingHours() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="flex justify-center items-center bg-[var(--primary-bg)]  text-[var(--secondary-text)]">
      <div className="w-full">
        <ul>
          {workingHours.map((item, index) => {
            const isToday = item.day === today;
            const isClosed = item.time.toLowerCase() === "closed";

            return (
              <li
                key={index}
                className={`flex justify-between items-center px-5 py-3 transition-colors duration-300 ${isToday
                    ? "bg-[var(--secondary-icon-l)] text-[var(--text-muted)] font-semibold"
                    : "hover:bg-[var(--secondary-icon-l)] hover:text-[var(--text-muted)]"
                  }`}
              >
                <div className="flex items-center gap-2">
                  {isClosed ? (
                    <XCircle size={18} className="text-red-500" />
                  ) : (
                    <CheckCircle size={18} className="text-green-600" />
                  )}
                  <span className="font-medium heading-sm">{item.day}</span>
                </div>

                {/* Time */}
                <span
                  className={`paragraph ${isClosed ? "text-red-500 font-semibold" : "hover:text-[var(--text-muted)]"
                    }`}
                >
                  {item.time}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
