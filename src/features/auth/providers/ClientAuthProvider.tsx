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

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/config";
import api from "@/lib/axios";

import { login } from "../api";

/**
 * Context
 */

interface ClientAuthContextValue {
  accessToken: string | null;
  refreshToken: string | null;
  user: JwtUser | null;
  isAuthenticated: boolean;
  onLogin: (data: Login) => Promise<Jwt>;
  onLogout: () => void;
}

const ClientAuthContext = createContext({} as ClientAuthContextValue);

export const useClientAuth = () => {
  const context = useContext(ClientAuthContext);

  if (!context) {
    throw new Error("useClientAuth must be used within a ClientAuthProvider");
  }

  return context;
};

/**
 * Provider
 */

export interface ClientAuthProviderProps {
  initialState: {
    accessToken: string | null;
    refreshToken: string | null;
    user: JwtUser | null;
  };
  children: React.ReactNode;
}

export const ClientAuthProvider: React.FC<ClientAuthProviderProps> = ({
  initialState,
  children,
}) => {
  const [accessToken, setAccessToken] = useState(initialState.accessToken);
  const [refreshToken, setRefreshToken] = useState(initialState.refreshToken);
  const [user, setUser] = useState(initialState.user);

  const refreshTimer = useRef<NodeJS.Timeout>();

  const onLogin = useCallback(async (data: Login) => {
    try {
      const response = await login(data);

      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setUser(jwtDecode(response.data.accessToken));

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }, []);

  const onLogout = useCallback(async () => {
    document.cookie = `${ACCESS_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    document.cookie = `${REFRESH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;

    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  }, []);

  const onRefresh = useCallback(async () => {
    try {
      const response = await axios<Jwt>({
        baseURL: "http://localhost:4000",
        method: "GET",
        url: "/auth/refresh",
        withCredentials: true,
      });

      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setUser(jwtDecode(response.data.accessToken));
    } catch {
      onLogout();
    }
  }, [onLogout]);

  useEffect(() => {
    if (accessToken) {
      setUser(jwtDecode<JwtUser>(accessToken));
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const decoded = jwtDecode<JwtUser>(accessToken);

      const now = new Date();
      const expiresAt = new Date((decoded.exp ?? 0) * 1000);
      const difference = expiresAt.getTime() - now.getTime();

      refreshTimer.current = setTimeout(onRefresh, difference);
    }

    return () => {
      if (refreshTimer.current) {
        clearTimeout(refreshTimer.current);
      }
    };
  }, [accessToken, onRefresh]);

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  const value = useMemo(
    () => ({
      accessToken,
      refreshToken,
      user,
      isAuthenticated: !!user,
      onLogin,
      onLogout,
    }),
    [accessToken, refreshToken, user, onLogin, onLogout]
  );

  return <ClientAuthContext.Provider value={value}>{children}</ClientAuthContext.Provider>;
};
