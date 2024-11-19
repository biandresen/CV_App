import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import CVApp from "./CVApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVApp />
  </StrictMode>
);
