import { RemoteAuthentication } from "./remote-auth";
import { HttpStatusCode } from "@/data/protocols/http";
import { HttpPostClientSpy } from "@/data/test";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/errors";
import { mockAccountModel, mockAuthentication } from "@/domain/test";
import { type AccountModel } from "@/domain/models";
import { type AuthenticationParams } from "@/domain/useCases";
import { faker } from "@faker-js/faker";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("Remote authentication", () => {
  it("Should call HttpClient with correct url", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);

    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  it("Should call HttpClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });

  it("Should throw invalidCredentialsError if HttpPostClient returns 401", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  it("Should throw unexpectedError if HttpPostClient returns 400", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it("Should throw unexpectedError if HttpPostClient returns 404", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it("Should throw unexpectedError if HttpPostClient returns 500", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.auth(mockAuthentication());

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  it("Should return an AccountModel if HttpPostClient returns 200", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.auth(mockAuthentication());

    expect(account).toEqual(httpResult);
  });
});
