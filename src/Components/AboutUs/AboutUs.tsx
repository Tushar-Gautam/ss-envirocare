import Image from "next/image";
import "./style.css";
import { Recycle, Leaf, Zap, BarChart3 } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "6600", label: "Tons Recycled Annually" },
    { number: "13,200", label: `Tons Reduction in CO<sub>2</sub> emissions` },
    { number: "75%", label: "Landfill Reduction" },
    { number: "900", label: "Tons metal recoverable" },
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
                In 2024, we launched with a clear vision: to revolutionize
                e-waste recycling through modern, innovative solutions. Based in
                Jaipur, Rajasthan, we&apos;ve quickly established ourselves as a
                leader, utilizing advanced techniques to process substantial
                volumes of electronic waste, achieving remarkable resource
                recovery and zero landfill impact. As a newly registered
                company, we&apos;re unburdened by legacy practices, enabling us
                to deliver sustainable, efficient, and client-centric services
                from the outset.
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
                From our 2024 inception in Jaipur, SSECPL is transforming the
                landscape of e-waste recycling. We&apos;re dedicated to
                responsible end-of-lifecycle solutions for electronic equipment,
                blending innovation with a passion for sustainability. With
                Central and State Pollution Control Board authorizations and a
                6600 TPA capacity, we&apos;re leading the charge in redefining
                industry standards
              </p>
            </div>
            <div className="about-section__image">
              <div className="circular-economy">
                <div className="circular-economy__ring"></div>
                <div className="circular-economy__arrow">
                  <svg viewBox="0 0 100 100">
                    <circle
                      className="circular-economy__arrow-path"
                      cx="50"
                      cy="50"
                      r="45"
                    />
                  </svg>
                </div>
                <div className="circular-economy__icon circular-economy__icon--1">
                  <Recycle size={20} />
                </div>
                <div className="circular-economy__icon circular-economy__icon--2">
                  <Leaf size={20} />
                </div>
                <div className="circular-economy__icon circular-economy__icon--3">
                  <Zap size={20} />
                </div>
                <div className="circular-economy__icon circular-economy__icon--4">
                  <BarChart3 size={20} />
                </div>
              </div>
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
                <div
                  className="stat-card__label"
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
