"use client";

import { Button } from "@mui/material";

import { useAuth } from "@/features/auth";

export const LogoutButton: React.FC = () => {
  const { onLogout } = useAuth();

  return (
    <Button variant="contained" onClick={onLogout}>
      Logout
    </Button>
  );
};
