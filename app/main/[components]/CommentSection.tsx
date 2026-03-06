import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { ButtonGroupSeparator } from "@/components/ui/button-group";
import CommentItem from "./CommentItem";

const CommentSection = () => {
  return (
    <section className="w-full flex flex-col items-start">
      <div className="w-full flex flex-col justify-between items-start mb-3">
        <p className="flex gap-3 font-bold text-[1.2rem] text-[#333]">
          <span>Questions / Comments</span> <span>{`( )`}</span>
        </p>
        <div className="bg-blue-500 w-full"></div>
      </div>
      <div className="w-full flex flex-col gap-5 items-start px-5 my-2">
        <div className="w-full flex justify-between items-center">
          <div className="bg-gray-500 rounded-full px-3 py-3 border">
            <UserRound />
          </div>
          <input
            type="text"
            className="block w-[70%] md:w-[80%] border-b-2 border-[#333] outline-none"
          />

          <Button className="block w-[10%]">Post</Button>
        </div>
        <div className="w-full flex flex-col justify-between gap-3 items-start px-5">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
