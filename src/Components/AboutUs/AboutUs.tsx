import Image from "next/image";
import "./style.css";

export default function AboutSection() {
  const stats = [
    { number: "10K+", label: "Tons Recycled Annually" },
    { number: "100K+", label: "People Reached" },
    { number: "75%", label: "Landfill Reduction" },
    { number: "1000+", label: "Partner Organizations" },
  ];

  return (
    <section className="about-section">
      <div className="about-section__bg">
        <div className="about-section__blob about-section__blob--1" />
        <div className="about-section__blob about-section__blob--2" />
      </div>

      <div className="container">
        <header className="about-section__header">
          <h2 className="about-section__title animate-fade-up">
            Our Journey in E-Waste Revolution
          </h2>
        </header>

        <div className="about-section__content">
          <div className="about-section__text-image">
            <div className="about-section__text">
              <p className="animate-fade-up animate-delay-1">
                Since 2015, we've led the e-waste recycling revolution. Our
                facility processes over 10,000 tons annually, using advanced
                techniques for maximum resource recovery and zero landfill
                impact. We've pioneered industry-leading recycling methods.
              </p>
            </div>
            <div className="about-section__image">
              <div className="image-container__glass" />
              <Image
                src="/recycle.avif"
                alt="E-waste recycling facility"
                className="image-container__img"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="about-section__text-image reverse">
            <div className="about-section__text">
              <p className="animate-fade-up animate-delay-1">
                Beyond recycling, we're building a sustainable future via
                education and community engagement. Working with schools,
                businesses, and government, our programs have reached over
                100,000 people. Our initiatives have reduced landfill e-waste by
                75% and protected organizations from security breaches.
              </p>
            </div>
            <div className="about-section__image">
              <div className="image-container__glass" />
              <Image
                src="/napkin.png"
                alt="Community engagement program"
                className="image-container__img"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="about-section__stats">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-card__glass" />
                <div className="stat-card__number">{stat.number}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
