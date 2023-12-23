import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { jwtDecode } from "jwt-decode";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, SERVER_MINIMUM_REFRESH_THRESHOLD } from "./config";
import { Jwt, JwtUser } from "./types";

function appendCustomReferer(request: NextRequest, response: NextResponse) {
  response.headers.set("x-pathname", request.nextUrl.pathname);
  response.headers.set("x-search", request.nextUrl.search);
}

async function refreshTokens(request: NextRequest, response: NextResponse) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY);
  const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY);

  if (!accessToken || !refreshToken) {
    return;
  }

  let decoded: JwtUser;

  try {
    decoded = jwtDecode<JwtUser>(accessToken.value);
  } catch {
    return;
  }

  const now = new Date();
  const expiresAt = new Date((decoded.exp ?? 0) * 1000);
  const difference = expiresAt.getTime() - now.getTime();

  if (difference > SERVER_MINIMUM_REFRESH_THRESHOLD) {
    return;
  }

  try {
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
  } catch {
    response.cookies.delete(ACCESS_TOKEN_KEY);
    response.cookies.delete(REFRESH_TOKEN_KEY);
  }
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  appendCustomReferer(request, response);
  await refreshTokens(request, response);

  return response;
}
