"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import WhitepaperSection from "./components/WhitepaperSection";
import BlogSection from "./components/BlogSection";
import Mission from "./components/Mission";

export default function HomePage() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>
      
      <HeroSection navbarHeight={navbarHeight} />
      <Mission />
      <WhitepaperSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
