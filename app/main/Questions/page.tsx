"use client";

import IndexNavigation from "@/components/IndexNavigation";
import NoContentText from "../[components]/NoContentText";
import { ArrowLeft } from "lucide-react";

import { getQuestions } from "@/actions/teaching-actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { INITIALQUESTIONITEMS } from "../[components]/MainPopQuestionsItem";
import { useRouter } from "next/navigation";

type itemValues = {
  id: string;
  title: string;
  content: string;
}[];

type Questions = {
  title: string;
  id: string;
  content: string;
  priority: string | null;
  priorityRank: number | null;
  linkId: string | null;
  createdAt: Date;
  updatedAt: Date;
}[];

const Questions = () => {
  const [questionsArr, setQuestionsArr] = useState<Questions | itemValues>(
    INITIALQUESTIONITEMS,
  );
  const [readMoreIdArr, setReadMoreIdArr] = useState<string[]>([]);
  const router = useRouter()

  const toggleReadMore = (queId: string) => {
    if (readMoreIdArr.includes(queId)) {
      setReadMoreIdArr((prevArr) => prevArr.filter((item) => item !== queId));
      return;
    }
    setReadMoreIdArr((prevArr) => {
      return [...prevArr, queId];
    });
  };

  const readMoreValue = (id: string) => {
    const result = readMoreIdArr.includes(id) ? true : false;
    return result;
  };

  useEffect(() => {
    const storeReqQuestions = async () => {
      const questions = await getQuestions();
      setQuestionsArr(questions);
    };

    storeReqQuestions();
  }, []);

  return (
    <>
      <IndexNavigation />
      <section className="bg-gray-50/50 w-full flex-1">
        <div className=" w-full flex flex-col gap-4 items-center font-manrope max-w-[90%] mx-auto my-7">
          <div className="relative flex justify-center items-center w-full">
            <h1 className="font-bold text-2xl">Questions</h1>
            <div className="absolute top-0 left-0 cursor-pointer" onClick={() => router.back()}>
              <ArrowLeft />
            </div>
          </div>

          <div className="w-full">
            <Card className="w-full bg-gray-50/50 my-10">
              <CardContent>
                <Accordion
                  type="single"
                  collapsible
                  className="font-manrope w-full"
                >
                  {questionsArr.map((item) => (
                      <AccordionItem key={item.id} value={String(item.id)}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent className="text-[#666] ">
                          <div className="relative">
                            <div
                              className={`${!readMoreValue(item.id) ? "line-clamp-7 md:line-clamp-3" : ""}`}
                            >
                              {item.content}
                            </div>
                            {readMoreValue(item.id) ? (
                              <div
                                onClick={() => toggleReadMore(item.id)}
                                className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer"
                              >
                                Read less
                              </div>
                            ) : (
                              <div
                                onClick={() => toggleReadMore(item.id)}
                                className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer"
                              >
                                Read more
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;

// onst [questionsArr, setQuestionsArr] = useState<Questions | itemValues>(items)
//   const [contentAmt, setContentAmt] = useState<number>(3)
//   const [readMoreIdArr, setReadMoreIdArr] = useState<string[]>([])

//   const toggleReadMore = (queId: string) => {
//    if (readMoreIdArr.includes(queId)) {
//     setReadMoreIdArr((prevArr) => (
//       prevArr.filter(item => item !== queId)
//     ))
//     return
//    }
//    setReadMoreIdArr((prevArr) => {
//     return [...prevArr, queId]
//   })
//   }

//   const readMoreValue = (id: string) => {
//     const result = readMoreIdArr.includes(id) ? true : false
//     return result
//   }

//   useEffect(() => {
//     const storeReqQuestions = async () => {
//       const questions = await getQuestions(10)
//       setQuestionsArr(questions)
//     }

//     storeReqQuestions()
//   }, [])
//   return (
//     <Card className="w-full bg-gray-50/50 my-10">
//       <CardHeader>
//         <CardTitle className="font-hanken text-2xl text-[#555]">
//           Popular Questions
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Accordion type="single" collapsible className="font-manrope">
//           {questionsArr.filter((item, index) => index < contentAmt).map(item =>
//             <AccordionItem key={item.id} value={String(item.id)}>
//               <AccordionTrigger>{item.title}</AccordionTrigger>
//               <AccordionContent className="text-[#666] ">
//                 <div className="relative">
//                   <div className={`${!readMoreValue(item.id) ? "line-clamp-7 md:line-clamp-3" : ""}`}>{item.content}</div>
//                   {readMoreValue(item.id) ? (
//                     <div onClick={() => toggleReadMore(item.id)} className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer">
//                     Read less
//                   </div>
//                   ) : (
//                     <div onClick={() => toggleReadMore(item.id)} className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer">
//                     Read more
//                   </div>
//                   )}
//                 </div>
//               </AccordionContent>
//             </AccordionItem>
//           )}
//           {!(contentAmt > 3) ? (
//           <div onClick={() => setContentAmt(10)} className="font-bold pl-2 text-[#777] underline underline-offset-4 text-[0.8rem] my-3 hover:text-[#333] hover:underline-offset-2 transition-all duration-100 ease-in cursor-pointer">
//             See more
//           </div>

//           ) : (
//           <Link href="/main/Questions/" className="flex justify-end items-center font-bold pr-2 text-[#777] my-2 hover:text-[#333] hover:underline-offset-2 transition-all duration-100 ease-in cursor-pointer">
//               <div className="flex gap-1 border-b border-b-gray-400">
//                 <span>See all</span>
//                 <span><ArrowRight /></span>
//               </div>

//           </Link>
//           )}
//         </Accordion>
//       </CardContent>
//     </Card>
//   );
