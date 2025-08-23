import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever the route/pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // change to "auto" if you want an instant jump
    });
  }, [pathname]);

  return null; // This component doesn’t render anything
}
