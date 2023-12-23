"use client";

import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from "@mui/material";

import NextAppDirEmotionCacheProvider from "./EmotionCache";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007363", light: "#87B99D" },
  },
  typography: {
    fontFamily: [
      "var(--font-family)",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
