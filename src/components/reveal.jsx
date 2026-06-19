import { useEffect, useRef, useState } from "react";

/**
 * Lightweight scroll-reveal wrapper.
 * Mirrors the from/to fade-up pattern already used by SplitText
 * (opacity: 0, y: 40 -> opacity: 1, y: 0) so new sections feel
 * consistent with the rest of the site, without pulling in GSAP
 * for every plain element.
 */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;