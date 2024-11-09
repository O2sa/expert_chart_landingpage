export const isDarkModeChecker = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };