import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import HomePage from "../homePage/homePage";
import NavBar from "../navBar/navBar";

const NavBarTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(54, 232, 238)",
    },
  },
});

function page(props) {
  return (
    <div>
      <ThemeProvider theme={NavBarTheme}>
        <NavBar />
      </ThemeProvider>
      <HomePage />
    </div>
  );
}

export default page;
