"use client";

import { MoveRight } from "lucide-react";
import MainTeachingItem from "./MainTeachingItem";
import { useEffect, useState } from "react";
import { getAllTeachings, getTeachingQty } from "@/actions/teaching-actions";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";

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
    <section className="w-full">
      {/* Header */}
      <div className="w-full">
        <Link
          href="/main/ViewTeachings/"
          className="flex justify-between items-center px-5 py-3 my-3"
        >
          <p className="font-bold text-[#222] text-xl">Explore Teachings</p>
          <MoveRight />
        </Link>
      </div>

      {/* Scroll wrapper */}
      <div className="w-full overflow-x-auto md:overflow-visible">
        {/* Inner content */}
        <div
          className="
            flex gap-4 px-5 pb-6
            snap-x snap-mandatory
            md:grid md:grid-cols-2 md:gap-6
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
            <div className="w-full h-full relative snap-start flex justify-center items-center">
              <p className="flex items-center gap-2 font-bold">
                <span>Loading</span>{" "}
                <span>
                  <Spinner />
                </span>
              </p>
            </div>
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
      </div>
    </section>
  );
};

export default MainTeachings;
