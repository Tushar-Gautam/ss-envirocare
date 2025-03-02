"use client";
import { useEffect, useState } from "react";
import {
  ReduceIcon,
  ReuseIcon,
  RecycleIcon,
  CircularEconomyIcon,
  GreenEnergyIcon,
} from "./icons";
import Image from "next/image";
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
    }, 1000);

    return () => clearInterval(interval);
  }, [activeQuote]);

  const icons = [
    { Icon: "/SwacchBharat.svg", label: "Swachh Bharat" },
    { Icon: "/makeInIndia.png", label: "Make in India" },
    { Icon: ReduceIcon, label: "Reduce" },
    { Icon: ReuseIcon, label: "Reuse" },
    { Icon: RecycleIcon, label: "Recycle" },
    { Icon: CircularEconomyIcon, label: "Circular Economy" },
    { Icon: GreenEnergyIcon, label: "Green Energy" },
  ];

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          Leading India`&apos;s E-Waste Revolution
        </h1>

        {/* Quotes Carousel */}
        <div className="quotes-carousel">
          <div className="quotes-track">
            {quotes.map((quote, index) => {
              return (
                <div
                  key={index}
                  className={`quote-card ${
                    index === activeQuote ? "active" : ""
                  }`}
                >
                  <div className="quote-card__glass" />
                  <div className="quote-card__content">
                    <p className="quote-text">{quote.text}</p>
                    <p className="quote-author">- {quote.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Icons Carousel */}
        <div className="icons-carousel">
          <div className="icons-track">
            {[...icons, ...icons].map((item, index) => (
              <div key={index} className="icon-card">
                <div className="icon-card__glass" />
                <div className="icon-card__content">
                  {typeof item.Icon === "string" ? (
                    <Image
                      src={item.Icon}
                      alt={item.label}
                      width={50}
                      height={50}
                      className="icon-svg"
                    />
                  ) : (
                    <item.Icon className="icon-svg" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Make in India Logo */}
        <div className="make-in-india">
          <Image
            src="/make-in-india.svg"
            alt="Make in India"
            className="make-in-india__image"
            width="100"
            height="100"
          />
        </div>
      </div>
    </section>
  );
}
