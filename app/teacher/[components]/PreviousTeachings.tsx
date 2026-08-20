import { getAllTeachings } from "@/actions/teaching-actions";
import { useState, useEffect } from "react";
import DisplayTeachings from "./DisplayTeachings";
import { Spinner } from "@/components/ui/spinner";


interface allTeachingElementsMain {
    id: string;
    title: string;
    image: string | null;
    bannerColour: string | null;
    description: string;
    // todaysWord: boolean;
    mainContent: string;
    comment: string;
    updatedAt: Date;
    teacherId: string | null;
    teacherName: string | null;
}


const PreviousTeachings = () => {
  const [allTeachings, setAllTeachings] = useState<allTeachingElementsMain[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getTeachings = async () => {
      setIsLoading(true);
      const teachings = await getAllTeachings();
      setAllTeachings(teachings);
      setIsLoading(false);
    };
    getTeachings();
  }, []);

  // ✅ Transform DB shape → UI shape
  const formattedTeachings = allTeachings.map((teaching) => ({
    id: teaching.id,
    title: teaching.title,
    imageUrl: teaching.image ?? "",
    bannerColour: teaching.bannerColour ?? "",
    description: teaching.description,
    todaysWord: false, // replace if you actually have this value
    content: teaching.mainContent,
    comment: teaching.comment,
    updatedAt: teaching.updatedAt.toISOString(),
  }));

  return (
    <div className="w-full flex justify-center items-center my-8 px-3">
      {!allTeachings[0] && isLoading && (
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <p className="flex items-center gap-2 font-bold">
            <span>Loading</span>
            <span>
              <Spinner />
            </span>
          </p>
        </div>
      )}

      {!allTeachings[0] && !isLoading && (
        <p className="text-gray-600">You currently have no teachings</p>
      )}

      {allTeachings[0] && !isLoading && (
        <DisplayTeachings allTeachings={formattedTeachings} />
      )}
    </div>
  );
};

export default PreviousTeachings