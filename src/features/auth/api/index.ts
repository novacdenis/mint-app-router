import type { Jwt, Login } from "@/types";

import api from "@/lib/axios";

export const login = (data: Login) => {
  return api.post<Jwt>("/auth/login", data);
};
