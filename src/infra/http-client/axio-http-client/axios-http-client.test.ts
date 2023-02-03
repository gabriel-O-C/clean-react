import { AxiosHttpClient } from "./axios-http-client";
import { type HttpPostParams } from "@/data/protocols/http";
import axios from "axios";
import { faker } from "@faker-js/faker";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedAxiosResponse = {
  data: faker.datatype.json(),
  status: faker.random.numeric(),
};

mockedAxios.post.mockResolvedValue(mockedAxiosResponse);

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<unknown> => ({
  url: faker.internet.url(),
  body: faker.datatype.json(),
});

describe("AxiosHttpClient", () => {
  it("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  it("Should return the correct StatusCode and body", async () => {
    const sut = makeSut();
    const response = await sut.post(mockPostRequest());
    expect(response).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data,
    });
  });
});
