import React, { useState } from "react";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "@/presentation/components";

import Context from "@/presentation/contexts/form/form-context";

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

export const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ""
  });
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <LoginHeader />
      <Context.Provider value={state}>
        <form className="flex w-[400px] flex-col justify-center gap-4 self-center rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-center text-[16px] font-bold uppercase text-primaryDark">
            Login
          </h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />

          <button
            type="submit"
            className="h-8 rounded-lg border-[1px] border-primaryLight bg-primary px-8 text-[16px] text-white hover:opacity-90"
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
