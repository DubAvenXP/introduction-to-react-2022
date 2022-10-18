import React from "react";
import ReactDOM from "react-dom/client";

import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // React.StrictMode is a component that wraps the app and checks for potential problems
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title="Hola, soy Goku" subtitle={123} />
    </React.StrictMode>
);
