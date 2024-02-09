// Provedores devem ser adicionados aqui
"use client";

import { queryClient } from "@shared/services/reactQuery";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const composeProviders =
    (
      ...providers: {
        ({ children }: any): JSX.Element;
      }[]
    ) =>
    (props: { children: any }) =>
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
