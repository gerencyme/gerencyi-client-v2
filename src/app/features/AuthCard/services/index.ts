import { api } from "@shared/services/axios/api";
import { TAuthRequest, TUserResponse } from "@shared/types";

export const auth = async (body: TAuthRequest) => {
  const endpoitn = "GenereateTokenIdentity";

  const { data } = await api.post<TUserResponse>(endpoitn, body);

  return data;
};
