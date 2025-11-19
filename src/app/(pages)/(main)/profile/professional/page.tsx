"use client";

import React, { useCallback, useEffect, useState } from "react";
import Banner from "./_professional_components/Banner";
import { AllDegreeAndInstituteProps, UserProps } from "@/types/types";
import Link from "next/link";
import ProfileImage from "./_professional_components/ProfileImage";
import AboutSection from "./_professional_components/About/AboutSection";
import API from "@/contexts/API";
import { getProfile } from "@/contexts/getAssets";
import ResumeSection from "./_professional_components/Resume/ResumeSection";
import ProfieScore from "./_professional_components/Score/ProfieScore";
import ContactInfo from "./_professional_components/ContactInfo/ContactInfo";
import LanguagesSection from "./_professional_components/Languages/LanguagesSection";
import SkillSection from "./_professional_components/Skills/SkillSection";
import { AxiosResponse } from "axios";
import ExperienceSection from "./_professional_components/Experience/ExperienceSection";
import EducationSection from "./_professional_components/Education/Education";
import ProfessionalLoader from "@/components/Loader/Professional/ProfessionalLoader";
import Suggestions from "./_professional_components/Suggestions/Suggestions";
import { useRouter } from "next/navigation";
import { BadgeCheck, Mail, Pen, Phone } from "lucide-react";

export default function Professional() {
  const router = useRouter();
  const [profileData, setProfileData] = useState<UserProps | null>(null);
  const [allSKills, setAllSkills] = useState([]);
  const [allLanguages, SetAllLanguages] = useState([]);
  const [allDegreeAndInstitute, setAllDegreeAndInstitute] =
    useState<AllDegreeAndInstituteProps | null>(null);
  const [loading, setLoading] = useState(true);

  const getAllDegreeAndInstitute = useCallback(async () => {
    try {
      const [degreeRes, instRes] = await Promise.all([
        API.get(`/profile/degree`),
        API.get(`/profile/institute`),
      ]);
      const finalData = {
        degree: degreeRes.data || [],
        institute: instRes.data || [],
      };

      setAllDegreeAndInstitute(finalData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllDegreeAndInstitute();
  }, [getAllDegreeAndInstitute]);

  const getAllSkillAndLanuages = useCallback(async () => {
    try {
      const [skillsRes, langRes] = await Promise.all([
        API.get(`/profile/skill/all/list`),
        API.get(`/profile/language/all/list`),
      ]);
      setAllSkills(skillsRes.data);
      SetAllLanguages(langRes.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllSkillAndLanuages();
  }, [getAllSkillAndLanuages]);

  const getProfileUser = useCallback(async () => {
    setLoading(true);
    try {
      const profile = await getProfile();

      if (!profile || !profile.isProfessional || !profile?.uniqueId) {
        console.warn("Invalid profile or unauthorized role.");
        router.push("/profile/professional");
        return;
      }

      const uniqueId = profile.uniqueId;

      const [
        bioResult,
        skillResult,
        languageResult,
        resumeResult,
        expResult,
        eduResult,
        scoreResult,
      ] = await Promise.allSettled([
        API.get(`/profile/bio/${uniqueId}`),
        API.get(`/profile/skill/${uniqueId}`),
        API.get(`/profile/language/${uniqueId}`),
        API.get(`/profile/doc/resume/${uniqueId}`),
        API.get(`/profile/experience/${uniqueId}`),
        API.get(`/profile/education/${uniqueId}`),
        API.get(`/profile/score/${uniqueId}`),
      ]);

      const getData = function <T>(
        result: PromiseSettledResult<AxiosResponse<T>>,
        fallback: T
      ): T {
        return result.status === "fulfilled" ? result.value.data : fallback;
      };

      const finalData = {
        ...profile,
        heading: getData(bioResult, {}).heading || "",
        about: getData(bioResult, {}).about || "",
        skills: getData(skillResult, {}).skills || [],
        skillsId: getData(skillResult, {}).uniqueId,
        languages: getData(languageResult, {}).languages || [],
        languageId: getData(languageResult, {}).uniqueId,
        resume: getData(resumeResult, {}).resume,
        experiences: getData(expResult, []),
        education: getData(eduResult, []),
        score: getData(scoreResult, {}).score,
      };

      setProfileData(finalData);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
      router.push("/");
    } finally {
      getAllSkillAndLanuages();
      getAllDegreeAndInstitute();
      setLoading(false);
    }
  }, [getAllSkillAndLanuages, getAllDegreeAndInstitute, router]);


  useEffect(() => {
    getProfileUser();
  }, [getProfileUser]);

  if (loading) {
    return <ProfessionalLoader />;
  }

  return (
    <div className="min-h-screen bg-[var(--secondary-bg)]">
      <div className="relative">
        <Banner profile={profileData} />
      </div>
      <div className="relative px-2 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-custom px-6 pb-8 shadow-custom">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8 pt-5 -mt-20">
            <ProfileImage profile={profileData} />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h1 className="heading font-bold flex items-center jsutify-center space-x-4 mb-2">
                    <span>
                      {/* {profileData?.name} */}
                      Ankit Verma
                    </span>
                    <span className="inline-flex items-center px-3 py-1  mt-2 rounded-full text-xs font-semibold bg-[var(--primary-icon-l)] text-[var(--text-hover-color)] ring-1 ring-[var(--text-hover-color)] shadow-custom">
                      <BadgeCheck className="me-1" />
                      Professional
                    </span>
                  </h1>
                  <h2 className="font-medium heading-sm mb-2">
                    {/* @{profileData?.username} */}
                    ankit verma
                  </h2>
                  {profileData?.heading && (
                    <p className="mb-4">
                      {/* {profileData?.heading} */}
                    </p>
                  )}

                  <div className="flex items-center space-x-1 mb-3 heading-sm">
                    <Mail className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <span>
                      {/* {profileData?.email} */}
                      @av8537742@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 heading-sm">
                    <Phone className="h-4 w-4 text-[var(--text-hover-color)]" />
                    <span>
                      {/* {profileData?.mobile_no} */}
                      7078877740
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Link
                    href={`/setting`}
                    className="bg-[var(--text-hover-color)] text-[var(--text-color-primary)] 
      px-4 py-2 rounded-custom cursor-pointer
      hover:shadow-custom hover:scale-102 active:scale-95 
      transition-all duration-300 ease-in-out 
      animate-fadeIn flex space-x-2 items-center"
                  >
                    <Pen className="h-4 w-4" />
                    <span className="font-medium paragraph">Edit Profile</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <AboutSection getProfile={getProfileUser} profile={profileData} />
            <ExperienceSection
              profile={profileData}
              getProfile={getProfileUser}
            />
            <EducationSection
              profile={profileData}
              allDegreeAndInstitute={allDegreeAndInstitute}
              getProfile={getProfileUser}
            />
            <SkillSection
              getProfile={getProfileUser}
              profile={profileData}
              allSkills={allSKills}
            />
            <LanguagesSection
              profile={profileData}
              allLanguages={allLanguages}
              getProfile={getProfileUser}
            />
          </div>
          <div className="space-y-8">
            <ResumeSection profile={profileData} getProfile={getProfileUser} />
            <ProfieScore profile={profileData} />
            <ContactInfo profile={profileData} />
            <Suggestions profile={profileData} />
          </div>
        </div>
      </div>
    </div>
  );
}
