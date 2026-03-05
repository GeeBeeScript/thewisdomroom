import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { TeacherForm } from "@/app/context/teaching-form-context";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface AddTeachingSecondProps {
  switchPage: (value: Boolean) => void;
  firstPageEnded: Boolean;
}

const AddTeachingSecond = (props: AddTeachingSecondProps) => {
  const { isPosted, postSecondContent, submitPostContent } = TeacherForm()
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const goBackHandler = () => {
    props.switchPage(false);
  };

  const handleSecondPost = () => {
    postSecondContent({
      comment: commentRef.current?.value,
      content: contentRef.current?.value
    })
  }

  const handleFinalSubmit = async () => {
    await submitPostContent()
    toast.success("Event has been created", {
      description: "Your teaching has been submitted",
      position: "top-center"
    });
    router.push("/teacher")
  };
  return (
    <section
      className={`w-[85%] sm:max-2xl:w-[80%] my-5 flex justify-center items-center animate-in slide-in-from-right-5 duration-300
        ${
          props.firstPageEnded
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "hidden translate-x-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="w-full max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="w-full text-center">
                Almost done...
              </FieldLegend>
            </FieldSet>
            <FieldSeparator />

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Content
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add your main content here"
                    className="resize-none min-h-75 font-mono"
                    ref={contentRef}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="You can add any reminders to yourself here (only visible to you)"
                    className="resize-none"
                    ref={commentRef}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field
              orientation="horizontal"
              className="w-full flex justify-between items-center px-5"
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button type="button" className="w-[40%]" onClick={handleSecondPost}>
                    Submit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Make Submission
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This submission will be added to the database. It will be
                      visible for everyone to see
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleFinalSubmit}>Submit</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button
                variant="outline"
                type="button"
                className="w-[40%]"
                onClick={goBackHandler}
              >
                Go Back
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default AddTeachingSecond;
