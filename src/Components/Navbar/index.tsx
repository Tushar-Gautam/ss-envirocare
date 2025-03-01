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
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to update active section and check if navbar should be sticky
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navbarOffsetTop = navbar ? navbar.offsetTop : 0;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Check if navbar should be sticky
      if (window.scrollY > navbarOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Update active section
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

  // Close menu when clicking a navigation item on mobile
  const handleNavClick = (sectionId: SectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

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

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar ${isSticky ? "sticky" : ""} ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        {/* Mobile menu toggle button */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? "open" : ""}>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            className={activeSection === "mission" ? "active" : ""}
            onClick={() => handleNavClick("mission")}
          >
            Mission & Vision
          </li>
          <li
            className={activeSection === "services" ? "active" : ""}
            onClick={() => handleNavClick("services")}
          >
            Services
          </li>
          <li
            className={activeSection === "products" ? "active" : ""}
            onClick={() => handleNavClick("products")}
          >
            Products
          </li>
        </ul>
        <button
          className="button-style"
          role="button"
          onClick={() => handleNavClick("contact")}
        >
          Contact us
        </button>
      </nav>

      {/* Add a spacer element when navbar is sticky to prevent content jump */}
      {isSticky && <div className="navbar-spacer"></div>}
    </>
  );
};

export default Navbar;
