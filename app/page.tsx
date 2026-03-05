import { Button } from "@/components/ui/button";
import MainFooter from "./main/[components]/MainFooter";
import MainPageContent from "./teacher/[components]/MainPageContent";
import IndexNavigation from "@/components/IndexNavigation";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <IndexNavigation />
      <MainPageContent />
      <MainFooter />
    </main>
  );
}
