import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";

import { Outlet } from "react-router-dom";
import { initializeFacebookPixel, initializeGoogleAnalytics, trackPageView } from "../utils/analtics.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    initializeGoogleAnalytics();
    initializeFacebookPixel();
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div>
      <Header />
      <div className="my-20  md:my-45 overflow-hidden px-8 min-h-screen">
      <Outlet />

      </div>
      <Footer />
    </div>
  );
};

export default Home;
