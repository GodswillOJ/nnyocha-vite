import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Static routes
    const staticTitles = {
      "/": "Nnyocha | Home",
      "/about@_staging": "Nnyocha | About",
      "/contact@_staging": "Nnyocha | Contact",
      "/blog": "Nnyocha | Blog",
      "/admin/posts/new": "Nnyocha | Create Blog Post",
    };

    // Blog post route: /blog/:slug
    if (path.startsWith("/blog/") && path !== "/blog") {
      document.title = "Nnyocha | Blog Post";
      return;
    }

    document.title = staticTitles[path] || "Nnyocha";
  }, [location.pathname]);
}