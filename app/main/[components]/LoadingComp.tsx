"use client"

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Separator } from "@/components/ui/separator";

export const TeachingSkeletonLoader = () => {
  return (
    <Card className="snap-start w-[230px] shrink-0 md:w-full md:shrink">
      <CardHeader className="my-3">
        <Skeleton className="h-[100px] w-full" />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 justify-start">
        <div className="space-y-1">
          <Skeleton className="h-4 w-3/3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-2 w-3/3" />
          <Skeleton className="h-2 w-1/2" />
        </div>
      </CardContent>
      <CardContent className="my-3">
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
};

export const TeachingLoaders = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <TeachingSkeletonLoader key={index} />
      ))}
    </>
  );
};

export const ViewTeachingsPageSkeletonLoader = () => {
  return (
    <Card
      className="
        relative snap-start
        max-[300px]:w-65 w-72
        shrink-0
        sm:w-full sm:shrink
      "
    >
      <CardHeader className="my-3">
        <Skeleton className="h-[100px] w-full" />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 justify-start">
        <div className="space-y-1">
          <Skeleton className="h-4 w-3/3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-1">
          <Skeleton className="h-2 w-3/3" />
          <Skeleton className="h-2 w-1/2" />
        </div>
      </CardContent>
      <CardContent className="my-3">
        <Skeleton className="h-10 w-full bg-gray-500" />
      </CardContent>
    </Card>
  );
};

export const ViewTeachingsPageLoader = () => {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <ViewTeachingsPageSkeletonLoader key={index} />
      ))}
    </>
  );
};

export const TeachingItemPageLoader = () => {
  return (
    <div className="relative flex-1 w-full px-10 py-4">
      <div className="w-full my-6">
        <div className="scroll-m-20 mb-4 space-y-4 text-center tracking-tight text-balance">
          <Skeleton className="h-8 w-full bg-gray-300" />
          <Skeleton className="h-8 w-full bg-gray-300" />
          <Skeleton className="h-8 w-full bg-gray-300" />
          <div className="sm:hidden space-y-4">
          <Skeleton className="h-8 w-full bg-gray-300" />
          <Skeleton className="h-8 w-full bg-gray-300" />
          </div>
        </div>
        <div className="mt-3 mb-6">
          <div>
            <blockquote className="mt-6 border-l-2 pl-6 italic space-y-2">
              <Skeleton className="h-3 w-full " />
              <Skeleton className="h-3 w-2/3 " />
            </blockquote>
          </div>
        </div>
        <Separator className="bg-[#999]" />
      </div>

      <div className="mt-8 w-full mb-5">
        <div className="space-y-4 text-[#222]">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
        </div>
      </div>

      <div className="mt-8 w-full mb-5">
        <div className="space-y-4 text-[#222]">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
        </div>
      </div>

      <div className="mt-8 w-full mb-5">
        <div className="space-y-4 text-[#222]">
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
          <Skeleton className="h-4 w-full " />
        </div>
      </div>

      <Separator className="bg-[#bebebe]" />
    </div>
  );
};

export const LoadingSpinner = () => {
  return (
    <div className="w-full h-full relative snap-start flex justify-center items-center">
      <p className="flex items-center gap-2 font-bold">
        <span>Loading</span>{" "}
        <span>
          <Spinner />
        </span>
      </p>
    </div>
  );
};
