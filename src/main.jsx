import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TermsPage from "./pages/TermsPage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import RefundPage from "./pages/RefundPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
