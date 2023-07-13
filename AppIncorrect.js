//incorrect App.js

import React, { createContext } from "react";

export ThemeContext = Context();

export default function App() {
  return (
    <Provider value={"dark"}>
      <Page />
    </Provider>
  );
}
