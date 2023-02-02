import { type AuthenticationParams } from "@/domain/useCases/authentication";
import { type AccountModel } from "../models/account-model";
import { faker } from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
