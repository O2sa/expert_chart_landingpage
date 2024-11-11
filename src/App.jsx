import Home from "./pages/Home";
import React, { createContext, Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landingpage from "./pages/landingpage";
import Privacy from "./pages/privacy";
import { useEffect } from "react";
import {
  initializeFacebookPixel,
  initializeGoogleAnalytics,
  trackPageView,
} from "./utils/analtics";
import LiveChat from "./components/LiveChat";
import { useTranslation } from "react-i18next";

const App = () => {


  const {
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    // Create a script element
    const tawk = document.createElement("script");
    tawk.src = `https://embed.tawk.to/${
      import.meta.env.VITE_APP_TAWK_PROPERTY_ID
    }/${
      language === "ar"
        ? import.meta.env.VITE_APP_TAWK_AR_WIDGET_ID
        : import.meta.env.VITE_APP_TAWK_EN_WIDGET_ID
    }`;
    tawk.async = true;
    tawk.charset = "UTF-8";
    tawk.setAttribute("crossorigin", "*");

    // Append the script to the body
    document.body.appendChild(tawk);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(tawk);
    };
  }, []);




  return (
    <main className="overflow-hidden">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Landingpage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Privacy />} />
              <Route path="/login" element={<Login />} />{" "}
            </Route>
          </Routes>
        </Suspense>{" "}
      </Router>
    </main>
  );
};

export default App;
