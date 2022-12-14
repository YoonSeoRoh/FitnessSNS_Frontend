import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/Global";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
);
