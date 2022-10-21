import React from "react";
import ReactDOM from "react-dom/client";

// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // React.StrictMode is a component that wraps the app and checks for potential problems
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp  subtitle={123} /> */}
        <CounterApp value={10}/>
    </React.StrictMode>
);
