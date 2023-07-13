//correct App.js

import React, { createContext } from "react";

export const ThemeContext = createContext("light");

export default function App() {
  return (
    <ThemeContext.Provider value={"dark"}>
      <Page />
    </ThemeContext.Provider>
  );
}
