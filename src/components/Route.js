import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [pathUrl, setPathUrl] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setPathUrl(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return pathUrl === path ? children : null;
};

export default Route;
