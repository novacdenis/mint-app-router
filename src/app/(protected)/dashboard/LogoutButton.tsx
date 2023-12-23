"use client";

import { Button } from "@mui/material";

import { useClientAuth } from "@/features/auth";

export const LogoutButton: React.FC = () => {
  const { onLogout } = useClientAuth();

  return (
    <>
      <Button variant="contained" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};
