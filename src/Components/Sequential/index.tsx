"use client";
import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

interface TextAnimationProps {
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseTime?: number;
}

const SequentialTextAnimation: React.FC<TextAnimationProps> = ({
  typingSpeed = 150,
  erasingSpeed = 100,
  pauseTime = 1000,
}) => {
  const words: string[] = ["REDUCE", "REUSE", "RECYCLE"];
  const [currentText, setCurrentText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const getCurrentWord = (): string => words[currentWordIndex];

  const typeNextCharacter = useCallback(() => {
    const targetWord = getCurrentWord();
    if (currentText.length < targetWord.length) {
      setCurrentText((prev) => targetWord.slice(0, prev.length + 1));
      return true;
    }
    return false;
  }, [currentText.length, getCurrentWord]);

  const eraseLastCharacter = useCallback(() => {
    if (currentText.length > 0) {
      setCurrentText((prev) => prev.slice(0, -1));
      return true;
    }
    return false;
  }, [currentText.length]);

  const moveToNextWord = useCallback(() => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
    setIsTyping(true);
  }, [words.length]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      if (isWaiting) {
        timeoutId = setTimeout(() => {
          setIsWaiting(false);
          setIsTyping(false);
        }, pauseTime);
        return;
      }

      if (isTyping) {
        if (typeNextCharacter()) {
          timeoutId = setTimeout(animate, typingSpeed);
        } else {
          setIsWaiting(true);
          timeoutId = setTimeout(animate, pauseTime);
        }
      } else {
        if (eraseLastCharacter()) {
          timeoutId = setTimeout(animate, erasingSpeed);
        } else {
          moveToNextWord();
          timeoutId = setTimeout(animate, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(animate, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [
    currentText,
    isTyping,
    isWaiting,
    typeNextCharacter,
    eraseLastCharacter,
    moveToNextWord,
    typingSpeed,
    erasingSpeed,
    pauseTime,
  ]);

  return (
    <div className="text-animation-container">
      <div className="text-animation-wrapper">
        <h1 className="animated-text">
          {currentText.split("").map((char, index) => (
            <span
              key={index}
              className="character"
              style={{
                animationDelay: `${index * 0.1}s`,
                color: getColorForIndex(currentWordIndex),
              }}
            >
              {char}
            </span>
          ))}
          <span className="cursor">|</span>
        </h1>
      </div>
    </div>
  );
};

// Helper function to get different colors for different words
const getColorForIndex = (index: number): string => {
  const colors = ["#4ade80", "#22d3ee", "#60a5fa"];
  return colors[index % colors.length];
};

export default SequentialTextAnimation;
