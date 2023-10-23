'use client'

import { navSections } from "@/constants/navSections";
import Image from "next/image";
import SideDrawer from "../sideDrawer";

const Navbar = () => {

  const scrollTo = (top: any): void => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-black z-10 flex justify-between items-center left-0 top-0 py-5 px-10 md:px-20 lg:px-40 2xl:px-80 fixed w-full">
      <div onClick={() => scrollTo(0)} className="flex items-center relative w-16 sm:w-20 h-16 sm:h-20">
        <Image
            src="/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto object-cover box-border overflow-hidden cursor-pointer hover:opacity-80"
            alt="MIR Production logo"
        />
      </div>
      <section className="hidden lg:block">
        <div className="flex ml-auto gap-14">
          {navSections.map(nav => (
            <h2
              key={nav}
              className="cursor-pointer opacity-80 hover:opacity-100 font-semibold tracking-wider"
            >
              {nav}
            </h2>
          ))}
        </div>
      </section>
      <SideDrawer />
    </nav>
  );
};

export default Navbar;
