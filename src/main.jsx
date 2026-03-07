import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotesPage from "./pages/NotesPage.jsx";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
