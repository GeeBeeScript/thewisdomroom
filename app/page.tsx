import MainNavigation from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import MainFooter from "./main/[components]/MainFooter";
import MainPageContent from "./teacher/[components]/MainPageContent";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <MainNavigation />
      <MainPageContent />
      <MainFooter />
    </main>
  );
}
