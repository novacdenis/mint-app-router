"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "../providers";

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const params = useSearchParams();

  const { user, isLoaded } = useAuth();

  useEffect(() => {
    if (user && isLoaded) {
      router.push(params.get("next") ?? "/dashboard");
    }
  }, [user, isLoaded, router, params]);

  return <>{children}</>;
};
