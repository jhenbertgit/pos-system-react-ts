import { ThemeProviderCtx } from "@/context/theme-provider-ctx";
import { Theme } from "@/types";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey: string;
};
const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "pos",
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };
  return (
    <ThemeProviderCtx.Provider {...props} value={value}>
      {children}
    </ThemeProviderCtx.Provider>
  );
};

export default ThemeProvider;
