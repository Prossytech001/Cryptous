import React, { useEffect, useMemo, useRef, useState } from "react";

export default function ActivityTicker({ data = [] }) {
  const activities = useMemo(() => data.slice(0, 50), [data]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!activities.length) return;

    // clear any existing interval (helps in React 18 StrictMode dev double-mount)
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activities.length]);

  if (!activities.length) return null;

  const a = activities[index];
  const pretty = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(a.amount);

  return (
    <div
      className="flex ticker mb-[20px] justify-between rounded-lg  bg-[var(--box)] px-4 py-2 text-sm  shadow-lg animate-fadeIn"
      role="status"
      aria-live="polite"
    >
      <span className="font-semibold text-[var(--White)]">{a.userMask}</span> <span className="flex gap-3 text-[var(--GrayDark)]">{a.action} <span className="text-[var(--Kumera)]">{pretty}</span></span>
    </div>
  );
}

