"use client"

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


type itemValues = {
 id: string;
 title: string;
 content: string;
}[]

type Questions = {
    title: string;
    id: string;
    content: string;
    priority: string | null;
    priorityRank: number | null;
    linkId: string | null;
    createdAt: Date;
    updatedAt: Date;
}[]

export const INITIALQUESTIONITEMS = [
  {
    id: "0",
    title: "Is man one—or three?",
    content:
      "Man was one when humanity was created in Genesis 1:27 in the Father's image. Man became three in Genesis 2:7, when God caused man to become a living being with a mind and a living spirit. Scripture and the observable world work together to reveal this truth, just as Romans 1:20 teaches. The Bible's emphasis is not on the evolution of the flesh but on the beginning of man's mind and spirit, identifying Adamic man with the Neolithic era when cultivation began.",
  },
  {
    id: "1",
    title:
      "Are prophets still relevant today, or did they end with the Bible?",
    content:
      "Yes, prophets are still relevant, but they do not bring new revelation. The Word is eternally established in heaven, and a true prophet confirms what God has already revealed rather than adding to it. According to 1 John 4:1, every prophet must be tested, and their message must agree with the confirmed Word as witnessed by the prophets, the apostles, and Christ in the four Gospels. Anyone who contradicts that confirmed Word is a false prophet, regardless of title or tradition. True prophets and apostles exist, but their role is to confirm, testify to, and apply the Word—not replace it or introduce new doctrine. As Jesus taught, the Spirit testifies to the truth (John 15:26), and those who are spiritual judge all things according to the Word (1 Corinthians 2:15). In the Spirit, truth is established by the confirmation of God's Word, not by personal opinions.",
  },
  {
    id: "2",
    title: "Is 'Once Saved, Always Saved' (OSAS) biblical?",
    content:
      "No. Forgiveness can be withdrawn, as Jesus illustrated in the parable of the unforgiving servant (Matthew 18:24–35). The Holy Spirit gives birth to the believer (John 3:6; Galatians 4:26; Isaiah 66:13), but if a believer stops loving, the Spirit is grieved and departs (Ephesians 4:30; Genesis 6:6). Without the Holy Spirit, a person no longer belongs to Christ (Romans 8:9). Scripture teaches that whoever is united with the Lord is one spirit with Him (1 Corinthians 6:17), but refusing God's command to love your neighbor breaks that unity. Jesus warned that hatred and discrimination bring judgment (Matthew 5:22), that the love of many would grow cold in the last days (Matthew 24:12), and that many who performed works in His name would still be rejected (Matthew 7:22). Salvation is inseparable from abiding in Christ through love, and every statement must be confirmed by God's Word rather than human opinion.",
  },
];

const MainPopQuestionsItem = () => {
  const [questionsArr, setQuestionsArr] = useState<Questions | itemValues>(INITIALQUESTIONITEMS)
  const [contentAmt, setContentAmt] = useState<number>(3)
  const [readMoreIdArr, setReadMoreIdArr] = useState<string[]>([])

  const toggleReadMore = (queId: string) => {
   if (readMoreIdArr.includes(queId)) {
    setReadMoreIdArr((prevArr) => (
      prevArr.filter(item => item !== queId)
    ))
    return
   }
   setReadMoreIdArr((prevArr) => {
    return [...prevArr, queId]    
  })
  }

  const readMoreValue = (id: string) => {
    const result = readMoreIdArr.includes(id) ? true : false
    return result
  }

  useEffect(() => {
    const storeReqQuestions = async () => {
      const questions = await getQuestions(10)
      setQuestionsArr(questions)
    }

    storeReqQuestions()
  }, [])
  return (
    <Card className="w-full bg-gray-50/50 my-10">
      <CardHeader>
        <CardTitle className="font-hanken text-2xl text-[#555]">
          Popular Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="font-manrope">
          {questionsArr.filter((item, index) => index < contentAmt).map(item => 
            <AccordionItem key={item.id} value={String(item.id)}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="text-[#666] ">
                <div className="relative">
                  <div className={`${!readMoreValue(item.id) ? "line-clamp-7 md:line-clamp-3" : ""}`}>{item.content}</div>
                  {readMoreValue(item.id) ? (
                    <div onClick={() => toggleReadMore(item.id)} className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer">
                    Read less
                  </div>
                  ) : (
                    <div onClick={() => toggleReadMore(item.id)} className="font-bold bg-gray-50/50 shadow-2xl px-3 absolute bottom-0 right-0 cursor-pointer">
                    Read more
                  </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
          {!(contentAmt > 3) ? (
          <div onClick={() => setContentAmt(10)} className="font-bold pl-2 text-[#777] underline underline-offset-4 text-[0.8rem] my-3 hover:text-[#333] hover:underline-offset-2 transition-all duration-100 ease-in cursor-pointer">
            See more
          </div>
          
          ) : (
          <Link href="/main/Questions/" className="flex justify-end items-center font-bold pr-2 text-[#777] my-2 hover:text-[#333] hover:underline-offset-2 transition-all duration-100 ease-in cursor-pointer">
              <div className="flex gap-1 border-b border-b-gray-400">
                <span>See all</span>
                <span><ArrowRight /></span>
              </div>
            
          </Link>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default MainPopQuestionsItem;
