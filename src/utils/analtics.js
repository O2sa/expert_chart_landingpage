import ReactGA from 'react-ga4';
import ReactPixel from 'react-facebook-pixel';

// Initialize Google Analytics
export const initializeGoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (GA_MEASUREMENT_ID) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

// Initialize Facebook Pixel
export const initializeFacebookPixel = () => {
  const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID;
  if (FB_PIXEL_ID) {
    ReactPixel.init(FB_PIXEL_ID);
  }
};

// Track a page view
export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
  ReactPixel.pageView();
};

// Track custom events for Google Analytics
export const trackGAEvent = ({ category, action, label, value }) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Track custom events for Facebook Pixel
export const trackFBEvent = (event, data) => {
  ReactPixel.track(event, data);
};
