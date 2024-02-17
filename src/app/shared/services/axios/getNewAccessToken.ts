import { api } from "@shared/services/axios/api";
import { TSessionCustomer } from "@shared/types";
import { parseCookies } from "nookies";

export const getNewAccessToken = async () => {
  const cookies = parseCookies();
  const stringfyiedSessionCustomer = cookies._t;
  const sessionCustomer: TSessionCustomer =
    stringfyiedSessionCustomer && JSON.parse(stringfyiedSessionCustomer);

  const endpoint = "RefreshToken";

  const { data } = await api.post<TSessionCustomer>(endpoint, {
    refreshToken: sessionCustomer.refreshToken,
    accessToken: sessionCustomer.accessToken,
  });

  return data.accessToken;
};
