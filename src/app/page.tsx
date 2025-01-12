import SequentialTextAnimation from "@/Components/Sequential";
import "./page.css";
import ParticleAnimation from "@/Components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <figure>
        <Image
          src="/logoDark.jpeg"
          alt="ss-envirocare logo"
          width={600}
          height={200}
          priority
          className="logo"
        />
      </figure>
      <div className="animation-particle">
        <ParticleAnimation />
      </div>

      <div className="test">
        <SequentialTextAnimation
          typingSpeed={150}
          erasingSpeed={100}
          pauseTime={1000}
        />
      </div>
    </>
  );
}
