"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  SwachhBharatIcon,
  ReduceIcon,
  ReuseIcon,
  RecycleIcon,
  CircularEconomyIcon,
  GreenEnergyIcon,
} from "./icons";
import styles from "./flashcards.module.css";

const flashcardsData = [
  {
    icon: <ReduceIcon className={styles.flashcardIcon} />,
    frontText: "Reduce",
    backText: "Minimize waste generation.",
  },
  {
    icon: <ReuseIcon className={styles.flashcardIcon} />,
    frontText: "Reuse",
    backText: "Extend product lifespan.",
  },
  {
    icon: <RecycleIcon className={styles.flashcardIcon} />,
    frontText: "Recycle",
    backText: "Process waste into new materials.",
  },
  {
    icon: <CircularEconomyIcon className={styles.flashcardIcon} />,
    frontText: "Circular Economy",
    backText: "Sustainable production & consumption.",
  },
  {
    icon: <GreenEnergyIcon className={styles.flashcardIcon} />,
    frontText: "Green Energy",
    backText: "Renewable & sustainable power.",
  },
  {
    icon: <SwachhBharatIcon className={styles.flashcardIcon} />,
    frontText: "Swachh Bharat",
    backText: "Clean India mission.",
  },
];

const Flashcards = () => {
  const [flippedCards, setFlippedCards] = useState(
    Array(flashcardsData.length).fill(false)
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      let scrollPosition = 0;
      const scrollSpeed = 0.3;

      const scrollInterval = setInterval(() => {
        if (scrollElement) {
          scrollPosition += scrollSpeed;
          if (
            scrollPosition >
            scrollElement.scrollWidth - scrollElement.clientWidth
          ) {
            scrollPosition = 0;
          }
          scrollElement.scrollLeft = scrollPosition;
        }
      }, 30);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  const handleCardHover = (index: number) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className={styles.flashcardsContainer} ref={scrollRef}>
      {flashcardsData.map((card, index) => (
        <div
          key={index}
          className={`${styles.flashcard} ${
            flippedCards[index] ? styles.flipped : ""
          }`}
          onMouseEnter={() => handleCardHover(index)}
          onMouseLeave={() => handleCardHover(index)}
        >
          <div className={styles.flashcardInner}>
            <div className={styles.flashcardFront}>
              {card.icon}
              <p className={styles.flashcardText}>{card.frontText}</p>
            </div>
            <div className={styles.flashcardBack}>
              <p className={styles.flashcardText}>{card.backText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;
