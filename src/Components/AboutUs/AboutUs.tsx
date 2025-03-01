import "./style.css";

export default function AboutSection() {
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

        <div className="about-section__grid">
          <div className="image-container">
            <div className="image-container__glass" />
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="E-waste recycling facility"
              className="image-container__img"
            />
          </div>
          <div className="content-block animate-fade-up animate-delay-1">
            <p>
              Since our inception in 2015, we've been at the forefront of the
              e-waste recycling revolution. Our state-of-the-art facility
              processes over 10,000 tons of electronic waste annually,
              implementing cutting-edge techniques that ensure maximum resource
              recovery while maintaining zero landfill impact. We've pioneered
              innovative recycling methods that have set new industry standards
              for environmental responsibility.
            </p>
          </div>
        </div>

        <div className="about-section__grid">
          <div className="content-block animate-fade-up animate-delay-1 order-2">
            <p>
              Our commitment extends beyond recycling – we're building a
              sustainable future through education and community engagement.
              Working with local schools, businesses, and government
              organizations, we've created awareness programs that have reached
              over 100,000 individuals. Our initiatives have helped reduce
              e-waste in landfills by 75% in our operating regions, while our
              innovative data destruction services have protected countless
              organizations from potential security breaches.
            </p>
          </div>
          <div className="image-container order-1">
            <div className="image-container__glass" />
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Community engagement program"
              className="image-container__img"
            />
          </div>
        </div>

        <div className="stats-grid">
          {[
            { number: "10K+", label: "Tons Recycled Annually" },
            { number: "100K+", label: "People Reached" },
            { number: "75%", label: "Landfill Reduction" },
            { number: "1000+", label: "Partner Organizations" },
          ].map((stat, index) => (
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
    </section>
  );
}
