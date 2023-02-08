import { Login } from "./index";
import { render } from "@testing-library/react";
import React from "react";

describe("Login component", () => {
  it("Should start with initial state", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = getByTestId("submit") as HTMLButtonElement;
    expect(submitButton.disabled).toBeTruthy();

    const emailStatus = getByTestId("email-status");
    expect(emailStatus.title).toBe("Campo obrigatório");
    expect(emailStatus.textContent).toBe("❌");

    const passwordStatus = getByTestId("password-status");
    expect(passwordStatus.title).toBe("Campo obrigatório");
    expect(passwordStatus.textContent).toBe("❌");
  });
});
