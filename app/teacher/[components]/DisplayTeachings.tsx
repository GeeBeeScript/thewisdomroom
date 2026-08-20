import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import TeachingTableElement from "./TeachingTableElement";
import { useState } from "react";

interface allTeachingElements {
  id: string;
  title: string;
  imageUrl: string;
  bannerColour: string;
  description: string;
  todaysWord: boolean;
  content: string;
  comment: string;
  updatedAt: string;
}

const DisplayTeachings = ({
  allTeachings,
}: {
  allTeachings: allTeachingElements[];
}) => {
  const [listExpanded, setListExpanded] = useState<boolean>(false);

  return (
    <div
      className={`relative ${!listExpanded && "h-150 overflow-y-clip"}`}
    >
      <p className="text-[#555] w-full flex justify-center items-center text-[1.2rem] font-bold py-2 mb-3">
        All Teachings
      </p>
      <div className="">
        <Table className="table-fixed w-full border-2">
          <TableCaption>A list of your teachings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="max-sm:hidden">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allTeachings.map((teaching) => (
              <TeachingTableElement key={teaching.id} {...teaching} />
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Teachings</TableCell>
              <TableCell className="text-right">
                {allTeachings.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      {!listExpanded && (
        <div
          onClick={() => setListExpanded(true)}
          className="absolute bottom-0 z-10 w-full place-self-center bg-white flex justify-center items-center border-gray-400 border py-3 my-3 mx-2 shadow-2xl rounded-lg hover:bg-white/80 transition-all duration-100 ease-in cursor-pointer"
        >
          <ChevronDown size={20} />
        </div>
      )}
      {listExpanded && (
        <div
          onClick={() => setListExpanded(false)}
          className="flex justify-center items-center border-gray-400 border py-3 my-3 mx-2 shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in cursor-pointer"
        >
          <ChevronUp size={20} />
        </div>
      )}
    </div>
  );
};

export default DisplayTeachings;
