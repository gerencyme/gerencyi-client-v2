import { useLocalStorage } from "@shared/hooks/useLocalStorage";
import { TCompanieRequest } from "@shared/types";
import { sessionUserLocalStorage } from "@shared/utils/constants/userLocalStorage";

export const useCompanyInfo = () => {
  const { getLocalStorage } = useLocalStorage();

  const session = sessionUserLocalStorage;

  const company: TCompanieRequest = getLocalStorage(session);

  return {
    company,
  };
};
