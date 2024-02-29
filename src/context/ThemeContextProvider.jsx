import React from "react";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(null);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
