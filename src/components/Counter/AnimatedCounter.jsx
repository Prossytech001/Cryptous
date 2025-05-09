import React, { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, stepTime);
  };

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
