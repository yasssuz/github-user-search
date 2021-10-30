import { createContext, FC, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider: FC = ({ children }) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const darkTheme: object = {
    colors: {
      background: "#141D2F",
      themeBtn: "#fff",
      card: "#1E2A47",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme: object = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442",
    },
  };

  function changeTheme(): void {
    setLightMode(prev => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true);
  }, []);

  useEffect(() => {
    const mode = lightMode ? "light" : "dark";

    localStorage.setItem("theme", mode);
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
