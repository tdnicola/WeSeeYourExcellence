import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

function sanitize(raw) {
  if (!raw) return "";
  const decoded = decodeURIComponent(raw);
  const cleaned = decoded.replace(/[^a-zA-Z0-9 '\-]/g, " ").replace(/\s+/g, " ").trim().slice(0, 40);
  return cleaned;
}

function toTitle(s) {
  return s
    .split(" ")
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function extractName() {
  const url = new URL(window.location.href);
  const q = sanitize(url.searchParams.get("name") || "");
  if (q) return toTitle(q);
  const seg = sanitize(window.location.pathname.split("/").filter(Boolean)[0] || "");
  return toTitle(seg);
}

function Root() {
  const [name, setName] = useState(extractName());

  useEffect(() => {
    const onPop = () => setName(extractName());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    document.title = name ? `Congratulations, ${name}` : "Congratulations";
  }, [name]);

  return (
    <React.StrictMode>
      <App name={name} />
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
