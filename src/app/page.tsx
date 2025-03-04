import "./page.css";
import NeuralFeatures from "@/Components/Features/neural-features";
import AboutUs from "@/Components/AboutUs/AboutUs";
import ContactSection from "@/Components/ContactUs/ContactUs";
import MissionVision from "@/Components/Mission/Mission";

export default function Home() {
  return (
    <>
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
