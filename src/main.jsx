import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import SEO from "./components/SEO.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <SEO />
    <App />
  </>
);
