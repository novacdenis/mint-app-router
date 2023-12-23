"use server";

import type { JwtUser } from "@/types";

import { cookies } from "next/headers";

import { jwtDecode } from "jwt-decode";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/config";

export const getAuth = () => {
  const accessToken = cookies().get(ACCESS_TOKEN_KEY);
  const refreshToken = cookies().get(REFRESH_TOKEN_KEY);

  if (!accessToken || !refreshToken) {
    return null;
  }

  let decoded: JwtUser;

  try {
    decoded = jwtDecode<JwtUser>(accessToken.value);
  } catch {
    return null;
  }

  return {
    accessToken: accessToken.value,
    refreshToken: refreshToken.value,
    user: decoded,
  };
};
