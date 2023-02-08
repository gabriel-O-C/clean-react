import { Login } from "./index";
import { render } from "@testing-library/react";
import React from "react";

describe("Login component", () => {
  it("Should not render spinner and error on start", () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);
  });
});
