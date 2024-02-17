import axios, { AxiosError, AxiosInstance } from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import { destroyCookie } from "nookies";
import { getNewAccessToken } from "@shared/services/axios/getNewAccessToken";
import { TSessionCustomer } from "@shared/types";
import { sessionToken } from "@shared/utils/constants/cookies";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const cookies = parseCookies();
  const stringfyiedSessionCustomer = cookies._t;
  const sessionCustomer: TSessionCustomer =
    stringfyiedSessionCustomer && JSON.parse(stringfyiedSessionCustomer);

  const authorization =
    config.headers.Authorization ?? sessionCustomer?.accessToken;

  if (String(authorization).includes("Bearer ")) {
    String(authorization).replace("Bearer ", "");
  }
  if (sessionCustomer) {
    config.headers.Authorization = `Bearer ${authorization}`;
    config.headers.RefresToken = sessionCustomer?.refreshToken;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error instanceof AxiosError) {
      toast.info(error.response?.data);

      if (error.code === "ERR_NETWORK") {
        toast.error("Servidor indisponível ou fora do ar.");
        throw new ApiError(503, "Servidor indisponível ou fora do ar.");
      }

      if (error.response?.status === 401) {
        const originalRequest = error.config;

        const newAccessToken = await getNewAccessToken();

        if (!newAccessToken) {
          destroyCookie(null, sessionToken);
          toast.error("Usuário não autorizado.");
          setTimeout(() => {
            window.location.href = "/auth";
          }, 2000);
        }

        if (originalRequest) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axios.request(originalRequest);
        }
      }
    }
  },
);

export const FAQApi: AxiosInstance = axios.create({});
