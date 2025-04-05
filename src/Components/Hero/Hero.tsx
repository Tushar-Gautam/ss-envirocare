"use client";
import { useEffect, useState } from "react";
import ParticleAnimation from "@/Components/Particle";
import "./style.css";
import Flashcards from "./Flashcard";

const quotes = [
  {
    text: "Fighting Climate Change calls for Innovation, Cooperation and Will Power to make the changes that the world needs.",
    author: "Narendra Modi",
  },
  {
    text: 'A circular economy moves away from the "take, make, dispose" model, focusing on recycling and reusing resources.',
    author: "NITI Aayog",
  },
  {
    text: "Sustainable development hinges on our ability to turn today's waste into tomorrow's wealth.",
    author: "S S EnviroCare",
  },
  {
    text: "Reviving the Planet, one device at a time.",
    author: "S S EnviroCare",
  },
];

export default function HeroSection() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [direction, setDirection] = useState("next");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDirection("next");
      setTransitioning(true);
      setTimeout(() => {
        setActiveQuote((prev) => (prev + 1) % quotes.length);
        setTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero__bg">
        <ParticleAnimation />
      </div>

      <div className="hero__content">
        <div className="quotes-carousel">
          <div
            className="quotes-track"
            style={{
              transform: transitioning
                ? direction === "next"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : "translateX(0%)",
              transition: transitioning ? "transform 1s ease-in-out" : "none",
            }}
          >
            <div
              className="quote-card"
              key={activeQuote}
              style={{
                opacity: transitioning ? 0 : 1,
                transition: transitioning ? "opacity 0.5s ease-in-out" : "none",
              }}
            >
              <div className="quote-card__glass" />
              <div className="quote-card__content">
                <p className="quote-text">{quotes[activeQuote].text}</p>
                <p className="quote-author">- {quotes[activeQuote].author}</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="hero__title">Leading India&apos;s E-Waste Revolution</h1>
        <Flashcards />
      </div>
    </section>
  );
}
