import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, UserRound } from "lucide-react";

const CommentItem = () => {
  return (
    <div className="flex w-full gap-2 my-4">
      <div className="">
        <Avatar size="lg" className="bg-blue-500">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="font-bold text-[0.8rem]">Name</div>
        <div className="text-[1.1rem]">Comment</div>
        <div className="flex gap-5 font-bold">
          <div className="flex gap-1">
            <span>22</span>
            <span>
              <ThumbsUp color="blue" />
            </span>
          </div>
          <div className="flex gap-1">
            <span>
              <ThumbsDown />
            </span>
            <span>57</span>
          </div>
        </div>
        <div className="bg-blue-500 w-[70%] sm:w-[50%] border-b border-[#555]"></div>
      </div>
    </div>
  );
};

export default CommentItem;
