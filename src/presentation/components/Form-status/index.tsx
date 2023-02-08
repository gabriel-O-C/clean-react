import React, { useContext } from "react";
import { Spinner } from "../Spinner";
import Context from "@/presentation/contexts/form/form-context";
export const FormStatus: React.FC = () => {
  const { state } = useContext(Context);
  const { isLoading, errorMessage } = state;
  return (
    <div
      data-testid="error-wrap"
      className="flex flex-col items-center justify-center gap-8"
    >
      {isLoading ? (
        <div className="top-0 left-0 flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      ) : null}

      {errorMessage ? (
        <span className="text-primaryLight">{errorMessage}</span>
      ) : null}
    </div>
  );
};
