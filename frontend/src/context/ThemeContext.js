import React, {
  createContext,
  useState,
} from "react";



export const ThemeContext =
createContext();



function ThemeProvider({
  children,
}) {

  const [
    darkMode,
    setDarkMode,
  ] = useState(true);




  const toggleTheme =
    () => {

      setDarkMode(
        !darkMode
      );

    };



  return (

    <ThemeContext.Provider

      value={{

        darkMode,

        toggleTheme,

      }}
    >

      <div
        className={
          darkMode
            ? "dark"
            : ""
        }
      >

        {children}

      </div>

    </ThemeContext.Provider>

  );
}

export default ThemeProvider;