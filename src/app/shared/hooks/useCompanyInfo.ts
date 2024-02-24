import { TCompanieRequest } from "@shared/types";
import { parseCookies } from "nookies";

export const useCompanyInfo = () => {
  const cookies = parseCookies();
  const stringfyiedCompanySession = cookies._Customer;
  const company: TCompanieRequest =
    stringfyiedCompanySession && JSON.parse(stringfyiedCompanySession);

  return {
    company,
  };
};
