import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModeProvider } from "./context/ModeContext";       // Theme context
import { FilterProvider } from "./context/FilterContext";   // Filter context

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/spotify-dg">
    <ModeProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ModeProvider>
  </BrowserRouter>
);
