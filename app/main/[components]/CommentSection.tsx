import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SendHorizonal, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { ButtonGroupSeparator } from "@/components/ui/button-group";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  return (
    <section className="w-full flex flex-col items-start">
      <div className="w-full flex flex-col justify-between items-start mb-3">
        <p className="w-full flex gap-3 font-bold text-[1.2rem] text-[#333]">
          <span className="">Questions / Comments</span> <span className="">{`( )`}</span>
        </p>
        <div className="w-full"></div>
      </div>
      <div className="w-full flex flex-col gap-5 items-start sm:px-5 my-2">
        <div className="w-full flex justify-between items-center">
          <div className="bg-gray-400 rounded-full px-3 py-3 border">
            <UserRound />
          </div>
          <input
            type="text"
            className="block w-[60%] sm:w-[80%] border-b-2 border-[#333] outline-none"
            placeholder="leave a comment"
          />

          <Button className="sm:hidden hover:bg-black/25 transition-all duration-75 ease-initial"><SendHorizonal /></Button>
          <Button className="hidden sm:block w-[10%] hover:bg-black/25 transition-all duration-75 ease-initial">Post</Button>
        </div>
        <div className="w-full flex flex-col justify-between gap-3 items-start sm:px-5 px-1">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
