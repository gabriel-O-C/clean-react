import React, { useEffect, useState } from "react";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "@/presentation/components";

import Context from "@/presentation/contexts/form/form-context";
import { type Validation } from "@/presentation/protocols/validation";

type Props = {
  validation: Validation;
};

export const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    errorMessage: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  });

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate("email", state.email),
      passwordError: validation.validate("password", state.password),
    });
  }, [state.email, state.password]);

  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className="flex w-[400px] flex-col justify-center gap-4 self-center rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-center text-[16px] font-bold uppercase text-primaryDark">
            Login
          </h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button
            data-testid="submit"
            type="submit"
            disabled
            className="h-8 rounded-lg border-[1px] border-primaryLight bg-primary px-8 text-[16px] text-white hover:opacity-90 disabled:bg-disabledBg disabled:text-disabledColor disabled:opacity-100"
          >
            Entrar
          </button>
          <span className="cursor-pointer text-center lowercase text-primary hover:underline">
            Criar conta
          </span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};
