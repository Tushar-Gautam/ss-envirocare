"use client";
import React, { useEffect, useRef } from "react";

interface Speed {
  x: number;
  y: number;
}

class Particle {
  x: number;
  y: number;
  speed: Speed;
  c: string;
  ctx: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    speed: Speed,
    c: string,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.c = c;
    this.ctx = ctx;
  }

  update(): void {
    this.ctx.strokeStyle = this.c;
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = "round";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.x += this.speed.x;
    this.y += this.speed.y;
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();

    const ang = Math.atan2(this.speed.y, this.speed.x);
    const mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
    const op = [ang + Math.PI / 4, ang - Math.PI / 4];

    if (Math.random() < 0.05) {
      const ch = Math.floor(Math.random() * op.length);
      this.speed.x = Math.cos(op[ch]) * mag;
      this.speed.y = Math.sin(op[ch]) * mag;
    }
  }
}

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clear = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const pulse = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ): void => {
    const speed = 5;
    const h = Math.random() * (210 - 150) + 1500;

    for (let i = 0; i < 9; i++) {
      particlesRef.current.push(
        new Particle(
          canvas.width / 2,
          canvas.height / 2,
          {
            x: Math.cos((i / 8) * 2 * Math.PI) * speed,
            y: Math.sin((i / 8) * 2 * Math.PI) * speed,
          },
          `hsl(${h},100%,50%)`,
          ctx
        )
      );
    }

    timeoutRef.current = setTimeout(() => pulse(canvas, ctx), 2000);
  };

  const animate = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ): void => {
    clear(ctx, canvas);

    for (let i = 0; i < particlesRef.current.length; i++) {
      particlesRef.current[i].update();

      if (
        particlesRef.current[i].x < 0 ||
        particlesRef.current[i].x > canvas.width ||
        particlesRef.current[i].y < 0 ||
        particlesRef.current[i].y > canvas.height
      ) {
        particlesRef.current.splice(i, 1);
        i--;
      }
    }

    animationFrameRef.current = requestAnimationFrame(() =>
      animate(canvas, ctx)
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    pulse(canvas, ctx);
    animate(canvas, ctx);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black"
    />
  );
};

export default ParticleAnimation;
