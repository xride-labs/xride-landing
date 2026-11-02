// Pinwren feedback widget loader. Off unless VITE_PINWREN_KEY is set.
export function initPinwren() {
  const key = import.meta.env.VITE_PINWREN_KEY;
  if (!key || typeof document === "undefined") return;
  if (document.querySelector("script[data-pinwren]")) return;
  const base = (import.meta.env.VITE_PINWREN_URL || "https://bug.shubpy.com").replace(/\/+$/, "");
  const s = document.createElement("script");
  s.src = `${base}/widget.js`;
  s.async = true;
  s.dataset.project = key;
  s.dataset.pinwren = "";
  document.head.appendChild(s);
}
