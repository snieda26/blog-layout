import { FC, ReactNode, createContext, useState } from "react";

interface IThemeProvider {
  children: ReactNode;
}

export const ThemeContext = createContext({
  currentTheme: "dark" || "light",
  toggleTheme: () => {},
});

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
