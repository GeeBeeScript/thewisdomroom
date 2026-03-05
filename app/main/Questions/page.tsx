import IndexNavigation from "@/components/IndexNavigation";
import NoContentText from "../[components]/NoContentText";

const Questions = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <NoContentText />
      </div>
    </>
  );
};

export default Questions;
