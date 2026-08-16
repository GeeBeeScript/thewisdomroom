"use client";

import TeacherNavigation from "@/components/TeacherNavigation";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SELECTOPTIONS = [
    {
        priority: "Very high",
        priorityRank: 1
    },
    {
        priority: "High",
        priorityRank: 2
    },
    {
        priority: "Moderate",
        priorityRank: 3
    },
    {
        priority: "Low",
        priorityRank: 4
    },
]

const NewQuestion = () => {
  // const titleRef = useRef<HTMLInputElement>(null)
  // const contentRef = useRef<HTMLTextAreaElement>(null);
  // const linkIdRef = useRef<HTMLInputElement>(null)
  // const priorityValue = useState<number>(2)
  // const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center gap-10">
      {/* <TeacherNavigation />
      <section className="relative flex-1 w-full flex flex-col items-center">
        <h1 className="w-full flex justify-center items-center font-bold text-2xl text-[#555] mb-5">
          Add a Question
        </h1>
        <section>
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="w-full text-center">
                  Values
                </FieldLegend>
              </FieldSet>
              <FieldSeparator />

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-question-title">
                      Title
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-question-title"
                      placeholder="e.g, Who is Man?"
                      ref={titleRef}
                      required
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-question-content">
                      Content
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-question-content"
                      placeholder="Man became three in Genesis 2:7 ..."
                      className="resize-none min-h-75 font-mono"
                      ref={contentRef}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

               <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-question-content">
                      Content
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-question-content"
                      placeholder="Man became three in Genesis 2:7 ..."
                      className="resize-none min-h-75 font-mono"
                      ref={contentRef}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-question-link">
                      Link Id
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-question-link"
                      className="resize-none min-h-75 font-mono"
                      ref={linkIdRef}
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-question-link">
                      Display Priority
                    </FieldLabel>
                    <div>
                        <select value={priorityValue} onChange={}>
                            {SELECTOPTIONS.map(({priority, priorityRank}) => (
                            <option value={priorityRank}>{priority}</option>
                        ))}
                        </select>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>

              
            </FieldGroup>
          </form>
        </section>
      </section> */}
    </main>
  );
};

export default NewQuestion;
