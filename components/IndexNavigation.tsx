"use client";

import MainNavSearch from "./MainNavSearch";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import MainNavMenu from "./MainNavMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import SearchPage from "@/app/main/[components]/SearchPage";

const IndexNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);

  const onCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const onCloseSearch = () => {
    setSearchIsOpen(false);
  };

  const onOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const onOpenSearch = () => {
    setSearchIsOpen(true);
  };

  return (
    <nav className="w-[90%] max-sm:w-[95%] mx-auto lg:w-[85%] px-2 py-2  h-[20%] border-b border-b-gray-300 shadow-[-1px_3px_4px_-4px_rgba(0,0,0,0.19)]">
      <ul className="max-w-full m-auto flex justify-between items-center ">
        <li>
          <div className="flex justify-between items-center max-[350px]:gap-1 gap-3">
            <div className="max-[300px]:hidden shrink-0">
              <Image
                src="/icon.png"
                width={50}
                height={50}
                alt="The Wisdom room logo"
                className="h-9 w-auto"
              />
            </div>
            <div className="bg-black/80 w-[0.1rem] h-6 max-[300px]:hidden"></div>
            <Link
              href="/"
              className="font-bold max-[310px]:text-[1rem] text-[1.2rem] font-fraunces"
            >
              TheWisdomRoom
            </Link>
          </div>
        </li>

        <li className="hidden md:flex justify-between items-center gap-5 mx-4 font-fira">
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/ViewTeachings">Inspired Teachings</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/videos">Videos</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/Questions">Questions</Link>
          </p>
          <p className="hover:text-gray-400 transition-all duration-75 ease-in">
            <Link href="/main/AskAQuestion">Chat</Link>
          </p>
        </li>

        <li className="flex justify-between items-center max-md:gap-2 gap-5 font-fira">
          <div className="flex gap-2 max-lg:hidden">
            <Link href="/main/aboutus">
              <Button variant="link" className="cursor-pointer">
                About us
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                className="cursor-pointer bg-zinc-950 text-white px-5"
              >
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="cursor-pointer max-lg:hidden ">
            <Search className="max-sm:size-6" onClick={onOpenSearch} />
          </div>
        </li>
        <li className="lg:hidden flex justify-center items-center cursor-pointer">
          <div className="cursor-pointer lg:hidden mx-6">
            <Search className="max-sm:size-6" onClick={onOpenSearch} />
          </div>
          <Menu className="size-6" onClick={onOpenMenu} />
        </li>
      </ul>
      <SearchPage isOpen={searchIsOpen} onClose={onCloseSearch} />
      <MainNavMenu isOpen={menuIsOpen} onClose={onCloseMenu} />
    </nav>
  );
};

export default IndexNavigation;
