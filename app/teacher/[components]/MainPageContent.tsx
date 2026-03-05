"use client";

import { UserAuth } from "@/app/context/auth-context";
import AskAQuestionSection from "@/app/main/[components]/AskAQuestionSection";
import MainPopularQuestions from "@/app/main/[components]/MainPopularQuestions";
import MainTeachings from "@/app/main/[components]/MainTeachings";
import { WordSection } from "@/app/main/[components]/WordSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainPageContent = () => {
  const { user } = UserAuth();
  const router = useRouter();
  console.log(user)


  return (
    <section className='max-w-200 mx-auto pb-8 w-full min-h-screen flex flex-col overflow-x-hidden'>
      <MainTeachings />
      <MainPopularQuestions />
      <AskAQuestionSection />
      <WordSection />
    </section>
  );
};

export default MainPageContent;
