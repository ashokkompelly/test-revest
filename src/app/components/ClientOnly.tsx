// app/components/ClientOnly.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ClientOnly({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <>{children}</>;
}
