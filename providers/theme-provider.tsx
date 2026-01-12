"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// This wrapper allows us to use the ThemeProvider in the App Router
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}