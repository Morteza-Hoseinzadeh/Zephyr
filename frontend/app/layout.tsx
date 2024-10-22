"use client";

import React from "react";
// Theme configuration
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import lightTheme from "@/utils/theme/lightTheme";
import darkTheme from "@/utils/theme/darkTheme";
// custom styles
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = lightTheme;
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          <header></header>
          {children}
          <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
