import Hero from "../components/Hero";
import AnnouncementCard from "../components/AnnouncementCard";
import Products from "../components/Products";
import BeliefsHeader from "../components/BeliefsHeader";
import BeliefsCarousel from "../components/BeliefsCarousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <AnnouncementCard />
      <Products />
      <BeliefsHeader />
      <BeliefsCarousel />
      <Contact />
      <Footer />
    </main>
  );
}
