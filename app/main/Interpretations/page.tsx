import React from "react";
import NoContentText from "../[components]/NoContentText";
import IndexNavigation from "@/components/IndexNavigation";

const Interpretations = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <NoContentText />
      </div>
    </>
  );
};

export default Interpretations;
