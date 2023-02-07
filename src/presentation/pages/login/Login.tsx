import React from "react";
import { Footer, Input, LoginHeader, Spinner } from "@/presentation/components";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <LoginHeader />
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
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="top-0 left-0 flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
          <span className="text-primaryLight">Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
