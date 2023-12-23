import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Box, Stack } from "@mui/material";

import { PublicRoute, getAuth } from "@/features/auth";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const auth = getAuth();

  if (auth) {
    const search = headers().get("x-search");

    if (search) {
      const searchParams = new URLSearchParams(search);
      const next = searchParams.get("next");

      if (next) redirect(next);
    }

    redirect("/dashboard");
  }

  return (
    <PublicRoute>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100dvw",
          height: "100dvh",
          backgroundColor: "grey.50",
        }}
      >
        <Box sx={{ width: "440px", p: 2, backgroundColor: "#fff", borderRadius: 2, boxShadow: 1 }}>
          <Stack alignItems="center">
            <Image priority src="/images/annea-logo.png" alt="ANNEA Logo" width="256" height="83" />
          </Stack>

          <Box sx={{ width: "100%", mt: 3 }}>{children}</Box>
        </Box>
      </Box>
    </PublicRoute>
  );
}
