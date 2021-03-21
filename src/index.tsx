import React from "react";
import ReactDOM from "react-dom";
import { App } from "components/App";
import { StoreContext, RootStore } from "store/rootStore";

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={new RootStore()}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
