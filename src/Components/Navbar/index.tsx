"use client";
import { useEffect, useState } from "react";
import "./style.css";

const sections = [
  "home",
  "about",
  "mission",
  "services",
  "products",
  "contact",
] as const;

// Create a TypeScript type for the section IDs
type SectionId = (typeof sections)[number];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>
        <li
          className={activeSection === "mission" ? "active" : ""}
          onClick={() => scrollToSection("mission")}
        >
          Mission & Vision
        </li>
        <li
          className={activeSection === "services" ? "active" : ""}
          onClick={() => scrollToSection("services")}
        >
          Services
        </li>
        <li
          className={activeSection === "products" ? "active" : ""}
          onClick={() => scrollToSection("products")}
        >
          Products
        </li>
      </ul>
      <button
        className="button-style"
        role="button"
        onClick={() => scrollToSection("contact")}
      >
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;
