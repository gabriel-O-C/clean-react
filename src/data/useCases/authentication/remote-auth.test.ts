import { type HttpPostClient } from "src/data/protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-auth";

describe("Remote authentication", () => {
  it("Should call HttpClient with correct url", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
