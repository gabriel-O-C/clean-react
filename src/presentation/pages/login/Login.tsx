import React from "react";
import { Logo, Spinner } from "@/presentation/components";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <header className="flex flex-col items-center justify-center border-t-[40px] border-primaryDark bg-primary">
        <Logo />
        <h1 className="m-4 text-white">4 devs - Enquetes para programadores</h1>
      </header>
      <form className="flex w-[400px] flex-col justify-center gap-4 self-center rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-[16px] font-bold uppercase text-primaryDark">
          Login
        </h2>
        <div className="relative flex items-center">
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            className="flex-grow flex-row rounded border-[1px] border-primaryLight px-1 leading-10 focus:outline-primaryLight"
          />
          <span className="absolute right-2 cursor-help py-1">❌</span>
        </div>
        <div className="relative flex items-center">
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="flex-grow flex-row rounded border-[1px] border-primaryLight px-1 leading-10"
          />
          <span className="absolute right-2 cursor-help py-1">❌</span>
        </div>
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
      <footer className="h-10 bg-primary"></footer>
    </div>
  );
};

export default Login;
