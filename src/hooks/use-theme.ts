import { ThemeProviderCtx } from "@/contexts/theme-provider-ctx";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeProviderCtx);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
