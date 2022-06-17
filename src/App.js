import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home.jsx";
import Navigation from "./routes/navigation/Navigation.jsx";
import About from "./routes/about/About.jsx";
import Details from "./routes/details/Details.jsx";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getDesignTokens, getThemedComponents } from "./theme/Theme";
import { ColorModeContext } from "./contexts/ColorModeContext";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState();

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route exact index element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/details/:type/:id" element={<Details />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
