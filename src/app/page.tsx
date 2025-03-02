import SequentialTextAnimation from "@/Components/Sequential";
import "./page.css";
import ParticleAnimation from "@/Components/Particle";
import Image from "next/image";
import NeuralFeatures from "@/Components/Features/neural-features";
import AboutUs from "@/Components/AboutUs/AboutUs";
import ContactSection from "@/Components/ContactUs/ContactUs";
import MissionVision from "@/Components/Mission/Mission";
import HeroSection from "@/Components/Hero/Hero";

export default function Home() {
  return (
    <>
      <section id="home">
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
          <div>
            <div className="test">
              <SequentialTextAnimation
                typingSpeed={150}
                erasingSpeed={100}
                pauseTime={1000}
              />
            </div>
            <HeroSection />
          </div>
        </div>
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="mission">
        <MissionVision />
      </section>
      <section id="services">
        <NeuralFeatures />
      </section>
      <section id="products">{/* <h2>Our Products</h2> */}</section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
