import IndexNavigation from "@/components/IndexNavigation"
import NoContentText from "../[components]/NoContentText"

const AskAQuestionPage = () => {
  return (
    <>
      <IndexNavigation />
      <div className="flex-1 w-full flex justify-center items-center">
        <NoContentText />
      </div>
    </>
  )
}

export default AskAQuestionPage