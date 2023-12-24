import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { PublicRoute, getAuth } from "@/features/auth";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const auth = getAuth();

  if (auth) {
    const search = headers().get("x-search");

    if (search) {
      const searchParams = new URLSearchParams(search);
      const next = searchParams.get("next");

      if (next) redirect(next);
    }

    redirect("/dashboard");
  }

  return <PublicRoute>{children}</PublicRoute>;
}
