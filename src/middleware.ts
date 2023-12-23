import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwtDecode } from "jwt-decode";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, SERVER_MINIMUM_REFRESH_THRESHOLD } from "./config";
import { Jwt, JwtUser } from "./types";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY);
  const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY);

  if (!accessToken || !refreshToken) {
    return response;
  }

  let decoded: JwtUser;

  try {
    decoded = jwtDecode<JwtUser>(accessToken.value);
  } catch {
    return response;
  }

  const now = new Date();
  const expiresAt = new Date((decoded.exp ?? 0) * 1000);
  const difference = expiresAt.getTime() - now.getTime();

  if (difference > SERVER_MINIMUM_REFRESH_THRESHOLD) {
    return response;
  }

  const result = await fetch("http://localhost:4000/auth/refresh", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken.value}`,
    },
  });
  const data = (await result.json()) as Jwt;

  if (result.ok) {
    response.cookies.set(ACCESS_TOKEN_KEY, data.accessToken);
    response.cookies.set(REFRESH_TOKEN_KEY, data.refreshToken);
  } else {
    response.cookies.delete(ACCESS_TOKEN_KEY);
    response.cookies.delete(REFRESH_TOKEN_KEY);
  }

  return response;
}
