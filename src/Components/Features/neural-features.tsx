"use client";
import {
  Recycle,
  Shield,
  TreePine,
  Building2,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import "./style.css";

export default function NeuralFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Recycle className="icon" />,
      title: "Responsible Recycling",
      description:
        "Professional e-waste disposal with zero landfill impact, ensuring every component is properly recycled or repurposed.",
    },
    {
      icon: <Shield className="icon" />,
      title: "Secure Data Destruction",
      description:
        "Military-grade data wiping and physical destruction services to protect your sensitive information.",
    },
    {
      icon: <TreePine className="icon" />,
      title: "Environmental Impact",
      description:
        "Every device recycled with us saves 20kg of CO2 emissions. Track your environmental contribution in real-time.",
    },
    {
      icon: <Building2 className="icon" />,
      title: "Corporate Solutions",
      description:
        "Tailored programs for businesses with regular e-waste disposal needs, including compliance reporting.",
    },
    {
      icon: <Truck className="icon" />,
      title: "Free Collection",
      description:
        "Convenient pickup service for businesses and residential areas. Schedule online in minutes.",
    },
    {
      icon: <BadgeCheck className="icon" />,
      title: "Certified Process",
      description:
        "ISO certified recycling process ensuring compliance with international environmental standards.",
    },
  ];

  return (
    <section className="neural-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Integrated E-Cycling Ecosystem</h2>
          <p className="description">
            Advanced solutions working in harmony to transform electronic waste
            into environmental value
          </p>
        </div>

        {/* Central Spine */}
        <div className="features-container">
          {/* Vertical Line */}
          <div className="vertical-line" />

          {/* Features */}
          <div className="features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-group ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Connection Line */}
                <div
                  className={`connection-line ${
                    hoveredIndex === index ? "highlight" : ""
                  } ${index % 2 === 0 ? "left-line" : "right-line"}`}
                />

                {/* Feature Card */}
                <div
                  className={`feature-card ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                >
                  <div className="glass-background" />
                  <div className="content">
                    <div className="icon-title">
                      <div
                        className={`icon-wrapper ${
                          hoveredIndex === index ? "hovered" : ""
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
