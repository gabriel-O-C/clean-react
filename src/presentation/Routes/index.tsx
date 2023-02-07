import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "@/presentation/pages";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
