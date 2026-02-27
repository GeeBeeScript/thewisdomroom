import { createTeaching } from "@/actions/teaching-actions";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

interface TeacherFormType {
  isPosted: Boolean | null;
  // postTeaching: () => Promise<void>;
  postInitialContent: ({
    title,
    imageUrl,
    imageColor,
    description,
    todaysWord,
  }: firstPostContent) => void;
  postSecondContent: ({ content, comment }: secondPostContent) => void;
  submitPostContent: () => Promise<void>;
}

const TeacherFormContext = createContext<TeacherFormType | null>(null);

interface TeacherFormContextProviderProps {
  children: ReactNode;
}

interface firstPostContent {
  title?: string;
  imageUrl?: string;
  imageColor?: string;
  description?: string;
  todaysWord?: boolean;
}

interface secondPostContent {
  content?: string;
  comment?: string;
}

interface TeachingFormData {
  title: string;
  imageUrl: string;
  imageColor: string;
  description: string;
  todaysWord: boolean;
  content: string;
  comment: string;
}

export const TeacherFormContextProvider = ({
  children,
}: TeacherFormContextProviderProps) => {
  const [isPosted, setIsPosted] = useState<Boolean | null>(null);
  const [postContent, setPostContent] = useState<Partial<TeachingFormData>>({});

  const postInitialContent = ({
    title,
    imageUrl,
    imageColor,
    description,
    todaysWord,
  }: firstPostContent) => {
    setPostContent({ title, imageUrl, imageColor, description, todaysWord });
  };

  const postSecondContent = ({ content, comment }: secondPostContent) => {
    setPostContent((prevState) => {
      return { ...prevState, content, comment };
    });
  };

  const submitPostContent = async () => {
    console.log(postContent);
    if (
      !postContent.title ||
      !postContent.imageUrl ||
      !postContent.imageColor ||
      !postContent.description ||
      postContent.todaysWord === null ||
      !postContent.content ||
      !postContent.comment
    ) {
      throw new Error("Missing required fields");
    }
    await createTeaching(postContent as TeachingFormData);
  };

  return (
    <TeacherFormContext.Provider
      value={{
        isPosted,
        postInitialContent,
        postSecondContent,
        submitPostContent,
      }}
    >
      {children}
    </TeacherFormContext.Provider>
  );
};

export const TeacherForm = (): TeacherFormType => {
  const context = useContext(TeacherFormContext);
  if (!context) {
    throw new Error(
      "TeacherFormContext must be used within an TeacherFormContextProvider",
    );
  }
  return context;
};
