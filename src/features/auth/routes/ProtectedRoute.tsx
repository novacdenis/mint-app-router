import { redirect } from "next/navigation";

import { ClientProtectedRoute } from "./ClientProtectedRoute";
import { getAuth } from "../actions";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = getAuth();

  if (!auth) {
    redirect("/login");
  }

  return <ClientProtectedRoute>{children}</ClientProtectedRoute>;
};
