import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import { CollectionsProvider } from "./context/Collections";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CollectionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CollectionsProvider>
  </React.StrictMode>
);
