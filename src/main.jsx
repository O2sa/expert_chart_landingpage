import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n"; // Import the i18n configuration
import SEO from "./components/SEO.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {" "}
    <SEO />
    <App />
  </>
);
