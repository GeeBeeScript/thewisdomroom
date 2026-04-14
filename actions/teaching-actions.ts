"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";
import { title } from "process";

interface createTeachingParams {
  title: string;
  imageUrl: string;
  imageColor: string;
  description: string;
  todaysWord: boolean;
  content: string;
  comment: string;
}

interface updateTeachingParams {
  id?: string;
  title?: string;
  image?: string;
  description?: string;
  mainContent?: string;
  comment?: string;
}

export const createTeaching = async ({
  title,
  imageUrl,
  imageColor,
  description,
  todaysWord,
  content,
  comment,
}: createTeachingParams) => {
  await db.teachings.create({
    data: {
      title: title,
      bannerColour: imageColor,
      description: description,
      mainContent: content,
      comment: comment,
    },
  });
};

export const getAllTeachings = async () => {
  const allTeachings = await db.teachings.findMany({
    orderBy: {
        updatedAt: "desc",
      },
  });
  return allTeachings;
};

export const getTeaching = async (id: string) => {
  let particularTeaching;
  try {
    particularTeaching = await db.teachings.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
    return particularTeaching;
  } catch (error) {
    particularTeaching = null;
    console.log(error);
    return particularTeaching;
  }
};

export const updateTeaching = async ({
  id,
  title,
  image,
  description,
  mainContent,
  comment,
}: updateTeachingParams) => {
  await db.teachings.update({
    where: {
      id: id,
    },
    data: {
      id: id,
      title: title,
      description: description,
      mainContent: mainContent,
      comment: comment,
    },
  });
};

export const getTeachingQty = async (quantity: number) => {
  try {
    const fiveTeachings = await db.teachings.findMany({
      take: quantity,
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (!fiveTeachings) throw new Error("Not enough Teachings");
    return fiveTeachings
  } catch (error) {
    console.log(error);
  }
};


export const deleteTeaching = async (id: string) => {
  await db.teachings.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/teacher");
};
