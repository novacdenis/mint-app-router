"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "../providers";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const { user, isLoaded } = useAuth();

  useEffect(() => {
    console.log(user, isLoaded);
    if (!user && isLoaded) {
      let next = pathname;

      if (params.toString()) {
        next += `?${params.toString()}`;
      }

      router.push(`/login?next=${encodeURIComponent(next)}`);
    }
  }, [user, isLoaded, router, pathname, params]);

  return <>{children}</>;
};
