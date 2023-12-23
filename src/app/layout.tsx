import type { Metadata } from "next";

import localFont from "next/font/local";
import Script from "next/script";

import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/providers";

const akrobat = localFont({
  variable: "--font-family",
  src: [
    { path: "../../public/fonts/Akrobat/Akrobat-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Akrobat/Akrobat-Black.woff2", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "ANNEA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={akrobat.variable}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>

        <Script src="__ENV.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
