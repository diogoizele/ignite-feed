import classes from "./header.module.css";
import igniteLogo from "../assets/ignite-logo.png";
import { useEffect, useLayoutEffect, useState } from "react";

export function Header() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const handleToggleThemeMode = () => {
    setThemeMode((current) => {
      const newMode = current === "light" ? "dark" : "light";
      localStorage.setItem(".themeMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const mode = localStorage.getItem(".themeMode");
    if (mode) {
      setThemeMode(mode as "light" | "dark");
    }
  }, []);

  useLayoutEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.style.setProperty(
        "--header-background",
        "#323238"
      );
      document.documentElement.style.setProperty("--text-primary", "#c4c4cc");
      document.documentElement.style.setProperty("--app-background", "#121214");
      document.documentElement.style.setProperty(
        "--papper-background",
        "#202024"
      );
      document.documentElement.style.setProperty("--text-secondary", "#8d8d99");
      document.documentElement.style.setProperty(
        "--sidebar-secondary",
        "#323238"
      );
    } else {
      document.documentElement.style.setProperty("--header-background", "#fff");
      document.documentElement.style.setProperty("--text-primary", "#29292e");
      document.documentElement.style.setProperty("--text-secondary", "#323238");
      document.documentElement.style.setProperty("--app-background", "#e1e1e6");
      document.documentElement.style.setProperty(
        "--papper-background",
        "#c4c4cc"
      );
      document.documentElement.style.setProperty(
        "--sidebar-secondary",
        "#8d8d99"
      );
    }
  }, [themeMode]);

  return (
    <header className={classes.header}>
      <img src={igniteLogo} alt="Logo do Ignite Feed" />
      <strong>Ignite Feed</strong>
      <div
        className={classes.themeToggleContainer}
        onClick={handleToggleThemeMode}
      >
        <div
          className={
            themeMode === "light"
              ? classes.themeToggleLight
              : classes.themeToggleDark
          }
        />
      </div>
    </header>
  );
}
