// import ParticleAnimation from "@/Components/Particle";
import Image from "next/image";
import NeuralFeatures from "@/Components/Features/neural-features";
import AboutUs from "@/Components/AboutUs/AboutUs";
import ContactSection from "@/Components/ContactUs/ContactUs";
import MissionVision from "@/Components/Mission/Mission";
import HeroSection from "@/Components/Hero/Hero";

export default function Home() {
  return (
    <div className="wrapper">
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
        <HeroSection />
      </section>
      <section id="about" style={{ marginTop: "4rem" }}>
        <AboutUs />
      </section>
      <section id="mission">
        <MissionVision />
      </section>
      <section id="services">
        <NeuralFeatures />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
