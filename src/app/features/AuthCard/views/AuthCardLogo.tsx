import Image from "next/image";
import CardLogo from "@assets/svg/card-logo.svg";

export function AuthCardLogo() {
  return (
    <Image
      alt="logo da GerencyI"
      className="pointer-events-none"
      src={CardLogo}
    />
  );
}
