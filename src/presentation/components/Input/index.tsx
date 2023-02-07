import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className="relative flex items-center">
      <input
        {...props}
        className="flex-grow flex-row rounded border-[1px] border-primaryLight px-1 leading-10 focus:outline-primaryLight"
      />
      <span className="absolute right-2 cursor-help py-1">❌</span>
    </div>
  );
};
