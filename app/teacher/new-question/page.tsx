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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { addQuestion } from "@/actions/teaching-actions";

const SELECTOPTIONS = [
  {
    priority: "Very high",
    priorityRank: 1,
  },
  {
    priority: "High",
    priorityRank: 2,
  },
  {
    priority: "Moderate",
    priorityRank: 3,
  },
  {
    priority: "Low",
    priorityRank: 4,
  },
];

const NewQuestion = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const linkIdRef = useRef<HTMLInputElement>(null);
  const [priorityValue, setPriorityValue] = useState<number>(2);
  const router = useRouter();

  const onSelectOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriorityValue(+e.target.value);
  };

  const goBackHandler = () => {
    router.back();
  };

  const handleFinalSubmit = async () => {
    if (
      !titleRef.current?.value ||
      !contentRef.current?.value ||
      !linkIdRef.current?.value
    ) {
      return;
    }
    const addQuestionPayload = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      linkId: linkIdRef.current.value,
      priority: SELECTOPTIONS.find(
        (value) => value.priorityRank === +priorityValue,
      )?.priority,
      priorityRank: priorityValue,
    };

    try {
      await addQuestion(addQuestionPayload);
      toast.success("Item has been added", {
        description: "The new question has been submitted",
        position: "top-center",
      });
    } catch (err) {
      toast.error("Item was not added", {
        description: "The new question was not submitted",
        position: "top-center",
      });
    }
    router.push("/teacher");
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center gap-10 bg-gray-50">
      <TeacherNavigation />
      <section className="relative flex-1 px-5 mx-auto mb-10 w-[90%] sm:w-[70%] flex flex-col items-center">
        <h1 className="w-full flex justify-center items-center font-bold text-2xl text-[#555] mb-5">
          Add a Question
        </h1>
        <section className="w-full">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend className="w-full text-center">Values</FieldLegend>
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
                    <FieldLabel htmlFor="checkout-7j9-question-link">
                      Link Id
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-question-link"
                      className="resize-none font-mono"
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
                      <select
                        value={priorityValue}
                        onChange={onSelectOptionChange}
                        className="border border-zinc-400 px-2 py-3 rounded-sm"
                      >
                        {SELECTOPTIONS.map(({ priority, priorityRank }) => (
                          <option key={priorityRank} value={priorityRank}>
                            {priority}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <Field
                orientation="horizontal"
                className="w-full flex justify-between items-center px-5"
              >
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button type="button" className="w-[45%]">
                      Submit
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Make Submission</AlertDialogTitle>
                      <AlertDialogDescription>
                        This submission will be added to the database. It will
                        be visible for everyone to see
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleFinalSubmit}>
                        Submit
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button
                  variant="outline"
                  type="button"
                  className="w-[45%]"
                  onClick={goBackHandler}
                >
                  Go Back
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </section>
      </section>
    </main>
  );
};

export default NewQuestion;
