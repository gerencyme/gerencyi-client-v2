import { Template } from "@shared/components";
import { TRootComponent } from "@shared/types";

type TAuthCardRootProps = TRootComponent;

export function AuthCardRoot({ children }: TAuthCardRootProps) {
  return (
    <Template centralized="full" direction="col" variant="mirror">
      {children}
    </Template>
  );
}
