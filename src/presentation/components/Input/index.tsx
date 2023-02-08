import React, { useContext } from "react";
import Context from "@/presentation/contexts/form/form-context";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context);
  const error = errorState[props.name];
  
  const getStatus = (): string => {
    return "❌"
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className="relative flex items-center">
      <input
        {...props}
        className="flex-grow flex-row rounded border-[1px] border-primaryLight px-1 leading-10 focus:outline-primaryLight"
      />
      <span title={getTitle()} data-testid={`${props.name}-status`} className="absolute right-2 cursor-help py-1">{getStatus()}</span>
    </div>
  );
};
