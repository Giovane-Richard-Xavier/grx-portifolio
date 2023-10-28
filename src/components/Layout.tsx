import React, { ReactElement } from "react";
// import { Sora } from "@next/fonts/google";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { TopLeftImg } from "@/shared/ui/atom/TopLeftImg";
// import "@next/fonts/google";

const sora = {
  subsets: ["latin1"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
};

interface ILayout {
  children: ReactElement;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative `}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
