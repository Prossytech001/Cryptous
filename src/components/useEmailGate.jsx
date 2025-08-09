import { useEffect, useRef, useState } from "react";

let checkedOnce = false; // React Strict Mode protection

export default function useEmailGate() {
  const [open, setOpen] = useState(false);
  const API = import.meta.env.VITE_API_URL; // e.g., http://localhost:5100
  const running = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("visitorTracked") === "true") return;
    if (checkedOnce) return;
    if (running.current) return;
    running.current = true;
    checkedOnce = true;

    fetch(`${API}/api/track-visitors/exists`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        if (!d || d.exists !== true) {
          setOpen(true);
        } else {
          sessionStorage.setItem("visitorTracked", "true");
        }
      })
      .catch(() => {
        // fail closed (don’t block user)
      })
      .finally(() => {
        running.current = false;
      });
  }, [API]);

  const submitEmail = async (email) => {
    const geo = await fetch("https://ipapi.co/json/").then((r) => r.json());
    await fetch(`${API}/api/track-visit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        ip: geo?.ip,
        country: geo?.country_name,
        region: geo?.region,
        city: geo?.city,
        isp: geo?.org,
      }),
    });
    sessionStorage.setItem("visitorTracked", "true");
  };

  return { open, setOpen, submitEmail };
}
