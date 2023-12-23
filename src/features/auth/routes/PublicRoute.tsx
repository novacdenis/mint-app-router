"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useClientAuth } from "../providers";

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const params = useSearchParams();

  const { isAuthenticated } = useClientAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(params.get("next") ?? "/dashboard");
    }
  }, [isAuthenticated, router, params]);

  return <>{children}</>;
};
