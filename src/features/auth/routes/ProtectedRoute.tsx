"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useClientAuth } from "../providers";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const { isAuthenticated } = useClientAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      let next = pathname;

      if (params.toString()) {
        next += `?${params.toString()}`;
      }

      router.push(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [isAuthenticated, router, pathname, params]);

  return <>{children}</>;
};
