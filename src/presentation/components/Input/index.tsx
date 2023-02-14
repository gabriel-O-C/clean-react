import React, { useContext } from "react";
import Context from "@/presentation/contexts/form/form-context";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context);
  const error = state[`${props.name}Error`];

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const getStatus = (): string => {
    return error ? "❌" : "🟢";
  };

  const getTitle = (): string => {
    return error || "Tudo certo!";
  };

  return (
    <div className="relative flex items-center">
      <input
        {...props}
        data-testid={props.name}
        onChange={handleChange}
        className="flex-grow flex-row rounded border-[1px] border-primaryLight px-1 leading-10 focus:outline-primaryLight"
      />
      <span
        title={getTitle()}
        data-testid={`${props.name}-status`}
        className="absolute right-2 cursor-help py-1"
      >
        {getStatus()}
      </span>
    </div>
  );
};
