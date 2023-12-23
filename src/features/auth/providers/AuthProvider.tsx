import { ClientAuthProvider } from "./ClientAuthProvider";
import { getAuth } from "../actions";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = getAuth() || { accessToken: null, refreshToken: null, user: null };

  return (
    <ClientAuthProvider
      initialState={{
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        user: auth.user,
      }}
    >
      {children}
    </ClientAuthProvider>
  );
};
