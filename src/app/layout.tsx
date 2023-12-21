import type { Metadata } from "next";

import Script from "next/script";

import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/providers";

import "@/styles/index.css";

export const metadata: Metadata = {
  title: "ANNEA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        <Script src="/__ENV.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
