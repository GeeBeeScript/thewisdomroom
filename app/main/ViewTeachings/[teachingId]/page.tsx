"use client";

import { use, useState, useEffect } from "react";

import { getTeaching } from "@/actions/teaching-actions";
import { Separator } from "@/components/ui/separator";
import MainFooter from "@/app/main/[components]/MainFooter";
import TeacherNavigation from "@/components/TeacherNavigation";
import AskAQuestion from "@/app/main/[components]/AskAQuestion";
import { Spinner } from "@/components/ui/spinner";
import IndexNavigation from "@/components/IndexNavigation";
import CommentSection from "../../[components]/CommentSection";
import { TeachingItemPageLoader } from "../../[components]/LoadingComp";

interface particularTeachingItem {
  id: string;
  title: string;
  image: string | null;
  bannerColour: string | null;
  description: string;
  mainContent: string;
  comment: string;
  teacherId: string | null;
  teacherName: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface viewTeachingPageProps {
  params: Promise<{
    tag: string;
    teachingId: string;
  }>;
}

const ViewTeachingPage = ({ params }: viewTeachingPageProps) => {
  const { tag, teachingId } = use(params);
  let particularTeaching: particularTeachingItem | null;

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [teachingItems, setTeachingItems] =
    useState<particularTeachingItem | null>(null);

  useEffect(() => {
    const getField = async () => {
      setLoading(true);
      particularTeaching = await getTeaching(teachingId);
      setLoading(false);

      if (!particularTeaching) {
        setError(true);
        return;
      }
      setTeachingItems(particularTeaching);
    };

    getField();
  }, []);

  return (
    <>
      <IndexNavigation />
      <main className="min-h-screen flex flex-col items-center gap-10 font-chivo">
        {error && !loading && (
          <div className="flex-1 w-full h-full flex justify-center items-center">
            <p className="flex items-center gap-2 font-bold">
              Item does not exist
            </p>
          </div>
        )}
        {!error && loading && (
          <TeachingItemPageLoader />
        )}
        {!error && !loading && (
          <section className="relative flex-1 w-full flex flex-col items-center px-10 py-4 sm:my-4">
            <div className="w-full flex flex-col items-start">
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                {teachingItems?.title}
              </h1>
              <div className="mt-3 mb-6">
                <h2>
                  <blockquote className="mt-6 border-l-2 pl-6 italic">
                    {teachingItems?.description}
                  </blockquote>
                </h2>
              </div>
              <Separator className="bg-[#999]" />
            </div>

            <div className="mt-8 w-full flex flex-col items-start mb-5">
              <p className="leading-7 not-first:mt-6 text-[#222] whitespace-pre-wrap">
                {teachingItems?.mainContent}
              </p>
            </div>

            <Separator className="bg-[#bebebe]" />

            <div className="w-full mt-10 mb-5 flex flex-col justify-start items-start gap-5">
              <div className="w-full sm:px-5 px-1">
              <CommentSection teachingId={teachingId}/>
            </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default ViewTeachingPage;
