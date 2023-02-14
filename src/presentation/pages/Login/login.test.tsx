import { Login } from "./index";
import {
  render,
  type RenderResult,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import React from "react";
import { ValidationStub } from "@/presentation/test";
import { faker } from "@faker-js/faker";

type SutTypes = {
  sut: RenderResult;
  validationStub: ValidationStub;
};

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = faker.random.words();
  const sut = render(<Login validation={validationStub} />);

  return {
    sut,
    validationStub,
  };
};

describe("Login component", () => {
  afterEach(cleanup);

  it("Should start with initial state", () => {
    const { sut, validationStub } = makeSut();
    const errorWrap = sut.getByTestId("error-wrap");

    expect(errorWrap.childElementCount).toBe(0);

    const submitButton = sut.getByTestId("submit") as HTMLButtonElement;

    expect(submitButton.disabled).toBeTruthy();

    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe("❌");

    const passwordStatus = sut.getByTestId("password-status");

    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe("❌");
  });

  it("Should show email error if validation fails", () => {
    const { sut, validationStub } = makeSut();
    const emailInput = sut.getByTestId("email");
    const emailStatus = sut.getByTestId("email-status");

    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });

    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe("❌");
  });

  it("Should show password error if validation fails", () => {
    const { sut, validationStub } = makeSut();
    const passwordInput = sut.getByTestId("password");
    const passwordStatus = sut.getByTestId("password-status");

    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    });

    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe("❌");
  });

  it("Should show valid email state if Validation succeeds", () => {
    const { sut, validationStub } = makeSut();
    validationStub.errorMessage = null;
    const emailInput = sut.getByTestId("email");
    const emailStatus = sut.getByTestId("email-status");

    fireEvent.input(emailInput, {
      target: { value: faker.internet.email() },
    });

    expect(emailStatus.title).toBe("Tudo certo!");
    expect(emailStatus.textContent).toBe("🟢");
  });

  it("Should show valid password state if Validation succeeds", () => {
    const { sut, validationStub } = makeSut();
    validationStub.errorMessage = null;
    const passwordInput = sut.getByTestId("password");
    const passwordStatus = sut.getByTestId("password-status");

    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    });

    expect(passwordStatus.title).toBe("Tudo certo!");
    expect(passwordStatus.textContent).toBe("🟢");
  });

  it("Should enable submit button if form is valid", () => {
    const { sut, validationStub } = makeSut();
    validationStub.errorMessage = null;
    const emailInput = sut.getByTestId("email");
    const passwordInput = sut.getByTestId("password");
    const submitButton = sut.getByTestId("submit") as HTMLButtonElement;

    fireEvent.input(emailInput, {
      target: { value: faker.internet.email() },
    });

    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    });

    expect(submitButton.disabled).toBeFalsy();
  });
});
