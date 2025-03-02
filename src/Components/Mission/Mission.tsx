import { Lightbulb, Target } from "lucide-react";
import "./style.css";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision__bg">
        <div className="mission-vision__blob mission-vision__blob--1" />
        <div className="mission-vision__blob mission-vision__blob--2" />
      </div>

      <div className="container">
        <header className="about-section__header">
          <h2 className="about-section__title fade-up">
            Our Purpose & Direction
          </h2>
        </header>

        <div className="mission-vision__grid">
          {/* Mission Card */}
          <div className="vision-mission-card fade-up delay-1">
            <div className="vision-mission-card__glass" />
            <div className="vision-mission-card__content">
              <Target className="vision-mission-card__icon" />
              <h3 className="vision-mission-card__title">Our Mission</h3>
              <p className="vision-mission-card__text">
                At <span className="highlight">S S EnviroCare</span>, our
                mission is to lead the way in electronic waste recycling and
                waste management by leveraging advanced technologies and
                innovative solutions. We are committed to transforming e-waste
                into valuable resources, reducing environmental impact, and
                supporting a circular economy.
              </p>
              <p className="vision-mission-card__text">
                Our dedication to sustainability and responsible e-waste
                management drives us to ensure that electronic waste is no
                longer a problem but an opportunity for positive change, paving
                the way for a sustainable tomorrow where our planet thrives.
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="decorative-line" />

          {/* Vision Card */}
          <div className="vision-mission-card fade-up delay-2">
            <div className="vision-mission-card__glass" />
            <div className="vision-mission-card__content">
              <Lightbulb className="vision-mission-card__icon" />
              <h3 className="vision-mission-card__title">Our Vision</h3>
              <p className="vision-mission-card__text">
                We envision a future where every piece of electronic waste is
                transformed into a valuable asset, contributing to the
                well-being of our communities and the health of our environment.
                We aspire to create a world where electronic waste is no longer
                a challenge but a resource that fuels economic growth and
                environmental preservation.
              </p>
              <p className="vision-mission-card__text">
                By continuously advancing our technologies and practices, we aim
                to inspire and lead the transition towards a
                <span className="highlight"> circular economy</span>. Our goal
                is to foster a culture of responsibility and awareness, ensuring
                that future generations inherit a cleaner, greener planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
