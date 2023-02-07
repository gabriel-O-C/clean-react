import React from "react";
import { Logo } from "@/presentation/components";

export const LoginHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center border-t-[40px] border-primaryDark bg-primary">
      <Logo />
      <h1 className="m-4 text-white">4 devs - Enquetes para programadores</h1>
    </header>
  );
};
