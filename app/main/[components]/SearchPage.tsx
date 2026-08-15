"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, SquareArrowOutUpRightIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserAuth } from "@/app/context/auth-context";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getTeachingsTitleandDesc } from "@/actions/teaching-actions";

interface SearchPageProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchStoreItems {
  id: string;
  title: string;
  description: string;
  bannerColour: string | null;
}

const SearchPage = ({ isOpen, onClose }: SearchPageProps) => {
  const [searchStore, setSearchStore] = useState<SearchStoreItems[] | null>(null)
  const [searchInput, setSearchInput] = useState<string>("")
  const [searchOutput, setSearchOutput] = useState<SearchStoreItems[] | null>(null)
  
  useEffect(() => {
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => document.body.classList.remove("overflow-hidden");
}, [isOpen]);

  useEffect(() => {
    const searchTeaching = async () => {
      const searchFields = await getTeachingsTitleandDesc()
      setSearchStore(searchFields)
    }
    searchTeaching()
  }, [isOpen])

  const onSearch = (text: string) => {
    const regExpSearchInput = new RegExp(text, "i")
    const filteredSearch = searchStore?.filter((item) => (
      item.title.search(regExpSearchInput) !== -1 || item.description.search(regExpSearchInput) !== -1
    ))

    if (!filteredSearch) return

    setSearchOutput(filteredSearch)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e?.currentTarget?.value)

    onSearch(e?.currentTarget?.value)
  }


    if (!isOpen) return null;

  return (
    // Full viewport overlay with dark semi-transparent bg
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/70 transition-opacity font-fira",
        "backdrop-blur-sm font-manrope",
      )}
      onClick={onClose}
      aria-hidden="true"
    >
      {/* White menu container - 40% width on mobile, full height */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full",
          "bg-transparent flex flex-col",
          "animate-in slide-in-from-top-3 duration-100",
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking menu
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation menu"
      >
        {/* Header Section */}
        <form className="gap-5 py-4 border-b w-full bg-white">
          <div className="w-full flex items-center gap-4 max-w-290 mx-auto px-2">
            <div className="cursor-pointer" onClick={onClose}>
              <ArrowLeft className="text-gray-500 size-6" />
            </div>
            <div className="flex-1">
              <input
                onChange={onInputChange}
                value={searchInput}
                type="text"
                placeholder="Search for a teaching"
                className="w-full px-2 py-2 bg-gray-50 outline-0 border-0 ring-0"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
              className="px-2 py-2 rounded-md bg-text-gray"
            >
              <Search className="size-6 text-gray-500 " />
            </Button>
          </div>
        </form>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto py-4 px-6">
          <div className="flex flex-col space-y-3 max-w-290 mx-auto">
            {!searchInput && (
              <div className="w-full text-center text-zinc py-5 max-sm:text-lg text-2xl font-bold">
                Type to search
              </div>
            )}
            
            {searchInput && searchOutput?.map((item) => (
              <Link
                key={item.id}
                href={`main/ViewTeachings/${item.id}`}
                className={cn(
                  "flex justify-between gap-4 items-center py-3 px-4 rounded-lg bg-white",
                  "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
                  "transition-colors font-medium",
                  "focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500",
                )}
                onClick={onClose}
              >
                <div className="flex gap-4 items-center">
                    <div className="w-7 h-7" style={{ backgroundColor: item.bannerColour || "green" }}></div>
                    <div className="flex flex-col space-y-1">
                        <div className="font-bold">{item.title}</div>
                        <div>{item.description}</div>
                    </div>
                </div>
              
                <Button size="icon" className="px-2 py-2 rounded-md bg-gray-300/20">
                    <SquareArrowOutUpRightIcon className="size-6 text-gray-500"/>
                </Button>
                {/* {item.label} */}
              </Link>
            ))}
            {searchInput && !searchOutput?.[0] && (
              <div className="w-full text-center text-zinc py-5 max-sm:text-lg text-2xl font-bold">No Teachings match your search</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
