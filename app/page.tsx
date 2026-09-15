"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Presentation from "./components/Presentation";
import About from "./about/page";
import Projects from "./projects/page";
import Certification from "./certification/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div className="w-full overflow-hidden">
      <Presentation />
      <About />
      <Projects />
      <Certification />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
