"use client";

import { useEffect, useState } from "react";
import { getTeachingQty } from "@/actions/teaching-actions";
import Link from "next/link";
import ViewTeachingsItem from "./(components)/ViewTeachingsItem";
import IndexNavigation from "@/components/IndexNavigation";
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

const ViewTeachings = () => {
  const [teachings, setTeachings] = useState<
    particularTeachingItem[] | undefined
  >(undefined);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTeaching = async () => {
      setLoading(true);
      const getfiveTeachings = await getTeachingQty(5);
      setLoading(false);

      if (!getfiveTeachings) {
        setError(true);
        return;
      }

      setTeachings(getfiveTeachings);
    };

    getTeaching();
  }, []);
  return (
    <>
      <IndexNavigation />
      <section className="w-full flex-1 px-2 py-4 max-w-[800px] mx-auto">
        {/* Scroll wrapper */}
        <div className="w-full my-2">
          <div
            className="
            flex flex-col gap-4 px-1 pb-6
            w-full items-center
            sm:grid sm:grid-cols-2 sm:gap-6
          "
          >
            {error && !loading && (
              <div className="w-[90vw] sm:w-[40vw] h-[70vh] flex justify-center items-center">
                <p className="flex items-center gap-2 font-bold">
                  Item does not exist
                </p>
              </div>
            )}
            {!error && loading && (
              <div className="w-[90vw] sm:w-[50vw] h-[70vh] flex justify-center items-center">
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
                <ViewTeachingsItem
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
    </>
  );
};

export default ViewTeachings;
