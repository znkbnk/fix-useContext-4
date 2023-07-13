//correct Page.js

import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Page() {
  const theme = useContext(ThemeContext);

  return <div className={theme}>Page Content</div>;
}
