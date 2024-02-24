"use client";

import { mainTV } from "@shared/components/Main/MainTV";
import { TRootComponent } from "@shared/types";
import { useEffect, useState } from "react";

type TMainProps = TRootComponent;

export function Main({ children }: TMainProps) {
  const [isClient, setIsCLient] = useState(false);

  useEffect(() => {
    setIsCLient(true);
  }, []);

  return <main className={mainTV()}>{isClient && children}</main>;
}
