import { useLayoutEffect, useState } from "react";

export default function useThemeMode() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("themeMode");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useLayoutEffect(() => {
    if (themeMode === "dark") {
      localStorage.setItem("themeMode", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("themeMode", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  return { themeMode, setThemeMode };
}
