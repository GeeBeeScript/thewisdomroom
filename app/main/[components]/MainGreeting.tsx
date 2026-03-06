"use client";

import { UserAuth } from "@/app/context/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bell, Zap } from "lucide-react";

const MainGreeting = () => {
  const { user, isLoading } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/");
    }
  }, [user, isLoading]);
  return (
    <section className="w-full my-2 py-2 px-3 sm:max-2xl:px-0 flex justify-between items-center">
      <div className="font-bold text-[1.1rem]">
        <span>Welcome, </span> <span>{user?.displayName}</span>
      </div>

      <div className="flex justify-between items-center gap-3 ">
        <div className="flex justify-between items-center">
          <span>
            <Zap />
          </span>{" "}
          <span>1</span>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainGreeting;
