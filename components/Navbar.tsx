"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionOffsets = navLinks
        .map((link) => {
          const el = document.getElementById(link.id);
          return el ? { id: link.id, offset: el.offsetTop } : null;
        })
        .filter(Boolean) as { id: string; offset: number }[];

      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY + 100 >= sectionOffsets[i].offset) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 z-40 backdrop-blur-md shadow-lg border border-pink-400 
          ${
            isMobile
              ? "w-[95%] left-1/2 -translate-x-1/2 bg-black rounded-xl"
              : "w-[90vw] max-w-[1200px] left-1/2 -translate-x-1/2 bg-black/90 rounded-3xl"
          }`}
      >
        <div className="w-full py-2 md:py-4 px-4 md:px-10 flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-extrabold text-pink-400">
            Tamara.dev
          </h1>

          {!isMobile && (
            <nav className="flex gap-4 md:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-sm md:text-base font-medium px-4 py-1 rounded-full transition-colors duration-200 ${
                    activeSection === link.id
                      ? "bg-pink-600 text-white"
                      : "text-white hover:text-pink-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:text-pink-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {isMobile && isMenuOpen && (
          <nav className="bg-black/95 backdrop-blur-md rounded-b-xl border-t border-pink-400/30 p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-base font-medium px-4 py-3 rounded-xl transition-colors duration-200 text-left ${
                  activeSection === link.id
                    ? "bg-pink-600 text-white"
                    : "text-white hover:text-pink-400 hover:bg-pink-400/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
