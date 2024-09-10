import { useLayoutEffect, useState } from "react";

export default function useThemeMode() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
    if (
      localStorage.getItem("themeMode") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
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
