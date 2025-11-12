export const stripHtmlAndLimit = (html: string, limit: number = 100): string => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
};

export const generateSlug = (title: string): string => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

import { ReviewProps } from "@/types/types";

export const getAverageRating = (reviews: ReviewProps[] = []): string => {
  if (!reviews || reviews.length === 0) {
    return "N/A";
  }
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  const average = total / reviews.length;
  return average.toFixed(1);
};

import {
  AllDegreeAndInstituteProps,
  AllLanaguagesProps,
  AllSkillsProps,
  PropertyProps,
} from "@/types/types";

type WorkingHoursPerDay = {
  open?: string;
  close?: string;
};

type WorkingHoursData = {
  [day in
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"]?: WorkingHoursPerDay;
};
export function formatDateTime(dateString: string | Date) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-IN", { month: "short" });
  const year = date.getFullYear();

  const time = date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    day,
    month,
    year,
    time,
  };
}

export const stripHtmlNoLimit = (html: string) => {
  const tempDiv = document?.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text;
};

export const transformWorkingHours = (data: WorkingHoursData) => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ] as const;

  return days
    .map((day) => {
      const open = data?.[day]?.open || "";
      const close = data?.[day]?.close || "";

      return {
        day: day.charAt(0).toUpperCase() + day.slice(1),
        openTime: open,
        closeTime: close,
        isOpen: !!(open && close),
      };
    })
    .filter((item) => item.isOpen); 
};

export const formatTo12Hour = (time: string) => {
  if (!time) return "";
  const [hourStr, minuteStr] = time?.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
export const formatDateWithTime = (dateString: string) => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
};

export const generateSlugNonLowerCase = (text: string): string => {
  return text
    ?.trim()
    ?.replace(/[^a-zA-Z0-9\s-]/g, "")
    ?.replace(/\s+/g, "-")
    ?.replace(/-+/g, "-");
};

export const getLanguageNameById = (
  id: number,
  allLanguages: AllLanaguagesProps[]
) => {
  const language = allLanguages?.find(
    (item) => Number(item.uniqueId) === Number(id)
  );
  return language?.language;
};

export const getSkillNameById = (id: number, allSKills: AllSkillsProps[]) => {
  const skill = allSKills?.find((item) => Number(item.uniqueId) === Number(id));
  return skill?.skill;
};

export const getPropertyDetails = (id: number, properties: PropertyProps[]) => {
  const property = properties.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return property;
};

export const getDegreeById = (
  id: number,
  allDegreeAndInst: AllDegreeAndInstituteProps
) => {
  const degree = allDegreeAndInst?.degree?.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return degree?.degree_name;
};
export const getInstituteById = (
  id: number,
  allDegreeAndInst: AllDegreeAndInstituteProps
) => {
  const institute = allDegreeAndInst?.institute?.find(
    (item) => Number(item?.uniqueId) === Number(id)
  );
  return institute?.institute_name;
};

export const formatToMonthInput = (dateString: string) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

export function extractKeywords(
  keywordObjects: ({ label?: string; value?: string } | string)[] = []
): string[] {
  return keywordObjects
    .map((item) => {
      if (typeof item === "string") return item.trim(); 
      if (item && typeof item === "object") {
        return item.value?.trim() || item.label?.trim() || "";
      }
      return "";
    })
    .filter((v): v is string => v.length > 0)
    .slice(0, 2);
}

export function stripHtml(html: string, limit: number = 160): string {
  const text = html?.replace(/<[^>]+>/g, "").trim() || "";

  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }

  return text;
}
