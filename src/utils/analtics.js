import ReactGA from "react-ga4";
import ReactPixel from "react-facebook-pixel";

export const initializeGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const initializeFacebookPixel = () => {
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;
  if (FB_PIXEL_ID) {
    ReactPixel.init(FB_PIXEL_ID);
  }
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
  ReactPixel.pageView();
};
