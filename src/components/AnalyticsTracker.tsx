import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-NPJ7BXHBK5";

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    const pagePath = location.pathname + location.search + location.hash;
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};
