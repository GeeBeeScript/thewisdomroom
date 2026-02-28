"use client";

import { UserAuth } from "@/app/context/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainPageContent = () => {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/main");
    }
  }, [user]);
  return (
    <section className="flex-1 w-full min-h-screen flex justify-center items-center font-bold text-[#333] text-[1.2rem]">
      The Wisdom Room
    </section>
  );
};

export default MainPageContent;
