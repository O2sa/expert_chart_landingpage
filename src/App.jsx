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

const App = () => {
  return (
    <main className="overflow-hidden">
      <LiveChat />
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
