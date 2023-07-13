//incorrect Page.js

import React, { useContext } from "react";
import { Theme } from "./App";

export default function Page() {
  const theme = useContext(Theme); 

  return <div className='theme'>Page Content</div>; 
}
