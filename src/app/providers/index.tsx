// Provedores devem ser adicionados aqui
"use client";

import { queryClient } from "@shared/services/reactQuery";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";

type TProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: TProvidersProps) {
  const composeProviders =
    (
      ...providers: {
        ({ children }: TProvidersProps): JSX.Element;
      }[]
    ) =>
    (props: { children: ReactNode }) =>
      providers.reduceRight(
        (children, Provider) => <Provider {...props}>{children}</Provider>,
        props.children,
      );

  const AllProviders = composeProviders();

  return (
    <QueryClientProvider client={queryClient}>
      <AllProviders>{children}</AllProviders>
    </QueryClientProvider>
  );
}
