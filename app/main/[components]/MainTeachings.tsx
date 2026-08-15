"use client";

import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import MainTeachingItem from "./MainTeachingItem";
import { useEffect, useState } from "react";
import { getAllTeachings, getTeachingQty } from "@/actions/teaching-actions";
import Link from "next/link";
import { TeachingLoaders } from "./LoadingComp";

interface particularTeachingItem {
  id: string;
  title: string;
  image: string | null;
  description: string;
  mainContent: string;
  comment: string;
  bannerColour: string | null;
  teacherId: string | null;
  teacherName: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const MainTeachings = () => {
  const [teachings, setTeachings] = useState<
    particularTeachingItem[] | undefined
  >(undefined);
  const [error, setError] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [listExpanded, setListExpanded] = useState<boolean>(false)

  useEffect(() => {
    const getTeaching = async () => {
      setIsLoading(true);
      const getTeachings = await getAllTeachings();
      setIsLoading(false);

      if (!getTeachings) {
        setError(true);
        return;
      }
      setTeachings(getTeachings);
    };

    getTeaching();
  }, []);
  return (
    <section className="w-full font-manrope bg-gray-100">
      {/* Header */}
      <div className="w-full">
        <Link
          href="/main/ViewTeachings/"
          className="flex justify-between items-center px-5 py-3 my-3"
        >
          <p className="font-bold text-[#222] text-xl font-hanken">Inspired Messages</p>
          <MoveRight />
        </Link>
      </div>

      {/* Scroll wrapper */}
      <div className={`w-full overflow-x-auto md:relative md:overflow-visible ${!listExpanded && "md:h-250 md:overflow-y-clip"}`}>
        {/* Inner content */}
        <div
          className="
            flex gap-4 px-5 pb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-6
          "
        >
          {error && !loading && (
            <div className="flex-1 w-full h-full relative snap-start flex justify-center items-center">
              <p className="flex items-center gap-2 font-bold">
                Item does not exist
              </p>
            </div>
          )}
          {!error && loading && (
            <TeachingLoaders />
          )}
          {!error &&
            !loading &&
            teachings?.map((item) => (
              <MainTeachingItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                mainContent={item.mainContent}
                bannerColour={item.bannerColour}
              />
            ))}
            
        </div>
        {!listExpanded && (
          <div onClick={() => setListExpanded(true)} className="absolute bottom-0 z-10 w-full place-self-center bg-white hidden md:flex justify-center items-center border-gray-400 border py-5 my-3 mx-2 shadow-2xl rounded-lg hover:bg-white/80 transition-all duration-100 ease-in cursor-pointer">
            <ChevronDown size={20} />
        </div>
        )}
        {listExpanded && (
          <div onClick={() => setListExpanded(false)} className="hidden md:flex justify-center items-center border-gray-400 border py-5 my-3 mx-2 shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in cursor-pointer">
              <ChevronUp size={20}/>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainTeachings;
