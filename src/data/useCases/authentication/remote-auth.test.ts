import { RemoteAuthentication } from "./remote-auth";
import { HttpPostClientSpy } from "../../test/mock-http-post-client";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = "any_url"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("Remote authentication", () => {
  it("Should call HttpClient with correct url", async () => {
    const url = "any_url";
    const { sut, httpPostClientSpy } = makeSut();

    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
