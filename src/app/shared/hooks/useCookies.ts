import { TCreateSession } from "@shared/types";
import { setCookie, destroyCookie } from "nookies";

/**
 * @returns {
 *  createSession
 * destroySession
 * }
 */

export const useCookie = () => {
  const maxAge = process.env.NEXT_PUBLIC_MAX_AGE_IN_SECONDS;

  const createSession = ({ cookieName, value }: TCreateSession) =>
    setCookie(null, cookieName, value, {
      maxAge: maxAge,
      path: "/",
    });

  const deleteCookie = (cookieName: string) =>
    destroyCookie(null, cookieName, {
      cookieName,
    });

  return {
    createSession,
    deleteCookie,
  };
};
