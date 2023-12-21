"use client";

import type { Jwt, JwtUser, Login } from "@/types";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useLocalStorage } from "usehooks-ts";

import { ACCESS_TOKEN_KEY, API_URL, REFRESH_TOKEN_KEY } from "@/config";
import api from "@/lib/axios";

import { login } from "../api";

interface AuthContextValue {
  accessToken: string | null;
  refreshToken: string | null;
  user: JwtUser | null;
  isLoaded: boolean;
  onLogin: (data: Login) => Promise<unknown>;
  onLogout: () => void;
}

const AuthContext = createContext({} as AuthContextValue);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(ACCESS_TOKEN_KEY, null);
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>(REFRESH_TOKEN_KEY, null);

  const [user, setUser] = useState<JwtUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const refreshTimer = useRef<NodeJS.Timeout | null>(null);

  const onLogin = useCallback(
    async (data: Login) => {
      try {
        const response = await login(data);

        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setUser(jwtDecode<JwtUser>(response.data.accessToken));

        api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
      } catch (error) {
        return error;
      }
    },
    [setAccessToken, setRefreshToken]
  );

  const onLogout = useCallback(() => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);

    api.defaults.headers["Authorization"] = null;
  }, [setAccessToken, setRefreshToken]);

  const refresh = useCallback(async () => {
    try {
      const response = await axios<Jwt>({
        baseURL: API_URL,
        method: "GET",
        url: "/auth/refresh",
        headers: { Authorization: `Bearer ${refreshToken}` },
      });

      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setUser(jwtDecode<JwtUser>(response.data.accessToken));

      api.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
    } catch {
      onLogout();
    }
  }, [refreshToken, setAccessToken, setRefreshToken, onLogout]);

  useEffect(() => {
    if (accessToken) {
      setUser(jwtDecode<JwtUser>(accessToken));
    }

    setIsLoaded(true);
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode<JwtUser>(accessToken);

      const now = new Date();
      const expiresAt = new Date((decoded.exp ?? 0) * 1000);
      const difference = expiresAt.getTime() - now.getTime();

      if (difference > 0) {
        refreshTimer.current = setTimeout(refresh, difference);
        setIsLoaded(true);
      } else {
        refresh().finally(() => setIsLoaded(true));
      }
    }

    return () => {
      if (refreshTimer.current) {
        clearTimeout(refreshTimer.current);
      }
    };
  }, [accessToken, refresh]);

  const value = useMemo(
    () => ({
      accessToken,
      refreshToken,
      user,
      isLoaded,
      onLogin,
      onLogout,
    }),
    [accessToken, refreshToken, user, isLoaded, onLogin, onLogout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
