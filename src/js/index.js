//import react into the bundle
import React from "react";
import {createRoot} from 'react-dom/client';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import  {Layout}  from "./Layout.jsx";

//render your react application
const root = createRoot(document.querySelector("#app"))
root.render(<Layout/>)  // Render your react application