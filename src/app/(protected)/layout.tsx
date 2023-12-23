import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { ProtectedRoute, getAuth } from "@/features/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const auth = getAuth();

  if (!auth) {
    const pathname = headers().get("x-pathname");
    const search = headers().get("x-search");

    let next = "/login";

    if (pathname) next += `?next=${encodeURIComponent(pathname)}`;
    if (search) next += encodeURIComponent(search);

    redirect(next);
  }

  return <ProtectedRoute>{children}</ProtectedRoute>;
}
