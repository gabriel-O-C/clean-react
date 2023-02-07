import React from "react";
import { Spinner } from "../Spinner";

export const FormStatus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="top-0 left-0 flex h-full w-full items-center justify-center">
        <Spinner />
      </div>
      <span className="text-primaryLight">Erro</span>
    </div>
  );
};
