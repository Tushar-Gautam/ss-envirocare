"use client";
import { useEffect, useState } from "react";
import ParticleAnimation from "@/Components/Particle";
import "./style.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeQuote]);

  return (
    <section className="hero">
      {/* Particle Animation as Background */}
      <div className="hero__bg">
        <ParticleAnimation />
      </div>

      {/* Hero Content */}
      <div className="hero__content">
        <h1 className="hero__title">Leading India&apos;s E-Waste Revolution</h1>

        {/* Quotes Carousel */}
        <div className="quotes-carousel">
          <div className="quotes-track">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`quote-card ${
                  index === activeQuote ? "active" : ""
                }`}
                style={{
                  transform: `translateX(${100 * (index - activeQuote)}%)`,
                }}
              >
                <div className="quote-card__glass" />
                <div className="quote-card__content">
                  <p className="quote-text">{quote.text}</p>
                  <p className="quote-author">- {quote.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
