'use client'

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import API from "@/contexts/API";
import { UserProps } from "@/types/types";

export default function Suggestions({
  profile,
}: {
  profile: UserProps | null;
}) {
  const [users, setUsers] = useState<UserProps[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const response = await API.get(`/profile/users`);
      const data = response.data.filter(
        (user: UserProps) => user?.username !== profile?.username
      );

      const shuffleArray = (array: UserProps[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      const shuffled = shuffleArray(data);
      setUsers(shuffled.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  }, [profile]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] rounded-xl shadow-custom p-5 w-full max-w-xl mx-auto">
      <h2 className="heading font-semibold text-[var(--secondary-text)] mb-4">
        Related Users
      </h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-custom shadow-custom transition-all"
          >
            <Link
              href={`/u/${generateSlugNonLowerCase(user.username)}`}
              className="block"
            >
              <div className="relative w-16 h-16 rounded-custom shadow-custom overflow-hidden">
                <Image
                  src={
                    user.avatar?.[0]
                      ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${user.avatar?.[0]}`
                      : "/img/course_banner.png"
                  }
                  alt={user.username}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between align-middle">
              <Link
                href={`/u/${generateSlugNonLowerCase(user.username)}`}
                className="text-md font-semibold text-[var(--primary-text)] transition-all duration-300"
              >
                {user.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
