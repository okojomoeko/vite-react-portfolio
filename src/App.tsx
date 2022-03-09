import React from "react";
import "./App.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./components/Layout";

function App() {
  const [themeFlagState] = React.useState({
    themeFlag: true,
  });
  // TODO: for dark mode
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeFlagState.themeFlag ? "dark" : "light",
        },
      }),
    [themeFlagState]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
