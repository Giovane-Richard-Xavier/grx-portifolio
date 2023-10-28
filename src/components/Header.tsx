import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between xl:flex items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="flex  justify-between items-center">
              <Image
                src="/images/bulb.png"
                width={40}
                height={48}
                alt="logo-png"
                priority={true}
              />

              <h3 className="h3 text-lg  px-3">
                giovane richard
                <span className="text-[35px] text-red-500">.</span>
              </h3>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};
