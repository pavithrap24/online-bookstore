import React from "react";
import { Provider } from "react-redux";
import Page from "./containers/page/page";
import store from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
