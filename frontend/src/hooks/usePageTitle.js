import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    const titles = {
      "": "Nnyocha",
      home: "Nnyocha | Home",
      about: "Nnyocha | About",
      contact: "Nnyocha | Contact",
    };

    document.title = titles[hash] || "Nnyocha";
  }, [location]);
}
