import { redirect } from "next/navigation";

import { ClientPublicRoute } from "./ClientPublicRoute";
import { getAuth } from "../actions";

export const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = getAuth();

  if (!auth) {
    redirect("/login");
  }

  return <ClientPublicRoute>{children}</ClientPublicRoute>;
};
