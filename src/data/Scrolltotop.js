import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to top on every route change, except when the
// navigation target includes a hash (e.g. "/#projects") — in that
// case we let the anchor/hash logic on the page itself handle scroll.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;