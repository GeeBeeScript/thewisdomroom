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
        <div className={`${!mainExpandStatus ? "md:row-span-3" : "md:col-span-2 md:row-span-3 mb-5"} md:mr-3 px-5 py-3 bg-white shadow-[2px_2px_3px_1px_rgba(0,0,0,0.49)]`}>
          <div className="flex flex-col justify-evenly items-center gap-2 font-manrope text-[#444]">
            <p className="font-bold my-2 py-2 font-chivo text-3xl  border-b border-black/20 text-center">
              What is the Word?
            </p>
            <div className={`px-2 relative max-md:hidden ${mainExpandStatus ? "" : "line-clamp-25"}`}>
              What is The Word? Jesus said: “Ye do err, not knowing the
              scriptures, nor the power of God.” Notice something. Jesus
              distinguishes between “the scriptures” and “the power of God.”
              Why? Because the power of God is The Word. I can say, “Man’s best
              friend is cool.” I haven’t explained that man’s best friend is a
              dog. But if you know what man’s best friend is, you understand
              what I mean: dogs are cool. The books of the Bible write this way.
              They make statements based upon the end-result meaning, then
              expect you to search the other writings, the other Scriptures, to
              discover what they are talking about. The confirmations reveal
              what The Word is. Remember, “Bible” simply means books. It isn’t
              one book. It is a collection of 66 books, written by approximately
              40 witnesses. That is why the two-witness principle in the books
              of the Bible is so important: “In the mouth of two or three
              witnesses every word may be established.” Moses himself
              established this as a principle of judgment. So why do we assume
              this rule applies to humans, but somehow doesn’t apply to God?
              David gives us the clue: “For ever, O LORD, thy word is settled in
              heaven.” You cannot settle something with yourself. You don’t
              agree alone. The hint is that the Father and the Son agreed. The
              Word was settled in heaven because the Father and the Son
              established it together in the eternal world. Jesus confirmed
              exactly this principle: “I am one that bear witness of myself, and
              the Father that sent me beareth witness of me.” Two witnesses. So
              when I judge a biblical claim to be God’s Word, where is the
              confirmation? There are approximately 259,000 confirmations across
              the 40 books, according to cross-reference analysis. Whether
              someone calculates 5,000, 100,000 or 259,000 is almost irrelevant
              to my point. The point is the vast network of cross-references and
              confirmations. Not random statements. Testimony confirming
              testimony. 40 witnesses. 66 books. Approximately 1,850 years of
              testimony, from Moses to John. That is The Word. This is why I
              don’t accept every statement in the books of the Bible as The Word
              merely because it is written in the Scriptures. Jesus didn’t
              either. Jesus established that many things Moses wrote were not
              eternal laws for all humanity, but were permitted because of “the
              hardness of your hearts.” Moses gave 10 commandments. Christ gave
              the rich young ruler 7. And Christ removed the laws that did not
              apply to humanity universally. Why? Because Moses was not the
              final authority. Jesus is. Eagle-eyed scholars can search the
              books of the Old and New Testament and find that no other writer
              confirms many of the laws Moses gave as eternal laws for all
              humanity. And this is where people forget something important. God
              the Father was Lord and King over Israel. Until Israel asked for a
              human king. They chose Saul. You can read the whole account in
              Samuel. The Father was the King. Then Israel demanded an earthly
              executive. And this gives us another way to understand the law. An
              executive branch can issue commands and administer laws, but those
              decisions remain subject to the higher authority that established
              the government. The Father gave Israel laws for a particular
              dispensation. But the eternal laws for humanity had to be
              established in the eternal world by the Father and the Son. The
              New Testament reveals the laws of that invisible world. That is
              why Jesus said: “I am the Lord of the sabbath.” He governs the
              law. This is what it means to say Jesus is Lord. His law presides
              over every other law: “Thou shalt love thy neighbour as thyself.”
              John confirmed it. Matthew confirmed it. Paul confirmed it. Moses
              confirmed the principle. And Paul said: “For all the law is
              fulfilled in one word, even in this; Thou shalt love thy neighbour
              as thyself.” So the law is not simply about what Moses wrote. It
              is about what has been established by the witnesses. And this is
              exactly why the witness principle matters. I don’t have to accept
              everything Paul says as The Word either. Paul himself said: “I
              speak this, not the Lord.” Three times he makes this distinction.
              So Paul is not above the witness rule. I can correct Paul, but
              only according to The Word. His statements concerning women
              preaching in the church, covering the hair, and other such
              instructions are not confirmed by the other 40 witnesses in the
              same way that the command to love your neighbour is. And Paul
              himself highlighted that he was giving his own judgment, not a
              command from the Lord. So who is “The Lord”? Paul tells us: “Now
              the Lord is that Spirit.” NOW. This dispensation. The Lord is The
              Spirit. And Paul says: “All scripture is given by inspiration of
              God.” But notice the distinction. The written word can contain
              testimony, history, prophecy and instruction without every
              statement recorded being an eternal law for all humanity. Jesus
              always said: “It is written.” He didn’t say, “Isaiah wrote.” Why?
              Because the writing existed before the earthly writer. David
              confirmed this: “For ever, O LORD, thy word is settled in heaven.”
              Written. Established. Settled. In the invisible world. And John
              confirms the same thing. Jesus said: “My judgment is true: for I
              am not alone, but I and the Father that sent me. It is also
              written in your law, that the testimony of two men is true. I am
              one that bear witness of myself, and the Father that sent me
              beareth witness of me.” There it is. Two witnesses. Jesus and His
              Father. And now John 1:1 becomes much clearer: “In the beginning
              was the Word, and the Word was with God, and the Word was God.”
              Before the Word became flesh, the Word already existed. In that
              eternal, invisible world, His form is The Word. It is His nature.
              His structure. His expression. And He and His Father established
              the testimony there, before it ever came into our visible world.
              We live in a universe where approximately 95.4% of what we call
              the universe is invisible to us, what science describes through
              dark matter and dark energy. We don’t even fully understand that
              invisible world. But the books of the Bible have been telling us:
              The Word was established there first. Then the testimony came into
              the visible world. Then it was written. Then witness after witness
              confirmed it. That is why I don’t simply ask: “Is it written?” I
              ask: “Is it established?” Where are the witnesses? Where is the
              confirmation? Where is The Word? Because in God’s court, a claim
              is not established simply because somebody says it. The witness
              rule is law. And once you understand that, you begin to understand
              what The Word actually is. The Word is the power of God. And the
              books are the witnesses.
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
            <div
              className={`px-2 relative md:hidden ${mainExpandStatus ? "" : "line-clamp-10"}`}
            >
              What is The Word? Jesus said: “Ye do err, not knowing the
              scriptures, nor the power of God.” Notice something. Jesus
              distinguishes between “the scriptures” and “the power of God.”
              Why? Because the power of God is The Word. I can say, “Man’s best
              friend is cool.” I haven’t explained that man’s best friend is a
              dog. But if you know what man’s best friend is, you understand
              what I mean: dogs are cool. The books of the Bible write this way.
              They make statements based upon the end-result meaning, then
              expect you to search the other writings, the other Scriptures, to
              discover what they are talking about. The confirmations reveal
              what The Word is. Remember, “Bible” simply means books. It isn’t
              one book. It is a collection of 66 books, written by approximately
              40 witnesses. That is why the two-witness principle in the books
              of the Bible is so important: “In the mouth of two or three
              witnesses every word may be established.” Moses himself
              established this as a principle of judgment. So why do we assume
              this rule applies to humans, but somehow doesn’t apply to God?
              David gives us the clue: “For ever, O LORD, thy word is settled in
              heaven.” You cannot settle something with yourself. You don’t
              agree alone. The hint is that the Father and the Son agreed. The
              Word was settled in heaven because the Father and the Son
              established it together in the eternal world. Jesus confirmed
              exactly this principle: “I am one that bear witness of myself, and
              the Father that sent me beareth witness of me.” Two witnesses. So
              when I judge a biblical claim to be God’s Word, where is the
              confirmation? There are approximately 259,000 confirmations across
              the 40 books, according to cross-reference analysis. Whether
              someone calculates 5,000, 100,000 or 259,000 is almost irrelevant
              to my point. The point is the vast network of cross-references and
              confirmations. Not random statements. Testimony confirming
              testimony. 40 witnesses. 66 books. Approximately 1,850 years of
              testimony, from Moses to John. That is The Word. This is why I
              don’t accept every statement in the books of the Bible as The Word
              merely because it is written in the Scriptures. Jesus didn’t
              either. Jesus established that many things Moses wrote were not
              eternal laws for all humanity, but were permitted because of “the
              hardness of your hearts.” Moses gave 10 commandments. Christ gave
              the rich young ruler 7. And Christ removed the laws that did not
              apply to humanity universally. Why? Because Moses was not the
              final authority. Jesus is. Eagle-eyed scholars can search the
              books of the Old and New Testament and find that no other writer
              confirms many of the laws Moses gave as eternal laws for all
              humanity. And this is where people forget something important. God
              the Father was Lord and King over Israel. Until Israel asked for a
              human king. They chose Saul. You can read the whole account in
              Samuel. The Father was the King. Then Israel demanded an earthly
              executive. And this gives us another way to understand the law. An
              executive branch can issue commands and administer laws, but those
              decisions remain subject to the higher authority that established
              the government. The Father gave Israel laws for a particular
              dispensation. But the eternal laws for humanity had to be
              established in the eternal world by the Father and the Son. The
              New Testament reveals the laws of that invisible world. That is
              why Jesus said: “I am the Lord of the sabbath.” He governs the
              law. This is what it means to say Jesus is Lord. His law presides
              over every other law: “Thou shalt love thy neighbour as thyself.”
              John confirmed it. Matthew confirmed it. Paul confirmed it. Moses
              confirmed the principle. And Paul said: “For all the law is
              fulfilled in one word, even in this; Thou shalt love thy neighbour
              as thyself.” So the law is not simply about what Moses wrote. It
              is about what has been established by the witnesses. And this is
              exactly why the witness principle matters. I don’t have to accept
              everything Paul says as The Word either. Paul himself said: “I
              speak this, not the Lord.” Three times he makes this distinction.
              So Paul is not above the witness rule. I can correct Paul, but
              only according to The Word. His statements concerning women
              preaching in the church, covering the hair, and other such
              instructions are not confirmed by the other 40 witnesses in the
              same way that the command to love your neighbour is. And Paul
              himself highlighted that he was giving his own judgment, not a
              command from the Lord. So who is “The Lord”? Paul tells us: “Now
              the Lord is that Spirit.” NOW. This dispensation. The Lord is The
              Spirit. And Paul says: “All scripture is given by inspiration of
              God.” But notice the distinction. The written word can contain
              testimony, history, prophecy and instruction without every
              statement recorded being an eternal law for all humanity. Jesus
              always said: “It is written.” He didn’t say, “Isaiah wrote.” Why?
              Because the writing existed before the earthly writer. David
              confirmed this: “For ever, O LORD, thy word is settled in heaven.”
              Written. Established. Settled. In the invisible world. And John
              confirms the same thing. Jesus said: “My judgment is true: for I
              am not alone, but I and the Father that sent me. It is also
              written in your law, that the testimony of two men is true. I am
              one that bear witness of myself, and the Father that sent me
              beareth witness of me.” There it is. Two witnesses. Jesus and His
              Father. And now John 1:1 becomes much clearer: “In the beginning
              was the Word, and the Word was with God, and the Word was God.”
              Before the Word became flesh, the Word already existed. In that
              eternal, invisible world, His form is The Word. It is His nature.
              His structure. His expression. And He and His Father established
              the testimony there, before it ever came into our visible world.
              We live in a universe where approximately 95.4% of what we call
              the universe is invisible to us, what science describes through
              dark matter and dark energy. We don’t even fully understand that
              invisible world. But the books of the Bible have been telling us:
              The Word was established there first. Then the testimony came into
              the visible world. Then it was written. Then witness after witness
              confirmed it. That is why I don’t simply ask: “Is it written?” I
              ask: “Is it established?” Where are the witnesses? Where is the
              confirmation? Where is The Word? Because in God’s court, a claim
              is not established simply because somebody says it. The witness
              rule is law. And once you understand that, you begin to understand
              what The Word actually is. The Word is the power of God. And the
              books are the witnesses.
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
              <Button className="px-7">
                <Link href="/main/ViewTeachings/" className="w-full">
                  Explore Inspired Teachings
                </Link>
              </Button>
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
                <div className="line-clamp-3 md:line-clamp-4">
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
            href="/main/ViewTeachings/cmoo53hz8000404l18ohk3778"
            className="flex flex-col justify-between items-start gap-2"
          >
            <div>
              <div className="bg-gray-400 font-bold font-chivo px-3 py-1 text-[#333] tracking-wider">
                Popular
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[#444] text-[1.2rem]">
               Why is Mary not recognized in heaven only amongst men?
              </h2>
              <h3 className="px-2 my-2 text-[#444] text-sm italic border-l border-gray-500">
                The ending of Mary’s mother hood at the cross.
              </h3>
              <div className="relative text-sm text-[#444]">
                <div className="line-clamp-3 md:line-clamp-4">
                  I want to share something regarding Mary being called “the Mother of God.” There are two very important instances where Jesus Himself addressed this issue.

First, we all know the moment when Mary and His brothers came looking for Him, and someone said, “Your mother and brothers are outside.” Jesus replied, “Whoever does the will of My Father is My mother and my brother.” Right there, you can see Jesus beginning to separate Himself from an exclusively earthly and emotional understanding of motherhood.

We also know that at age twelve He said to His parents, “Did you not know that I must be about My Father’s business?” Again, He was pointing beyond Mary to His heavenly Father.

Some recognize Mary as the mother of Christ, as Catholics do. However, we see a clear distinction in how Jesus understood this relationship. Mary was His earthly mother—even a surrogate in the sense that Scripture says she was found IN THE WOMB with child by the Holy Spirit. All surrogate mothers are womb-only mothers.

Scripture also says that children are formed in the womb. Formation speaks not only of the emotions, but of the soul and spirit coming together. Ultimately, Christ is eternal. Mary gave birth to His physical body as a surrogate mother, but not to His eternal identity as the Son of God.

When Scripture speaks of “mother,” it is not always referring to a biological parent. Galatians 4 contrasts two Jerusalems—Jerusalem on earth, in bondage with her children, and Jerusalem above, who is free and called “the mother of us all.” This is spiritual language. Our spirits have a source—the Heavenly Mother!

Isaiah says, “As a mother comforts, so will I comfort you—in Jerusalem.” Later, Jesus speaks of the Comforter, confirming this invisible-world dimension.

The Holy Spirit is often described in nurturing terms. The spirit of wisdom is addressed as “she.” Even the Hebrew word Ruach (Spirit) is grammatically feminine. Adam even named his wife LIFE BECAUSE SHE “ruach” WAS THE BREADTH OF Life.

On the cross, we see another separation. Jesus said to John, “Behold your mother,” and to Mary, “Behold your son.” In doing this, He was entrusting her care to John. But symbolically, it also marked the closing of that earthly mother-son relationship. Even at His physical death, He was emphasizing a transition. The motherhood is over!

Death ends all relationships, so why are some Christians still making this relevant?

Scripture says, “Though we once knew Christ in the flesh, we know Him so no longer.” The flesh cannot inherit the kingdom of God. Our earthly emotions and desires do not enter heaven—not able to engage the spirit world.

Jesus addressed this—the time is coming where you won’t worship in Jerusalem, but in the spirit (invisible world) and in truth (confirmation of the word).

Ecclesiastes 3:21 speaks of “the spirit of earth,” in man and beast, returning to the earth where it came from. Our emotions are from the earth.

Ecclesiastes 12:7 speaks of another spirit—the spirit in us returns to God who gave it. On the cross Jesus said, “Father, into Your hands I commit My spirit.” His spirit went upward.

This helps us understand the distinction between the earthly and the spiritual spirits.

The earth, also called “creation,” produces physical life with an earthly spirit. In Genesis, God spoke to the earth, and the earth brought forth physical things. God don’t create anything physical, but as Galatians 4 clarifies, the earth, like Hagar in the flesh, produced earth things on God the Father Abraham’s command. It even compares Sarah to the Holy Spirit, who desired more spiritual children—after losing the first Adam.

Genesis 2:7 says man became a living being when the Breadth of Life—Ruach—entered him. Man, existing already, was formed. Formation speaks of something beyond mere physical structure—it involves spirit and soul.

In Genesis 1:27, we see man made with 1 image only—the emotions. Not the image of “them,” as Gen. 1:26 speaks of, but the image Him—one. It’s in Gen. 2:7 that man became 3 beings united in one body—when spirit (living) and soul (being) amalgamated to join emotions in the body.

So when we speak of motherhood, we must distinguish between earthly continuity and spiritual origin. Mary was the surrogate/womb mother of Jesus’ physical body. But Christ—the Anointed One—is eternal. Anointed means The Holy Spirit upon His God the Son spirit. United.

His soul—the son of man—was only born 2,000 years ago, but his flesh, of which Mary was connected to by love, not birth, as a surrogate, has since returned to the earth.

If we worship Christ, we do not worship His former earthly body. That body was transformed. Scripture says we too shall be changed to be like Him. Therefore, we do not know Him merely according to the body of the emotion.

Understanding this helps clarify.
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
