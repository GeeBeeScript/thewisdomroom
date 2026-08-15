"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function limitWords(text: string, wordamount: number) {
  return text.split(" ").slice(0, wordamount).join(" ");
}

const MainTopicsSection = () => {
  const [mainExpandStatus, setMainExpandStatus] = useState<boolean>(false);
  const toggleMainExpand = () => {
    setMainExpandStatus((prevState) => !prevState);
  };
  return (
    <section className=" mt-6 mb-10 px-2">
      <div className="my-2">
        <h1 className="font-bold font-hanken text-[1.2rem] py-2 ml-2">
          Major Topics
        </h1>
      </div>
      <div className=" grid grid-cols-1 max-md:gap-4 gap-2 md:grid-cols-2 md:grid-rows-3">
        <div className="md:row-span-3 md:mr-3 px-5 py-3 bg-white shadow-[2px_2px_3px_1px_rgba(0,0,0,0.49)]">
          <div className="flex flex-col justify-evenly items-center gap-2 font-manrope text-[#444]">
            <p className="font-bold my-2 py-2 font-chivo text-3xl  border-b border-black/20 text-center">
              What is the Word?
            </p>
            <div className="px-2 relative max-md:hidden">
              What is the word? Short answer to judging what The Word is- Jesus
              said- you err because you so know the difference between “the
              scriptures “ or “the word of God”, (the power of God is The word )
              8 scriptures shockingly confirm what the word actually is - “in
              the mouth of 2 or more witnesses EVERY word of God is established
              “ The 2 testimony rule is law in all courts in heaven and earth.
              Ironically also on Islamic law. The Bible is a book of 259,000
              confirmations, by 40 witnesses in 66 books. The Quran, Catholic
              traditions and Book of Mormon contain zero confirmations by other
              prophets earlier! Imagine judgement day in God’s court, many
              unconfirmed books thrown out- inadmissible in court! And before
              fellow Christians boat- that includes what Moses or Paul has said
              that isn’t confirmed by an any of the other 38. Paul said 3 times-
              I say this, not The Spirit. Jesus said- Moses said something
              because of the hardness of your heart. Everyone misses psalm
              119:89 confirmed in John8:16- The word was established in the
              insvible universe forever- long before heaven and earth or humans.
              One has to screen the scriptures to see what is confirmed - The
              word - when 2 or more witness testimonies confirm the same. 95.4%
              of the universe is invisible - the word existed longe before out
              visible universe, long before making its way to the 259,000
              confirmations and precedent in the 66 books by 40 random writers.
              Apostle Abraham Letters. The 2 witnesses
              {/* <div className="absolute right-0 bottom-0 font-bold text-[#333] cursor-pointer px-2 shadow-3xl bg-white">Read more</div> */}
            </div>
            <div
              className={`px-2 relative md:hidden ${mainExpandStatus ? "" : "line-clamp-10"}`}
            >
              What is the word? Short answer to judging what The Word is- Jesus
              said- you err because you so know the difference between “the
              scriptures “ or “the word of God”, (the power of God is The word )
              8 scriptures shockingly confirm what the word actually is - “in
              the mouth of 2 or more witnesses EVERY word of God is established
              “ The 2 testimony rule is law in all courts in heaven and earth.
              Ironically also on Islamic law. The Bible is a book of 259,000
              confirmations, by 40 witnesses in 66 books. The Quran, Catholic
              traditions and Book of Mormon contain zero confirmations by other
              prophets earlier! Imagine judgement day in God’s court, many
              unconfirmed books thrown out- inadmissible in court! And before
              fellow Christians boat- that includes what Moses or Paul has said
              that isn’t confirmed by an any of the other 38. Paul said 3 times-
              I say this, not The Spirit. Jesus said- Moses said something
              because of the hardness of your heart. Everyone misses psalm
              119:89 confirmed in John8:16- The word was established in the
              insvible universe forever- long before heaven and earth or humans.
              One has to screen the scriptures to see what is confirmed - The
              word - when 2 or more witness testimonies confirm the same. 95.4%
              of the universe is invisible - the word existed longe before out
              visible universe, long before making its way to the 259,000
              confirmations and precedent in the 66 books by 40 random writers.
              Apostle Abraham Letters. The 2 witnesses
              {mainExpandStatus ? (
                <div
                  className="absolute right-0 bottom-0 font-bold text-[#333] cursor-pointer px-2 shadow-3xl bg-white"
                  onClick={toggleMainExpand}
                >
                  Read less
                </div>
              ) : (
                <div
                  className="absolute right-0 bottom-0 font-bold text-[#333] cursor-pointer px-2 shadow-3xl bg-white"
                  onClick={toggleMainExpand}
                >
                  Read more
                </div>
              )}
            </div>
            <div className="my-3">
              <Button className="px-7"><Link href="/main/ViewTeachings/" className="w-full">Explore Inspired Teachings</Link></Button>
            </div>
          </div>
        </div>
        <div className="bg-gray-200/40 rounded-lg px-5 py-3 flex justify-center items-center font-manrope">
          <Link
            href="/main/ViewTeachings/cmny4nxu10001i0wf2wd4ninn"
            className="flex flex-col justify-between items-start gap-2"
          >
            <div>
              <div className="bg-gray-400 font-bold font-chivo px-3 py-1 text-[#333] tracking-wider">
                Popular
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[#444] text-[1.2rem]">
                Explain God being one and three
              </h2>
              <h3 className="px-2 my-2 text-[#444] text-sm italic border-l border-gray-500">
                Government is one. Executive is government. Legislature is
                government. Judiciary is government.
              </h3>
              <div className="relative text-sm text-[#444]">
                <div className="line-clamp-3">
                  Explain God being one and 3? Government is one. Executive is
                  government. Legislature is government. Judiciary is
                  government. All 3 are united as ONE, yet individually, each
                  arm of government is one. Just like Moses, Jesus, & Peter
                  said, a man and woman become one. Yet no one imagines one
                  person. Or God said at the Tower of Babel, “the people are
                  one,” and no one imagined a big green giant like Odysseus. Now
                  substitute government with God. God — all 3 are united as one.
                  Jesus even said, “Father, make them (His disciples) one, as we
                  are one.” The first person to describe God as a government was
                  Isaiah, 700 years before Christ took in a human soul and
                  manifested as a human. Long before that, God — all 3 — visited
                  Abraham as 3 humans, and Abraham worshipped them and fed them
                  (Genesis 18). Hamlahakim means messenger in Hebrew, not angels
                  as the English Bible changed it. Let’s look at Isaiah 9:6. The
                  Government of Heaven shall rest (an ambassador — nations rest
                  on an ambassador) on Jesus’s shoulder. Earlier Isaiah said,
                  “The Son given before a child was born” — He existed already
                  as Son. And His name (as an ambassador of all 3) will
                  therefore be called (ambassadors are Mr. or Mrs., the nation
                  they represent): THE FATHER — Executive (like the Saudi King,
                  or President or Prime Minister of a nation — also called
                  government in that nation). THE CROWN PRINCE — Legislator
                  (like the Saudi Prince Mohammed bin Salman who rules on behalf
                  of his father, or a legislative house, or Joseph ruled on
                  behalf of Pharaoh in Egypt — also called government). The Holy
                  Spirit’s Counselor confirmed in John 14:26 — Judiciary (like
                  the Saudi, Iran, or America Supreme Court — the 3rd arm of
                  government), also called government. These 3 arms of
                  government rule the 95.4% invisible universe — heaven. They
                  are invisible beings. This above revelation is the only
                  biblically confirmed way of representing all 3, because it’s
                  confirmed in Heaven. The Son, a spirit, took on a human soul
                  and human emotion in a human body to dwell among us. Even
                  humans are 3. First our emotions and body were CREATED in Gen
                  1:27 after the father’s emotions only. Then in Gen 2:7, the
                  Holy Spirit transformed — man WAS FORMED into becoming a
                  “spirit & mind,” aka living being & soul. Living always means
                  spirit. Soul always means mind. Ecclesiastes 3:20–21 confirms
                  this also, that man, like animals, came from the “spirit of
                  the earth” — the emotions come from the earth. But the spirit
                  and soul (Ecc. 12:3) come from the sprout.
                </div>
                <div className="hover:text-gray-700 hover:bg-gray-400 transition-all duration-75 ease-in font-bold absolute right-0 bottom-0 bg-gray-200/60 px-3">
                  Read more...
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-gray-200/40 rounded-lg px-3 py-3 flex justify-center items-center font-manrope">
          <Link
            href="/main/ViewTeachings/cmny5fliq000204gs5tw5zgx8"
            className="flex flex-col justify-between items-start gap-2"
          >
            <div>
              <div className="bg-gray-400 font-bold font-chivo px-3 py-1 text-[#333] tracking-wider">
                Popular
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[#444] text-[1.2rem]">
                What is “the gospel of the Kingdom,” and why must it begin to be
                preached before the end of this age?
              </h2>
              <h3 className="px-2 my-2 text-[#444] text-sm italic border-l border-gray-500">
                The end will not come until “the gospel of the Kingdom” is
                preached with confirmed witness testimony (at least two of the
                forty witnesses across the sixty-six books) to the nation.
              </h3>
              <div className="relative text-sm text-[#444]">
                <div className="line-clamp-3">
                  What is “the gospel of the Kingdom,” and why must it begin to
                  be preached before the end of this age? The end will not come
                  until “the gospel of the Kingdom” is preached with confirmed
                  witness testimony (at least two of the forty witnesses across
                  the sixty-six books) to the nations—to the many denominations
                  that claim His name (Christ, the Word). First and foremost,
                  “the gospel of the Kingdom” is not the same as “the gospel of
                  Jesus’ death and resurrection.” The gospel of the Kingdom was
                  preached by Jesus before His death, burial, and resurrection.
                  Secondly, Jesus instructed all new believers to be initiated
                  into the gospel of the Kingdom—even from the beginning, with
                  their names included: “in the name of the Father, the Son, and
                  the Holy Spirit.” Thirdly, ask yourself: we know the Father is
                  revealed by the Son, and the Son is revealed by the Father… so
                  who reveals the name of the Holy Spirit? When you begin to
                  hear about the identity of the Holy Spirit as “the Mother,”
                  the third person of the Trinity revealed, you may understand
                  that we are in the days of the end times. Here are a few
                  scriptures I have covered in many teachings regarding the
                  motherhood of God: Isaiah 66:13 — “As a mother comforts, so
                  will I comfort you in Jerusalem.” John 15:26 — “The Comforter…
                  the Holy Spirit.” Genesis: Adam named his wife Eve, because
                  she was the mother of all living—the bearer of life, the
                  breath of life. Matthew: Mary was found with child in her womb
                  by the Holy Spirit (a surrogate is a womb mother only). The
                  Son does not have two fathers. Galatians 4: “The Jerusalem
                  above is free, and she is the mother of us all.” There are
                  also many scriptures in Proverbs that describe the Spirit of
                  Wisdom—often associated with the Holy Spirit—using feminine
                  language: “she.” So there you have it, friends: multiple
                  witness testimonies concerning the name of the last person
                  Jesus said we should initiate all believers into—the threefold
                  name. Anyone who feels led to oppose this testimony should be
                  careful. The only sin Jesus says will not be forgiven is
                  blasphemy against the Holy Spirit—the eternal Spirit. Once
                  revealed, we are warned not to speak against it, regardless of
                  national or denominational traditions. God bless.
                </div>
                <div className="font-bold absolute right-0 bottom-0 bg-gray-200/60 px-3 hover:text-gray-700 hover:bg-gray-400 transition-all duration-75 ease-in">
                  Read more...
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-gray-100/90 rounded-lg px-3 sm:px-7 py-3 flex flex-col gap-2 justify-center items-start font-manrope w-full">
          <p className="font-bold text-[1.2rem] text-[#555]">
            Curious? Share a question
          </p>
          <div className="w-full">
            <form className="w-full py-2 border-b border-gray-400">
              <input
                type="text"
                placeholder="Your name"
                className="w-[70%] outline-0 border-0 ring-0 py-3 px-2"
              />
              <Button className="w-[30%] from-primary via-primary/60 to-primary border-0 bg-transparent bg-linear-to-r bg-size-[200%_auto] hover:bg-transparent hover:bg-position-[99%_center]">
                <Link href="/main/AskAQuestion" className="w-full">
                  Ask Away
                </Link>
              </Button>
            </form>
            <div className="py-1 my-2 underline underline-offset-4 text-[#555]">
              You'll be directed to a chat window
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTopicsSection;
