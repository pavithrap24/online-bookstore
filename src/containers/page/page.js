import React from "react";
import HomePage from "../homePage/homePage";
import NavBar from "../navBar/navBar";

function page(props) {
  return (
    <div>
      {/* <NavBar
        // cartCount={props.cartCount}
        // cartClick={props.cartClickHandler()}
        onChangeSearch={(event) => props.onChangeSearchHandler(event)}
      /> */}
      <HomePage />
    </div>
  );
}

export default page;
