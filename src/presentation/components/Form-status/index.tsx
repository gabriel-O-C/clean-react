import React, { useContext } from "react";
import { Spinner } from "../Spinner";
import Context from "@/presentation/contexts/form/form-context";
export const FormStatus: React.FC = () => {
  const { errorState, state } = useContext(Context);
  return (
    <div
      data-testid="error-wrap"
      className="flex flex-col items-center justify-center gap-8"
    >
      {state.isLoading ? (
        <div className="top-0 left-0 flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      ) : null}

      {errorState.errorMessage ? (
        <span className="text-primaryLight">{errorState.errorMessage}</span>
      ) : null}
    </div>
  );
};
