"use client";

import { UserAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TeacherGreeting = () => {
  const { user, isLoading } = UserAuth();
  const router = useRouter();
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(
        localStorage.getItem("adminStatus") ?? "false"
      );
      setUserIsAdmin(stored);
    }
  }, []);

  useEffect(() => {
    if (!user && !userIsAdmin && !isLoading) {
      router.push("/teacher/secure");
    }
  }, [user, userIsAdmin, isLoading, router]);

  return (
    <section className="w-full my-3 py-2 px-3 sm:max-2xl:px-0 flex justify-start items-center text-[#333]">
      <div className="font-bold text-[1.1rem]">
        <span>Hi, </span> <span>{user?.displayName}</span>
      </div>
    </section>
  );
};

export default TeacherGreeting;
















// "use client";

// import { UserAuth } from "@/app/context/auth-context";
// import { useRouter, redirect } from "next/navigation";
// import { useEffect } from "react";

// const TeacherGreeting = () => {
//   const { user, isLoading } = UserAuth();
//   const userIsAdmin = JSON.parse(
//     localStorage.getItem("adminStatus") ?? "false",
//   );

//   // useEffect(() => {
//   //   if (!user && !isLoading) {
//   //     router.push("/signup")
//   //   }
//   // }, [user, router])

//   if (!user && !userIsAdmin && !isLoading) {
//     redirect("/teacher/secure");
//   }

//   return (
//     <section className="w-full my-3 py-2 px-3 sm:max-2xl:px-0 flex justify-start items-center text-[#333]">
//       <div className="font-bold text-[1.1rem]">
//         <span>Hi, </span> <span>{user?.displayName}</span>
//       </div>
//     </section>
//   );
// };

// export default TeacherGreeting;
