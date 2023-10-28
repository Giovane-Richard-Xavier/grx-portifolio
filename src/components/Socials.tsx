import Link from "next/link";
import React from "react";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { PiLinkedinLogoBold } from "react-icons/pi";

export const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl z-30">
      <Link
        href={"https://www.youtube.com/@giovanerichard171/videos"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/giovane-richard-b44427254/"}
        className="hover:text-accent transition-all duration-300"
      >
        <PiLinkedinLogoBold />
      </Link>
      <Link
        href={""}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={""}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};
