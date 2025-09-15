import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { MenuHighlights } from "./components/menu-highlights";
import { InstagramFeed } from "./components/instagram-feed";
import { HoursLocation } from "./components/hours-location";
import { Reviews } from "./components/reviews";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <HoursLocation />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;