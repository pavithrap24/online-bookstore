import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import HomePage from "../homePage/homePage";
import NavBar from "../navBar/navBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(54, 232, 238)",
    },
  },
});

function page(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
      <HomePage />
    </div>
  );
}

export default page;
