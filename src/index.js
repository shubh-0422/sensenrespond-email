import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

// import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { purple } from "@mui/material/colors";
// import YourAppComponent from "./YourAppComponent"; // Replace with your main app component

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], // Set purple as the primary color
    },
    secondary: {
      main: purple[300], // Optional: Customize secondary color
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Ensures consistent styling (optional) */}
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
