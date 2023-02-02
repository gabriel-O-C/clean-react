import { RemoteAuthentication } from "./remote-auth";
import { HttpPostClientSpy } from "../../test/mock-http-post-client";

describe("Remote authentication", () => {
  it("Should call HttpClient with correct url", async () => {
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
